import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<JSONPretty id='json-pretty' data={user}></JSONPretty>
				{/* <pre>{JSON.stringify(user)}</pre> */}
			</div>
		)
	);
};

export default Profile;
