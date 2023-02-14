const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const crime = require('./data/crime');
const classic = require('./data/classic');
const history = require('./data/history');
const horror = require('./data/horror');
const lifeStyle = require('./data/lifestyle');
const biographies = require('./data/biographies');
const fantacy = require('./data/fantacy');
const romantic = require('./data/romantic');
const miscellaneous = require('./data/data');
const { json, request } = require('express');
const romanticBooks = require('./data/romantic');
const e = require('express');

const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/BookskartDB', function () {
    console.log("connected to database");
})

var bookSchema = new mongoose.Schema({
    book: Object,
})

var orderSchema = new mongoose.Schema({
    userId: String,
    items: Array,
    status: {
        type: String,
        default: "Completed"
    }
});

bookSchema.index({ '$**': 'text' });

var Book = new mongoose.model('book', bookSchema);


var Orders = new mongoose.model('order', orderSchema);

app.get("/books", function (req, res) {
    let requestedGenre = req.query.genere;
    if (requestedGenre === "home") {
        let products = JSON.stringify(miscellaneous);
        res.status(200).send(products);
    } else if (requestedGenre === "classic") {
        let products = JSON.stringify(classic);
        res.status(200).send(products);
    } else if (requestedGenre === "crime") {
        let products = JSON.stringify(crime);
        res.status(200).send(products);
    } else if (requestedGenre === "romance") {
        let products = JSON.stringify(romanticBooks);
        res.status(200).send(products);
    } else if (requestedGenre === "fantacy") {
        let products = JSON.stringify(fantacy);
        res.status(200).send(products);
    } else if (requestedGenre === "history") {
        let products = JSON.stringify(history);
        res.status(200).send(products);
    } else if (requestedGenre === "horror") {
        let products = JSON.stringify(horror);
        res.status(200).send(products);
    } else if (requestedGenre === "biographies") {
        let products = JSON.stringify(biographies);
        res.status(200).send(products);
    };
});


app.get("/orders/:userName", function (req, res) {
    try {
        const userName = req.params.userName;
        Orders.find({ userId: userName }, function (err, result) {
            if (err) {
                console.log("Error getting order", err);
            } else {
                console.log("result", result);
                res.send(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/search", function (req, res) {
    try {
        let searchItem = req.query.item;
        console.log(searchItem);
        Book.find({ $text: { $search: searchItem } }).exec(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                    res.status(200).send(result);
            }
        })
    } catch (error) {
        console.log("Error fetching data")
    }
})


app.post("/orders", function (req, res) {
    try {
        const findUser = req.body.userId;
        console.log(findUser);
        Orders.find({ userId: findUser }, function (err, doc) {
            if (doc.length !== 0) {
                let prevArr = doc[0].items;
                let updatedArr = [...prevArr, ...req.body.order];
                Orders.updateOne({ userId: findUser }, { $set: { items: updatedArr } }, function (err, success) {
                    if (!err) {
                        res.send("Items saved");
                    } else {
                        res.send("Error updating order");
                    }
                })
            } else {
                const order = new Orders({
                    userId: req.body.userId,
                    items: req.body.order,
                });
                order.save();
                res.status(200).send("Data recieved");
            }
        });
    } catch (error) {
        console.log("Error saving order", error);
        res.status(400).send("Error saving order");
    }
});

app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);
    Book.find({}, function (err, result) {
        if (result.length === 0) {
            for (let i = 0; i < biographies.length; i++) {
                let book = new Book({
                    book: biographies[i],
                })
                book.save();
            }
            for (let i = 0; i < classic.length; i++) {
                let book = new Book({
                    book: classic[i],
                })
                book.save();
            }
            for (let i = 0; i < fantacy.length; i++) {
                let book = new Book({
                    book: fantacy[i],
                })
                book.save();
            }
            for (let i = 0; i < history.length; i++) {
                let book = new Book({
                    book: history[i],
                })
                book.save();
            }
            for (let i = 0; i < horror.length; i++) {
                let book = new Book({
                    book: horror[i],
                })
                book.save();
            }
            for (let i = 0; i < lifeStyle.length; i++) {
                let book = new Book({
                    book: lifeStyle[i],
                })
                book.save();
            }
            for (let i = 0; i < romanticBooks.length; i++) {
                let book = new Book({
                    book: romanticBooks[i],
                })
                book.save();
            }
            for (let i = 0; i < crime.length; i++) {
                let book = new Book({
                    book: crime[i],
                })
                book.save();
            }
            for (let i = 0; i < miscellaneous.length; i++) {
                let book = new Book({
                    book: miscellaneous[i],
                })
                book.save();
            }
        }
    })
});