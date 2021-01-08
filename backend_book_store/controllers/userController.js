const models = require('../database/models');
const bcrypt = require('bcryptjs');

exports.putUser = async (req, res) => {
  try {
    const { oldPassword, newPassword, user } = req.body;
    let userPass = await models.User.findByPk(user.id);
    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, userPass.password);
      if (!isMatch)
        return res.status(400).json({ message: 'incorrect old password' });
    }

    const { fullName, email, id, dob } = user;

    if (!fullName && !email && !id && !dob) {
      throw new Error('Full data is not presented');
    }

    const changePassword = newPassword
      ? bcrypt.hashSync(newPassword, 10)
      : userPass.password;

    models.User.update(
      {
        fullName: fullName,
        email: email,
        password: changePassword,
        dob: dob,
      },
      { where: { id: id } }
    );
    res.status(200).json({ error: false, message: 'user update' });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    let { filename, path } = req.file;
    const payload = req.decoded;
    if (payload.type !== 'access') {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const userId = payload.userId;

    if (!path && !filename) {
      res.status(400).json({ message: 'File upload error' });
    }

    const avatar = await models.File.create({
      original_name: filename,
      path_name: path,
    });

    await models.User.update(
      {
        avatarId: avatar.id,
      },
      { where: { id: userId } }
    );

    res.status(202).json({ message: 'Accepted', avatar: avatar.path_name });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message }).end();
  }
};
