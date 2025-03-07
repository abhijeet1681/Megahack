// server/routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');

// Route to get instructor activity
router.get('/instructors', isAdmin, adminController.getInstructorActivity);

// Route to get student activity
router.get('/students', isAdmin, adminController.getStudentActivity);

module.exports = router;
