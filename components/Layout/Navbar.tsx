import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const routes = [
	{ name: "home", path: "/#home" },
	{ name: "about", path: "/#about" },
	{ name: "skills", path: "/#skills" },
];

const Navbar = () => {
	return (
		<nav className="fixed flex justify-center items-center w-full p-12 bg-zinc-900">
			<ul className="flex">
				{routes.map((route) => (
					<li key={route.name}>
						<Link href={route.path}>
							<a className={`text-2xl p-8 text-zinc-200 hover:text-zinc-50 transition-colors`}>
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
