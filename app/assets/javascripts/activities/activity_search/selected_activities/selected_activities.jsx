"use strict";
EC.SelectedActivities = React.createClass({
	propTypes: {
		selectedActivities: React.PropTypes.array.isRequired,
		toggleActivitySelection: React.PropTypes.func.isRequired
	},

	render: function () {
		var rows, buttonClassName;

		rows = _.map(this.props.selectedActivities, function (ele){
			return <EC.SelectedActivity toggleActivitySelection={this.props.toggleActivitySelection} data={ele} />
		}, this);

		return (
			<section className="teaching-cart">
				<h3 className="section-header unit_name">{this.props.unitName}</h3>
				<table className="table">
					<tbody>
						{rows}
					</tbody>
				</table>
			</section>
		);
	}
});