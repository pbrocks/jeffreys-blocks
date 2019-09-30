/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { PanelBody, SelectControl, RangeControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: { body, imageAlt, imageUrl },
			setAttributes
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody>
					<MediaUpload
						onSelect={media => {
							setAttributes({
								imageAlt: media.alt,
								imageUrl: media.url
							});
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButton(open)}
					/>
				</PanelBody>
				<PanelBody>
					<RichText
						onChange={content => setAttributes({ body: content })}
						value={attributes.body}
						multiline="p"
						placeholder="Your FFS card text"
						formattingControls={["bold", "italic", "underline"]}
						isSelected={attributes.isSelected}
					/>
				</PanelBody>

				<PanelBody>
					<PlainText
						onChange={content => setAttributes({ title: content })}
						value={attributes.title}
						placeholder="Your card title"
						className="heading"
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}