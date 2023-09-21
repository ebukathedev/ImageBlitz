import { createContext } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children, value }) => {
	return (
		<ImageContext.Provider value={value}>{children}</ImageContext.Provider>
	);
};

export default ImageProvider;
