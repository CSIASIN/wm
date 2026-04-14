import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';

const ALIGN_OPTS = [
	{ label: '— Default —',  value: '' },
	{ label: 'text-start',   value: 'text-start' },
	{ label: 'text-center',  value: 'text-center' },
	{ label: 'text-end',     value: 'text-end' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { quote, sourceName, sourceTitle, textAlign, customClass } = attributes;

	const wrapperClass = [ textAlign, customClass ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-blockquote-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Blockquote', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Text Alignment', 'wmblocks' ) }
						value={ textAlign }
						options={ ALIGN_OPTS }
						onChange={ v => setAttributes( { textAlign: v } ) }
					/>
					<TextControl
						label={ __( 'Extra Classes', 'wmblocks' ) }
						value={ customClass }
						onChange={ v => setAttributes( { customClass: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<figure className={ [ wrapperClass ].filter( Boolean ).join( ' ' ) }>
					<blockquote className="blockquote">
						<p
							contentEditable
							suppressContentEditableWarning
							onInput={ e => setAttributes( { quote: e.currentTarget.textContent } ) }
							onKeyDown={ e => e.key === 'Enter' && e.shiftKey === false && e.preventDefault() }
							style={ { outline: 'none', cursor: 'text', minHeight: '1.5em' } }
						>
							{ quote }
						</p>
					</blockquote>

					{ /* Footer — only shown when sourceName has content, or always show as editable placeholder */ }
					<figcaption className="blockquote-footer">
						<span
							contentEditable
							suppressContentEditableWarning
							onInput={ e => setAttributes( { sourceName: e.currentTarget.textContent } ) }
							onKeyDown={ e => e.key === 'Enter' && e.preventDefault() }
							style={ {
								outline: 'none', cursor: 'text',
								color: ! sourceName ? '#adb5bd' : undefined,
								fontStyle: ! sourceName ? 'italic' : undefined,
							} }
							data-placeholder={ __( 'Source name…', 'wmblocks' ) }
						>
							{ sourceName }
						</span>

						{ /* Source title — shown inline as <cite> when present */ }
						{ ' ' }
						<cite
							contentEditable
							suppressContentEditableWarning
							title={ __( 'Source title', 'wmblocks' ) }
							onInput={ e => setAttributes( { sourceTitle: e.currentTarget.textContent } ) }
							onKeyDown={ e => e.key === 'Enter' && e.preventDefault() }
							style={ {
								outline: 'none', cursor: 'text',
								color: ! sourceTitle ? '#adb5bd' : undefined,
								fontStyle: ! sourceTitle ? 'italic' : undefined,
							} }
							data-placeholder={ __( 'Source title…', 'wmblocks' ) }
						>
							{ sourceTitle }
						</cite>
					</figcaption>
				</figure>
			</div>
		</>
	);
}
