import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import { createContext } from "react";

const AuthContext = createContext();
const AuthContextUpdate = createContext();

export const useAuth = () => useContext(AuthContext);
export const useAuthUpdate = () => useContext(AuthContextUpdate);

const AuthDetailsProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const toggleIsLoggedIn = (boolean) => setIsLoggedIn(boolean);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
				setIsLoggedIn(true);
			} else {
				setAuthUser(null);
				setIsLoggedIn(false);
			}
		});
		return () => {
			listen();
		};
	}, []);

	return (
		<AuthContext.Provider value={isLoggedIn}>
			<AuthContextUpdate.Provider value={toggleIsLoggedIn}>
				{children}
			</AuthContextUpdate.Provider>
		</AuthContext.Provider>
	);
};

export default AuthDetailsProvider;
