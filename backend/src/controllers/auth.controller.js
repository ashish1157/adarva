const authService = require('../services/auth.service');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = await authService.signup(name, email, password);
    res.status(201).json({ userId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};