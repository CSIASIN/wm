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

// ── Bootstrap Icons SVG paths for the BUTTON icon (inline) ────────────────
const BTN_ICONS = {
	'none':          { label: 'None',              path: '' },
	'envelope':      { label: 'Envelope / Email',  path: 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' },
	'bell':          { label: 'Bell / Alert',      path: 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' },
	'cart':          { label: 'Shopping cart',     path: 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
	'person':        { label: 'Person / Profile',  path: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' },
	'chat':          { label: 'Chat / Message',    path: 'M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z' },
	'heart':         { label: 'Heart',             path: 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' },
	'star':          { label: 'Star',              path: 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' },
	'search':        { label: 'Search',            path: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099 6.5 6.5 0 0 0 0 0zm-5.44 1.06a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z' },
	'house':         { label: 'Home',              path: 'M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' },
	'gear':          { label: 'Settings / Gear',   path: 'M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.892 3.433-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.892-1.64-.901-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z' },
	'download':      { label: 'Download',          path: 'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' },
	'share':         { label: 'Share',             path: 'M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z' },
	'arrow-right':   { label: 'Arrow right',       path: 'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z' },
	'play-fill':     { label: 'Play',              path: 'M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' },
	'caret-down-fill':{ label: 'Caret down',       path: 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' },
	'three-dots':    { label: 'Three dots menu',   path: 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' },
};

// SVG icons available as the positioned badge/marker element
const BADGE_SVGS = {
	'caret-down-fill': { label: 'Caret down',    path: 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' },
	'caret-up-fill':   { label: 'Caret up',      path: 'M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' },
	'caret-left-fill': { label: 'Caret left',    path: 'M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' },
	'caret-right-fill':{ label: 'Caret right',   path: 'M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' },
	'arrow-down':      { label: 'Arrow down',    path: 'M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z' },
	'arrow-up':        { label: 'Arrow up',      path: 'M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z' },
	'chevron-down':    { label: 'Chevron down',  path: 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' },
	'plus-circle-fill':{ label: 'Plus circle',   path: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' },
	'exclamation':     { label: 'Exclamation',   path: 'M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z' },
	'check2':          { label: 'Check',          path: 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' },
	'fire':            { label: 'Fire / Hot',     path: 'M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15z' },
};

// ── Button variants ────────────────────────────────────────────────────────
const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary',          hex: '#0d6efd', text: '#fff' },
	{ label: 'Secondary',         value: 'btn-secondary',         hex: '#6c757d', text: '#fff' },
	{ label: 'Success',           value: 'btn-success',           hex: '#198754', text: '#fff' },
	{ label: 'Danger',            value: 'btn-danger',            hex: '#dc3545', text: '#fff' },
	{ label: 'Warning',           value: 'btn-warning',           hex: '#ffc107', text: '#000' },
	{ label: 'Info',              value: 'btn-info',              hex: '#0dcaf0', text: '#000' },
	{ label: 'Light',             value: 'btn-light',             hex: '#f8f9fa', text: '#000' },
	{ label: 'Dark',              value: 'btn-dark',              hex: '#212529', text: '#fff' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary',   hex: 'transparent', text: '#0d6efd' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary', hex: 'transparent', text: '#6c757d' },
	{ label: 'Outline Success',   value: 'btn-outline-success',   hex: 'transparent', text: '#198754' },
	{ label: 'Outline Danger',    value: 'btn-outline-danger',    hex: 'transparent', text: '#dc3545' },
	{ label: 'Outline Dark',      value: 'btn-outline-dark',      hex: 'transparent', text: '#212529' },
];

// ── Badge colour options ───────────────────────────────────────────────────
const BADGE_COLOURS = [
	{ label: 'Danger (red)',   value: 'text-bg-danger',    hex: '#dc3545' },
	{ label: 'Primary',       value: 'text-bg-primary',   hex: '#0d6efd' },
	{ label: 'Secondary',     value: 'text-bg-secondary',  hex: '#6c757d' },
	{ label: 'Success',       value: 'text-bg-success',   hex: '#198754' },
	{ label: 'Warning',       value: 'text-bg-warning',   hex: '#ffc107' },
	{ label: 'Info',          value: 'text-bg-info',      hex: '#0dcaf0' },
	{ label: 'Dark',          value: 'text-bg-dark',      hex: '#212529' },
	{ label: 'Light',         value: 'text-bg-light',     hex: '#f8f9fa' },
];

// Dot/indicator colours (no badge class, just bg + border)
const DOT_COLOURS = [
	{ label: 'Danger (red)',  value: 'bg-danger',   hex: '#dc3545' },
	{ label: 'Primary',      value: 'bg-primary',  hex: '#0d6efd' },
	{ label: 'Success',      value: 'bg-success',  hex: '#198754' },
	{ label: 'Warning',      value: 'bg-warning',  hex: '#ffc107' },
	{ label: 'Info',         value: 'bg-info',     hex: '#0dcaf0' },
	{ label: 'Dark',         value: 'bg-dark',     hex: '#212529' },
];

// ── Badge position grid ────────────────────────────────────────────────────
// 9 positions: top × start combinations with translate-middle
const POSITION_GRID = [
	{ topVal: 'top-0',    startVal: 'start-0',    translate: 'translate-middle',   label: '↖ Top Start'    },
	{ topVal: 'top-0',    startVal: 'start-50',   translate: 'translate-middle',   label: '⬆ Top Center'   },
	{ topVal: 'top-0',    startVal: 'start-100',  translate: 'translate-middle',   label: '↗ Top End'      },
	{ topVal: 'top-50',   startVal: 'start-0',    translate: 'translate-middle',   label: '⬅ Mid Start'    },
	{ topVal: 'top-50',   startVal: 'start-50',   translate: 'translate-middle',   label: '• Center'        },
	{ topVal: 'top-50',   startVal: 'start-100',  translate: 'translate-middle',   label: '➡ Mid End'      },
	{ topVal: 'top-100',  startVal: 'start-0',    translate: 'translate-middle',   label: '↙ Bot Start'    },
	{ topVal: 'top-100',  startVal: 'start-50',   translate: 'translate-middle',   label: '⬇ Bot Center'   },
	{ topVal: 'top-100',  startVal: 'start-100',  translate: 'translate-middle',   label: '↘ Bot End'      },
];

// Helper to look up hex from badge colour value
function badgeHex( value, type, dotColour ) {
	if ( type === 'dot' ) {
		return DOT_COLOURS.find( c => c.value === dotColour )?.hex || '#dc3545';
	}
	return BADGE_COLOURS.find( c => c.value === value )?.hex || '#dc3545';
}

// Helper to build SVG element
function makeSvg( path, cls = '', style = {} ) {
	if ( ! path ) return null;
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="1em" height="1em"
			fill="currentColor"
			className={ 'bi ' + cls }
			style={ style }
			aria-hidden="true"
		>
			<path d={ path } />
		</svg>
	);
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		btnLabel, btnVariant, btnSize, btnHref, btnTarget,
		btnIconName, btnIconPosition,
		badgeType, badgeLabel, badgeColour, badgeShape,
		badgeTop, badgeStart, badgeTranslate,
		badgeBorderColour, badgeSvgName, badgeA11yLabel,
		alignment,
	} = attributes;

	const [ showBtnIconPicker, setShowBtnIconPicker ] = useState( false );
	const [ showSvgPicker, setShowSvgPicker ] = useState( false );

	const blockProps = useBlockProps( { className: 'wmblocks-bb-wrapper' } );

	// ── Lookup helpers ────────────────────────────────────────────────
	const btnV     = BTN_VARIANTS.find( v => v.value === btnVariant ) || BTN_VARIANTS[0];
	const badgeHexVal = badgeHex( badgeColour, badgeType, badgeColour );

	// Find the active position from the grid
	const activePos = POSITION_GRID.find(
		p => p.topVal === badgeTop && p.startVal === badgeStart
	) || POSITION_GRID[2]; // default: top-end

	// ── Live preview renders ───────────────────────────────────────────

	// The button's own icon (before/after label)
	const btnIcon = btnIconName && btnIconName !== 'none' && BTN_ICONS[ btnIconName ]?.path
		? makeSvg( BTN_ICONS[ btnIconName ].path, '', { fontSize: '1em', verticalAlign: '-0.125em' } )
		: null;

	// The positioned badge / dot / svg
	function renderBadge() {
		const posClass = `position-absolute ${ badgeTop } ${ badgeStart } ${ badgeTranslate }`;

		if ( badgeType === 'text' ) {
			// Pill/square badge with count text
			const cls = `${ posClass } badge ${ badgeShape } ${ badgeColour } ${ badgeBorderColour ? 'border ' + badgeBorderColour : '' }`;
			return (
				<span className={ cls }
					style={ { fontSize: '10px', lineHeight: 1.3, minWidth: '18px', textAlign: 'center' } }
				>{ badgeLabel || '+99' }</span>
			);
		}

		if ( badgeType === 'dot' ) {
			// Dot indicator — no text, just coloured circle
			const dotBg = DOT_COLOURS.find( c => c.value === badgeColour )?.value || 'bg-danger';
			const cls   = `${ posClass } p-2 ${ dotBg } border border-2 border-white rounded-circle`;
			return <span className={ cls } style={ { width: '12px', height: '12px', display: 'inline-block', boxSizing: 'content-box' } } />;
		}

		if ( badgeType === 'svg' ) {
			// SVG marker positioned on the button
			const svgPath = BADGE_SVGS[ badgeSvgName ]?.path || BADGE_SVGS['caret-down-fill'].path;
			return makeSvg(
				svgPath,
				posClass + ' mt-1',
				{ fill: btnV.hex === 'transparent' ? btnV.text : btnV.hex, fontSize: '1em' }
			);
		}

		return null;
	}

	// ── Alignment ─────────────────────────────────────────────────────
	const alignStyle = {
		left: 'flex-start', center: 'center', right: 'flex-end',
	}[ alignment ] || 'flex-start';

	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Button variant quick chips */}
				<ToolbarGroup>
					{ BTN_VARIANTS.slice( 0, 8 ).map( v => (
						<ToolbarButton key={ v.value }
							label={ v.label }
							isPressed={ btnVariant === v.value }
							onClick={ () => setAttributes( { btnVariant: v.value } ) }
							style={ {
								background:  btnVariant === v.value ? v.hex : '',
								color:       btnVariant === v.value ? v.text : '',
								fontWeight:  700, fontSize: '10px', minWidth: '38px',
							} }
						>{ v.label.slice( 0, 3 ) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				{/* Badge type */}
				<ToolbarGroup>
					{ [ 'text', 'dot', 'svg' ].map( t => (
						<ToolbarButton key={ t }
							label={ t.charAt(0).toUpperCase() + t.slice(1) + ' badge' }
							isPressed={ badgeType === t }
							onClick={ () => setAttributes( { badgeType: t } ) }
						>{ { text: 'T', dot: '•', svg: '◈' }[ t ] } { t.charAt(0).toUpperCase() + t.slice(1) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				{/* Alignment */}
				<ToolbarGroup>
					{ [ 'left', 'center', 'right' ].map( a => (
						<ToolbarButton key={ a }
							icon={ `editor-align${ a }` }
							label={ 'Align ' + a }
							isPressed={ alignment === a }
							onClick={ () => setAttributes( { alignment: a } ) }
						/>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Button */}
				<PanelBody title={ __( 'Button', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Variant', 'wmblocks' ) }
						value={ btnVariant }
						options={ BTN_VARIANTS.map( v => ( { label: v.label, value: v.value } ) ) }
						onChange={ v => setAttributes( { btnVariant: v } ) }
					/>
					<SelectControl label={ __( 'Size', 'wmblocks' ) }
						value={ btnSize }
						options={ [
							{ label: 'Default', value: '' },
							{ label: 'Large',   value: 'btn-lg' },
							{ label: 'Small',   value: 'btn-sm' },
						] }
						onChange={ v => setAttributes( { btnSize: v } ) }
					/>
					<TextControl label={ __( 'Link URL (leave empty for <button>)', 'wmblocks' ) }
						value={ btnHref } onChange={ v => setAttributes( { btnHref: v } ) }
						placeholder="https://"
					/>
					{ btnHref && (
						<SelectControl label={ __( 'Open in', 'wmblocks' ) }
							value={ btnTarget }
							options={ [ { label: 'Same tab', value: '_self' }, { label: 'New tab', value: '_blank' } ] }
							onChange={ v => setAttributes( { btnTarget: v } ) }
						/>
					) }
					<SelectControl label={ __( 'Icon position', 'wmblocks' ) }
						value={ btnIconPosition }
						options={ [ { label: 'Before label', value: 'before' }, { label: 'After label', value: 'after' } ] }
						onChange={ v => setAttributes( { btnIconPosition: v } ) }
					/>
				</PanelBody>

				{/* Badge */}
				<PanelBody title={ __( 'Badge', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Badge type', 'wmblocks' ) }
						value={ badgeType }
						options={ [
							{ label: 'Text badge (pill/square with count)', value: 'text' },
							{ label: 'Dot indicator (no text)',              value: 'dot'  },
							{ label: 'SVG marker (icon positioned on btn)', value: 'svg'  },
						] }
						onChange={ v => setAttributes( { badgeType: v } ) }
					/>

					{ badgeType === 'text' && (
						<>
							<SelectControl label={ __( 'Badge colour', 'wmblocks' ) }
								value={ badgeColour }
								options={ BADGE_COLOURS.map( c => ( { label: c.label, value: c.value } ) ) }
								onChange={ v => setAttributes( { badgeColour: v } ) }
							/>
							<SelectControl label={ __( 'Shape', 'wmblocks' ) }
								value={ badgeShape }
								options={ [
									{ label: 'Pill (rounded-pill)', value: 'rounded-pill' },
									{ label: 'Square (default)',     value: ''             },
									{ label: 'Circle',               value: 'rounded-circle' },
								] }
								onChange={ v => setAttributes( { badgeShape: v } ) }
							/>
							<SelectControl label={ __( 'Border colour', 'wmblocks' ) }
								value={ badgeBorderColour }
								options={ [
									{ label: 'None',   value: '' },
									{ label: 'White',  value: 'border-white' },
									{ label: 'Light',  value: 'border-light' },
									{ label: 'Dark',   value: 'border-dark'  },
									{ label: 'Primary',value: 'border-primary'},
								] }
								onChange={ v => setAttributes( { badgeBorderColour: v } ) }
							/>
						</>
					) }

					{ badgeType === 'dot' && (
						<SelectControl label={ __( 'Dot colour', 'wmblocks' ) }
							value={ badgeColour }
							options={ DOT_COLOURS.map( c => ( { label: c.label, value: c.value } ) ) }
							onChange={ v => setAttributes( { badgeColour: v } ) }
						/>
					) }

					<TextControl label={ __( 'Visually hidden a11y text', 'wmblocks' ) }
						value={ badgeA11yLabel }
						onChange={ v => setAttributes( { badgeA11yLabel: v } ) }
						help={ __( 'Screen reader text inside the badge (e.g. "unread messages"). Required for accessibility.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Alignment */}
				<PanelBody title={ __( 'Alignment', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Block alignment', 'wmblocks' ) }
						value={ alignment }
						options={ [ { label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' } ] }
						onChange={ v => setAttributes( { alignment: v } ) }
					/>
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-bb-meta-strip">
					<span className="wmblocks-bb-chip wmblocks-bb-chip--main">Badge on Button</span>
					<span className="wmblocks-bb-chip">{ btnVariant.replace( 'btn-', '' ) }</span>
					<span className="wmblocks-bb-chip">badge: { badgeType }</span>
					<span className="wmblocks-bb-chip">{ activePos.label }</span>
					{ btnIconName && btnIconName !== 'none' && <span className="wmblocks-bb-chip">icon: { btnIconName }</span> }
				</div>

				{/* ── Main edit area: preview left, controls right ────── */}
				<div className="wmblocks-bb-canvas-row">

					{/* LEFT: live button preview */}
					<div
						className="wmblocks-bb-preview-area"
						style={ { justifyContent: alignStyle } }
					>
						{/* Spacer so badge overflowing top is always visible */}
						<div style={ { padding: '24px 32px', display: 'inline-flex' } }>
							<button
								type="button"
								className={ [ 'btn', btnVariant, btnSize, 'position-relative' ].filter( Boolean ).join( ' ' ) }
								style={ { cursor: 'default' } }
								onClick={ e => e.preventDefault() }
							>
								{/* Button leading icon */}
								{ btnIcon && btnIconPosition === 'before' && (
									<span style={ { marginRight: '6px', display: 'inline-flex', verticalAlign: 'middle' } }>
										{ btnIcon }
									</span>
								) }

								{/* Editable label */}
								<RichText
									tagName="span"
									value={ btnLabel }
									onChange={ v => setAttributes( { btnLabel: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Button text…', 'wmblocks' ) }
									style={ { cursor: 'text' } }
								/>

								{/* Button trailing icon */}
								{ btnIcon && btnIconPosition === 'after' && (
									<span style={ { marginLeft: '6px', display: 'inline-flex', verticalAlign: 'middle' } }>
										{ btnIcon }
									</span>
								) }

								{/* The positioned badge / dot / svg */}
								{ renderBadge() }
							</button>
						</div>
					</div>

					{/* RIGHT: controls panel */}
					<div className="wmblocks-bb-controls-panel">

						{/* ── Button style swatches ──────────────────── */}
						<div className="wmblocks-bb-ctrl-section">
							<div className="wmblocks-bb-ctrl-heading">{ __( 'Button style', 'wmblocks' ) }</div>
							<div className="wmblocks-bb-btn-swatches">
								{ BTN_VARIANTS.slice( 0, 8 ).map( v => (
									<button key={ v.value }
										className={ 'wmblocks-bb-btn-swatch' + ( btnVariant === v.value ? ' is-active' : '' ) }
										style={ { background: v.hex === 'transparent' ? '#fff' : v.hex, color: v.text, border: v.hex === 'transparent' ? `1px solid ${ v.text }` : '2px solid transparent' } }
										onClick={ () => setAttributes( { btnVariant: v.value } ) }
										title={ v.label }
									>{ v.label.slice( 0, 3 ) }</button>
								) ) }
							</div>
							<div className="wmblocks-bb-btn-swatches wmblocks-bb-btn-swatches--outline">
								{ BTN_VARIANTS.slice( 8 ).map( v => (
									<button key={ v.value }
										className={ 'wmblocks-bb-btn-swatch wmblocks-bb-btn-swatch--outline' + ( btnVariant === v.value ? ' is-active' : '' ) }
										style={ { borderColor: v.text, color: v.text } }
										onClick={ () => setAttributes( { btnVariant: v.value } ) }
										title={ v.label }
									>{ v.label.replace( 'Outline ', '' ).slice( 0, 3 ) }</button>
								) ) }
							</div>
						</div>

						{/* ── Button icon picker ─────────────────────── */}
						<div className="wmblocks-bb-ctrl-section">
							<div className="wmblocks-bb-ctrl-heading">{ __( 'Button icon', 'wmblocks' ) }</div>
							<div className="wmblocks-bb-icon-row">
								<button
									className="wmblocks-bb-icon-toggle"
									onClick={ () => setShowBtnIconPicker( !showBtnIconPicker ) }
								>
									{ btnIconName && btnIconName !== 'none' && BTN_ICONS[ btnIconName ]?.path
										? makeSvg( BTN_ICONS[ btnIconName ].path, '', { fontSize: '16px' } )
										: <span style={ { fontSize: '12px', color: '#aaa' } }>No icon</span>
									}
									<span>{ showBtnIconPicker ? '▲' : '▼' }</span>
								</button>
								<div className="wmblocks-bb-icon-pos-pills">
									<button
										className={ 'wmblocks-bb-pill' + ( btnIconPosition === 'before' ? ' is-active' : '' ) }
										onClick={ () => setAttributes( { btnIconPosition: 'before' } ) }
									>← Before</button>
									<button
										className={ 'wmblocks-bb-pill' + ( btnIconPosition === 'after' ? ' is-active' : '' ) }
										onClick={ () => setAttributes( { btnIconPosition: 'after' } ) }
									>After →</button>
								</div>
							</div>
							{ showBtnIconPicker && (
								<div className="wmblocks-bb-mini-icon-grid">
									{ Object.entries( BTN_ICONS ).map( ( [ key, ic ] ) => (
										<button key={ key }
											className={ 'wmblocks-bb-mini-icon-btn' + ( btnIconName === key ? ' is-selected' : '' ) }
											onClick={ () => { setAttributes( { btnIconName: key } ); setShowBtnIconPicker( false ); } }
											title={ ic.label }
										>
											{ ic.path
												? makeSvg( ic.path, '', { display: 'block', margin: '0 auto 2px', fontSize: '16px' } )
												: <span style={ { fontSize: '8px', color: '#aaa' } }>✕</span>
											}
											<span className="wmblocks-bb-mini-icon-label">{ key === 'none' ? 'None' : ic.label.split( ' / ' )[0] }</span>
										</button>
									) ) }
								</div>
							) }
						</div>

						{/* ── Badge type ─────────────────────────────── */}
						<div className="wmblocks-bb-ctrl-section">
							<div className="wmblocks-bb-ctrl-heading">{ __( 'Badge type', 'wmblocks' ) }</div>
							<div className="wmblocks-bb-type-pills">
								{ [ { v: 'text', l: 'T Text' }, { v: 'dot', l: '• Dot' }, { v: 'svg', l: '◈ SVG' } ].map( t => (
									<button key={ t.v }
										className={ 'wmblocks-bb-pill' + ( badgeType === t.v ? ' is-active' : '' ) }
										onClick={ () => setAttributes( { badgeType: t.v } ) }
									>{ t.l }</button>
								) ) }
							</div>
						</div>

						{/* ── Badge label (text type only) ───────────── */}
						{ badgeType === 'text' && (
							<div className="wmblocks-bb-ctrl-section">
								<div className="wmblocks-bb-ctrl-heading">{ __( 'Badge label', 'wmblocks' ) }</div>
								<input
									type="text"
									className="wmblocks-bb-text-input"
									value={ badgeLabel }
									onChange={ e => setAttributes( { badgeLabel: e.target.value } ) }
									placeholder="+99"
									maxLength={ 8 }
								/>
							</div>
						) }

						{/* ── Badge colour swatches ──────────────────── */}
						{ badgeType !== 'svg' && (
							<div className="wmblocks-bb-ctrl-section">
								<div className="wmblocks-bb-ctrl-heading">{ __( 'Badge colour', 'wmblocks' ) }</div>
								<div className="wmblocks-bb-badge-swatches">
									{ ( badgeType === 'dot' ? DOT_COLOURS : BADGE_COLOURS ).map( c => (
										<button key={ c.value }
											className={ 'wmblocks-bb-badge-swatch' + ( badgeColour === c.value ? ' is-active' : '' ) }
											style={ {
												background: c.hex,
												outline: badgeColour === c.value ? `3px solid rgba(0,0,0,.3)` : 'none',
												outlineOffset: '2px',
											} }
											onClick={ () => setAttributes( { badgeColour: c.value } ) }
											title={ c.label }
										/>
									) ) }
								</div>
							</div>
						) }

						{/* ── Badge shape (text type) ────────────────── */}
						{ badgeType === 'text' && (
							<div className="wmblocks-bb-ctrl-section">
								<div className="wmblocks-bb-ctrl-heading">{ __( 'Badge shape', 'wmblocks' ) }</div>
								<div className="wmblocks-bb-type-pills">
									{ [ { v: 'rounded-pill', l: '💊 Pill' }, { v: '', l: '▪ Square' }, { v: 'rounded-circle', l: '⚫ Circle' } ].map( s => (
										<button key={ s.v }
											className={ 'wmblocks-bb-pill' + ( badgeShape === s.v ? ' is-active' : '' ) }
											onClick={ () => setAttributes( { badgeShape: s.v } ) }
										>{ s.l }</button>
									) ) }
								</div>
							</div>
						) }

						{/* ── SVG marker picker (svg type) ───────────── */}
						{ badgeType === 'svg' && (
							<div className="wmblocks-bb-ctrl-section">
								<div className="wmblocks-bb-ctrl-heading">{ __( 'SVG marker', 'wmblocks' ) }</div>
								<button
									className="wmblocks-bb-icon-toggle"
									onClick={ () => setShowSvgPicker( !showSvgPicker ) }
								>
									{ makeSvg( BADGE_SVGS[ badgeSvgName ]?.path || '', '', { fontSize: '16px' } ) }
									<span style={ { fontSize: '11px' } }>{ BADGE_SVGS[ badgeSvgName ]?.label || badgeSvgName }</span>
									<span>{ showSvgPicker ? '▲' : '▼' }</span>
								</button>
								{ showSvgPicker && (
									<div className="wmblocks-bb-mini-icon-grid">
										{ Object.entries( BADGE_SVGS ).map( ( [ key, ic ] ) => (
											<button key={ key }
												className={ 'wmblocks-bb-mini-icon-btn' + ( badgeSvgName === key ? ' is-selected' : '' ) }
												onClick={ () => { setAttributes( { badgeSvgName: key } ); setShowSvgPicker( false ); } }
												title={ ic.label }
											>
												{ makeSvg( ic.path, '', { display: 'block', margin: '0 auto 2px', fontSize: '16px' } ) }
												<span className="wmblocks-bb-mini-icon-label">{ ic.label }</span>
											</button>
										) ) }
									</div>
								) }
							</div>
						) }

						{/* ── Badge position grid ────────────────────── */}
						<div className="wmblocks-bb-ctrl-section">
							<div className="wmblocks-bb-ctrl-heading">{ __( 'Badge position', 'wmblocks' ) }</div>
							<div className="wmblocks-bb-pos-grid">
								{ POSITION_GRID.map( ( pos, i ) => {
									const isActive = pos.topVal === badgeTop && pos.startVal === badgeStart;
									// Badge colour indicator in the grid cell
									const cellBg   = isActive ? badgeHexVal : '#e9ecef';
									const row      = Math.floor( i / 3 );
									const col      = i % 3;
									return (
										<button key={ i }
											className={ 'wmblocks-bb-pos-cell' + ( isActive ? ' is-active' : '' ) }
											onClick={ () => setAttributes( { badgeTop: pos.topVal, badgeStart: pos.startVal, badgeTranslate: pos.translate } ) }
											title={ pos.label }
										>
											<span className="wmblocks-bb-pos-dot" style={ { background: cellBg } } />
										</button>
									);
								} ) }
							</div>
							<div style={ { fontSize: '10px', color: '#aaa', marginTop: '4px', fontStyle: 'italic' } }>
								{ activePos.label } — <code style={ { fontSize: '10px', background: '#f1f1f1', padding: '0 3px', borderRadius: '2px' } }>{ badgeTop } { badgeStart } { badgeTranslate }</code>
							</div>
						</div>

						{/* ── URL input ──────────────────────────────── */}
						<div className="wmblocks-bb-ctrl-section">
							<div className="wmblocks-bb-ctrl-heading">{ __( 'Link URL', 'wmblocks' ) }</div>
							<input
								type="url"
								className="wmblocks-bb-text-input wmblocks-bb-text-input--url"
								value={ btnHref }
								onChange={ e => setAttributes( { btnHref: e.target.value } ) }
								placeholder="https:// (leave empty for <button>)"
							/>
						</div>

					</div>
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-bb-footer-hint">
					{ __( 'Click button text to edit inline · all badge & button options in right panel · sidebar for full settings →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
