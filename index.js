const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const https= require("https");
const contactmeRoute = require('./contactme');
require("dotenv").config();

const MONGO_URL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`;
console.log(MONGO_URL);
mongoose.connect(MONGO_URL, {
	useNewUrlParser: true
}, (err) => {
	if (!err) {
		console.log("Connected To the Server");
	}
});
const app = express();

app.use(bodyParser.json({extended:true}))
app.use(cors());
app.use(morgan("combined"));
app.use('/contactme',contactmeRoute);
app.get("/", (req, res) => {
	res.send("What");
});

/*const port = process.env.PRODUCTION || 8080;
app.listen(port, () => {
	console.log("Listenting");
});*/

https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
},app).listen(8080, () => { console.log("HTTPS server is running") });
