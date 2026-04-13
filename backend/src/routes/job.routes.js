const express = require('express');
const router = express.Router();
console.log(__dirname);
const auth = require('../middlewares/auth.middleware.js');
const { createJob, getJobs } = require('../controllers/job.controller');

router.post('/', auth, createJob);
router.get('/', auth, getJobs);


module.exports = router;