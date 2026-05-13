import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import "./style.scss";
import Edit from "./edit";
import metadata from "./block.json";

// Custom SVG icon representing a card image block
const cardImageIcon = (
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="2.75" y="4.75" width="18.5" height="14.5" rx="1.25" fill="white" stroke="#007CED" stroke-width="1.5"/>
<path d="M3 15L6.92109 11.324C6.96363 11.2841 7.03114 11.2889 7.06757 11.3345L9.93627 14.9203C9.97126 14.9641 10.0353 14.9705 10.0784 14.9347L15.9298 10.0585C15.9696 10.0254 16.028 10.028 16.0646 10.0646L21 15" stroke="#007CED" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="7.5" cy="8.5" r="1.5" fill="#007CED"/>
<path d="M3 14L6.9386 11.5384C6.97524 11.5155 7.02243 11.5187 7.05562 11.5464L10 14L15.9447 10.5323C15.9784 10.5126 16.0205 10.5143 16.0524 10.5367L21 14V19H3V14Z" fill="#007CED"/>
</svg>
);

registerBlockType(metadata.name, {
	icon: cardImageIcon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
});
