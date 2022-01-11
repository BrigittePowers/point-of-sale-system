const food = [
	{
		name: 'Hamburger',
		acronym: 'HB',
		defaults: ['Mayo', 'Mustard', 'Lettuce', 'Tomato', 'Onion', 'Pickle'],
		modifiers: [
			{ name: 'Mayo', price:''},
			{ name: 'Mustard', price:''},
			{ name: 'Avocado', price: 0.99 },
		],
		price: 8.75,
	},
	{
		name: 'Cheeseburger',
		acronym: 'CB',
		defaults: ['Mayo', 'Mustard', 'Lettuce', 'Tomato', 'Onion', 'Pickle'],
		modifiers: [
			{ name: 'Mayo' },
			{ name: 'Mustard' },
			{ name: 'Avocado', price: 0.99 },
		],
		price: 9.75,
	},
];

export default food;