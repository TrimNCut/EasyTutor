import validate from 'deep-email-validator';
import type {SignUpFormData} from './types';

type ValidateResult =
  | {
      data: {
        username: string;
        passwordOne: string;
        passwordTwo: string;
        email: string;
      };
      success: true;
    }
  | {
      error: string;
      success: false;
    };

export async function validateSignUpFormData(signUpFormData: SignUpFormData): Promise<ValidateResult> {
  const users = [
    {
      username: 'User 1',
      password: 'U53R_1',
      email: 'user1@users.com',
    },
  ];

  if (!(await validate(signUpFormData.email)).valid) {
    return {
      error: 'Email is not valid',
      success: false,
    };
  }

  if (users.find((user) => signUpFormData.username.toLowerCase() === user.username.toLowerCase())) {
    return {error: 'User name already exists', success: false};
  }

  if (users.find((user) => signUpFormData.email.toLowerCase() === user.email.toLowerCase())) {
    return {error: 'Email name already exists', success: false};
  }

  if (signUpFormData.passwordOne !== signUpFormData.passwordTwo) {
    return {error: 'First and second password do not match', success: false};
  }

  return {data: signUpFormData, success: true};
}
