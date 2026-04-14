const db = require('../config/db');

exports.createJob = async (title, company, userid) => {
  const [result] = await db.query(
    'INSERT INTO jobs (title, company, user_id) VALUES (?, ?, ?)',
    [title, company, userid]
  );
  return result.insertId;
};


exports.getJobs = async (userid) => {
  const [rows] = await db.query('SELECT * FROM jobs WHERE user_id = ?', [userid]);
  return rows;
};