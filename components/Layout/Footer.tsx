import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
	return (
		<Fade>
			<footer className="border-t border-accent-light/5 py-8 mx-16 flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-0">
				<Fade left delay={250}>
					<div className="w-full sm:w-1/3 text-center sm:text-left">
						<h1 className="text-accent-light/75 font-normal">
							© {new Date().getFullYear()} 99kr
						</h1>
					</div>
				</Fade>

				<div className="w-full sm:w-1/3 flex items-center justify-center gap-2 text-background-30/75">
					<Fade delay={500} bottom>
						<SocialMedia
							brand="Discord"
							title="99kr#0099"
							href="https://www.discordapp.com/users/239042383273000960"
						/>
					</Fade>

					<Fade delay={1500}>
						<p>—</p>
					</Fade>

					<Fade delay={600} bottom>
						<SocialMedia
							brand="GitHub"
							title="99kr"
							href="https://www.github.com/99kr"
						/>
					</Fade>

					<Fade delay={1500}>
						<p>—</p>
					</Fade>

					<Fade delay={790} bottom>
						<SocialMedia
							brand="Twitch"
							title="99kr"
							href="https://www.twitch.tv/99kr"
						/>
					</Fade>
				</div>

				<Fade delay={500} right>
					<div className="w-full sm:w-1/3 text-center sm:text-right">
						<p className="text-accent-light/40 font-light">
							This is the alpha version, more coming soon...
						</p>
					</div>
				</Fade>
			</footer>
		</Fade>
	);
};

export default Footer;
