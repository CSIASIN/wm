import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
	RangeControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────

// All elements a row can represent
const ELEMENT_TYPES = [
	{ value: 'heading',   label: 'Heading',          icon: '𝐇',  desc: 'A wide bar styled as a heading (h1–h6)'  },
	{ value: 'paragraph', label: 'Paragraph',         icon: '¶',  desc: 'Multiple spans that mimic paragraph text' },
	{ value: 'button',    label: 'Button',            icon: '⬜', desc: 'A disabled placeholder button'            },
	{ value: 'image',     label: 'Image / Thumbnail', icon: '🖼', desc: 'A full-width image skeleton bar'           },
	{ value: 'avatar',    label: 'Avatar / Circle',   icon: '◉',  desc: 'A circular avatar placeholder'             },
	{ value: 'badge',     label: 'Badge / Tag',       icon: '🏷',  desc: 'A small inline badge-sized bar'            },
	{ value: 'text',      label: 'Text span',         icon: '—',  desc: 'A single inline placeholder span'          },
	{ value: 'divider',   label: 'Spacer / Divider',  icon: '╌',  desc: 'Visual spacing between rows'               },
];

// Bootstrap grid col widths
const COL_OPTIONS = [
	{ label: 'Auto',  value: 'col-auto' },
	{ label: '1/12',  value: 'col-1'   },
	{ label: '2/12',  value: 'col-2'   },
	{ label: '3/12 (25%)',   value: 'col-3'   },
	{ label: '4/12 (33%)',   value: 'col-4'   },
	{ label: '5/12',  value: 'col-5'   },
	{ label: '6/12 (50%)',   value: 'col-6'   },
	{ label: '7/12',  value: 'col-7'   },
	{ label: '8/12 (67%)',   value: 'col-8'   },
	{ label: '9/12 (75%)',   value: 'col-9'   },
	{ label: '10/12', value: 'col-10'  },
	{ label: '11/12', value: 'col-11'  },
	{ label: '12/12 (100%)', value: 'col-12'  },
];

// Bootstrap placeholder colours
const COLOUR_OPTIONS = [
	{ label: 'Default (grey)', value: ''             },
	{ label: 'Primary',        value: 'bg-primary'   },
	{ label: 'Secondary',      value: 'bg-secondary' },
	{ label: 'Success',        value: 'bg-success'   },
	{ label: 'Danger',         value: 'bg-danger'    },
	{ label: 'Warning',        value: 'bg-warning'   },
	{ label: 'Info',           value: 'bg-info'      },
	{ label: 'Light',          value: 'bg-light'     },
	{ label: 'Dark',           value: 'bg-dark'      },
];

// Colour → hex for live preview
const COLOUR_HEX = {
	'':             '#dee2e6',
	'bg-primary':   '#0d6efd',
	'bg-secondary': '#6c757d',
	'bg-success':   '#198754',
	'bg-danger':    '#dc3545',
	'bg-warning':   '#ffc107',
	'bg-info':      '#0dcaf0',
	'bg-light':     '#f8f9fa',
	'bg-dark':      '#212529',
};

// Placeholder sizes
const SIZE_OPTIONS = [
	{ label: 'Default', value: ''               },
	{ label: 'XS',      value: 'placeholder-xs' },
	{ label: 'SM',      value: 'placeholder-sm' },
	{ label: 'LG',      value: 'placeholder-lg' },
];

// Animation options
const ANIMATION_OPTIONS = [
	{ label: 'Glow (fade in/out)', value: 'placeholder-glow' },
	{ label: 'Wave (sweep)',       value: 'placeholder-wave'  },
	{ label: 'None',               value: ''                   },
];

