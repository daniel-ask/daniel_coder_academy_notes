import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';

export default function ProtectedRoute({ component: Comp, path, ...rest }) {
	const [auth] = useContext(AuthenticationContext);
	const {loggedIn} = auth;
	return (
		<Route path={path} {...rest} render={(props) => {
			return loggedIn ? <Comp {...props} /> : <Redirect to="/login" />;
		}}/>
	)
}

