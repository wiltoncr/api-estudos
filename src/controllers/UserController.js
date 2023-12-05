import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!id) {
        return res.status(400).json({ errors: ['ID não foi informado'] });
      }
      if (!user) {
        return res.status(404).json({ errors: ['usuário não foi encontrado'] });
      }
      const newuser = await user.update(req.body);
      return res.status(200).json(newuser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não foi informado'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ errors: ['usuário não foi encontrado'] });
      }
      await user.destroy();
      return res.status(204).json(user);
    } catch (e) {
      return res.status(500).json(null);
    }
  }
}

export default new UserController();
