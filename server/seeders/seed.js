const db = require('../config/connection');
const { Item, Cashier, Order } = require('../models');
const cashierSeeds = require('./cashierSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const orderSeeds = require('./orderSeeds.json');

db.once('open', async () => {
	try {
		// clean databse
		await Cashier.deleteMany({});
		await Item.deleteMany({});
		await Order.deleteMany({});

		// bulk create
		const cashiers = await Cashier.insertMany(cashierSeeds);
		const items = await Item.insertMany(itemSeeds);
		const orders = await Order.insertMany(orderSeeds);

		// assign orders randomly to cashiers
		for (newOrder of orders) {
			// grab a random cashier
			const tempCashier =
				cashiers[Math.floor(Math.random() * cashiers.length)];

			// add an order to its orders array
			tempCashier.orders.push(newOrder._id);

			//make sure it saves to db before continue
			await tempCashier.save();
		}

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
