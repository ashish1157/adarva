const db = require('../config/db');

exports.createJob = async (title, company, status, userid) => {
  const [result] = await db.query(
    'INSERT INTO jobs (title, company, status, user_id) VALUES (?, ?, ?, ?)',
    [title, company, status, userid]
  );
  return result.insertId;
};

exports.getJobs = async (userid) => {
  const [rows] = await db.query('SELECT * FROM jobs WHERE user_id = ?', [userid]);
  return rows;
};

exports.updateJobStatus = async (id, status, userId) => {
  const [result] = await db.query(
    'UPDATE jobs SET status = ? WHERE id = ? AND user_id = ?',
    [status, id, userId]
  );
  return result.affectedRows;
};