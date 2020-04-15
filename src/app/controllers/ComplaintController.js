class ComplaintController {
  async index(req, res) {
    return res.json({ message: 'Olá denúncias!' });
  }
}

export default new ComplaintController();
