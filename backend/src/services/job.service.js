const jobRepo = require('../repositories/job.repository');

exports.createJob = (title, company, userid) => {
  return jobRepo.createJob(title, company, userid);
};

exports.getJobs = (userid) => {
  return jobRepo.getJobs(userid);
};