import Chevrons from "public/chevrons.svg";

interface SectionProps {
	name: string;
	className?: string;
	children?: JSX.Element | JSX.Element[];
	omitTitle?: boolean;
}

const Section = ({ name, className, children, omitTitle }: SectionProps) => {
	return (
		<section
			id={name}
			className={`min-h-screen flex items-center mb-16 ${omitTitle ? "justify-center" : ""} ${
				omitTitle && (className ?? "")
			}`}
		>
			<div
				className={`${
					omitTitle ? "w-full items-center" : "2xl:mx-72 xl:mx-48 mx-16  w-full"
				} h-full flex flex-col justify-center z-10`}
			>
				{!omitTitle && (
					<>
						<h1 className="gradient-text capitalize text-5xl font-medium mb-2">{name}</h1>
						<hr className="w-6 mb-4 border-accent-light/10" />
					</>
				)}
				{!omitTitle ? <div className={`${className ?? ""} flex flex-col`}>{children}</div> : children}
			</div>

			{!omitTitle && (
				<div className="invisible 2xl:px-36 px-12 xl:visible absolute w-full h-full flex justify-between items-center z-0">
					<h1 className="text-7xl uppercase font-bold text-outline">{name}</h1>
					<Chevrons />
				</div>
			)}
		</section>
	);
};

export default Section;
