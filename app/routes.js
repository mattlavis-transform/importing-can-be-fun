const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get(['/type-of-trade'], function (req, res) {
    res.render('01-type-of-trade');
});

router.get(['/date'], function (req, res) {
    res.render('02-date');
});

router.get(['/date'], function (req, res) {
    res.render('02-date');
});

router.get(['/destination'], function (req, res) {
    res.render('03-destination');
});

router.post('/origin', function (req, res) {
    var destination = req.session.data["destination"];
    //console.log(req.session.data["destination"]);
    if (destination == "GB") {
        res.render('04-origin-to-gb');
    } else {
        res.render('04-origin-to-ni');
    }
});

router.post('/05-origin-handler', function (req, res) {
    var referer;
    referer = req.headers.referer;

    var destination = req.session.data["destination"];
    var origin = req.session.data["origin"];
    if (destination == "XI") {
        if (origin == "GB") {
            res.render('06-message-gb-to-ni');
        } else if (origin == "EU") {
            res.render('06-message-eu-to-ni');
        }
    } else {
        res.render('/');
    }
});

module.exports = router
