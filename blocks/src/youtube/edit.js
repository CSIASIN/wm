import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl,
	ToolbarGroup,
	ToolbarButton,
	Notice,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────
const RATIOS = [
	{ label: '1:1  Square',      value: 'ratio-1x1',  w: 1,  h: 1  },
	{ label: '4:3  Classic',     value: 'ratio-4x3',  w: 4,  h: 3  },
	{ label: '16:9 Widescreen',  value: 'ratio-16x9', w: 16, h: 9  },
	{ label: '21:9 Ultrawide',   value: 'ratio-21x9', w: 21, h: 9  },
];

// ── Parse YouTube video ID from any URL format ─────────────────────────────
function parseYouTubeId( input ) {
	if ( ! input ) return '';
	const str = input.trim();

	// Already just an ID (11 chars, alphanum + - _)
	if ( /^[\w-]{11}$/.test( str ) ) return str;

	try {
		const url  = new URL( str );
		const host = url.hostname.replace( 'www.', '' );

		// youtu.be/VIDEO_ID
		if ( host === 'youtu.be' ) {
			return url.pathname.slice( 1 ).split( '?' )[ 0 ].split( '/' )[ 0 ];
		}

		// youtube.com/watch?v=VIDEO_ID
		if ( host === 'youtube.com' || host === 'm.youtube.com' ) {
			const v = url.searchParams.get( 'v' );
			if ( v ) return v;

			// youtube.com/embed/VIDEO_ID
			const embedMatch = url.pathname.match( /^\/embed\/([\w-]{11})/ );
			if ( embedMatch ) return embedMatch[ 1 ];

			// youtube.com/shorts/VIDEO_ID
			const shortsMatch = url.pathname.match( /^\/shorts\/([\w-]{11})/ );
			if ( shortsMatch ) return shortsMatch[ 1 ];

			// youtube.com/live/VIDEO_ID
			const liveMatch = url.pathname.match( /^\/live\/([\w-]{11})/ );
			if ( liveMatch ) return liveMatch[ 1 ];
		}
	} catch ( e ) {
		// Not a URL — try regex on raw string
		const match = str.match( /(?:v=|embed\/|shorts\/|youtu\.be\/)([\w-]{11})/ );
		if ( match ) return match[ 1 ];
	}

	return '';
}

