const User = require("../model/users");
const sendToken = require("../jwtToken")

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
  const { username, email, password } = req.body;
  try {
    const users = new User({
        username: username,
        email:email,
        password:password,
    })        
    const saveUser = await users.save()
    sendToken(saveUser,201,res)
  } catch (error) {
     return res.status(400).json({ message: error });
  }
};


const user_login = async (req, res) => {
  const { email, password } = req.body;
  // checking if user has given password and email both
  if(!email || !password){
      return console.log('please fill email or password')
  }
  const users = await User.findOne({ email }).select("+password");
console.log(users, 'users>>>>')
  sendToken(users,201,res)

}

const user_update = async (req, res) => {
  console.log(req.body, ">>>>>")
  const { username, email, password } = req.body;
  const user = {
    username: username,
    email: email,
    password: password,
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

const user_logout = async (req, res) => {
  res.cookie("token",null,{
    expires: new Date(Date.now()),
    httpOnly:true,
})
res.status(200).json({
    success:true,
    message:"Logged Out",
})
}


module.exports = {
  user_all,
  user_details,
  user_create,
  user_update,
  user_delete,
  user_login,
  user_logout
};
