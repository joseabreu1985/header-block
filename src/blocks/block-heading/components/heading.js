/**
 * Heading Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a Heading wrapper Component
 */
export default class Heading extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const { headingTitle, headingAlignment } = this.props.attributes;

		return (
			<div
				style={ {

				} }
				className={ classnames(
					this.props.className,
					headingAlignment,
					'lsx-block-heading',
				) }
			>
				{ this.props.children }
			</div>
		);
	}
}
