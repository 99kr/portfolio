import JuggleBlob from "@illustrations/juggle-blob.svg";
import Underline from "@illustrations/underline.svg";

const Skills = () => {
	return (
		<section className="gap-10">
			<JuggleBlob />
			<div>
				<div className="relative mb-1 -z-10">
					<h1 className="font-storytime text-red-500 text-7xl">my skills</h1>
					<Underline />
				</div>
				<p className="w-[32rem]"></p>
			</div>
		</section>
	);
};

export default Skills;
