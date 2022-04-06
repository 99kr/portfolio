import Fade from "react-reveal/Fade";
import { Item } from ".";

const currentDate = new Date();

const DateElem = ({ date }: { date: Date }) => {
	const yearDiff = currentDate.getFullYear() - date.getFullYear();

	return (
		<span className="text-accent-light/30 font-light">
			— {yearDiff} {yearDiff == 1 ? "year" : "years"}
		</span>
	);
};

const CategoryItem = ({ name, date, items }: Item) => {
	return (
		<li className="text-lg text-accent-light/80 mb-1" key={name}>
			<span className="mr-1 gradient-text">◈</span> {name} {date && <DateElem date={date} />}
			{items && (
				<ul>
					{items.map((subItem) => (
						<li className="ml-12" key={subItem.name}>
							<span className="mr-1 gradient-text">◇</span> {subItem.name}{" "}
							{subItem.date && <DateElem date={subItem.date} />}
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default CategoryItem;
