import React, { useEffect, useState } from 'react';

import './ProfileStatus.css';

const ProfileStatusWithHooks = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);


	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode &&
				<div className='profile-status__status' onClick={activateEditMode}>
					{status}
				</div>}
			{editMode &&
				<div >
					<input
						onChange={onStatusChange}
						autoFocus
						onBlur={deactivateEditMode}
						className='profile-status__input'
						value={status} />
				</div>}
		</div>
	);
};


export default ProfileStatusWithHooks;