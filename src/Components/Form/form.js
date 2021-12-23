import React from "react";
import { Input, DatePicker, Select, Form, Typography } from "antd";
import moment from "moment";

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
  const { TextArea } = Input;
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
    {
      label: "Company",
      name: "company",
      value: values.company,
      errors: errors.company,
      touched: touched.company,
    },
    {
      label: "Role",
      name: "role",
      value: values.role,
      errors: errors.role,
      touched: touched.role,
    },
  ];

  const renderErrorSection = (errors, touched) => {
    return (
      <Typography className="error-text">
        {errors && touched && <Typography type="error">{errors}</Typography>}
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
        <Form.Item label="StartDate :">
          <DatePicker
            type="Date"
            name="startDate"
            placeholder="Start Date"
            value={values.startDate ? moment(values.startDate) : ""}
            onChange={(date) => setFieldValue("startDate", date)}
            onBlur={handleBlur}
          />
          {renderErrorSection(errors?.startDate, touched?.startDate)}
        </Form.Item>

        <Form.Item label="EndDate :">
          <DatePicker
            type="Date"
            name="endDate"
            placeholder="End Date"
            value={values.endDate ? moment(values.endDate) : ""}
            onChange={(date) => setFieldValue("endDate", date)}
            onBlur={handleBlur}
          />
          {renderErrorSection(errors?.endDate, touched?.endDate)}
        </Form.Item>
      </div>

      <Form.Item className="ant-design-form" label="Skills :">
        <Select
          type="text"
          name="skills"
          mode="multiple"
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

      <Form.Item className="ant-design-form" label="Description :">
        <TextArea
          showCount
          maxLength={300}
          rows={4}
          type="text"
          name="description"
          value={values.description}
          placeholder="Description"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {renderErrorSection(errors?.description, touched?.description)}
      </Form.Item>
    </>
  );
};
