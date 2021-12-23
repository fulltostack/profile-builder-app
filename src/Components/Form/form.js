import { Input, DatePicker, Select, Form } from "antd";
import "./style.css";

export const FormView = ({
  handleBlur,
  handleChange,
  setFieldValue,
  values,
  skills,
}) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="FirstName :">
        <Input
          type="text"
          name="firstName"
          value={values.firstName}
          placeholder="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="LastName :">
        <Input
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="Email :">
        <Input
          type="text"
          name="email"
          value={values.email}
          placeholder="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="TagLine :">
        <Input
          type="text"
          name="tagLine"
          value={values.tagLine}
          placeholder="tagLine"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="Company :">
        <Input
          type="text"
          name="company"
          value={values.company}
          placeholder="company"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="Role">
        <Input
          type="text"
          name="role"
          value={values.role}
          placeholder="role"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="Description :">
        <Input
          type="text"
          name="description"
          value={values.description}
          placeholder="description"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="StartDate :">
        <DatePicker
          type="Date"
          name="startDate"
          value={values.startDate}
          placeholder="Start Date"
          onChange={(date) => setFieldValue("startDate", date)}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="EndDate :">
        <DatePicker
          type="Date"
          name="endDate"
          value={values.endDate}
          placeholder="End Date"
          onChange={(date) => setFieldValue("endDate", date)}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item label="Skills :">
        <Select
          type="text"
          name="skills"
          placeholder="Skills"
          value={values.skills}
          onChange={(item) => setFieldValue("skills", item)}
          onBlur={handleBlur}
        >
          {skills.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
