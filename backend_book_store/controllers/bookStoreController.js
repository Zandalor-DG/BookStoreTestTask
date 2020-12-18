require('dotenv').config();
const models = require('../database/models');

exports.getBooks = async (req, res) => {
  try {
    const { fullName, email, password, dob } = req.body;
    const candidate = await models.User.findOne({ where: { email: email } });

    if (candidate) {
      throw new Error('Email already used');
    }
    const passwordHash = bcrypt.hashSync(password, 10);

    await models.User.create({
      fullName: fullName,
      email: email,
      password: passwordHash,
      dob: dob,
      roleId: 3,
    });

    const newUser = await models.User.findOne({
      raw: true,
      attributes: { exclude: ['password'] },
      where: { email: email },
    });

    const token = await updateTokens(newUser.id);
    res.status(201).json({ message: 'User created', token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
