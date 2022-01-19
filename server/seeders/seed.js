const db = require('../config/connection');
const { Item, User, Order, Option, Ticket } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
// const orderSeeds = require('./orderSeeds.json');
const optionSeeds = require('./optionSeeds.json');
// const ticketSeeds = require('./ticketSeeds.json');

db.once('open', async () => {
	try {
		// clean databse
		await User.deleteMany({});
		await Item.deleteMany({});
		await Order.deleteMany({});
		await Option.deleteMany({});
		await Ticket.deleteMany({});

		// bulk create
		const users = await User.insertMany(userSeeds);
		const items = await Item.insertMany(itemSeeds);
		// const orders = await Order.insertMany(orderSeeds);
		const options = await Option.insertMany(optionSeeds);
		// const tickets = await Ticket.insertMany(ticketSeeds);

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

		//assign orders to ticket seed
		// for (newOrder of orders) {
		// 	const tempTicket = tickets[0];
		// 	tempTicket.orders.push(newOrder);

		// 	console.log(tempTicket);

		// 	await tempTicket.save();
		// }

		console.log('Seeding done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
