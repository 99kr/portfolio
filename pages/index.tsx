import React from "react";
import About from "@components/About";
import Intro from "@components/Intro";
import Skills from "@components/Skills";
import Work from "@components/Work";

const Home = () => {
	return (
		<>
			<Intro />
			<About />
			<Skills />
			<Work />
		</>
	);
};

export default Home;
