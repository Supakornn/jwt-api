const login = async (req, res) => {
  res.send("Loging Testing");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ mash: `Helllo`, secret: luckyNumber });
};

module.exports = {
  login,
  dashboard
};
