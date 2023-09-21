import { useNavigate } from "react-router-dom";
import { useAuthUpdate } from "../context/AuthDetailsProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const NavLinks = () => {
	const navigate = useNavigate();
	const toggleIsLoggedIn = useAuthUpdate();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				toggleIsLoggedIn(false);
				toast.success("Sign out successful", {
					autoClose: 400,
					theme: "colored",
				});
				setTimeout(() => {
					navigate("/");
				}, 1500);
			})
			.catch((error) => toast.error(error, { theme: "colored" }));
	};

	const handleLogOut = () => {
		userSignOut();
	};

	return (
		<div className="text-sm font-medium sm:text-base  flex items-center justify-end lg:order-3">
			<button
				onClick={handleLogOut}
				className="hover:text-primary transition-normal py-2 px-4 md:px-6 md:bg-primary md:shadow-primary md:text-white rounded-3xl md:hover:bg-white"
			>
				Log out
			</button>
		</div>
	);
};

export default NavLinks;
