import express from 'express';
import Campaign from '../models/Campaign.js';
import { auth, authorize } from '../middleware/auth.js';

const router = express.Router();

// Create a new campaign
router.post('/', auth, authorize(['Admin', 'Marketer']), async (req, res) => {
  try {
    const campaign = new Campaign({
      ...req.body,
      createdBy: req.user._id
    });
    await campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all campaigns
router.get('/', auth, async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    res.send(campaigns);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific campaign
router.get('/:id', auth, async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).send();
    }
    res.send(campaign);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a campaign
router.patch('/:id', auth, authorize(['Admin', 'Marketer']), async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!campaign) {
      return res.status(404).send();
    }
    res.send(campaign);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a campaign
router.delete('/:id', auth, authorize(['Admin']), async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) {
      return res.status(404).send();
    }
    res.send(campaign);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;

