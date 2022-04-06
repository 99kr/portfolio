import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const routes = [
	{ name: "Home", path: "/#home" },
	{ name: "About", path: "/#about" },
	{ name: "Skills", path: "/#skills" },
	{ name: "Work", path: "/#work" },
];

const MIN_SCROLL = 72;

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const scrollRef = useRef(scrolled);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = (e: Event) => {
		const hasScrolled = window.scrollY > MIN_SCROLL;

		if (hasScrolled === scrollRef.current) return;

		scrollRef.current = hasScrolled;
		setScrolled(hasScrolled);
	};

	return useMemo(
		() => (
			<header className="fixed w-full flex justify-center md:pt-12 pt-0 z-20">
				<Fade>
					<nav
						className={`justify-center items-center w-full md:w-auto p-3 px-12 rounded-lg transition-all duration-300 ${
							scrolled ? "bg-black/10 backdrop-blur-md hover:bg-black/20" : ""
						}`}
					>
						<Slide top cascade>
							<ul className="flex justify-center">
								{routes.map((route) => (
									<li key={route.name}>
										<Link href={route.path}>
											<a
												className={`text-lg p-6 text-white text-opacity-60 hover:text-opacity-100 transition-colors text-shadow-sm`}
											>
												{route.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</Slide>
					</nav>
				</Fade>
			</header>
		),
		[scrolled]
	);
};

export default Navbar;
