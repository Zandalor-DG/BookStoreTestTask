require('dotenv').config();
const bcrypt = require('bcryptjs');
const models = require('../database/models');
const updateTokens = require('../middleware/updateTokens');

exports.signUp = async (req, res) => {
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
    res.status(400).json({ message: err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: 'invalid login data' });

    const user = await models.User.findOne({ where: { email: email } });
    if (!user) return res.status(404).json({ message: 'user not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'incorrect password' });

    const token = await updateTokens(user.id); //проверка токена возможна
    const roleUserAuth = await models.Role.findByPk(user.roleId);

    const userData = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      dob: user.dob,
      role: roleUserAuth.dataValues.name,
    };
    res.json({ userData, token });
  } catch (err) {
    res.status(500).json({ message: 'server error, please try again' });
  }
};

exports.signInByToken = async (req, res) => {
  try {
    const { tokenId } = req.body;
    if (!tokenId)
      return res.status(400).json({ message: 'invalid access-token' });

    const { userId } = await models.Token.findOne({
      raw: true,
      where: { tokenId: tokenId },
    });
    if (!userId) return res.status(400).json({ message: 'token expired' });

    const token = await updateTokens(userId);

    const userData = await models.User.findByPk(
      {
        raw: true,
        attributes: { exclude: ['password'] },
      },
      userId
    );

    res.json({ userData, token });
  } catch (err) {
    res.status(500).json({ message: 'server error, please try again' });
  }
};
