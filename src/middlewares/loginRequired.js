import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = payload.id;
    req.userEmail = payload.email;

    const user = await User.findByPk(payload.id);
    if (user.email !== payload.email) {
      return res.status(401).json({
        errors: ['Login invalid'],
      });
    }

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Login invalid'],
    });
  }
};
