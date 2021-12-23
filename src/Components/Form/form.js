import React from "react";
import { Input, DatePicker, Select, Form, Typography } from "antd";

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

  return (
    <>
      <div className="ant-form-wrap">
        <Form.Item label="FirstName :">
          <Input
            type="text"
            name="firstName"
            value={values.firstName}
            placeholder="FirstName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.firstName && touched?.firstName && (
              <Typography type="error">{errors.firstName}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="LastName :">
          <Input
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="LastName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.lastName && touched?.lastName && (
              <Typography type="error">{errors.lastName}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="Email :">
          <Input
            type="text"
            name="email"
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.email && touched?.email && (
              <Typography type="error">{errors.email}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="TagLine :">
          <Input
            type="text"
            name="tagLine"
            value={values.tagLine}
            placeholder="TagLine"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.tagLine && touched?.tagLine && (
              <Typography type="error">{errors.tagLine}</Typography>
            )}
          </Typography>
        </Form.Item>
        <Form.Item key="company" label="Company :">
          <Input
            type="text"
            name="company"
            value={values.company}
            placeholder="Company"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.company && touched?.company && (
              <Typography type="error">{errors.company}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="Role">
          <Input
            type="text"
            name="role"
            value={values.role}
            placeholder="Role"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.role && touched?.role && (
              <Typography type="error">{errors.role}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="StartDate :">
          <DatePicker
            type="Date"
            name="startDate"
            placeholder="Start Date"
            onChange={(date) => setFieldValue("startDate", date)}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.startDate && touched?.startDate && (
              <Typography type="error">{errors.startDate}</Typography>
            )}
          </Typography>
        </Form.Item>

        <Form.Item label="EndDate :">
          <DatePicker
            type="Date"
            name="endDate"
            placeholder="End Date"
            onChange={(date) => setFieldValue("endDate", date)}
            onBlur={handleBlur}
          />
          <Typography className="error-text">
            {errors?.endDate && touched?.endDate && (
              <Typography type="error">{errors.endDate}</Typography>
            )}
          </Typography>
        </Form.Item>
      </div>

      <Form.Item className="ant-design-form" label="Skills :">
        <Select
          type="text"
          name="skills"
          mode="multiple"
          placeholder="Skills"
          onChange={(item) => setFieldValue("skills", item)}
          onBlur={handleBlur}
        >
          {skills?.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Typography className="error-text">
          {errors?.skills && touched?.skills && (
            <Typography type="error">{errors.skills}</Typography>
          )}
        </Typography>
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
        <Typography className="error-text">
          {errors?.description && touched?.description && (
            <Typography type="error">{errors.description} </Typography>
          )}
        </Typography>
      </Form.Item>
    </>
  );
};
