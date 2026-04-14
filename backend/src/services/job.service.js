const jobRepo = require('../repositories/job.repository');

exports.createJob = (title, company, status, userid) => {
  return jobRepo.createJob(title, company, status, userid);
};

exports.getJobs = (userid) => {
  return jobRepo.getJobs(userid);
};

exports.updateJobStatus = async (id, status, userId) => {
  return jobRepo.updateJobStatus(id, status, userId);
};