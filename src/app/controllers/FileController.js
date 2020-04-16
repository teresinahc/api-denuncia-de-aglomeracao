class FileController {
  async index(req, res) {
    return res.json({ message: 'Olá arquivos!' });
  }
}

export default new FileController();
