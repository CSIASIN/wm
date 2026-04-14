import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Element types ──────────────────────────────────────────────────────────
const ELEMENT_TYPES = [
	{ value: 'heading',     label: 'Heading',          icon: 'H',  desc: 'h1–h6 with optional display class & subtext' },
	{ value: 'lead',        label: 'Lead paragraph',   icon: 'P⬆', desc: 'Standout paragraph with .lead class'          },
	{ value: 'blockquote',  label: 'Blockquote',       icon: '❝',  desc: 'Styled quote with optional attribution'       },
	{ value: 'list',        label: 'List',             icon: '≡',  desc: 'ul/ol — default, unstyled, or inline'         },
	{ value: 'dl',          label: 'Description list', icon: 'D',  desc: 'Term/definition pairs in grid layout'         },
	{ value: 'abbr',        label: 'Abbreviation',     icon: 'Ab', desc: '<abbr> with tooltip title & initialism option' },
	{ value: 'inline',      label: 'Inline text',      icon: 'Aa', desc: 'Paragraph with mark, del, ins, s, u, small etc.' },
];

const HEADING_LEVELS = [
	{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' },
	{ label: 'H5', value: 'h5' }, { label: 'H6', value: 'h6' },
];

const DISPLAY_CLASSES = [
	{ label: 'None (regular heading)', value: ''          },
	{ label: 'Display 1',              value: 'display-1' },
	{ label: 'Display 2',              value: 'display-2' },
	{ label: 'Display 3',              value: 'display-3' },
	{ label: 'Display 4',              value: 'display-4' },
	{ label: 'Display 5',              value: 'display-5' },
	{ label: 'Display 6',              value: 'display-6' },
];

const HEADING_CLASS_TAGS = [
	{ label: '<p>', value: 'p' }, { label: '<span>', value: 'span' },
	{ label: '<div>', value: 'div' },
];

const LIST_STYLE_OPTIONS = [
	{ label: 'Default (bulleted/numbered)', value: ''               },
	{ label: 'Unstyled (no bullets)',       value: 'list-unstyled'  },
	{ label: 'Inline (horizontal)',         value: 'list-inline'    },
];

const TEXT_COLORS = [
	{ label: 'Default',           value: ''                     },
	{ label: 'Primary',           value: 'text-primary'         },
	{ label: 'Secondary',         value: 'text-secondary'       },
	{ label: 'Success',           value: 'text-success'         },
	{ label: 'Danger',            value: 'text-danger'          },
	{ label: 'Warning',           value: 'text-warning'         },
	{ label: 'Info',              value: 'text-info'            },
	{ label: 'Dark',              value: 'text-dark'            },
	{ label: 'Muted',             value: 'text-body-secondary'  },
	{ label: 'Body emphasis',     value: 'text-body-emphasis'   },
];

const DL_COL_OPTIONS = [
	{ label: '1/6  (col-sm-2)', value: 'col-sm-2' },
	{ label: '1/4  (col-sm-3)', value: 'col-sm-3' },
	{ label: '1/3  (col-sm-4)', value: 'col-sm-4' },
	{ label: '1/2  (col-sm-6)', value: 'col-sm-6' },
];

function uid( p = 'i' ) {
	return p + Math.random().toString(36).slice(2, 7);
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		elementType,
		content, headingLevel, useHeadingClass, headingClassTag, displayClass, subText, alignment,
		quoteText, quoteSource, quoteSourceTitle,
		listType, listStyle, listItems,
		dlItems, dlTermCols, dlDefCols,
		abbrText, abbrTitle, abbrInitialism,
		inlineContent,
		textColor, leadContent,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-typo-wrapper' } );

	const curType = ELEMENT_TYPES.find( t => t.value === elementType ) || ELEMENT_TYPES[0];

	// ── List item CRUD ─────────────────────────────────────────────────
	function updateListItem( id, text ) {
		setAttributes( { listItems: listItems.map( i => i.id === id ? { ...i, text } : i ) } );
	}
	function addListItem() {
		setAttributes( { listItems: [ ...listItems, { id: uid(), text: 'New item' } ] } );
	}
	function removeListItem( id ) {
		if ( listItems.length <= 1 ) return;
		setAttributes( { listItems: listItems.filter( i => i.id !== id ) } );
	}
	function moveListItem( id, dir ) {
		const idx  = listItems.findIndex( i => i.id === id );
		const next = [ ...listItems ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= next.length ) return;
		[ next[idx], next[swap] ] = [ next[swap], next[idx] ];
		setAttributes( { listItems: next } );
	}

	// ── DL item CRUD ───────────────────────────────────────────────────
	function updateDlItem( id, patch ) {
		setAttributes( { dlItems: dlItems.map( d => d.id === id ? { ...d, ...patch } : d ) } );
	}
	function addDlItem() {
		setAttributes( { dlItems: [ ...dlItems, { id: uid('d'), term: 'Term', definition: 'Definition.' } ] } );
	}
	function removeDlItem( id ) {
		if ( dlItems.length <= 1 ) return;
		setAttributes( { dlItems: dlItems.filter( d => d.id !== id ) } );
	}

	// ── Compute figcaption alignment for blockquote ────────────────────
	const figureClass = alignment ? alignment : '';

	// ── Inspector ─────────────────────────────────────────────────────
	const inspector = (
		<InspectorControls>

			{/* Type picker */}
			<PanelBody title={ __( 'Element Type', 'wmblocks' ) } initialOpen={ true }>
				<div style={ { display: 'flex', flexDirection: 'column', gap: '5px' } }>
					{ ELEMENT_TYPES.map( t => (
						<button key={ t.value }
							onClick={ () => setAttributes( { elementType: t.value } ) }
							style={ {
								display: 'flex', alignItems: 'center', gap: '10px',
								padding: '8px 12px', border: elementType === t.value ? '2px solid #7952b3' : '1px solid #dee2e6',
								borderRadius: '5px', background: elementType === t.value ? '#f3eeff' : '#fff',
								color: elementType === t.value ? '#5c2d91' : '#333',
								fontWeight: elementType === t.value ? 700 : 400,
								cursor: 'pointer', fontSize: '12px', transition: 'all .12s', textAlign: 'left',
							} }
						>
							<span style={ { width: '28px', height: '28px', background: elementType === t.value ? '#7952b3' : '#dee2e6', color: elementType === t.value ? '#fff' : '#555', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '11px', flexShrink: 0 } }>{ t.icon }</span>
							<div>
								<div style={ { fontWeight: 700 } }>{ t.label }</div>
								<div style={ { fontSize: '10px', color: '#888', marginTop: '1px' } }>{ t.desc }</div>
							</div>
							{ elementType === t.value && <span style={ { marginLeft: 'auto' } }>✓</span> }
						</button>
					) ) }
				</div>
			</PanelBody>

			{/* Heading options */}
			{ elementType === 'heading' && (
				<PanelBody title={ __( 'Heading Options', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Heading level', 'wmblocks' ) }
						value={ headingLevel } options={ HEADING_LEVELS }
						onChange={ v => setAttributes( { headingLevel: v } ) }
					/>
					<SelectControl label={ __( 'Display class', 'wmblocks' ) }
						value={ displayClass } options={ DISPLAY_CLASSES }
						onChange={ v => setAttributes( { displayClass: v } ) }
						help={ __( 'Display headings are larger, lighter-weight hero headings.', 'wmblocks' ) }
					/>
					<PanelRow>
						<ToggleControl label={ __( 'Use as heading class on different tag', 'wmblocks' ) }
							checked={ !! useHeadingClass }
							onChange={ v => setAttributes( { useHeadingClass: v } ) }
							help={ __( 'When ON, outputs a <p class="h2"> instead of <h2> — useful for visual style without semantic heading.', 'wmblocks' ) }
						/>
					</PanelRow>
					{ useHeadingClass && (
						<SelectControl label={ __( 'HTML tag', 'wmblocks' ) }
							value={ headingClassTag } options={ HEADING_CLASS_TAGS }
							onChange={ v => setAttributes( { headingClassTag: v } ) }
						/>
					) }
					<SelectControl label={ __( 'Text colour', 'wmblocks' ) }
						value={ textColor } options={ TEXT_COLORS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
					<SelectControl label={ __( 'Alignment', 'wmblocks' ) } value={ alignment }
						options={ [ { label: 'Default', value: '' }, { label: 'Left', value: 'text-start' }, { label: 'Center', value: 'text-center' }, { label: 'Right', value: 'text-end' } ] }
						onChange={ v => setAttributes( { alignment: v } ) }
					/>
				</PanelBody>
			) }

			{/* Lead options */}
			{ elementType === 'lead' && (
				<PanelBody title={ __( 'Lead Options', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Text colour', 'wmblocks' ) }
						value={ textColor } options={ TEXT_COLORS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
					<SelectControl label={ __( 'Alignment', 'wmblocks' ) } value={ alignment }
						options={ [ { label: 'Default', value: '' }, { label: 'Left', value: 'text-start' }, { label: 'Center', value: 'text-center' }, { label: 'Right', value: 'text-end' } ] }
						onChange={ v => setAttributes( { alignment: v } ) }
					/>
				</PanelBody>
			) }

			{/* Blockquote options */}
			{ elementType === 'blockquote' && (
				<PanelBody title={ __( 'Blockquote Options', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Alignment', 'wmblocks' ) } value={ alignment }
						options={ [ { label: 'Left (default)', value: '' }, { label: 'Center', value: 'text-center' }, { label: 'Right', value: 'text-end' } ] }
						onChange={ v => setAttributes( { alignment: v } ) }
					/>
					<p style={ { fontSize: '11px', color: '#888', margin: '4px 0' } }>{ __( 'Edit quote text, attribution, and source title directly on the canvas.', 'wmblocks' ) }</p>
				</PanelBody>
			) }

			{/* List options */}
			{ elementType === 'list' && (
				<PanelBody title={ __( 'List Options', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'List type', 'wmblocks' ) }
						value={ listType }
						options={ [ { label: 'Unordered (ul)', value: 'ul' }, { label: 'Ordered (ol)', value: 'ol' } ] }
						onChange={ v => setAttributes( { listType: v } ) }
					/>
					<SelectControl label={ __( 'List style', 'wmblocks' ) }
						value={ listStyle } options={ LIST_STYLE_OPTIONS }
						onChange={ v => setAttributes( { listStyle: v } ) }
						help={ __( 'Unstyled removes bullets. Inline displays items horizontally.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Text colour', 'wmblocks' ) }
						value={ textColor } options={ TEXT_COLORS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
				</PanelBody>
			) }

			{/* DL options */}
			{ elementType === 'dl' && (
				<PanelBody title={ __( 'Description List Options', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Term column width', 'wmblocks' ) }
						value={ dlTermCols } options={ DL_COL_OPTIONS }
						onChange={ v => {
							const defMap = { 'col-sm-2': 'col-sm-10', 'col-sm-3': 'col-sm-9', 'col-sm-4': 'col-sm-8', 'col-sm-6': 'col-sm-6' };
							setAttributes( { dlTermCols: v, dlDefCols: defMap[v] || 'col-sm-9' } );
						} }
					/>
					<p style={ { fontSize: '11px', color: '#888', margin: '0' } }>{ __( 'Definition col: ', 'wmblocks' ) }<code>{ dlDefCols }</code></p>
				</PanelBody>
			) }

			{/* Abbr options */}
			{ elementType === 'abbr' && (
				<PanelBody title={ __( 'Abbreviation Options', 'wmblocks' ) } initialOpen={ true }>
					<TextControl label={ __( 'Full title (tooltip)', 'wmblocks' ) }
						value={ abbrTitle }
						onChange={ v => setAttributes( { abbrTitle: v } ) }
						help={ __( 'Shown as a tooltip on hover.', 'wmblocks' ) }
					/>
					<PanelRow>
						<ToggleControl label={ __( 'Initialism (.initialism)', 'wmblocks' ) }
							checked={ !! abbrInitialism }
							onChange={ v => setAttributes( { abbrInitialism: v } ) }
							help={ __( 'Slightly smaller font-size for capital-letter abbreviations.', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>
			) }

		</InspectorControls>
	);

	// ── Toolbar ────────────────────────────────────────────────────────
	const toolbar = (
		<BlockControls>
			<ToolbarGroup>
				{ ELEMENT_TYPES.map( t => (
					<ToolbarButton key={ t.value }
						label={ t.label }
						isPressed={ elementType === t.value }
						onClick={ () => setAttributes( { elementType: t.value } ) }
					>{ t.icon }</ToolbarButton>
				) ) }
			</ToolbarGroup>
			{/* Heading level toolbar (when heading) */}
			{ elementType === 'heading' && (
				<ToolbarGroup>
					{ HEADING_LEVELS.map( l => (
						<ToolbarButton key={ l.value }
							label={ l.label }
							isPressed={ headingLevel === l.value && ! displayClass }
							onClick={ () => setAttributes( { headingLevel: l.value, displayClass: '' } ) }
						>{ l.label }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			) }
			{/* Display class quick-pick */}
			{ elementType === 'heading' && (
				<ToolbarGroup>
					{ [ 1,2,3,4,5,6 ].map( n => (
						<ToolbarButton key={ n }
							label={ 'Display ' + n }
							isPressed={ displayClass === 'display-' + n }
							onClick={ () => setAttributes( { displayClass: displayClass === 'display-' + n ? '' : 'display-' + n } ) }
						>D{ n }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			) }
			{/* Alignment toolbar */}
			{ [ 'heading', 'lead', 'blockquote' ].includes( elementType ) && (
				<ToolbarGroup>
					{ [ '', 'text-start', 'text-center', 'text-end' ].map( a => (
						<ToolbarButton key={ a }
							icon={ { '': 'editor-alignleft', 'text-start': 'editor-alignleft', 'text-center': 'editor-aligncenter', 'text-end': 'editor-alignright' }[ a ] }
							label={ a || 'Default' }
							isPressed={ alignment === a }
							onClick={ () => setAttributes( { alignment: a } ) }
						/>
					) ) }
				</ToolbarGroup>
			) }
		</BlockControls>
	);

	// ── Canvas renders per element type ───────────────────────────────

	const renderHeading = () => {
		const Tag        = useHeadingClass ? headingClassTag : headingLevel;
		const classNames = [
			useHeadingClass ? headingLevel : '',
			displayClass,
			alignment,
			textColor,
		].filter( Boolean ).join( ' ' );

		return (
			<Tag className={ classNames || undefined }>
				<RichText tagName="span"
					value={ content }
					onChange={ v => setAttributes( { content: v } ) }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
					placeholder={ __( 'Heading text…', 'wmblocks' ) }
				/>
				{ subText ? (
					<>{ ' ' }
						<RichText tagName="small" className="text-body-secondary"
							value={ subText }
							onChange={ v => setAttributes( { subText: v } ) }
							allowedFormats={ [] }
							placeholder={ __( 'Secondary text…', 'wmblocks' ) }
						/>
					</>
				) : null }
			</Tag>
		);
	};

	const renderLead = () => (
		<RichText tagName="p"
			className={ [ 'lead', alignment, textColor ].filter( Boolean ).join( ' ' ) }
			value={ leadContent }
			onChange={ v => setAttributes( { leadContent: v } ) }
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
			placeholder={ __( 'Lead paragraph text…', 'wmblocks' ) }
		/>
	);

	const renderBlockquote = () => (
		<figure className={ figureClass || undefined }>
			<blockquote className="blockquote">
				<RichText tagName="p"
					value={ quoteText }
					onChange={ v => setAttributes( { quoteText: v } ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					placeholder={ __( 'Quote text…', 'wmblocks' ) }
				/>
			</blockquote>
			{ /* Attribution row — always visible so user knows they can fill it */ }
			<figcaption className="blockquote-footer wmblocks-typo-bq-footer">
				<RichText tagName="span"
					value={ quoteSource }
					onChange={ v => setAttributes( { quoteSource: v } ) }
					allowedFormats={ [] }
					placeholder={ __( 'Author name…', 'wmblocks' ) }
				/>
				{ ' ' }
				<RichText tagName="cite"
					value={ quoteSourceTitle }
					onChange={ v => setAttributes( { quoteSourceTitle: v } ) }
					allowedFormats={ [] }
					placeholder={ __( 'Source title (optional)…', 'wmblocks' ) }
				/>
			</figcaption>
		</figure>
	);

	const renderList = () => {
		const Tag     = listType === 'ol' ? 'ol' : 'ul';
		const liClass = listStyle === 'list-inline' ? 'list-inline-item' : '';
		return (
			<>
				<Tag className={ [ listStyle, textColor ].filter( Boolean ).join( ' ' ) || undefined }>
					{ listItems.map( ( item, idx ) => (
						<li key={ item.id } className={ liClass || undefined }>
							<RichText tagName="span"
								value={ item.text }
								onChange={ v => updateListItem( item.id, v ) }
								allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
								placeholder={ __( 'List item…', 'wmblocks' ) }
							/>
							<span className="wmblocks-typo-list-actions">
								<button onClick={ () => moveListItem( item.id, -1 ) } disabled={ idx === 0 } title="Up">↑</button>
								<button onClick={ () => moveListItem( item.id, 1 ) } disabled={ idx === listItems.length - 1 } title="Down">↓</button>
								<button onClick={ () => removeListItem( item.id ) } disabled={ listItems.length <= 1 } title="Remove" className="wmblocks-typo-remove">✕</button>
							</span>
						</li>
					) ) }
				</Tag>
				<button className="wmblocks-typo-add-btn" onClick={ addListItem }>
					+ { __( 'Add item', 'wmblocks' ) }
				</button>
			</>
		);
	};

	const renderDl = () => (
		<>
			<dl className="row">
				{ dlItems.map( item => (
					<>
						<dt key={ item.id + '-t' } className={ dlTermCols }>
							<RichText tagName="span"
								value={ item.term }
								onChange={ v => updateDlItem( item.id, { term: v } ) }
								allowedFormats={ [ 'core/bold' ] }
								placeholder={ __( 'Term…', 'wmblocks' ) }
							/>
						</dt>
						<dd key={ item.id + '-d' } className={ dlDefCols }>
							<RichText tagName="span"
								value={ item.definition }
								onChange={ v => updateDlItem( item.id, { definition: v } ) }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								placeholder={ __( 'Definition…', 'wmblocks' ) }
							/>
							<button className="wmblocks-typo-remove wmblocks-typo-dl-remove" onClick={ () => removeDlItem( item.id ) } disabled={ dlItems.length <= 1 } title="Remove pair">✕</button>
						</dd>
					</>
				) ) }
			</dl>
			<button className="wmblocks-typo-add-btn" onClick={ addDlItem }>
				+ { __( 'Add term/definition pair', 'wmblocks' ) }
			</button>
		</>
	);

	const renderAbbr = () => (
		<p>
			<abbr
				title={ abbrTitle }
				className={ abbrInitialism ? 'initialism' : undefined }
				style={ { cursor: 'help', textDecoration: 'underline dotted' } }
			>
				<RichText tagName="span"
					value={ abbrText }
					onChange={ v => setAttributes( { abbrText: v } ) }
					allowedFormats={ [] }
					placeholder="HTML"
				/>
			</abbr>
			<span style={ { marginLeft: '8px', fontSize: '11px', color: '#888', fontStyle: 'italic' } }>
				← title: <code>{ abbrTitle || '…' }</code>
				{ abbrInitialism ? ' · .initialism' : '' }
			</span>
		</p>
	);

	const renderInline = () => (
		<>
			<p style={ { fontSize: '11px', color: '#888', marginBottom: '6px', fontStyle: 'italic' } }>
				{ __( 'Use the Format toolbar (Bold, Italic, etc.) to apply inline styles. HTML inline elements like <mark>, <del>, <ins>, <u>, <s>, <small> are supported via the Custom HTML format or the rendered output below.', 'wmblocks' ) }
			</p>
			<div className="wmblocks-typo-inline-examples">
				<p><mark style={ { padding: '.1875em', backgroundColor: '#fff3cd' } }>{ __( 'Highlighted', 'wmblocks' ) }</mark> — <code>&lt;mark&gt;</code></p>
				<p><del>{ __( 'Deleted text', 'wmblocks' ) }</del> — <code>&lt;del&gt;</code></p>
				<p><s>{ __( 'No longer accurate', 'wmblocks' ) }</s> — <code>&lt;s&gt;</code></p>
				<p><ins>{ __( 'Inserted text', 'wmblocks' ) }</ins> — <code>&lt;ins&gt;</code></p>
				<p><u>{ __( 'Underlined', 'wmblocks' ) }</u> — <code>&lt;u&gt;</code></p>
				<p><small>{ __( 'Fine print / small', 'wmblocks' ) }</small> — <code>&lt;small&gt;</code></p>
				<p><strong>{ __( 'Bold / strong', 'wmblocks' ) }</strong> — <code>&lt;strong&gt;</code></p>
				<p><em>{ __( 'Italic / em', 'wmblocks' ) }</em> — <code>&lt;em&gt;</code></p>
			</div>
			<div style={ { marginTop: '12px', fontSize: '11px', color: '#555', background: '#f8f9fa', padding: '8px 12px', borderRadius: '4px', border: '1px solid #dee2e6' } }>
				<strong>{ __( 'Tip:', 'wmblocks' ) }</strong> { __( 'Use a core/html block or the core/paragraph block with custom HTML to wrap text in these semantic tags. This block renders a reference card showing all available inline elements.', 'wmblocks' ) }
			</div>
		</>
	);

	// ── Canvas renderer ────────────────────────────────────────────────
	const renderCanvas = () => {
		switch ( elementType ) {
			case 'heading':    return renderHeading();
			case 'lead':       return renderLead();
			case 'blockquote': return renderBlockquote();
			case 'list':       return renderList();
			case 'dl':         return renderDl();
			case 'abbr':       return renderAbbr();
			case 'inline':     return renderInline();
			default:           return renderHeading();
		}
	};

	// ── Sub-text toggle in heading ─────────────────────────────────────
	const headingSubTextToggle = elementType === 'heading' && (
		<div className="wmblocks-typo-subtext-toggle">
			<span>{ __( 'Sub-text:', 'wmblocks' ) }</span>
			<button
				className={ 'wmblocks-typo-pill' + ( subText !== undefined ? '' : '' ) }
				onClick={ () => setAttributes( { subText: subText ? '' : 'Secondary text' } ) }
			>
				{ subText ? __( '✕ Remove', 'wmblocks' ) : __( '+ Add secondary text', 'wmblocks' ) }
			</button>
		</div>
	);

	return (
		<>
			{ toolbar }
			{ inspector }

			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-typo-meta-strip">
					<span className="wmblocks-typo-chip wmblocks-typo-chip--main">
						{ curType.icon }
					</span>
					<span className="wmblocks-typo-chip wmblocks-typo-chip--type">{ curType.label }</span>
					{ elementType === 'heading' && headingLevel && (
						<span className="wmblocks-typo-chip">{ headingLevel.toUpperCase() }</span>
					) }
					{ elementType === 'heading' && displayClass && (
						<span className="wmblocks-typo-chip">{ displayClass }</span>
					) }
					{ elementType === 'heading' && useHeadingClass && (
						<span className="wmblocks-typo-chip">&lt;{ headingClassTag } class="{ headingLevel }"&gt;</span>
					) }
					{ elementType === 'list' && listStyle && (
						<span className="wmblocks-typo-chip">{ listStyle }</span>
					) }
					{ elementType === 'blockquote' && alignment && (
						<span className="wmblocks-typo-chip">{ alignment }</span>
					) }
					{ textColor && (
						<span className="wmblocks-typo-chip">{ textColor }</span>
					) }
				</div>

				{/* ── Type quick-pick bar ─────────────────────────────── */}
				<div className="wmblocks-typo-type-bar">
					{ ELEMENT_TYPES.map( t => (
						<button key={ t.value }
							className={ 'wmblocks-typo-type-btn' + ( elementType === t.value ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { elementType: t.value } ) }
							title={ t.desc }
						>
							<span className="wmblocks-typo-type-icon">{ t.icon }</span>
							{ t.label }
						</button>
					) ) }
				</div>

				{/* ── Options quick-bar (context-sensitive) ─────────────── */}
				<div className="wmblocks-typo-options-bar">
					{ elementType === 'heading' && (
						<>
							<span className="wmblocks-typo-bar-label">Level:</span>
							{ HEADING_LEVELS.map( l => (
								<button key={ l.value }
									className={ 'wmblocks-typo-pill' + ( headingLevel === l.value ? ' is-active' : '' ) }
									onClick={ () => setAttributes( { headingLevel: l.value } ) }
								>{ l.label }</button>
							) ) }
							<span className="wmblocks-typo-bar-sep" />
							<span className="wmblocks-typo-bar-label">Display:</span>
							{ [ 1,2,3,4,5,6 ].map( n => (
								<button key={ n }
									className={ 'wmblocks-typo-pill' + ( displayClass === 'display-' + n ? ' is-active' : '' ) }
									onClick={ () => setAttributes( { displayClass: displayClass === 'display-' + n ? '' : 'display-' + n } ) }
								>D{ n }</button>
							) ) }
						</>
					) }
					{ elementType === 'list' && (
						<>
							<span className="wmblocks-typo-bar-label">Type:</span>
							<button className={ 'wmblocks-typo-pill' + ( listType === 'ul' ? ' is-active' : '' ) } onClick={ () => setAttributes( { listType: 'ul' } ) }>• ul</button>
							<button className={ 'wmblocks-typo-pill' + ( listType === 'ol' ? ' is-active' : '' ) } onClick={ () => setAttributes( { listType: 'ol' } ) }>1. ol</button>
							<span className="wmblocks-typo-bar-sep" />
							<span className="wmblocks-typo-bar-label">Style:</span>
							<button className={ 'wmblocks-typo-pill' + ( listStyle === '' ? ' is-active' : '' ) } onClick={ () => setAttributes( { listStyle: '' } ) }>Default</button>
							<button className={ 'wmblocks-typo-pill' + ( listStyle === 'list-unstyled' ? ' is-active' : '' ) } onClick={ () => setAttributes( { listStyle: 'list-unstyled' } ) }>Unstyled</button>
							<button className={ 'wmblocks-typo-pill' + ( listStyle === 'list-inline' ? ' is-active' : '' ) } onClick={ () => setAttributes( { listStyle: 'list-inline' } ) }>Inline</button>
						</>
					) }
					{ elementType === 'blockquote' && (
						<>
							<span className="wmblocks-typo-bar-label">Align:</span>
							{ [ { v: '', l: 'Left' }, { v: 'text-center', l: 'Center' }, { v: 'text-end', l: 'Right' } ].map( a => (
								<button key={ a.v } className={ 'wmblocks-typo-pill' + ( alignment === a.v ? ' is-active' : '' ) } onClick={ () => setAttributes( { alignment: a.v } ) }>{ a.l }</button>
							) ) }
						</>
					) }
					{ elementType === 'abbr' && (
						<>
							<button className={ 'wmblocks-typo-pill' + ( abbrInitialism ? ' is-active' : '' ) } onClick={ () => setAttributes( { abbrInitialism: ! abbrInitialism } ) }>
								.initialism { abbrInitialism ? 'ON' : 'off' }
							</button>
						</>
					) }
				</div>

				{/* Sub-text toggle for headings */}
				{ headingSubTextToggle }

				{/* ── Main canvas content ───────────────────────────── */}
				<div className="wmblocks-typo-content-area">
					{ renderCanvas() }
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-typo-footer-hint">
					{ __( 'Click text to edit inline · switch type in bar above · full options in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
