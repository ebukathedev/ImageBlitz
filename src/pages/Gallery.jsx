import ImageList from "../components/ImageList";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Gallery = () => {
	return (
		<>
			<Navbar>
				<Logo />
				<NavLinks />
				<SearchBar />
			</Navbar>
			<ImageList />
		</>
	);
};

export default Gallery;
