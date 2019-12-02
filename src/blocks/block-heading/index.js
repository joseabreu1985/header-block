/**
 * BLOCK: LSX Blocks Headings Block
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import Heading from './components/heading';
import omit from 'lodash/omit';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const {
	registerBlockType,
	createBlock,
} = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
} = wp.blockEditor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
} = wp.components;

const blockAttributes = {
	headingTitle: {
		type: 'string',
		selector: '.lsx-heading-title',
	},
	headingAlignment: {
		type: 'string',
	},
	headingColor: {
		type: 'string',
		default: '#32373c'
	},
	lineColor: {
		type: 'string',
		default: '#cccccc'
	},
	headingFontSize: {
		type: 'number',
		default: 28
	},
	headingType:{
		type: 'number',
		default: 2
	},
	headingClass: {
		type: 'boolean',
		default: false
	},
	lineWidth: {
		type: 'number',
		default: 14
	},
	lineHeight: {
		type: 'number',
		default: 2
	},
};

class LSXHeadingBlock extends Component {

	render() {

		// Setup the attributes
		const { attributes: { headingTitle, headingColor, lineColor, headingText, headingAlignment, headingType, headingFontSize, headingClass }, isSelected, className, setAttributes, lineWidth, lineHeight } = this.props;

		return [
			// Show the block alignment controls on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ headingAlignment }
					onChange={ ( value ) => this.props.setAttributes( { headingAlignment: value } ) }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...this.props }
			/>,
			// Show the button markup in the editor
			<Heading { ...this.props }>
				<RichText
					tagName={'h' + headingType }
					style={ {
						color: headingColor,
						width: lineWidth + '%',
						height: lineHeight + 'px'
					} }
					placeholder={ __( 'Heading Title', 'lsx-blocks' ) }
					value={ headingTitle }
					className={ headingClass ? 'lsx-plain' : 'lsx-title' }
					onChange={ ( value ) => this.props.setAttributes( { headingTitle: value } ) }
				/>
			</Heading>
		];
	}
}

// Register the block
registerBlockType( 'lsx-blocks/lsx-heading', {
	title: __( 'LSX Heading', 'lsx-blocks' ),
	description: __( 'Add heading block with a title and LSX styling.', 'lsx-blocks' ),
	icon: 'editor-textcolor',
	category: 'lsx-blocks',
	keywords: [
		__( 'heading', 'lsx-blocks' ),
		__( 'list', 'lsx-blocks' ),
		__( 'lsx', 'lsx-blocks' ),
	],
	attributes: blockAttributes,

	// Render the block components
	edit: LSXHeadingBlock,

	// Save the attributes and markup
	save: function( props ) {

		// Setup the attributes
		const { headingTitle, headingColor, lineColor, headingText, headingAlignment, headingType, headingFontSize, headingClass, lineWidth, lineHeight } = props.attributes;

		// Save the block markup for the front end
		return (
			<Heading { ...props }>
				<RichText.Content
					tagName={'h' + headingType }
					style={ {
						color: headingColor
					} }
					value={ headingTitle }
					className={ headingClass ? 'lsx-title' : 'lsx-plain' }
				/>
				<RichText.Content
					tagName="span"
					style={ {
						backgroundColor: lineColor,
						width: lineWidth + '%',
						height: lineHeight + 'px'
					} }
					value=""
					className="lsx-title-line"
				/>
			</Heading>
		);
	},

} );
