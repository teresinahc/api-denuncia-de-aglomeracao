import Complaint from '../models/complaint';

class ComplaintController {

  async index(req, res) {
    const complaints = await Complaint.findAll();
    if(complaints.length === 0) {
      return res.json({ data: [], empty: true });
    }
    return res.json({ data: complaints, empty: false });
  }

  async create(req, res) {
    // EXAMPLE BODY POST

    // {
    //   "dateTime": "2304/2020",
    //   "address": "Endereço 01",
    //   "lat": "120000",
    //   "long": "13333",
    //   "category": "Category",
    //   "status": true
    // }

    try{
      const complaint = await Complaint.create(req.body);

      return res.json({ success: true, message: 'Complaint created with success' });
    }catch(e) {
      return res.json({ success: false, message: e.message });
    }
  }

}

export default new ComplaintController();
