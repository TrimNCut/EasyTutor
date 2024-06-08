import mongoose, {Schema} from 'mongoose';

// !User schema
const userSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  accountType: {type: String, required: true},
  token: String,
  verified: {type: Boolean, default: false},
});

const User = mongoose.model('User', userSchema);

export default User;
