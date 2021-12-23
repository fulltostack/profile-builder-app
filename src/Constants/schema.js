import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("First Name is required field"),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Last Name is required field"),
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  tagLine: Yup.string().required("Tag Line is required field"),
  workExperience: Yup.array()
    .of(
      Yup.object().shape({
        company: Yup.string().required("Company is required field"),
        role: Yup.string().required("Role is required field"),

        description: Yup.string()
          .max(300, "Should not be exceeded 300 words")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
          .required("Description is required field"),
        startDate: Yup.date()
          .max(Yup.ref("endDate"), "End date can't be before Start date")
          .required("Start Date is required field"),
        endDate: Yup.date().required("End Date is required field"),
      })
    )
    .required("All field are required"),
  skills: Yup.array().required("Skills is required field").min(1),
});
