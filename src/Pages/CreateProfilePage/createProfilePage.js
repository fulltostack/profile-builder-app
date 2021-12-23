import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Form, Formik } from "formik";
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

  return (
    <div className="form-container">
      <Formik
        initialValues={userProfile}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addOrEditProfile(values);
          resetForm();
          setSubmitting(false);
          navigate(ROUTES.root);
        }}
      >
        {(formikProps) => (
          <Form className="ant-form" onSubmit={formikProps.handleSubmit}>
            <FormView
              handleChange={formikProps.handleChange}
              handleBlur={formikProps.handleBlur}
              setFieldValue={formikProps.setFieldValue}
              values={formikProps.values}
              skills={SKILLS}
              errors={formikProps.errors}
              touched={formikProps.touched}
            />
            <button
              className="ant-btn"
              type="submit"
              disabled={formikProps.isSubmitting}
            >
              {location.state != null && location.state.edit
                ? "Edit"
                : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