// ── Compute padding-top % ──────────────────────────────────────────────────
function ratioPaddingTop( ratioClass, customRatio ) {
	if ( ratioClass === 'custom' && customRatio ) {
		const parts = customRatio.split( '/' ).map( Number );
		if ( parts.length === 2 && parts[ 0 ] && parts[ 1 ] ) {
			return ( ( parts[ 1 ] / parts[ 0 ] ) * 100 ).toFixed( 4 ) + '%';
		}
		return '56.25%';
	}
	const found = RATIOS.find( ( r ) => r.value === ratioClass );
	return found ? ( ( found.h / found.w ) * 100 ).toFixed( 4 ) + '%' : '56.25%';
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		url, videoId, ratio, customRatio, title,
		autoplay, mute, controls, loop, modestbranding, rel,
		privacyEnhanced, start, end, playlistId, cc, ccLang,
	} = attributes;

	// Local URL input state (before committing)
	const [ inputUrl, setInputUrl ] = useState( url || '' );
	const [ urlError, setUrlError ] = useState( '' );

	const blockProps = useBlockProps( { className: 'wmblocks-youtube-wrapper' } );

	const isCustom   = ratio === 'custom';
	const paddingTop = ratioPaddingTop( ratio, customRatio );

	// ── Commit URL ────────────────────────────────────────────────────
	function commitUrl( val ) {
		const trimmed = val.trim();
		setInputUrl( trimmed );
		if ( ! trimmed ) {
			setAttributes( { url: '', videoId: '' } );
			setUrlError( '' );
			return;
		}
		const id = parseYouTubeId( trimmed );
		if ( id ) {
			setAttributes( { url: trimmed, videoId: id } );
			setUrlError( '' );
		} else {
			setAttributes( { url: trimmed, videoId: '' } );
			setUrlError( __( 'Could not find a YouTube video ID in that URL. Try pasting the full watch URL.', 'wmblocks' ) );
		}
	}

	// ── Thumbnail URL (YouTube provides free thumbnails) ──────────────
	const thumbUrl = videoId
		? `https://img.youtube.com/vi/${ videoId }/maxresdefault.jpg`
		: '';
	const thumbFallback = videoId
		? `https://img.youtube.com/vi/${ videoId }/hqdefault.jpg`
		: '';

	// ── Render ────────────────────────────────────────────────────────
	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ RATIOS.map( ( r ) => (
						<ToolbarButton key={ r.value }
							label={ r.label }
							isPressed={ ratio === r.value }
							onClick={ () => setAttributes( { ratio: r.value } ) }
						>{ `${ r.w }:${ r.h }` }</ToolbarButton>
					) ) }
					<ToolbarButton
						label={ __( 'Custom ratio', 'wmblocks' ) }
						isPressed={ ratio === 'custom' }
						onClick={ () => setAttributes( { ratio: 'custom' } ) }
					>{ __( 'Custom', 'wmblocks' ) }</ToolbarButton>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ autoplay ? __( 'Autoplay ON', 'wmblocks' ) : __( 'Autoplay OFF', 'wmblocks' ) }
						isPressed={ autoplay }
						onClick={ () => setAttributes( { autoplay: ! autoplay } ) }
					>▶{ autoplay ? ' ON' : ' OFF' }</ToolbarButton>
					<ToolbarButton
						label={ controls ? __( 'Controls shown', 'wmblocks' ) : __( 'Controls hidden', 'wmblocks' ) }
						isPressed={ ! controls }
						onClick={ () => setAttributes( { controls: ! controls } ) }
					>{ controls ? '🎛 ON' : '🎛 OFF' }</ToolbarButton>
					<ToolbarButton
						label={ privacyEnhanced ? __( 'Privacy Enhanced ON', 'wmblocks' ) : __( 'Privacy Enhanced OFF', 'wmblocks' ) }
						isPressed={ privacyEnhanced }
						onClick={ () => setAttributes( { privacyEnhanced: ! privacyEnhanced } ) }
					>{ privacyEnhanced ? '🔒' : '🔓' }</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Ratio */}
				<PanelBody title={ __( 'Aspect Ratio', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Ratio', 'wmblocks' ) }
						value={ ratio }
						options={ [
							...RATIOS.map( ( r ) => ( { label: r.label, value: r.value } ) ),
							{ label: 'Custom', value: 'custom' },
						] }
						onChange={ ( v ) => setAttributes( { ratio: v } ) }
					/>
					{ isCustom && (
						<TextControl
							label={ __( 'Custom ratio (W/H)', 'wmblocks' ) }
							value={ customRatio }
							onChange={ ( v ) => setAttributes( { customRatio: v } ) }
							placeholder="e.g. 16/9"
						/>
					) }
				</PanelBody>

				{/* Accessibility */}
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'iframe title attribute', 'wmblocks' ) }
						value={ title }
						onChange={ ( v ) => setAttributes( { title: v } ) }
						help={ __( 'Describes the video for screen readers. Required for accessibility.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Playback */}
				<PanelBody title={ __( 'Playback', 'wmblocks' ) } initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Autoplay', 'wmblocks' ) }
							checked={ !! autoplay }
							onChange={ ( v ) => setAttributes( { autoplay: v } ) }
							help={ __( 'Note: browsers require mute to be ON for autoplay to work.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Mute', 'wmblocks' ) }
							checked={ !! mute }
							onChange={ ( v ) => setAttributes( { mute: v } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show controls', 'wmblocks' ) }
							checked={ !! controls }
							onChange={ ( v ) => setAttributes( { controls: v } ) }
							help={ __( 'Shows the YouTube player controls bar.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Loop', 'wmblocks' ) }
							checked={ !! loop }
							onChange={ ( v ) => setAttributes( { loop: v } ) }
							help={ __( 'Loops the video continuously.', 'wmblocks' ) }
						/>
					</PanelRow>
					<RangeControl
						label={ __( 'Start time (seconds)', 'wmblocks' ) }
						value={ start }
						onChange={ ( v ) => setAttributes( { start: v } ) }
						min={ 0 }
						max={ 7200 }
						step={ 1 }
						help={ __( '0 = play from beginning.', 'wmblocks' ) }
					/>
					<RangeControl
						label={ __( 'End time (seconds)', 'wmblocks' ) }
						value={ end }
						onChange={ ( v ) => setAttributes( { end: v } ) }
						min={ 0 }
						max={ 7200 }
						step={ 1 }
						help={ __( '0 = play to end.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Appearance */}
				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ false }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Modest branding', 'wmblocks' ) }
							checked={ !! modestbranding }
							onChange={ ( v ) => setAttributes( { modestbranding: v } ) }
							help={ __( 'Hides the YouTube logo in the control bar.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show related videos', 'wmblocks' ) }
							checked={ !! rel }
							onChange={ ( v ) => setAttributes( { rel: v } ) }
							help={ __( 'When OFF (rel=0), related videos shown are from the same channel only.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Privacy-enhanced mode', 'wmblocks' ) }
							checked={ !! privacyEnhanced }
							onChange={ ( v ) => setAttributes( { privacyEnhanced: v } ) }
							help={ __( 'Uses youtube-nocookie.com — YouTube won\'t store cookie info unless the user plays the video.', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* Captions & Playlist */}
				<PanelBody title={ __( 'Captions & Playlist', 'wmblocks' ) } initialOpen={ false }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Enable captions (cc_load_policy)', 'wmblocks' ) }
							checked={ !! cc }
							onChange={ ( v ) => setAttributes( { cc: v } ) }
							help={ __( 'Force closed captions to display.', 'wmblocks' ) }
						/>
					</PanelRow>
					{ cc && (
						<TextControl
							label={ __( 'Caption language (cc_lang_pref)', 'wmblocks' ) }
							value={ ccLang }
							onChange={ ( v ) => setAttributes( { ccLang: v } ) }
							placeholder="en"
							help={ __( 'ISO 639-1 language code, e.g. en, fr, de, es.', 'wmblocks' ) }
						/>
					) }
					<TextControl
						label={ __( 'Playlist ID (optional)', 'wmblocks' ) }
						value={ playlistId }
						onChange={ ( v ) => setAttributes( { playlistId: v } ) }
						placeholder="PLxxxxxx…"
						help={ __( 'If set, the player will load this playlist.', 'wmblocks' ) }
					/>
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-yt-meta-strip">
					<span className="wmblocks-yt-chip">YouTube</span>
					<span className="wmblocks-yt-chip wmblocks-yt-chip--ratio">
						{ RATIOS.find( ( r ) => r.value === ratio )?.label?.split( ' ' )[ 0 ] || ratio }
					</span>
					{ videoId && <span className="wmblocks-yt-chip wmblocks-yt-chip--id">ID: { videoId }</span> }
					{ autoplay        && <span className="wmblocks-yt-chip">autoplay</span> }
					{ ! controls      && <span className="wmblocks-yt-chip">no controls</span> }
					{ loop            && <span className="wmblocks-yt-chip">loop</span> }
					{ privacyEnhanced && <span className="wmblocks-yt-chip">🔒 privacy</span> }
					{ start > 0       && <span className="wmblocks-yt-chip">start: { start }s</span> }
				</div>

				{/* ── URL Input ──────────────────────────────────────── */}
				<div className="wmblocks-yt-url-row">
					<span className="wmblocks-yt-url-icon">▶</span>
					<input
						type="url"
						className="wmblocks-yt-url-input"
						value={ inputUrl }
						onChange={ ( e ) => setInputUrl( e.target.value ) }
						onBlur={ ( e ) => commitUrl( e.target.value ) }
						onKeyDown={ ( e ) => { if ( e.key === 'Enter' ) { e.preventDefault(); commitUrl( e.target.value ); } } }
						placeholder={ __( 'Paste YouTube URL or video ID here…', 'wmblocks' ) }
					/>
					{ videoId && (
						<button
							className="wmblocks-yt-clear-btn"
							onClick={ () => { setInputUrl( '' ); setAttributes( { url: '', videoId: '' } ); setUrlError( '' ); } }
							title={ __( 'Clear video', 'wmblocks' ) }
						>✕</button>
					) }
				</div>

				{/* URL error */}
				{ urlError && (
					<p className="wmblocks-yt-url-error">{ urlError }</p>
				) }

				{/* Supported formats hint */}
				<div className="wmblocks-yt-url-formats">
					<span>{ __( 'Supported:', 'wmblocks' ) }</span>
					{ [
						'youtube.com/watch?v=…',
						'youtu.be/…',
						'youtube.com/shorts/…',
						'youtube.com/live/…',
						'Video ID only',
					].map( ( f ) => (
						<code key={ f } className="wmblocks-yt-format-tag">{ f }</code>
					) ) }
				</div>

				{/* ── Ratio quick-pick ────────────────────────────────── */}
				<div className="wmblocks-yt-ratio-bar">
					<span className="wmblocks-yt-ratio-label">{ __( 'Ratio:', 'wmblocks' ) }</span>
					{ RATIOS.map( ( r ) => (
						<button key={ r.value }
							className={ 'wmblocks-yt-ratio-btn' + ( ratio === r.value ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { ratio: r.value } ) }
						>
							<span className="wmblocks-yt-ratio-rect" style={ {
								width:  `${ Math.round( ( r.w / 21 ) * 32 ) }px`,
								height: `${ Math.round( ( r.h / 21 ) * 32 ) }px`,
							} } />
							{ r.w }:{ r.h }
						</button>
					) ) }
					<button
						className={ 'wmblocks-yt-ratio-btn' + ( ratio === 'custom' ? ' is-active' : '' ) }
						onClick={ () => setAttributes( { ratio: 'custom' } ) }
					>⚙ Custom</button>
					{ isCustom && (
						<input
							type="text"
							className="wmblocks-yt-custom-ratio-input"
							value={ customRatio }
							onChange={ ( e ) => setAttributes( { customRatio: e.target.value } ) }
							placeholder="16/9"
						/>
					) }
				</div>

				{/* ── Video preview ───────────────────────────────────── */}
				<div className="wmblocks-yt-preview-box" style={ { paddingTop } }>
					<div className="wmblocks-yt-preview-inner">
						{ videoId ? (
							<>
								{/* Thumbnail from YouTube CDN */}
								<img
									className="wmblocks-yt-thumb"
									src={ thumbUrl }
									alt={ title || 'YouTube video thumbnail' }
									onError={ ( e ) => { e.target.src = thumbFallback; } }
								/>
								{/* Play button overlay */}
								<div className="wmblocks-yt-play-overlay">
									<div className="wmblocks-yt-play-btn" title={ __( 'Preview only — video plays on frontend', 'wmblocks' ) }>
										<span className="wmblocks-yt-play-icon">▶</span>
									</div>
									<div className="wmblocks-yt-play-label">
										<strong>{ title || __( 'YouTube Video', 'wmblocks' ) }</strong>
										<span>{ videoId }</span>
									</div>
								</div>
								{/* Param badges overlay */}
								<div className="wmblocks-yt-param-badges">
									{ autoplay        && <span className="wmblocks-yt-param-badge">▶ autoplay</span> }
									{ mute            && <span className="wmblocks-yt-param-badge">🔇 muted</span> }
									{ ! controls      && <span className="wmblocks-yt-param-badge">no controls</span> }
									{ loop            && <span className="wmblocks-yt-param-badge">↺ loop</span> }
									{ privacyEnhanced && <span className="wmblocks-yt-param-badge">🔒 privacy</span> }
									{ modestbranding  && <span className="wmblocks-yt-param-badge">no logo</span> }
									{ start > 0       && <span className="wmblocks-yt-param-badge">▶ { start }s</span> }
									{ cc              && <span className="wmblocks-yt-param-badge">CC</span> }
								</div>
							</>
						) : (
							// Empty state
							<div className="wmblocks-yt-empty-state">
								<div className="wmblocks-yt-empty-icon">▶</div>
								<p className="wmblocks-yt-empty-title">{ __( 'Paste a YouTube URL above', 'wmblocks' ) }</p>
								<p className="wmblocks-yt-empty-sub">{ __( 'The video thumbnail will appear here. All embed options are in the sidebar →', 'wmblocks' ) }</p>
							</div>
						) }
					</div>
				</div>

				{/* ── Footer ───────────────────────────────────────────── */}
				<p className="wmblocks-yt-footer-hint">
					{ __( 'Thumbnail preview only — full video plays on the frontend · All embed options in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
