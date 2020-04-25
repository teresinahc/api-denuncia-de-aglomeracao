import Complaint from '../models/Complaint';

class ComplaintController {
  async index(req, res) {
    const complaints = await Complaint.findAll({
      where: {
        completed: false,
      },
    });

    if (complaints.length === 0) {
      return res.status(404).json({
        message: 'There is no complaints :(',
      });
    }
    return res.json(complaints);
  }

  async create(req, res) {
    // EXAMPLE BODY POST

    // {
    //   "description": "string",
    //   "date_time": "2020-04-23T16:00:00.000Z",
    //   "address": "Endereço 01",
    //   "lat": "120000",
    //   "long": "13333",
    //   "category": "Category",
    //   "completed": true,
    //   "photo_id": 1,
    // }

    Complaint.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  // TODO: add a middleware
  delete(req, res) {
    const { id } = req.params;
    Complaint.destroy({
      where: {
        id,
      },
    }).then(() => res.json('Complaint deleted successfully'));
  }
}

export default new ComplaintController();
