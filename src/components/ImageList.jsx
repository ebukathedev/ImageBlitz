import { useContext } from "react";
import { ImageContext } from "../context/ImageProvider";
import Image from "./Image";
import Skeleton from "./Skeleton";

const ImageList = () => {
	const { response, isLoading, searchImage } = useContext(ImageContext);

	return (
		<section className="px-4 md:px-8 xl:px-12 mt-12">
			<div className="space-y-3 text-center mb-8 lg:space-y-5">
				<h2 className="text-2xl text-primary-900 font-bold tracking-widest md:text-4xl lg:text-5xl">
					Gallery
				</h2>
				<p className="underline">
					Search results for{" "}
					<span className="capitalize">{searchImage || "beach"}</span>
				</p>
			</div>
			<div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{isLoading ? (
					<Skeleton items={response.length} />
				) : (
					response.map((data) => <Image key={data.id} data={data} />)
				)}
			</div>
		</section>
	);
};

export default ImageList;
