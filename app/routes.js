const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get(['/type-of-trade'], function (req, res) {
    res.render('01-type-of-trade');
});

router.get(['/who-are-you'], function (req, res) {
    res.render('02-who-are-you');
});

router.get(['/intent'], function (req, res) {
    res.render('03-intent');
});


router.get(['/date'], function (req, res) {
    res.render('04-date');
});

router.get(['/destination'], function (req, res) {
    res.render('05-destination');
});

router.post('/origin', function (req, res) {
    var destination = req.session.data["destination"];
    //console.log(req.session.data["destination"]);
    if (destination == "GB") {
        res.render('05-origin-to-gb');
    } else {
        res.render('05-origin-to-ni');
    }
});

router.post('/05-origin-handler', function (req, res) {
    var referer;
    referer = req.headers.referer;

    var destination = req.session.data["destination"];
    var origin = req.session.data["origin"];
    if (destination == "XI") {
        if (origin == "GB") {
            res.redirect('/06-message-gb-to-ni');
        } else if (origin == "EU") {
            res.redirect('/06-message-eu-to-ni');
        } else {
            res.redirect('/commodity');
        }
    } else {
        res.redirect('/commodity');
    }
});

router.get(['/commodity'], function (req, res) {
    res.render('08-commodity');
});

module.exports = router
