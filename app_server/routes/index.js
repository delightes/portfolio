var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/maincontroller.js');

/* root(/)에 homepage 컨트롤러 매핑 */
router.get('/', mainCtrl.homepageController);

module.exports = router;
