import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 a 255',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'O email deve ser unico',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook(
      'beforeSave',
      async (user) => {
        if (user.password) {
          // eslint-disable-next-line no-param-reassign
          user.password_hash = await bcryptjs.hash(user.password, 8);
        }
      },
    );

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
