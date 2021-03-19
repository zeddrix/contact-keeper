const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const colors = require('colors');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log('MongoDB Connected...'.green.bgWhite);
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
