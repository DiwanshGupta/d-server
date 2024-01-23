const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name atleast of 3 characters" })
    .max(255, { message: "Name cannot be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email atleast of 3 characters" })
    .max(255, { message: "Email cannot be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: "Phone no. must be  atleast of 10 characters" })
    .max(10, { message: "PHone no. cannot be more than 10 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(7, { message: "Passowrd must be  atleast  of 7 characters" })
    .max(256, {
      message: "Passowrd cannot cannot be more than 255 characters",
    }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email atleast of 3 characters" })
    .max(255, { message: "Email cannot be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(7, { message: "Passowrd must be  atleast  of 7 characters" })
    .max(256, {
      message: "Passowrd cannot cannot be more than 255 characters",
    }),
});

module.exports = { loginSchema, signupSchema };
