/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockDescription,
  PanelColorSettings,
} = wp.blockEditor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const { headingTitle, headingType, headingColor, lineColor, headingFontSize, headingClass, lineWidth, lineHeight } = this.props.attributes;

		return (
		<InspectorControls key="inspector">
			<PanelBody>
				<RangeControl
					label={ __( 'Heading Type ( H1, H2, H3, H4, H5, H6 )' ) }
					value={ headingType }
					onChange={ ( value ) => this.props.setAttributes( { headingType: value } ) }
					min={ 1 }
					max={ 6 }
					step={ 1 }
				/>
				<RangeControl
					label={ __( 'Font Size' ) }
					value={ headingFontSize }
					onChange={ ( value ) => this.props.setAttributes( { headingFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 1 }
				/>
				<ToggleControl
					label={ __( 'LSX Heading Class' ) }
					checked={ headingClass }
					onChange={ () => this.props.setAttributes( { headingClass: ! headingClass } ) }
				/>
				<PanelColorSettings
					title={ __( 'Heading Text Color' ) }
					initialOpen={ true }
					colorSettings={ [ {
						onChange: ( value ) => this.props.setAttributes( { headingColor: value } ),
						value: headingColor,
						label: __( 'Heading Text Color' ),
					} ] }
				>
				</PanelColorSettings>
				{ headingClass ?
					<PanelBody title={ __( 'Line Options' ) } initialOpen={ false }>
						<PanelColorSettings
							label={ __( 'Line Color' ) }
							initialOpen={ true }
							colorSettings={ [ {
								onChange: ( value ) => this.props.setAttributes( { lineColor: value } ),
								value: lineColor,
								label: __( 'Line Color' ),
							} ] }
						>
						</PanelColorSettings>
						<RangeControl
							label={ __( 'Line Width' ) }
							value={ lineWidth }
							onChange={ ( value ) => this.props.setAttributes( { lineWidth: value } ) }
							min={ 5 }
							max={ 100 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Line Heigth' ) }
							value={ lineHeight }
							onChange={ ( value ) => this.props.setAttributes( { lineHeight: value } ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>
					</PanelBody>
				: null }
			</PanelBody>
		</InspectorControls>
		);
	}
}
