import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email("Invalid email format").required(),
  tagLine: Yup.string().required(),
  company: Yup.string().required(),
  role: Yup.string().required(),
  startDate: Yup.date().max(
    Yup.ref("endDate"),
    "End date can't be before Start date"
  ),
  endDate: Yup.date().required(),
  description: Yup.string()
    .max(300, "Should not be exceeded 300 words")
    .required(),
  skills: Yup.string().required(),
});
