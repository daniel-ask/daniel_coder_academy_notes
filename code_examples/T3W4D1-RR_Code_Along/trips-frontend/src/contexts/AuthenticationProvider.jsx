import React, {useState} from 'react'

export const AuthenticationContext = React.createContext()

export default function AuthenticationProvider({ children }) {
	const [username, setUsername] = useState("")
	const [profilePic, setProfilePic] = useState("");


	return (
		<AuthenticationContext.Provider value={[username, setUsername, profilePic, setProfilePic]}>
			{children}	
		</AuthenticationContext.Provider>
	)
}
