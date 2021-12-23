import { useFormik } from "formik";
import "antd/dist/antd.css";

import { validationSchema, INITIALVALUES, SKILLS } from "../../Constants";
import { FormError } from "../../Components/FormErrors/error";
import { FormView } from "../../Components/Form";
import "./style.css";
import { AddUserProfile } from "../../Service";

export const HomePage = () => {
  const FormikState = useFormik({
    initialValues: INITIALVALUES,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      AddUserProfile(values)
      resetForm();
      setSubmitting(false);
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
    isSubmitting,
  } = FormikState;

  return (
    <div class="formdata">
      <form onSubmit={handleSubmit}>
        <FormError errors={errors} touched={touched} />
        <FormView
          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
          values={values}
          skills={SKILLS}
        />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};
