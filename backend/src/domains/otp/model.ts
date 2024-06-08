import mongoose, {Schema} from 'mongoose';

// !OTP schema
const OTPSchema = new Schema({
  email: {type: String, unique: true, required: true},
  otp: {type: String, required: true},
  createdAt: {type: Number, required: true},
  expiresAt: {type: Number, required: true},
});

const OTP = mongoose.model('OTP', OTPSchema);
export default OTP;
