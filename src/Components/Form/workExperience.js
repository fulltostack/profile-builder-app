import { Input, Typography, Form } from "antd";
import { FieldArray, Field } from "formik";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

import "./style.css";

export const WorkExperience = ({
  errors,
  values,
  handleBlur,
  handleChange,
  renderErrorSection,
  touched,
}) => {
  const { TextArea } = Input;

  return (
    <FieldArray name="workExperience">
      {({ remove, push }) => (
        <div>
          <div className="ant-text">
            <Typography orientation="left">Work Experiences:</Typography>
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
                <Typography orientation="left">
                  Work Experience: {index + 1}
                </Typography>
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
                        errors?.workExperience[index]?.company,
                        touched?.workExperience[index]?.company
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
                        errors?.workExperience[index]?.role,
                        touched?.workExperience[index]?.role
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
                        errors?.workExperience[index]?.startDate,
                        touched?.workExperience[index]?.startDate
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
                        errors?.workExperience[index]?.endDate,
                        touched?.workExperience[index]?.endDate
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
                      errors?.workExperience[index]?.description,
                      touched?.workExperience[index]?.description
                    )}
                </Form.Item>
              </div>
            ))}
        </div>
      )}
    </FieldArray>
  );
};
