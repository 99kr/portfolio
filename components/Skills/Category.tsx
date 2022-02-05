import { ICategory } from ".";

const currentDate = new Date();

const DateElem = ({ date }: { date: Date }) => {
	const yearDiff = currentDate.getFullYear() - date.getFullYear();

	return (
		<span className="text-accent-light/30 font-light">
			— {yearDiff} {yearDiff == 1 ? "year" : "years"}
		</span>
	);
};

const Category = ({ name, items }: ICategory) => {
	return (
		<div>
			<h1 className="text-2xl text-accent-light mb-1 font-medium">{name}</h1>
			<ul>
				{items.map((item) => (
					<li className="text-lg text-accent-light/80 mb-1">
						<span className="mr-1 gradient-text">◈</span> {item.name}{" "}
						{item.date && <DateElem date={item.date} />}
						{item.items && (
							<ul>
								{item.items.map((subItem) => (
									<li className="ml-12">
										<span className="mr-1 gradient-text">◇</span> {subItem.name}{" "}
										{subItem.date && <DateElem date={subItem.date} />}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
