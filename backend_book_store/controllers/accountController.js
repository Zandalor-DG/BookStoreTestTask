require('dotenv').config();
const bcrypt = require('bcryptjs');
const models = require('../database/models');
const updateTokens = require('../middleware/updateTokens');
const _pick = require('lodash/pick');

exports.signUp = async (req, res) => {
  try {
    const { fullName, email, password, dob } = req.body;
    const candidate = await models.User.findOne({ where: { email: email } });

    if (candidate) {
      throw new Error('Email already used');
    }
    const passwordHash = bcrypt.hashSync(password, 10);

    const user = await models.User.create({
      fullName: fullName,
      email: email,
      password: passwordHash,
      dob: dob,
      roleId: 3,
    });
    //let data = _pick(user, ['id'], ['fullName'], ['email'], ['dob']); //пример как в созданной моделе уюрать пароль

    const token = await updateTokens(user.id);
    res.status(201).json({ error: false, message: 'User created', token });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    let avatarUrl = '';
    if (!email)
      return res
        .status(400)
        .json({ error: true, message: 'invalid login data' });

    const user = await models.User.findOne({ where: { email: email } });
    if (!user)
      return res.status(404).json({ error: true, message: 'user not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ error: true, message: 'incorrect password' });

    const token = await updateTokens(user.id);
    const roleUserAuth = await models.Role.findByPk(user.roleId);
    if (user.avatarId) {
      avatarUrl = await models.File.findByPk(user.avatarId);
    }
    const userData = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      dob: user.dob,
      role: roleUserAuth.dataValues.name,
      avatar: !avatarUrl ? '' : avatarUrl.path_name,
    };
    res.json({ error: false, message: 'sign in user', userData, token });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

exports.signInByToken = async (req, res) => {
  try {
    const payload = req.decoded;
    let avatarUrl = '';
    if (payload.type !== 'access') {
      return res.status(400).json({ error: true, message: 'Invalid token' });
    }
    const userId = payload.userId;
    const tokenNew = await updateTokens(userId);

    const user = await models.User.findOne({
      raw: true,
      attributes: { exclude: ['password'] },
      where: { id: userId },
    });

    if (user.avatarId) {
      avatarUrl = await models.File.findByPk(user.avatarId);
    }

    const userData = {
      ...user,
      avatar: !avatarUrl ? '' : avatarUrl.path_name,
    };
    res.json({ error: false, userData, token: tokenNew });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
