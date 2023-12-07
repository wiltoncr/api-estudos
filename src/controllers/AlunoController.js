import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(201).json(aluno);
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: [
            'Id não informado ',
          ],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: [
            'Aluno não encontrado',
          ],
        });
      }
      const novoAluno = await aluno.update(req.body);
      return res.json(novoAluno);
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: [
            'Id não informado ',
          ],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: [
            'Aluno não encontrado',
          ],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(500).json({
        errors: ['Erro interno do servidor'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: [
            'Id não informado ',
          ],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({
          errors: [
            'Aluno não encontrado',
          ],
        });
      }
      await aluno.destroy();
      return res.status(204).json({ errors: false });
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new AlunoController();
