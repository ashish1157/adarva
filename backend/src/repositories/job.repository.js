const db = require('../config/db');

exports.createJob = async (title, company) => {
  const [result] = await db.query(
    'INSERT INTO jobs (title, company) VALUES (?, ?)',
    [title, company]
  );
  return result.insertId;
};

exports.getJobs = async () => {
  const [rows] = await db.query('SELECT * FROM jobs');
  return rows;
};