import { registerBlockType } from "@wordpress/blocks";
//import './style.scss';
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

// Custom SVG icon representing a paragraph block
const paragraphIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="2" y="2" width="20" height="20" fill="none" />
		<path
			d="M15.75 22C15.5511 22 15.3603 21.9247 15.2197 21.7908C15.079 21.6568 15 21.4752 15 21.2857V3.42857H13.5V21.2857C13.5 21.4752 13.421 21.6568 13.2803 21.7908C13.1397 21.9247 12.9489 22 12.75 22C12.5511 22 12.3603 21.9247 12.2197 21.7908C12.079 21.6568 12 21.4752 12 21.2857V13.4286H10.5C8.9087 13.4286 7.38258 12.8265 6.25736 11.7549C5.13214 10.6833 4.5 9.22981 4.5 7.71429C4.5 6.19876 5.13214 4.74531 6.25736 3.67368C7.38258 2.60204 8.9087 2 10.5 2H18.75C18.9489 2 19.1397 2.07525 19.2803 2.20921C19.421 2.34316 19.5 2.52485 19.5 2.71429C19.5 2.90373 19.421 3.08541 19.2803 3.21936C19.1397 3.35332 18.9489 3.42857 18.75 3.42857H16.5V21.2857C16.5 21.4752 16.421 21.6568 16.2803 21.7908C16.1397 21.9247 15.9489 22 15.75 22Z"
			fill="#007CED"
		/>
	</svg>
);

registerBlockType(metadata.name, {
	icon: paragraphIcon,
	edit: Edit,
	save,
});
