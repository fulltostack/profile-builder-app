import React from "react";
import { Input, Typography, Select, Form } from "antd";
import { WorkExperience } from "./workExperience";

import "./style.css";

export const FormView = ({
  handleBlur,
  handleChange,
  setFieldValue,
  values,
  skills,
  errors,
  touched,
}) => {
  const { Option } = Select;
  const inputFieldAttributes = [
    {
      label: "FirstName",
      name: "firstName",
      value: values.firstName,
      errors: errors.firstName,
      touched: touched.firstName,
    },
    {
      label: "LastName",
      name: "lastName",
      value: values.lastName,
      errors: errors.lastName,
      touched: touched.lastName,
    },
    {
      label: "Email",
      name: "email",
      value: values.email,
      errors: errors.email,
      touched: touched.email,
    },
    {
      label: "TagLine",
      name: "tagLine",
      value: values.tagLine,
      errors: errors.tagLine,
      touched: touched.tagLine,
    },
  ];

  const renderErrorSection = (errors, touched) => {
    return (
      <Typography>
        {errors && touched && (
          <Typography className="error-text" type="error">
            {errors}
          </Typography>
        )}
      </Typography>
    );
  };

  return (
    <>
      <div className="ant-form-wrap">
        {inputFieldAttributes?.map((item, index) => (
          <Form.Item key={index} label={item.label}>
            <Input
              type="text"
              name={item.name}
              value={item.value}
              placeholder={item.label}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {renderErrorSection(item.errors, item.touched)}
          </Form.Item>
        ))}
      </div>
      <WorkExperience
        handleChange={handleChange}
        handleBlur={handleBlur}
        renderErrorSection={renderErrorSection}
        values={values}
        errors={errors}
        touched={touched}
      />
      <Form.Item className="ant-design-form" label="Skills :">
        <Select
          type="text"
          name="skills"
          mode="tags"
          placeholder="Skills"
          value={values?.skills}
          onChange={(item) => setFieldValue("skills", item)}
          onBlur={handleBlur}
        >
          {skills?.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        {renderErrorSection(errors?.skills, touched?.skills)}
      </Form.Item>
    </>
  );
};
