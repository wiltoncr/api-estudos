class FotoController {
  async store(req, res) {
    const { file } = req;
    res.json(file);
  }
}

export default new FotoController();
