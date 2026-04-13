const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash');
const userRepo = require('../repositories/user.repository');

exports.signup = async (name, email, password) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw new Error('User already exists');

  const hashed = await hashPassword(password);
  return userRepo.createUser(name, email, hashed);
};

exports.login = async (email, password) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error('User not found');

  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET);
  return token;
};