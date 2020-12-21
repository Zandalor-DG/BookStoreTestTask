const models = require('../database/models');
const bcrypt = require('bcryptjs');

const checkValue = (valueCheck, method) => {
  if (!valueCheck) {
    throw new Error(`${method} is not presented`);
  }
};

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

    await models.File.create({
      original_name: filename,
      path_name: path,
    })
      .then(function (avatar) {
        // you can now access the newly created user
        console.log('success', avatar.toJSON());
      })
      .catch(function (err) {
        // print the error details
        console.log(err, request.body.email);
      });

    /*.then(function(user) {
    // you can now access the newly created user
    console.log('success', user.toJSON());
})
.catch(function(err) {
    // print the error details
    console.log(err, request.body.email);
}); */

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

// exports.deleteUser = async (req, res) => {
//   try {
//     checkValue(req.body, res, 'deleteUser');
//     const { id } = req.body;
//     if (!id) {
//       throw new Error('Id is not presented');
//     }

//     models.User.destroy({
//       where: {
//         id: id,
//       },
//     });
//     res.status(200).json({ error: false, message: 'User deleted' });
//   } catch (err) {
//     res.status(400).json({ error: true, message: err.message });
//   }
// };

// exports.getAllUsers = async (req, res) => {
//   try {
//     const allUsers = await models.User.findAll({
//       raw: true,
//       attributes: { exclude: ['password'] },
//     });
//     res.status(200).json({ message: 'All users', allUsers });
//   } catch (err) {
//     res.status(500).json({ error: true, message: err.message });
//   }
// };
