exports.registerUser = (req, res) => {
  res.status(200).json({ status: "success", message: "User registered" });
};

exports.getUserById = (req, res) => {
  res.status(200).json({ status: "success", message: "User fetched" });
};
