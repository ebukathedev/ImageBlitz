import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../components/Logo";
import { auth } from "../../firebase";

const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) {
					toast.success("Sign up successful", {
						autoClose: 400,
						theme: "colored",
					});
					setTimeout(() => {
						navigate("/");
					}, 1500);
				}
			})
			.catch((error) => {
				toast.error(error.message, { theme: "colored" });
			});

		setEmail("");
		setPassword("");
	};

	return (
		<section className="flex flex-col px-4 pt-6 md:px-8 xl:px-12">
			<div className="flex justify-center">
				<Logo />
			</div>
			<div className="px-4 py-8 mt-10 space-y-10 bg-white rounded-lg shadow-xl max-w-lg mx-auto w-full sm:space-y-12 md:space-y-16">
				<h2 className="text-2xl font-bold text-center">
					Create an account
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col mb-5 space-y-1 sm:space-y-2">
						<label className="font-medium" htmlFor="email">
							Email
						</label>
						<div className="input-parent">
							<input
								className="focus:outline-none input w-full"
								type="email"
								id="email"
								value={email}
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<div className="text-lightBlue-300">
								<MdOutlineAlternateEmail size={22} />
							</div>
						</div>
					</div>
					<div className="flex flex-col mb-8 space-y-1 sm:space-y-2">
						<label className="font-medium" htmlFor="password">
							Password
						</label>
						<div className="input-parent">
							<input
								className="focus:outline-none input w-full"
								type={isPasswordVisible ? "text" : "password"}
								id="password"
								value={password}
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<div
								className="text-lightBlue-300"
								onClick={() =>
									setIsPasswordVisible(!isPasswordVisible)
								}
							>
								{isPasswordVisible ? (
									<BsEyeFill size={22} />
								) : (
									<BsFillEyeSlashFill size={22} />
								)}
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="w-full py-2 rounded-md transition-normal btn-primary font-medium"
					>
						Sign up
					</button>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
