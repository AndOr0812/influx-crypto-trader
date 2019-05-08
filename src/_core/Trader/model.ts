import { Schema, model, Document } from 'mongoose';

// Create trader schema
const TraderSchema = new Schema(
  {
    name: String,
    silent: Boolean,
    status: String,
    strategie: String,
    capital: Number,
    percentInvest: Number,
    test: Boolean,
    base: String,
    quote: String,
    exchange: {
      name: String,
      apiKey: String,
      apiSecret: String,
    },
    env: {
      watchList: Array,
      batchSize: Number,
      bufferSize: Number,
      warmup: Number,
      backtest: {
        start: String,
        stop: String,
      },
    },
    // ...any
    // Strict:false => enable storing any other props
  },
  { strict: false }
);

export interface TraderModel extends Document {
  id?: string;
  type: string;
  status: string;
}

// Export Trader model
export const TraderModel = model<TraderModel>('Trader', TraderSchema);
