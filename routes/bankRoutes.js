import express from 'express';
import Bank from '../models/Bank.js';
import Branch from '../models/Branch.js';

const router = express.Router();


router.get('/banks', async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.status(200).json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/branches/:bankId', async (req, res) => {
  try {
    const { bankId } = req.params;
    const branches = await Branch.findAll({
      where: { bank_id: bankId },
      include: [{ model: Bank, attributes: ['name'] }],
    });
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
