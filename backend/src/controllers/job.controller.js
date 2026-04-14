const jobService = require('../services/job.service');
const { jobSchema,updateStatusSchema } = require('../validators/job.validator');

exports.createJob = async (req, res) => {
  try {
    const parsed = jobSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues[0].message });
    }
    const { title, company, status } = parsed.data;
    const jobId = await jobService.createJob(title, company, status, req.userid);
    res.status(201).json({ id: jobId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs(req.userid);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJobStatus = async (req, res) => {
  try {
    const parsed = updateStatusSchema.safeParse(req.body); 
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues[0].message });
    }
    const { status } = parsed.data;
    const { id } = req.params;
    const affected = await jobService.updateJobStatus(id, status, req.userid);
    if (!affected) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Status updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};