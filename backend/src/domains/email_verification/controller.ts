import {deleteOTP, sendOTP, verifyOTP} from '../otp/controller';
import User from '../user/model';

// !Send verification otp email
export async function sendVerificationOTPEmail(email: string) {
  // !Check if user exists
  const existingUser = await User.findOne({email});

  if (!existingUser) {
    throw Error("There's no account for the provided email.");
  }

  // !Send email
  const otpDetails = {
    email,
    subject: 'Email verification',
    message: 'Verify your email with the code below.',
    duration: 1,
  };

  const createdOTP = await sendOTP(otpDetails);

  return createdOTP;
}

// !Verify user email
export async function verifyUserEmail({email, otp}: {email: string; otp: string}) {
  // !Validate otp
  const validateOTP = await verifyOTP({email, otp});
  if (!validateOTP) {
    throw Error('Invalid code passed. Check your inbox.');
  }

  // !Update user record to show verified
  await User.updateOne({email}, {verified: true});

  // !Delete otp
  await deleteOTP(email);
  return;
}
