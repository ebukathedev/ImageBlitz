import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ImageProvider from "./context/ImageProvider";
import useAxios from "./hooks/use-axios";
import Gallery from "./pages/Gallery";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthDetailsProvider from "./context/AuthDetailsProvider";

let router = createBrowserRouter([
	{
		path: "/gallery",
		element: <Gallery />,
	},
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);

const App = () => {
	const [searchImage, setSearchImage] = useState("");
	const { response, isLoading, error, fetchData, setResponse } = useAxios(
		`search/photos?page=1&query=beach`
	);

	const value = {
		response,
		isLoading,
		error,
		fetchData,
		setResponse,
		searchImage,
		setSearchImage,
	};

	console.log(response);
	return (
		<AuthDetailsProvider>
			<ImageProvider value={value}>
				<main className="font-poppins bg-lightBlue-100 min-h-screen w-screen text-secondary pb-20">
					<ToastContainer autoClose={1000} />
					<RouterProvider router={router} />
				</main>
			</ImageProvider>
		</AuthDetailsProvider>
	);
};

export default App;
