const { append } = require("express/lib/response");
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get('/celebrities/create', (req, res, next) => {

    Celebrity.create()
             .then((celebrity) => {
                 res.render('celebrities/new-celebrity', {celebrity})
             })
             .catch(error => next (error));
});

module.exports = router;