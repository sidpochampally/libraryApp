var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        bookId: 656
    },
    {
        title: 'The Time Machine',
        author: 'H.G.Wells',
        bookId: 2493
    },
    {
        title: 'Les Miserable',
        author: 'Victor Hugo',
        bookId: 24280
    },
    {
        title: 'Journey to the Center of the Earth',
        author: 'Jules Verne',
        bookId: 32829
    },
    {
        title: 'The Dark World',
        author: 'Henry Kuttner',
        bookId: 1881716
    },
    {
        title: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        bookId: 5659
    }
];

var router = function(nav) {
    adminRouter.route('/addBooks')
    .get(function(req, res) {
        var url = 
            'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function(err, db){
            var collection = db.collection('books');
            collection.insertMany(books, 
                function(err, results){
                    res.send(results);
                    db.close();
            });
        });
        //res.send('adding books');
    });

    return adminRouter;

};

module.exports = router;