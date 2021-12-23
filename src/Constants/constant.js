import { Tag } from "antd";

export const INITIALVALUES = {
  firstName: "",
  lastName: "",
  email: "",
  tagLine: "",
  skills: [],
  workExperience: [
    {
      company: "",
      role: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ],
  id: new Date().getMilliseconds().toString(),
};

export const SKILLS = [
  "React ",
  "Angular ",
  "Python ",
  "java ",
  "javaScript ",
  "Django ",
  "Html ",
  "CSS ",
  "Next Js ",
];

export const COLUMNHEADERS = [
  {
    title: "FirstName",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "TagLine",
    dataIndex: "tagLine",
    key: "tagLine",
  },

  {
    title: "Company",
    dataIndex: "workExperience",
    render: (workExperience) =>
      workExperience?.map((service) => (
        <Tag color="purple" key={service.company}>
          {service.company}
        </Tag>
      )),
    key: "workExperience",
  },
  {
    title: "Role",
    dataIndex: "workExperience",
    render: (workExperience) =>
      workExperience?.map((service) => (
        <Tag color="gold" key={service.role}>
          {service.role}
        </Tag>
      )),
    key: "workExperience",
  },
  {
    title: "StartDate",
    dataIndex: "workExperience",
    render: (workExperience) =>
      workExperience?.map((service) => (
        <Tag color="cyan" key={service.startDate}>
          {service.startDate}
        </Tag>
      )),
    key: "workExperience",
  },
  {
    title: "EndDate",
    dataIndex: "workExperience",
    render: (workExperience) =>
      workExperience?.map((service) => (
        <Tag color="volcano" key={service.endDate}>
          {service.endDate}
        </Tag>
      )),
    key: "workExperience",
  },
  {
    title: "Description",
    dataIndex: "workExperience",
    render: (workExperience) =>
      workExperience?.map((service) => (
        <p key={service.description}>{service.description}</p>
      )),
    key: "workExperience",
  },
];
