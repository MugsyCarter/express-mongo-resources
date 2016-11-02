const bodyParser = require('body-parser').json();
const express = require('express');
const router = express.Router();
const Tree = require('../model/tree');

router
//trees
    .get('/', function (req, res, next) {
        const query = {};
        Tree.find(query)
            .then(trees => res.send(trees ))
            .catch(next);
    })
  
//gymno
    .get('/gymnosperms', function (req, res, next) {
        Tree.find({type: 'gymnosperm'}, function (err, trees) {
            if (err) return console.error(err);
            res.send(trees)
            .catch(next);
        });
    })

//angio
    .get('/angiosperms', function (req, res, next) {
        Tree.find({type: 'angiosperm'}, function (err, trees) {
            if (err) return console.error(err);
            res.send(trees)
            .catch(next);
        });
    })

//allows users to add trees to the db
    .post('/', bodyParser, function(req, res){
        console.log('post sent. req.body is ', req.body);
        new Tree(req.body).save()
        .then (saved => res.send(saved ));
        // .catch(next);
        //TODO build logic to sort and add the trees.
    })

//allows users to delete the list of trees 
    .delete('/trees', function (req, res) {
        // res.send('The list of coutries has been nuked, only an irradiated wasteland remains.  You monster.');
        // var nuked = [{country: "The Wasteland", capital: "Mutant City"}];
        // var nukedJson = JSON.stringify(nuked);
        // sander.writeFile('./capitals', 'countryData.json', nukedJson);
        //TODO build logic to delete trees
    });

module.exports = router;



