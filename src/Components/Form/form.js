import React from "react";
import { Input, Typography, Select, Form } from "antd";
import { FieldArray, Field } from "formik";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

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
      <FieldArray name="workExperience">
        {({ remove, push }) => (
          <div>
            <div className="ant-text">
              <Typography orientation="left">
                Work Experiences: {values?.workExperience?.length}
              </Typography>
              <div className="add-icon">
                <PlusCircleOutlined
                  onClick={() =>
                    push({
                      company: "",
                      role: "",
                      description: "",
                      startDate: "",
                      endDate: "",
                    })
                  }
                />
              </div>
            </div>
            {values?.workExperience?.length > 0 &&
              values?.workExperience.map((field, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <DeleteOutlined onClick={() => remove(index)} />
                  </div>
                  <div className="ant-form-wrap">
                    <Form.Item
                      htmlFor={`workExperience.${index}.company`}
                      label="Company"
                    >
                      <Input
                        name={`workExperience.${index}.company`}
                        placeholder="Company"
                        type="text"
                        value={field.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors?.workExperience?.length > 0 &&
                        touched?.workExperience?.length > 0 &&
                        renderErrorSection(
                          errors?.workExperience[0]?.company,
                          touched?.workExperience[0]?.company
                        )}
                    </Form.Item>
                    <Form.Item
                      htmlFor={`workExperience.${index}.role`}
                      label="Role"
                    >
                      <Input
                        name={`workExperience.${index}.role`}
                        placeholder="Role"
                        type="text"
                        value={field.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors?.workExperience?.length > 0 &&
                        touched?.workExperience?.length > 0 &&
                        renderErrorSection(
                          errors?.workExperience[0]?.role,
                          touched?.workExperience[0]?.role
                        )}
                    </Form.Item>

                    <Form.Item
                      label="StartDate :"
                      htmlFor={`workExperience.${index}.startDate`}
                    >
                      <Field
                        type="Date"
                        className="ant-date"
                        name={`workExperience.${index}.startDate`}
                        placeholder="Start Date"
                        format="MM:YYYY"
                        onBlur={handleBlur}
                      />
                      {errors?.workExperience?.length > 0 &&
                        touched?.workExperience?.length > 0 &&
                        renderErrorSection(
                          errors?.workExperience[0]?.startDate,
                          touched?.workExperience[0]?.startDate
                        )}
                    </Form.Item>
                    <Form.Item
                      label="EndDate :"
                      htmlFor={`workExperience.${index}.endDate`}
                    >
                      <Field
                        className="ant-date"
                        name={`workExperience.${index}.endDate`}
                        type="date"
                        label="Start Time"
                        format="MM:YYYY"
                      />
                      {errors?.workExperience?.length > 0 &&
                        touched?.workExperience?.length > 0 &&
                        renderErrorSection(
                          errors?.workExperience[0]?.endDate,
                          touched?.workExperience[0]?.endDate
                        )}
                    </Form.Item>
                  </div>
                  <Form.Item
                    htmlFor={`workExperience.${index}.description`}
                    label="description"
                  >
                    <TextArea
                      name={`workExperience.${index}.description`}
                      placeholder="Description"
                      type="text"
                      value={field.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      showCount
                      row={4}
                      maxLength={300}
                    />
                    {errors?.workExperience?.length > 0 &&
                      touched?.workExperience?.length > 0 &&
                      renderErrorSection(
                        errors?.workExperience[0]?.description,
                        touched?.workExperience[0]?.description
                      )}
                  </Form.Item>
                </div>
              ))}
          </div>
        )}
      </FieldArray>
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
    </>
  );
};
