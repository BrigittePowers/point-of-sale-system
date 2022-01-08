const db = require('../config/connection');
const { Menu, Cashier } = require('../models');
const cashierSeeds = require('./cashierSeeds.json');
const menuSeeds = require('./menuSeeds.json');

db.once('open', async () => {
	try {
		// await Profile.deleteMany({});
		// await Profile.create(profileSeeds);
		await Cashier.deleteMany({});
		await Cashier.create(cashierSeeds);
		await Menu.deleteMany({});
		await Menu.create(menuSeeds);

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
