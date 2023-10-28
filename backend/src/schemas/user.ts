import mongoose, { Document, InferSchemaType, Schema } from 'mongoose';

const UserSchema = new Schema({
  google_id: {
    type: String,
    trim: true,
    required: true,
    immutable: true,
    select: false,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    immutable: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  elo: {
    type: Number,
    required: true,
    default: 1000,
  },
});

export default mongoose.model<Document>('User', UserSchema);
export type UserType = Document & InferSchemaType<typeof UserSchema>;
