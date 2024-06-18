const User = require("./userSchema");

// Function to save a user
const saveUser = async (req, res) => {
  try {
    const { name, job, city, location, password, number } = req.body;
    const user = new User({
      name,
      job,
      city,
      location,
      password,
      number
    });
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveUser,
  getUsers
};