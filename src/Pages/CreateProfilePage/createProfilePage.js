import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import "antd/dist/antd.css";

import { addOrEditProfile, findMatchingRecord } from "../../Service";
import { validationSchema, INITIALVALUES, SKILLS } from "../../Constants";
import { ROUTES } from "../../Constants/routes";
import { FormView } from "../../Components/Form";

import "./style.css";

export const CreateProfilePage = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(INITIALVALUES);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const recordId = location.state.recordId;
      const filteredRecord = findMatchingRecord(recordId)[0];
      setUserProfile({
        ...filteredRecord,
      });
    }
  }, [location.state]);

  const FormikState = useFormik({
    initialValues: userProfile,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      addOrEditProfile(values);
      resetForm();
      setSubmitting(false);
      navigate(ROUTES.root);
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
    <div className="form-container">
      <form className="ant-form" layout="vertical" onSubmit={handleSubmit}>
        <div className="ant-form-wrap">
          <FormView
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            values={values}
            skills={SKILLS}
            errors={errors}
            touched={touched}
          />
        </div>
        <button className="ant-btn" type="submit" disabled={isSubmitting}>
          {location.state != null && location.state.edit ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
};
