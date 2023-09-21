const Navbar = ({ children }) => {
	return (
		<header className="relative  bg-white z-10 px-4 py-4 md:px-8 lg:py-6 xl:px-12">
			<div className="container mx-auto grid grid-cols-2 grid-rows-2 gap-y-4 md:gap-y-6 lg:flex lg:items-center lg:justify-between">
				{children}
			</div>
		</header>
	);
};

export default Navbar;
