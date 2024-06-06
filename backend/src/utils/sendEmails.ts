import nodemailer from 'nodemailer';
import type {Options} from 'nodemailer/lib/mailer';
import env from '../config/env';

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  auth: {
    user: env.AUTH_EMAIL,
    pass: env.AUTH_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Ready for messages');
    console.log(success);
  }
});

export async function sendEmail(mailOptions: Options) {
  await transporter.sendMail(mailOptions);
  return;
}
