import React, { Component } from 'react';

import './ProfileStatus.css';

export default class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div
						className='profile-status__status'
						onClick={this.activateEditMode}
					>
						{this.props.status}
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deactivateEditMode}
							className='profile-status__input'
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}
