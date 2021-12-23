export const INITIALVALUES = {
  firstName: "",
  lastName: "",
  email: "",
  tagLine: "",
  company: "",
  role: "",
  startDate: "",
  endDate: "",
  description: "",
  skills: [],
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
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "StartDate",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "EndDate",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Skills",
    dataIndex: "skills",
    key: "skills",
  },
];
