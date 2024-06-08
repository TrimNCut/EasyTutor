import {hashData} from '../../utils/hashData';
import {deleteOTP, sendOTP, verifyOTP} from '../otp/controller';
import User from '../user/model';

// !Send password rest email
export async function sendPasswordResetOTPEmail(email: string) {
  // !Check if user exists
  const existingUser = await User.findOne({email});
  if (!existingUser) {
    throw Error("There's no account for the provided email.");
  }

  if (!existingUser.verified) {
    throw Error('Email has not been verified yet');
  }

  // !Send otp emails
  const otpDetails = {
    email,
    subject: 'Password Reset',
    message: 'Enter the code below',
    duration: 1,
  };

  const createdOTP = await sendOTP(otpDetails);
  return createdOTP;
}

// !Reset user password
export async function resetUserPassword({email, otp, newPassword}: {email: string; otp: string; newPassword: string}) {
  const validOTP = await verifyOTP({email, otp});
  if (!validOTP) {
    throw Error('Invalid code passed. Check your inbox');
  }

  // !Update user record with new password
  const hashedNewPassword = await hashData(newPassword);
  await User.updateOne({email}, {password: hashedNewPassword});

  // !Delete otp
  await deleteOTP(email);
  return;
}
