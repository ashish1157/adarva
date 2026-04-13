const jobService = require('../services/job.service');

exports.createJob = async (req, res) => {
  try {
    const { title, company } = req.body;
    const id = await jobService.createJob(title, company);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};