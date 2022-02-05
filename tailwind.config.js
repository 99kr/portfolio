module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit", "sans-serif"],
				body: ["Roboto", "sans-serif"],
			},
			colors: {
				...palette("background", "rgb(17, 19, 23)", -10, 30),
				accent: "#A0C4D3",
				"accent-dark": "#41758B",
				"accent-light": "#BFCED9",
				"accent-lighter": "#DFE7EC",
			},
		},
	},
	plugins: [],
};

/* Thanks https://github.com/frostylucas */

function palette(name, color, lowest, highest, steps, reversed) {
	const map = {};

	map[name] = colors(color, 0, highest, steps, reversed);

	if (lowest < 0) {
		map[`-${name}`] = colors(color, lowest, 0, steps, reversed);
	}

	return map;
}

function colors(color, lowest, highest, steps = 1, reversed = false) {
	const map = {};

	map.DEFAULT = color;

	for (let index = lowest; index < highest + 1; index += steps) {
		if (index === 0) continue;

		const key = (highest <= 0 ? Math.abs(index) : index).toString();

		map[key] = !reversed ? lighten(color, index) : darken(color, index);
	}

	return map;
}

function useFilter(color, ...mods) {
	const colors = color
		.substring(color.indexOf("(") + 1, color.lastIndexOf(")"))
		.replace(/ /i, "")
		.split(",");

	for (let index = 0; index < colors.length; index++) {
		colors[index] = (parseInt(colors[index]) + mods[index] ?? 0).toString();
	}

	return `rgb${colors.length == 4 ? "a" : ""}(${colors.join(", ")})`;
}

function lighten(color, amount) {
	return useFilter(color, amount, amount, amount);
}

function darken(color, amount) {
	return useFilter(color, -amount, -amount, -amount);
}
