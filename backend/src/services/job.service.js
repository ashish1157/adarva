const jobRepo = require('../repositories/job.repository');

exports.createJob = (title, company) => {
  return jobRepo.createJob(title, company);
};

exports.getJobs = () => {
  return jobRepo.getJobs();
};