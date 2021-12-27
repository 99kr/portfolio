import WaveBlob from "@illustrations/wave-blob.svg";
import Underline from "@illustrations/underline.svg";

const About = () => {
	return (
		<section className="gap-10">
			<WaveBlob />
			<div>
				<div className="relative mb-1 -z-10">
					<h1 className="font-storytime text-red-500 text-7xl">about me</h1>
					<Underline />
				</div>
				<p className="w-[32rem]">
					My name is Sebastian, better known by the nickname 99kr. BLA BLA massa bullshit BLA BLA massa
					bullshit BLA BLA massa bullshitBLA BLA massa bullshit BLA BLA massa bullshitBLA BLA massa bullshit
					BLA BLA massa bullshitBLA BLA massa BLA BLA massa bullshit BLA BLA massa bullshit BLA BLA massa
					bullshit BLA BLA massa bullshitBLA BLA massa bullshit
				</p>
			</div>
		</section>
	);
};

export default About;
