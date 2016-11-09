// ==============================
// THEME
// ==============================

const theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10,
	},
	zIndex: 2001,
};

// header
theme.header = {
	height: 40,
};
theme.close = {
	fill: 'white',
	height: 20,
	width: 20,
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em',
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5,
	},
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 80,
	gutter: 2,
};

// arrow
theme.arrow = {
	background: 'black',
	fill: 'white',
	height: 120,
};


module.exports = theme;
