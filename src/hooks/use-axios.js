import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
	const [response, setResponse] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	axios.defaults.baseURL = "https://api.unsplash.com";

	const fetchData = async (url) => {
		try {
			setIsLoading(true);
			const res = await axios.get(url, {
				params: {
					client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
				},
			});
			setResponse(res.data.results);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(param);
	}, [param]);

	return {
		response,
		isLoading,
		error,
		fetchData: (url) => fetchData(url),
		setResponse,
	};
};

export default useAxios;
