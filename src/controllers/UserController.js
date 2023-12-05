import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, email } = novoUser;
      return res.json({ id, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const { nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      const user = await User.findByPk(id);

      if (!id) {
        return res.status(400).json({ errors: ['ID não foi informado'] });
      }
      if (!user) {
        return res.status(404).json({ errors: ['usuário não foi encontrado'] });
      }
      const newuser = await user.update(req.body);
      const { email } = newuser;
      return res.status(201).json({ id, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID não foi informado'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ errors: ['usuário não foi encontrado'] });
      }
      await user.destroy();
      return res.status(204).json();
    } catch (e) {
      return res.status(500).json(null);
    }
  }
}

export default new UserController();
