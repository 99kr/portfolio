import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
	{ name: "home", path: "/" },
	{ name: "work", path: "/work" },
	{ name: "contact", path: "/contact" },
];

const Navbar = () => {
	const router = useRouter();

	return (
		<nav className="absolute w-full flex justify-center mt-16">
			<ul className="flex">
				{routes.map((route) => (
					<li key={route.name}>
						<Link href={route.path}>
							<a
								className={`text-2xl p-8 font-storytime ${
									router.pathname === route.path ? "text-red-500" : "text-zinc-200 hover:text-zinc-50"
								} transition-colors`}
							>
								{route.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
