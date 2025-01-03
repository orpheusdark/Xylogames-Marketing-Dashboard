import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  downloads: { type: Number, default: 0 },
  playtime: { type: Number, default: 0 }, // in minutes
  revenue: { type: Number, default: 0 },
  retentionRate: { type: Number, default: 0 }, // percentage
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Game', gameSchema);

