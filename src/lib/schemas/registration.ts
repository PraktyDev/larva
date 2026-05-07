import { z } from "zod";

export const AVAILABLE_COURSES = [
  "Cybersecurity",
  "Data Analysis",
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "UI/UX Design",
] as const;

export const SCHOOLS = ["Dugbe", "Bodija"] as const;
export const GENDERS = ["Male", "Female"] as const;

export const registrationSchema = z
  .object({
    surname: z
      .string()
      .min(2, "Surname must be at least 2 characters")
      .max(50, "Surname must not exceed 50 characters"),
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must not exceed 50 characters"),
    studentNumber: z.string().min(1, "Student number is required"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must not exceed 15 digits")
      .regex(
        /^(\+?234|0)[0-9]{10}$/,
        "Enter a valid Nigerian phone number (e.g. 08012345678)"
      ),
    email: z.string().email("Enter a valid email address"),
    gender: z.enum(GENDERS, {
      error: "Please select a gender",
    }),
    school: z.enum(SCHOOLS, {
      error: "Please select a school location",
    }),
    dateOfResumption: z.string().min(1, "Date of resumption is required"),
    courses: z
      .array(z.string())
      .min(1, "Select at least one course")
      .max(3, "You can select up to 3 courses"),
    amountToPay: z
      .number({ error: "Enter a valid amount" })
      .min(0, "Amount cannot be negative"),
    amountPaid: z
      .number({ error: "Enter a valid amount" })
      .min(0, "Amount cannot be negative"),
    balance: z.number(),
    registeredBy: z
      .string()
      .min(2, "Staff name must be at least 2 characters")
      .max(100, "Staff name must not exceed 100 characters"),
  })
  .refine((data) => data.amountPaid <= data.amountToPay, {
    message: "Amount paid cannot exceed amount to pay",
    path: ["amountPaid"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
