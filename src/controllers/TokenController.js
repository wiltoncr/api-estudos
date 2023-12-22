import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['login invalido'] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['login invalido'] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['senah invalido'] });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ token, user: { nome: user.nome, id: user.id, email } });
  }
}

export default new TokenController();
