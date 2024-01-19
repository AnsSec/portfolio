"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import * as nodeMailer from "nodemailer";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  
    const info = await transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to: senderEmail,
      subject:"Contact Form",
      body: message,
    });
  
    // console.log(info);
    return info;
  } catch (error: any) {
    console.log(error.message);
  }
};
