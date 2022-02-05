import Section from "@components/Section";
import Category from "./Category";

interface Item {
	name: string;
	date?: Date;
	items?: Item[];
}

export interface ICategory {
	name: string;
	items: Item[];
}

const skills: ICategory[] = [
	{
		name: "Languages",
		items: [
			{ name: "Lua", date: new Date(2018, 6) },
			{ name: "HTML / CSS", date: new Date(2019, 1) },
			{ name: "JavaScript", date: new Date(2019, 1), items: [{ name: "TypeScript", date: new Date(2019, 12) }] },
			{ name: "SQL" },
		],
	},
	{
		name: "Frameworks / Libraries",
		items: [
			{
				name: "React.js",
				date: new Date(2019, 12),
				items: [
					{ name: "Next.js" },
					{ name: "styled-components" },
					{ name: "Material-UI" },
					{ name: "Framer Motion" },
					{ name: "PulseJS" },
					{ name: "React Redux" },
					{ name: "React Router" },
				],
			},
			{ name: "TailwindCSS", date: new Date(2021, 1) },
			{ name: "Electron.js" },
		],
	},
	{
		name: "Tools",
		items: [
			{ name: "Figma" },
			{ name: "Photoshop", date: new Date(2014, 1) },
			{ name: "Git(Hub)" },
			{ name: "Yarn / NPM" },
		],
	},
	{
		name: "Engines",
		items: [{ name: "Node.js" }],
	},
];

const Skills = () => {
	return (
		<Section name="skills">
			<div className="flex flex-wrap gap-24">
				{skills.map((category) => (
					<Category {...category} />
				))}
			</div>
		</Section>
	);
};

export default Skills;