// Heading tags
const HEADING_TAG_OPTIONS = [
	{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' },
	{ label: 'H5', value: 'h5' }, { label: 'H6', value: 'h6' },
];

// ── Preset templates ───────────────────────────────────────────────────────
const TEMPLATES = {
	card: {
		label: 'Card skeleton',
		showImageRow: true,
		imageHeight: '180px',
		wrapInCard: true,
		rows: [
			{ id: 'r1', element: 'heading',   cols: 'col-6', colour: '', size: '', tag: 'h5' },
			{ id: 'r2', element: 'paragraph', cols: 'col-7', colour: '', size: '', spans: [
				{ id: 's1', cols: 'col-7', colour: '', size: '' },
				{ id: 's2', cols: 'col-4', colour: '', size: '' },
				{ id: 's3', cols: 'col-6', colour: '', size: '' },
				{ id: 's4', cols: 'col-8', colour: '', size: '' },
			]},
			{ id: 'r3', element: 'button', cols: 'col-6', colour: 'bg-primary', size: '', tag: '' },
		],
	},
	article: {
		label: 'Article / Post',
		showImageRow: true,
		imageHeight: '220px',
		wrapInCard: false,
		rows: [
			{ id: 'r1', element: 'badge',    cols: 'col-2', colour: 'bg-secondary', size: 'placeholder-sm', tag: '' },
			{ id: 'r2', element: 'heading',  cols: 'col-8', colour: '', size: 'placeholder-lg', tag: 'h2' },
			{ id: 'r3', element: 'heading',  cols: 'col-5', colour: '', size: '', tag: 'h5' },
			{ id: 'r4', element: 'paragraph', cols: 'col-12', colour: '', size: '', spans: [
				{ id: 's1', cols: 'col-12', colour: '', size: '' },
				{ id: 's2', cols: 'col-10', colour: '', size: '' },
				{ id: 's3', cols: 'col-11', colour: '', size: '' },
				{ id: 's4', cols: 'col-6',  colour: '', size: '' },
			]},
			{ id: 'r5', element: 'button', cols: 'col-3', colour: 'bg-primary', size: '', tag: '' },
		],
	},
	profile: {
		label: 'Profile / User',
		showImageRow: false,
		wrapInCard: true,
		rows: [
			{ id: 'r1', element: 'avatar',   cols: 'col-2',  colour: '', size: '', tag: '' },
			{ id: 'r2', element: 'divider',  cols: 'col-12', colour: '', size: '', tag: '' },
			{ id: 'r3', element: 'heading',  cols: 'col-5',  colour: '', size: '', tag: 'h5' },
			{ id: 'r4', element: 'text',     cols: 'col-8',  colour: '', size: 'placeholder-sm', tag: '' },
			{ id: 'r5', element: 'text',     cols: 'col-6',  colour: '', size: 'placeholder-sm', tag: '' },
			{ id: 'r6', element: 'divider',  cols: 'col-12', colour: '', size: '', tag: '' },
			{ id: 'r7', element: 'button',   cols: 'col-4',  colour: 'bg-primary', size: '', tag: '' },
			{ id: 'r8', element: 'button',   cols: 'col-4',  colour: 'bg-secondary', size: '', tag: '' },
		],
	},
	paragraph: {
		label: 'Text / Paragraph block',
		showImageRow: false,
		wrapInCard: false,
		rows: [
			{ id: 'r1', element: 'heading',  cols: 'col-4',  colour: '', size: '', tag: 'h4' },
			{ id: 'r2', element: 'paragraph', cols: 'col-12', colour: '', size: '', spans: [
				{ id: 's1', cols: 'col-11', colour: '', size: '' },
				{ id: 's2', cols: 'col-12', colour: '', size: '' },
				{ id: 's3', cols: 'col-9',  colour: '', size: '' },
				{ id: 's4', cols: 'col-10', colour: '', size: '' },
				{ id: 's5', cols: 'col-7',  colour: '', size: '' },
			]},
		],
	},
	buttons: {
		label: 'Button row',
		showImageRow: false,
		wrapInCard: false,
		rows: [
			{ id: 'r1', element: 'button', cols: 'col-3', colour: 'bg-primary',   size: '', tag: '' },
			{ id: 'r2', element: 'button', cols: 'col-3', colour: 'bg-secondary', size: '', tag: '' },
		],
	},
	custom: {
		label: 'Custom (blank)',
		showImageRow: false,
		wrapInCard: false,
		rows: [
			{ id: 'r1', element: 'heading',  cols: 'col-6', colour: '', size: '', tag: 'h5' },
			{ id: 'r2', element: 'paragraph', cols: 'col-7', colour: '', size: '', spans: [
				{ id: 's1', cols: 'col-7', colour: '', size: '' },
				{ id: 's2', cols: 'col-4', colour: '', size: '' },
			]},
			{ id: 'r3', element: 'button', cols: 'col-6', colour: 'bg-primary', size: '', tag: '' },
		],
	},
};

// ── ID generators ──────────────────────────────────────────────────────────
function makeId( prefix = 'r' ) {
	return prefix + Math.random().toString( 36 ).slice( 2, 7 );
}

// ── Get a hex colour from global or row-level setting ─────────────────────
function resolveColour( rowColour, globalColour ) {
	const c = rowColour || globalColour || '';
	return COLOUR_HEX[ c ] || '#dee2e6';
}

// ── Build placeholder bar style for live editor preview ───────────────────
// We mimic Bootstrap's .placeholder CSS without loading Bootstrap in admin.
function barStyle( colour, size, globalColour, globalSize ) {
	const bg  = resolveColour( colour, globalColour );
	const sz  = size || globalSize || '';
	const ht  = sz === 'placeholder-lg' ? '1.2em' : sz === 'placeholder-sm' ? '0.5em' : sz === 'placeholder-xs' ? '0.3em' : '0.75em';
	return {
		display:      'inline-block',
		height:       ht,
		background:   bg,
		borderRadius: '4px',
		opacity:      0.5,
		verticalAlign: 'middle',
	};
}

// ── Col width → percentage for preview ────────────────────────────────────
function colPercent( col ) {
	const map = {
		'col-1': '8.33%',  'col-2': '16.67%', 'col-3': '25%',
		'col-4': '33.33%', 'col-5': '41.67%', 'col-6': '50%',
		'col-7': '58.33%', 'col-8': '66.67%', 'col-9': '75%',
		'col-10':'83.33%', 'col-11':'91.67%', 'col-12':'100%',
		'col-auto': 'auto',
	};
	return map[ col ] || '50%';
}

// ── Default new rows by element type ──────────────────────────────────────
function defaultRow( element ) {
	const base = { id: makeId(), element, cols: 'col-6', colour: '', size: '', tag: '', spans: [] };
	switch ( element ) {
		case 'heading':
			return { ...base, cols: 'col-5', tag: 'h5' };
		case 'paragraph':
			return { ...base, cols: 'col-12', spans: [
				{ id: makeId( 's' ), cols: 'col-8', colour: '', size: '' },
				{ id: makeId( 's' ), cols: 'col-5', colour: '', size: '' },
				{ id: makeId( 's' ), cols: 'col-7', colour: '', size: '' },
			]};
		case 'button':
			return { ...base, cols: 'col-4', colour: 'bg-primary' };
		case 'image':
			return { ...base, cols: 'col-12', tag: '200px' }; // tag stores custom height
		case 'avatar':
			return { ...base, cols: 'col-1' };
		case 'badge':
			return { ...base, cols: 'col-2', size: 'placeholder-sm' };
		case 'text':
			return { ...base, cols: 'col-6', size: 'placeholder-sm' };
		case 'divider':
			return { ...base, element: 'divider', cols: 'col-12' };
		default:
			return base;
	}
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		rows, animation, ariaHidden,
		template, wrapInCard, showImageRow, imageHeight,
		globalColour, globalSize,
	} = attributes;

	// Which row's expand panel is open
	const [ expandedId, setExpandedId ] = useState( null );

	const blockProps = useBlockProps( { className: 'wmblocks-placeholder-wrapper' } );

	// ── Apply template preset ──────────────────────────────────────────
	function applyTemplate( tplKey ) {
		const tpl = TEMPLATES[ tplKey ];
		if ( ! tpl ) return;
		setAttributes( {
			template:     tplKey,
			rows:         tpl.rows,
			wrapInCard:   tpl.wrapInCard,
			showImageRow: tpl.showImageRow ?? false,
			imageHeight:  tpl.imageHeight  ?? '180px',
		} );
		setExpandedId( null );
	}

	// ── Row CRUD ───────────────────────────────────────────────────────
	function updateRow( id, patch ) {
		setAttributes( { rows: rows.map( ( r ) => r.id === id ? { ...r, ...patch } : r ), template: 'custom' } );
	}

	function removeRow( id ) {
		if ( rows.length <= 1 ) return;
		setAttributes( { rows: rows.filter( ( r ) => r.id !== id ), template: 'custom' } );
		if ( expandedId === id ) setExpandedId( null );
	}

	function moveRow( id, dir ) {
		const idx  = rows.findIndex( ( r ) => r.id === id );
		const next = [ ...rows ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= next.length ) return;
		[ next[ idx ], next[ swap ] ] = [ next[ swap ], next[ idx ] ];
		setAttributes( { rows: next, template: 'custom' } );
	}

	function addRow( element ) {
		const row = defaultRow( element );
		setAttributes( { rows: [ ...rows, row ], template: 'custom' } );
		setExpandedId( row.id );
	}

	// ── Paragraph span CRUD ────────────────────────────────────────────
	function addSpan( rowId ) {
		const row  = rows.find( ( r ) => r.id === rowId );
		if ( ! row ) return;
		const span = { id: makeId( 's' ), cols: 'col-6', colour: '', size: '' };
		updateRow( rowId, { spans: [ ...( row.spans || [] ), span ] } );
	}

	function updateSpan( rowId, spanId, patch ) {
		const row = rows.find( ( r ) => r.id === rowId );
		if ( ! row ) return;
		updateRow( rowId, {
			spans: row.spans.map( ( s ) => s.id === spanId ? { ...s, ...patch } : s ),
		} );
	}

	function removeSpan( rowId, spanId ) {
		const row = rows.find( ( r ) => r.id === rowId );
		if ( ! row || row.spans.length <= 1 ) return;
		updateRow( rowId, { spans: row.spans.filter( ( s ) => s.id !== spanId ) } );
	}

	// ── Glow animation CSS for editor ─────────────────────────────────
	const animKeyframes = `
		@keyframes wm-ph-glow { 50% { opacity: 0.2; } }
		@keyframes wm-ph-wave {
			100% { mask-position: -200% 0; -webkit-mask-position: -200% 0; }
		}
	`;

	const animStyle = animation === 'placeholder-glow'
		? { animation: 'wm-ph-glow 2s ease-in-out infinite' }
		: {};

	// ── Render a single row preview ────────────────────────────────────
	function renderRowPreview( row ) {
		const colour = resolveColour( row.colour, globalColour );
		const bs     = barStyle( row.colour, row.size, globalColour, globalSize );
		const width  = colPercent( row.cols );

		switch ( row.element ) {

			case 'image':
				return (
					<div style={ { width: '100%', height: row.tag || imageHeight || '180px', background: colour, opacity: 0.4, borderRadius: '4px', ...animStyle } } />
				);

			case 'avatar':
				return (
					<div style={ { width: '48px', height: '48px', borderRadius: '50%', background: colour, opacity: 0.5, flexShrink: 0, ...animStyle } } />
				);

			case 'divider':
				return <div style={ { height: '16px' } } />;

			case 'badge':
				return (
					<span style={ { ...bs, width, borderRadius: '12px', ...animStyle } } />
				);

			case 'button':
				return (
					<span style={ {
						...bs,
						width,
						height: '2rem',
						borderRadius: '6px',
						background: resolveColour( row.colour, globalColour ),
						...animStyle,
					} } />
				);

			case 'paragraph':
				return (
					<div style={ { display: 'flex', flexWrap: 'wrap', gap: '6px', ...animStyle } }>
						{ ( row.spans || [] ).map( ( span ) => (
							<span key={ span.id }
								style={ { ...barStyle( span.colour, span.size, globalColour, globalSize ), width: colPercent( span.cols ) } }
							/>
						) ) }
					</div>
				);

			case 'heading':
				return (
					<span style={ {
						...bs,
						width,
						height: row.tag === 'h1' ? '1.8em' : row.tag === 'h2' ? '1.6em' : row.tag === 'h3' ? '1.4em' : row.tag === 'h4' ? '1.2em' : '1em',
						borderRadius: '4px',
						...animStyle,
					} } />
				);

			default: // 'text'
				return (
					<span style={ { ...bs, width, ...animStyle } } />
				);
		}
	}

	// ── Inspector Controls ─────────────────────────────────────────────
	const inspector = (
		<InspectorControls>

			{/* Template picker */}
			<PanelBody title={ __( 'Template', 'wmblocks' ) } initialOpen={ true }>
				<p style={ { fontSize: '12px', color: '#666', marginTop: 0 } }>
					{ __( 'Load a preset skeleton layout. This will replace your current rows.', 'wmblocks' ) }
				</p>
				<div style={ { display: 'flex', flexDirection: 'column', gap: '6px' } }>
					{ Object.entries( TEMPLATES ).map( ( [ key, tpl ] ) => (
						<button key={ key }
							onClick={ () => applyTemplate( key ) }
							style={ {
								padding: '7px 12px',
								border: template === key ? '2px solid #7c3aed' : '1px solid #dee2e6',
								borderRadius: '5px',
								background:   template === key ? '#f5f0ff' : '#fff',
								color:        template === key ? '#4a0db0' : '#333',
								fontWeight:   template === key ? 700 : 400,
								fontSize:     '12px',
								cursor:       'pointer',
								textAlign:    'left',
								transition:   'all .15s',
							} }
						>
							{ tpl.label }
							{ template === key && <span style={ { marginLeft: '6px', fontSize: '10px', opacity: .7 } }>✓ active</span> }
						</button>
					) ) }
				</div>
			</PanelBody>

			{/* Animation & Behaviour */}
			<PanelBody title={ __( 'Animation & Behaviour', 'wmblocks' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Animation', 'wmblocks' ) }
					value={ animation }
					options={ ANIMATION_OPTIONS }
					onChange={ ( v ) => setAttributes( { animation: v } ) }
					help={ __( 'Applied to every placeholder row as a parent class.', 'wmblocks' ) }
				/>
				<ToggleControl
					label={ __( 'aria-hidden="true"', 'wmblocks' ) }
					checked={ !! ariaHidden }
					onChange={ ( v ) => setAttributes( { ariaHidden: v } ) }
					help={ __( 'Hides the skeleton from screen readers. Recommended — pair with a visually-hidden loading message elsewhere.', 'wmblocks' ) }
				/>
				<ToggleControl
					label={ __( 'Wrap in Card', 'wmblocks' ) }
					checked={ !! wrapInCard }
					onChange={ ( v ) => setAttributes( { wrapInCard: v } ) }
					help={ __( 'Wraps everything in a Bootstrap .card > .card-body container.', 'wmblocks' ) }
				/>
				<ToggleControl
					label={ __( 'Top image row', 'wmblocks' ) }
					checked={ !! showImageRow }
					onChange={ ( v ) => setAttributes( { showImageRow: v } ) }
					help={ __( 'Adds a full-width skeleton image bar above the rows (like a card-img-top).', 'wmblocks' ) }
				/>
				{ showImageRow && (
					<TextControl
						label={ __( 'Image row height', 'wmblocks' ) }
						value={ imageHeight }
						onChange={ ( v ) => setAttributes( { imageHeight: v } ) }
						placeholder="180px"
					/>
				) }
			</PanelBody>

			{/* Global overrides */}
			<PanelBody title={ __( 'Global Defaults', 'wmblocks' ) } initialOpen={ false }>
				<p style={ { fontSize: '11px', color: '#888', marginTop: 0 } }>
					{ __( 'Applied to any row that has no individual colour/size set.', 'wmblocks' ) }
				</p>
				<SelectControl
					label={ __( 'Default colour', 'wmblocks' ) }
					value={ globalColour }
					options={ COLOUR_OPTIONS }
					onChange={ ( v ) => setAttributes( { globalColour: v } ) }
				/>
				<SelectControl
					label={ __( 'Default size', 'wmblocks' ) }
					value={ globalSize }
					options={ SIZE_OPTIONS }
					onChange={ ( v ) => setAttributes( { globalSize: v } ) }
				/>
			</PanelBody>

		</InspectorControls>
	);

	// ── Toolbar ────────────────────────────────────────────────────────
	const toolbar = (
		<BlockControls>
			<ToolbarGroup>
				{ Object.entries( TEMPLATES ).slice( 0, 5 ).map( ( [ key, tpl ] ) => (
					<ToolbarButton key={ key }
						label={ tpl.label }
						isPressed={ template === key }
						onClick={ () => applyTemplate( key ) }
					>{ tpl.label.split( ' ' )[ 0 ] }</ToolbarButton>
				) ) }
			</ToolbarGroup>
			<ToolbarGroup>
				{ ANIMATION_OPTIONS.map( ( a ) => (
					<ToolbarButton key={ a.value }
						label={ a.label }
						isPressed={ animation === a.value }
						onClick={ () => setAttributes( { animation: a.value } ) }
					>{ a.value === 'placeholder-glow' ? '✦' : a.value === 'placeholder-wave' ? '〜' : '○' }</ToolbarButton>
				) ) }
			</ToolbarGroup>
		</BlockControls>
	);

	// ── Main render ────────────────────────────────────────────────────
	return (
		<>
			{ toolbar }
			{ inspector }

			<div { ...blockProps }>
				{ /* Inject keyframe animations */ }
				<style>{ animKeyframes }</style>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-ph-meta-strip">
					<span className="wmblocks-ph-chip">Placeholder</span>
					<span className="wmblocks-ph-chip">{ template }</span>
					<span className="wmblocks-ph-chip">{ animation || 'no animation' }</span>
					{ wrapInCard    && <span className="wmblocks-ph-chip">card</span> }
					{ showImageRow  && <span className="wmblocks-ph-chip">img top</span> }
					<span className="wmblocks-ph-chip">{ rows.length } rows</span>
				</div>

				{/* ── Template quick-pick bar ─────────────────────────── */}
				<div className="wmblocks-ph-template-bar">
					<span className="wmblocks-ph-template-label">{ __( 'Template:', 'wmblocks' ) }</span>
					{ Object.entries( TEMPLATES ).map( ( [ key, tpl ] ) => (
						<button key={ key }
							className={ 'wmblocks-ph-template-btn' + ( template === key ? ' is-active' : '' ) }
							onClick={ () => applyTemplate( key ) }
							title={ tpl.label }
						>{ tpl.label }</button>
					) ) }
				</div>

				{/* ── Live preview panel ─────────────────────────────── */}
				<div className={ 'wmblocks-ph-preview' + ( wrapInCard ? ' wmblocks-ph-preview--card' : '' ) }>

					{/* Top image skeleton */}
					{ showImageRow && (
						<div className="wmblocks-ph-image-top" style={ { height: imageHeight, ...animStyle } } />
					) }

					<div className={ wrapInCard ? 'wmblocks-ph-card-body' : '' }>

						{ rows.map( ( row, index ) => {
							const isExpanded = expandedId === row.id;
							const isDivider  = row.element === 'divider';
							const elemType   = ELEMENT_TYPES.find( ( e ) => e.value === row.element );

							return (
								<div key={ row.id }
									className={
										'wmblocks-ph-row' +
										( isExpanded ? ' wmblocks-ph-row--expanded' : '' ) +
										( isDivider  ? ' wmblocks-ph-row--divider'  : '' )
									}
								>
									{/* ── Row label ──────────────────────── */}
									<div className="wmblocks-ph-row__label">
										<span className="wmblocks-ph-row__type-icon" title={ elemType?.desc }>
											{ elemType?.icon }
										</span>
										<span className="wmblocks-ph-row__type-name">
											{ elemType?.label }
										</span>
										{ row.cols && ! isDivider && (
											<span className="wmblocks-ph-row__col-badge">{ row.cols }</span>
										) }
										{ ( row.colour || globalColour ) && ! isDivider && (
											<span
												className="wmblocks-ph-row__colour-dot"
												style={ { background: resolveColour( row.colour, globalColour ) } }
												title={ row.colour || globalColour }
											/>
										) }
										{ row.size && (
											<span className="wmblocks-ph-row__size-badge">{ row.size.replace( 'placeholder-', '' ) }</span>
										) }
									</div>

									{/* ── Live placeholder preview ────────── */}
									<div className="wmblocks-ph-row__preview">
										{ renderRowPreview( row ) }
									</div>

									{/* ── Row action buttons ──────────────── */}
									<div className="wmblocks-ph-row__actions">
										<button className="wmblocks-ph-action"
											onClick={ () => moveRow( row.id, -1 ) }
											disabled={ index === 0 }
											title={ __( 'Move up', 'wmblocks' ) }
										>↑</button>
										<button className="wmblocks-ph-action"
											onClick={ () => moveRow( row.id, 1 ) }
											disabled={ index === rows.length - 1 }
											title={ __( 'Move down', 'wmblocks' ) }
										>↓</button>
										<button
											className={ 'wmblocks-ph-action wmblocks-ph-action--expand' + ( isExpanded ? ' is-active' : '' ) }
											onClick={ () => setExpandedId( isExpanded ? null : row.id ) }
											title={ isExpanded ? __( 'Close options', 'wmblocks' ) : __( 'Options', 'wmblocks' ) }
										>{ isExpanded ? '▲' : '▼' }</button>
										<button className="wmblocks-ph-action wmblocks-ph-action--remove"
											onClick={ () => removeRow( row.id ) }
											disabled={ rows.length <= 1 }
											title={ __( 'Remove row', 'wmblocks' ) }
										>✕</button>
									</div>

									{/* ── Expanded options panel ──────────── */}
									{ isExpanded && (
										<div className="wmblocks-ph-row__detail">

											{/* Element type pills */}
											<div className="wmblocks-ph-detail-section">
												<span className="wmblocks-ph-detail-heading">{ __( 'Element type', 'wmblocks' ) }</span>
												<div className="wmblocks-ph-type-pills">
													{ ELEMENT_TYPES.map( ( et ) => (
														<button key={ et.value }
															className={ 'wmblocks-ph-type-pill' + ( row.element === et.value ? ' is-active' : '' ) }
															onClick={ () => updateRow( row.id, { element: et.value, ...(et.value === 'paragraph' && !row.spans?.length ? { spans: defaultRow('paragraph').spans } : {}) } ) }
															title={ et.desc }
														>{ et.icon } { et.label }</button>
													) ) }
												</div>
											</div>

											{ /* Heading tag picker */ }
											{ row.element === 'heading' && (
												<div className="wmblocks-ph-detail-section">
													<span className="wmblocks-ph-detail-heading">{ __( 'Heading level', 'wmblocks' ) }</span>
													<div className="wmblocks-ph-type-pills">
														{ HEADING_TAG_OPTIONS.map( ( ht ) => (
															<button key={ ht.value }
																className={ 'wmblocks-ph-type-pill' + ( row.tag === ht.value ? ' is-active' : '' ) }
																onClick={ () => updateRow( row.id, { tag: ht.value } ) }
															>{ ht.label }</button>
														) ) }
													</div>
												</div>
											) }

											{ /* Image height */ }
											{ row.element === 'image' && (
												<div className="wmblocks-ph-detail-section">
													<span className="wmblocks-ph-detail-heading">{ __( 'Image height', 'wmblocks' ) }</span>
													<input
														type="text"
														className="wmblocks-ph-text-input"
														value={ row.tag || '' }
														onChange={ ( e ) => updateRow( row.id, { tag: e.target.value } ) }
														placeholder="200px"
													/>
												</div>
											) }

											{ /* Column width — not for divider or paragraph (paragraph uses spans) */ }
											{ row.element !== 'divider' && row.element !== 'paragraph' && (
												<div className="wmblocks-ph-detail-section">
													<span className="wmblocks-ph-detail-heading">{ __( 'Width (col)', 'wmblocks' ) }</span>
													<div className="wmblocks-ph-col-grid">
														{ COL_OPTIONS.map( ( co ) => (
															<button key={ co.value }
																className={ 'wmblocks-ph-col-btn' + ( row.cols === co.value ? ' is-active' : '' ) }
																onClick={ () => updateRow( row.id, { cols: co.value } ) }
																title={ co.label }
															>{ co.value.replace( 'col-', '' ) }</button>
														) ) }
													</div>
												</div>
											) }

											{ /* Colour — not for divider */ }
											{ row.element !== 'divider' && (
												<div className="wmblocks-ph-detail-section">
													<span className="wmblocks-ph-detail-heading">{ __( 'Colour', 'wmblocks' ) }</span>
													<div className="wmblocks-ph-colour-swatches">
														{ COLOUR_OPTIONS.map( ( co ) => (
															<button key={ co.value }
																className={ 'wmblocks-ph-colour-swatch' + ( row.colour === co.value ? ' is-active' : '' ) }
																style={ {
																	background: COLOUR_HEX[ co.value ],
																	border:     co.value === '' ? '1px dashed #aaa' : '2px solid transparent',
																	outline:    row.colour === co.value ? '3px solid rgba(124,58,237,.6)' : 'none',
																} }
																onClick={ () => updateRow( row.id, { colour: co.value } ) }
																title={ co.label }
															/>
														) ) }
													</div>
												</div>
											) }

											{ /* Size — not for divider, image, avatar */ }
											{ ! [ 'divider', 'image', 'avatar' ].includes( row.element ) && (
												<div className="wmblocks-ph-detail-section">
													<span className="wmblocks-ph-detail-heading">{ __( 'Size', 'wmblocks' ) }</span>
													<div className="wmblocks-ph-type-pills">
														{ SIZE_OPTIONS.map( ( so ) => (
															<button key={ so.value }
																className={ 'wmblocks-ph-type-pill' + ( row.size === so.value ? ' is-active' : '' ) }
																onClick={ () => updateRow( row.id, { size: so.value } ) }
															>{ so.label }</button>
														) ) }
													</div>
												</div>
											) }

											{ /* Paragraph span manager */ }
											{ row.element === 'paragraph' && (
												<div className="wmblocks-ph-detail-section wmblocks-ph-spans-section">
													<div className="wmblocks-ph-spans-header">
														<span className="wmblocks-ph-detail-heading">{ __( 'Text spans', 'wmblocks' ) }</span>
														<button className="wmblocks-ph-span-add"
															onClick={ () => addSpan( row.id ) }
														>+ { __( 'Add span', 'wmblocks' ) }</button>
													</div>
													{ ( row.spans || [] ).map( ( span, si ) => (
														<div key={ span.id } className="wmblocks-ph-span-row">
															<span className="wmblocks-ph-span-num">{ si + 1 }</span>
															{/* Width */}
															<div className="wmblocks-ph-col-grid wmblocks-ph-col-grid--compact">
																{ [ 'col-3','col-4','col-5','col-6','col-7','col-8','col-9','col-10','col-11','col-12' ].map( ( c ) => (
																	<button key={ c }
																		className={ 'wmblocks-ph-col-btn' + ( span.cols === c ? ' is-active' : '' ) }
																		onClick={ () => updateSpan( row.id, span.id, { cols: c } ) }
																	>{ c.replace( 'col-', '' ) }</button>
																) ) }
															</div>
															{/* Colour dot */}
															<div className="wmblocks-ph-span-colours">
																{ COLOUR_OPTIONS.slice( 0, 5 ).map( ( co ) => (
																	<button key={ co.value }
																		className={ 'wmblocks-ph-colour-swatch wmblocks-ph-colour-swatch--sm' + ( span.colour === co.value ? ' is-active' : '' ) }
																		style={ { background: COLOUR_HEX[ co.value ], border: co.value === '' ? '1px dashed #aaa' : '2px solid transparent' } }
																		onClick={ () => updateSpan( row.id, span.id, { colour: co.value } ) }
																		title={ co.label }
																	/>
																) ) }
															</div>
															<button className="wmblocks-ph-span-remove"
																onClick={ () => removeSpan( row.id, span.id ) }
																disabled={ ( row.spans || [] ).length <= 1 }
															>✕</button>
														</div>
													) ) }
												</div>
											) }

										</div>
									) }

								</div>
							);
						} ) }

					</div>
				</div>

				{/* ── Add row bar ─────────────────────────────────────── */}
				<div className="wmblocks-ph-add-bar">
					<span className="wmblocks-ph-add-label">{ __( '+ Add row:', 'wmblocks' ) }</span>
					{ ELEMENT_TYPES.map( ( et ) => (
						<button key={ et.value }
							className="wmblocks-ph-add-btn"
							onClick={ () => addRow( et.value ) }
							title={ et.desc }
						>{ et.icon } { et.label }</button>
					) ) }
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-ph-footer-hint">
					{ __( '▼ to configure each row · template shortcuts above · animation & card wrap in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
