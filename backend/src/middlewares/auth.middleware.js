module.exports = (req, res, next) => {
  
  const jwt = require('jsonwebtoken');
  const token = req.headers.authorization;
  

  console.log(token);

  if (!token) return res.status(401).json({ message: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userid = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};