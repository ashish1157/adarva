const express = require('express');
const router = express.Router();
//console.log(__dirname);
const auth = require('../middlewares/auth.middleware.js');
const { createJob, getJobs, updateJobStatus } = require('../controllers/job.controller');

router.post('/', auth, createJob);
router.get('/', auth, getJobs);
router.patch('/:id/status', auth, updateJobStatus);


module.exports = router;