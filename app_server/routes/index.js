var express = require('express');
var router = express.Router();
var ctrlLocation=require('../controller/location')
var ctrlLocation=require('../controller/other')
router.get('/', ctrlLocation.homelist);
router.get('/location', ctrlLocation.locationinfo);
router.get('/location/review/ne', ctrlLocation.addreview);
router.get('/about', ctrlLocation.about);
module.exports = router;
