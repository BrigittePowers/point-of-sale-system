const db = require('../config/connection');
const { Item, User, Order, Option } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const optionSeeds = require('./optionSeeds.json');

db.once('open', async () => {
	try {
		// clean databse
		await User.deleteMany({});
		await Item.deleteMany({});
		await Order.deleteMany({});
		await Option.deleteMany({});

		// bulk create
		const users = await User.insertMany(userSeeds);
		const items = await Item.insertMany(itemSeeds);
		const orders = await Order.insertMany(orderSeeds);
		const options = await Option.insertMany(optionSeeds);

		// assign option categories to item types
		for (newOption of options) {
			for (x = 0; x < items.length; x++) {
				if (newOption.category.indexOf(items[x].type) !== -1) {
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

		console.log('Seeding done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
