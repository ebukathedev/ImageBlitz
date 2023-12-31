const Skeleton = ({ items }) => {
	return [...Array(items).keys()].map((index) => (
		<div className="animate-pulse" key={index}>
			<div className="bg-gray-300 h-72 rounded-lg"></div>
		</div>
	));
};

export default Skeleton;
