import { Table } from "antd";

import "./style.css";

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
    title: "workExperience",
    key: "workExperience",
    dataIndex: "workExperience",
    children: [
      {
        title: "Company",
        key: "company",
        dataIndex: "workExperience",
        render: (workExperience, row, index) => {
          const columns = [
            {
              dataIndex: "company",
              key: "company",
            },
          ];
          return (
            <Table
              rowKey="company"
              columns={columns}
              dataSource={workExperience}
              pagination={false}
              scroll={{ x: 100 }}
              bordered
            />
          );
        },
      },
      {
        title: "Role",
        key: "role",
        dataIndex: "workExperience",
        render: (workExperience, row, index) => {
          const columns = [
            {
              dataIndex: "role",
              key: "role",
            },
          ];
          return (
            <Table
              rowKey="role"
              columns={columns}
              dataSource={workExperience}
              pagination={false}
              scroll={{ x: 100 }}
              bordered
            />
          );
        },
      },
      {
        title: "StartDate",
        key: "startDate",
        dataIndex: "workExperience",
        render: (workExperience, row, index) => {
          const columns = [
            {
              dataIndex: "startDate",
              key: "startDate",
            },
          ];
          return (
            <Table
              rowKey="startDate"
              columns={columns}
              dataSource={workExperience}
              pagination={false}
              bordered
            />
          );
        },
      },
      {
        title: "EndDate",
        key: "endDate",
        dataIndex: "workExperience",
        render: (workExperience, row, index) => {
          const columns = [
            {
              dataIndex: "endDate",
              key: "endDate",
            },
          ];
          return (
            <Table
              rowKey="endDate"
              columns={columns}
              dataSource={workExperience}
              pagination={false}
              bordered
            />
          );
        },
      },
      {
        title: "Description",
        key: "description",
        dataIndex: "workExperience",
        render: (workExperience, row, index) => {
          const columns = [
            {
              dataIndex: "description",
              key: "description",
            },
          ];
          return (
            <Table
              rowKey="description"
              columns={columns}
              dataSource={workExperience}
              pagination={false}
              scroll={{ x: 100 }}
              bordered
            />
          );
        },
      },
    ],
  },
];
