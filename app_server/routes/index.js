var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/maincontroller.js'); //메인 컨트롤러 사용

/* root(/)에 homepage 컨트롤러 매핑해주는 인덱스 라우터 */
router.get('/', mainCtrl.homepageController);

/* 라우터 다른 곳에서 사용할 예정*/
module.exports = router; 
