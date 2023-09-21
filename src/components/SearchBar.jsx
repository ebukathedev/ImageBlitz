import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImageContext } from "../context/ImageProvider";

const SearchBar = () => {
	const [searchKey, setSearchKey] = useState("");
	const { fetchData, setSearchImage } = useContext(ImageContext);

	const handleSearch = (e) => {
		e.preventDefault();
		fetchData(`search/photos?page=1&query=${searchKey}`);
		setSearchImage(searchKey);
		setSearchKey("");
	};

	return (
		<form
			onSubmit={handleSearch}
			className="flex justify-between text-black col-span-2 lg:flex-1 lg:max-w-[525px]"
		>
			<input
				type="search"
				placeholder="Find an image"
				className="flex-1 w-10/12 px-3 py-1 bg-transparent border-2 border-r-0 rounded-l-lg placeholder:text-lightBlue-300 focus:outline-none md:px-4"
				onChange={(e) => setSearchKey(e.target.value)}
				value={searchKey}
			/>
			<button
				type="submit"
				disabled={!searchKey}
				className="px-4 py-1 text-white focus:outline-none bg-primary rounded-r-md hover:bg-primary-900 transition-normal disabled:bg-gray-400"
			>
				<FaSearch size={16} />
			</button>
		</form>
	);
};

export default SearchBar;
