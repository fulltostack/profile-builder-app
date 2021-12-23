import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  email: Yup.string().email("Invalid email format").required(),
  tagLine: Yup.string().required(),
  company: Yup.string().required(),
  role: Yup.string().required(),
  startDate: Yup.date()
    .max(Yup.ref("endDate"), "End date can't be before Start date")
    .required(),
  endDate: Yup.date().required(),
  description: Yup.string()
    .max(300, "Should not be exceeded 300 words")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  skills: Yup.array().required().min(1),
});
