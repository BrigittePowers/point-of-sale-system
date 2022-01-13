const db = require('../config/connection');
const { Item, Cashier, Order, Option } = require('../models');
const cashierSeeds = require('./cashierSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const optionSeeds = require('./optionSeeds.json');

db.once('open', async () => {
	try {
		// clean databse
		await Cashier.deleteMany({});
		await Item.deleteMany({});
		await Order.deleteMany({});
		await Option.deleteMany({});

		// bulk create
		// const cashiers = await Cashier.insertMany(cashierSeeds);
		const items = await Item.insertMany(itemSeeds);
		// const orders = await Order.insertMany(orderSeeds);
		// const category = await Category.insertMany(categorySeeds);
		const options = await Option.insertMany(optionSeeds);

		console.log(items[0]);
		console.log(options[0]);

		// assign option categories to item types
		for (newOption of options) {
			for (x = 0; x < items.length; x++) {
				if (items[x].type === newOption.category) {
					console.log(
						'Matching: ' + items[x].name + ' to ' + newOption.name,
					);

					const tempItem = items[x];

					tempItem.options.push(newOption);

					await tempItem.save();
				}
			}
		}

		// // assign orders randomly to     cashiers
		// for (newOrder of orders) {
		// 	// grab a random cashier
		// 	const tempCashier =
		// 		cashiers[Math.floor(Math.random() * cashiers.length)];

		// 	// add an order to its orders array
		// 	tempCashier.orders.push(newOrder._id);

		// 	//make sure it saves to db before continue
		// 	await tempCashier.save();
		// }

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
