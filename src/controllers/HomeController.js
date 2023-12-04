class HomeController {
  index(req, res) {
    res.json({ erro: false });
  }
}

export default new HomeController();
