const express= require("express");
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/students',studentController.index);

// show registeration form
router.get('/students/create',studentController.create);

// store student data
router.post('/students/store',studentController.store);

router.get('/student/edit/:id',studentController.edit);

router.post('/student/update/:id',studentController.update);

router.get('/student/delete/:id',studentController.destroy);

module.exports = router;