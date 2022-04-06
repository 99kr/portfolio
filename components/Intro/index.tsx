import Section from "@components/Section";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Intro = () => {
	return (
		<Section name="home" className="bg-cover bg-center bg-[url('/bg.jpg')]" omitTitle>
			<div className="absolute w-full h-full bg-gradient-to-t from-background-1 text-background/40 to-currentn"></div>

			<Zoom>
				<div className="flex flex-col text-accent-light z-10">
					<Fade left delay={500}>
						<p className="text-2xl text-shadow-sm">I am</p>
					</Fade>
					<h1 className="text-9xl font-bold gradient-text">99kr</h1>
					<Fade right delay={1125}>
						<p className="text-2xl self-end -mt-3 text-shadow-sm">Web Developer</p>
					</Fade>
				</div>
			</Zoom>
		</Section>
	);
};

export default Intro;
