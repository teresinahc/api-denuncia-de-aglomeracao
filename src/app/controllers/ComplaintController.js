import Complaint from '../models/Complaint';

class ComplaintController {
  async index(req, res) {
    const complaints = await Complaint.findAll({
      where: {
        completed: false,
      },
    });

    if (!complaints) {
      res.status(404).json({
        message: 'has not complaints',
      });
    }

    return res.json(complaints);
  }

  async create(req, res) {
    // EXAMPLE BODY POST

    // {
    //   "description": "string",
    //   "dateTime": "2304/2020",
    //   "address": "Endereço 01",
    //   "lat": "120000",
    //   "long": "13333",
    //   "category": "Category",
    //   "completed": true,
    //   "photo_id": 1,
    // }

    const complaint = await Complaint.create(req.body);

    res.json(complaint);
  }
}

export default new ComplaintController();
