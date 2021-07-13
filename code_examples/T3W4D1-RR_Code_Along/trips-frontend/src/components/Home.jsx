import React, {useContext} from 'react'
import { AuthenticationContext } from "../contexts/AuthenticationProvider";

export default function Home() {
	const [username, setUsername, profilePic] = useContext(AuthenticationContext)
	return (
		<div>
			HOME
			<img src={profilePic} alt="" />
		</div>
	)
}
