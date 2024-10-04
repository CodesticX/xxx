import mongoose from 'mongoose';

interface UserI extends Document {
  email: string;
  googleId: string;
  username: string;
}

const UserSchema = new mongoose.Schema<UserI>(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      require: true
    },
    googleId: {
      type: String,
      require: true
    },
    username: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('users', UserSchema);
export default User;
