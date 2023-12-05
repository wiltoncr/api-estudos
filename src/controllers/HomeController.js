import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create(
      {
        nome: 'wilton',
        sobrenome: 'costa',
        email: 'wil@gmail',
        idade: 12,
        peso: 55,
        altura: 5.2,
      },
    );
    res.json(novoAluno);
  }
}

export default new HomeController();
