const User = require("../model/users");

const user_all = async (req, res) => {
  try {
    const allUser = await User.find()
    res.send(allUser)
  } catch (error) {
    res.json({ message: error });
  }
};

const user_details = async (req, res) => {
  try {
    const userDetails = await User.findById(req.params.userId)
    res.json(userDetails)
  } catch (error) {
    res.json({ message: error });
  }
};

const user_create = async (req, res) => {
  console.log(req.body, '>>>>')
  const { username, email, password, phoneNumber } = req.body;
  try {
    const users = new User({
        username: username,
        email:email,
        password:password,
        phoneNumber: phoneNumber
    })
    const saveUser = await users.save()
    res.send(saveUser)
  } catch (error) {
    res.json({ message: error });
  }
};

const user_update = async (req, res) => {
  console.log(req.body, ">>>>>")
  const { username, email, password, phoneNumber } = req.body;
  const user = {
    username: username,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  };

  try {
    const updateUser = await User.findByIdAndUpdate(
      {_id: req.params.userId}, user
    );
    res.send(updateUser);
  } catch (error) {
    res.json({ message: error });
  }
};


const user_delete = async(req, res) => {
  console.log(req.params.userId, '?????')
  try {
    const deleteUser = await User.findByIdAndDelete(
      {_id: req.params.userId}
    );
    res.send(deleteUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  user_all,
  user_details,
  user_create,
  user_update,
  user_delete,
};
