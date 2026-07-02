import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const {
        // Your existing attributes
        content, dropCap, dropCapColor, dropCapSize, dropCapWeight, backgroundColorClass, bgGradient, linkColor, linkHoverColor,
        margin, padding,
        textStyle, textDecoration, textWrap, textTransform, fontSize,
        fontWeight, fontStyle, lineHeight, fontMonospace, textReset,
        wrapStrong, wrapEm, wrapDel, wrapIns, 
        
        // --- ADDED: Animation Attributes ---
        wmAnim, wmDelay, wmDuration, wmEasing, wmMirror, wmOnce
    } = attributes;

    const blockStyle = {
        '--wm-link-color': linkColor || undefined,
        '--wm-link-hover-color': linkHoverColor || undefined,
        '--wm-dropcap-color': dropCapColor || undefined,
        '--wm-dropcap-size': dropCapSize ? `${dropCapSize}em` : undefined,
        '--wm-dropcap-lines': dropCapSize ? Math.max( 2, Math.floor( dropCapSize * 0.75 ) ) : undefined,
        '--wm-dropcap-weight': dropCapWeight || undefined,
        marginTop: margin?.top,
        marginBottom: margin?.bottom,
        marginLeft: margin?.left,
        marginRight: margin?.right,
        paddingTop: padding?.top,
        paddingBottom: padding?.bottom,
        paddingLeft: padding?.left,
        paddingRight: padding?.right,
    };

    // 1. Setup the base wrapper arguments with your existing classes & styles
    const wrapperArgs = {
        className: [
            'wmblocks-paragraph',
            dropCap ? 'overflow-hidden has-drop-cap' : '',
            backgroundColorClass, bgGradient, textStyle, textDecoration, textWrap, textTransform,
            fontSize, fontWeight, fontStyle, lineHeight,
            fontMonospace ? 'font-monospace' : '',
            textReset ? 'text-reset' : ''
        ].filter( Boolean ).join( ' ' ),
        style: blockStyle
    };

    // 2. --- ADDED: Conditionally inject animation data attributes ---
    if ( wmAnim && wmAnim !== 'none' ) {
        wrapperArgs.className += ' wm-animate'; // Append base observer class
        wrapperArgs['data-wm'] = wmAnim;
        wrapperArgs['data-wm-duration'] = wmDuration || '400';
        wrapperArgs['data-wm-delay'] = wmDelay || '0';
        wrapperArgs['data-wm-easing'] = wmEasing || 'ease';
        wrapperArgs['data-wm-once'] = wmOnce === false ? 'false' : 'true';
        wrapperArgs['data-wm-mirror'] = wmMirror ? 'true' : 'false';
    }

    // 3. Pass the dynamic arguments into useBlockProps
    const blockProps = useBlockProps.save( wrapperArgs );

    let innerContent = <RichText.Content className="wmblocks-paragraph-text" value={ content } tagName="span" />;

    if ( wrapStrong ) innerContent = <strong>{ innerContent }</strong>;
    if ( wrapEm ) innerContent = <em>{ innerContent }</em>;
    if ( wrapDel ) innerContent = <del>{ innerContent }</del>;
    if ( wrapIns ) innerContent = <ins>{ innerContent }</ins>;

    return (
        <p { ...blockProps }>
            { innerContent }
        </p>
    );
}