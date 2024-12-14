const User = require("../models/user");

const registerController = async (req, res) => {
  const { username, password, role = "user" } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const validRoles = ["user", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role specified",
        error: true,
        success: false,
      });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).json({
      data: {
        id: newUser._id,
        username: newUser.username,
        role: newUser.role,
      },
      success: true,
      error: false,
      message: "Account Created Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = registerController;
