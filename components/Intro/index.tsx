import ArrowDown from "../../public/illustrations/arrow-down.svg";

const Intro = () => {
	return (
		<section className="flex justify-center items-center h-screen">
			<h1 className="absolute font-beauty text-[20rem] text-zinc-600 opacity-5 select-none">99KR</h1>

			<div className="flex flex-col text-zinc-200">
				<p className="font-storytime text-2xl">
					my name is <ArrowDown className="stroke-current stroke-2 inline" />
				</p>
				<h1 className="font-beauty text-8xl">
					“<span className="font-roboto font-black text-red-500">99kr</span>”
				</h1>
				<p className="font-storytime text-2xl self-end -m-3">web developer</p>
			</div>
		</section>
	);
};

export default Intro;
