import { BsLightningChargeFill } from "react-icons/bs";

const Logo = () => {
	return (
		<h1 className="text-xl font-bold flex items-center tracking-wider gap-1 sm:text-2xl lg:text-3xl">
			<span>Image</span>
			<BsLightningChargeFill className="rotate-12 text-primary" />
			<span className="flex">Blitz</span>
		</h1>
	);
};

export default Logo;
