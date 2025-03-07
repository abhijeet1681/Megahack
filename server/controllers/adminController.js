// server/controllers/adminController.js

const User = require('../models/User');
// const Activity = require('../models/Activity'); // Uncomment if you implement activity logs

// Controller to fetch instructors' activity
exports.getInstructorActivity = async (req, res) => {
  try {
    // Assuming instructors are flagged with role: 'instructor'
    const instructors = await User.find({ role: 'instructor' });
    res.json({ success: true, data: instructors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to fetch students' activity
exports.getStudentActivity = async (req, res) => {
  try {
    // Assuming students are flagged with role: 'student'
    const students = await User.find({ role: 'student' });
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
