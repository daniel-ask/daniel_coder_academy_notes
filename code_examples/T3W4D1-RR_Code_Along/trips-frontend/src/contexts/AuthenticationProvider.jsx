import React, {useState} from 'react'

export const AuthenticationContext = React.createContext()

export default function AuthenticationProvider({ children }) {
	const [username, setUsername] = useState("")


	return (
		<AuthenticationContext.Provider value={[username, setUsername]}>
			{children}	
		</AuthenticationContext.Provider>
	)
}
