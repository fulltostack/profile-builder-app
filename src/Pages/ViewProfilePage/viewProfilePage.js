import { Table, Space } from "antd";
import { useNavigate } from "react-router";

import { deleteUserProfile, getUserProfile } from "../../Service/service";
import { ROUTES } from "../../Constants/routes";

import "./style.css";

export const ViewProfilePage = () => {
  const userProfileList = getUserProfile();
  let navigate = useNavigate();

  const onUpdate = (record) => {
    navigate(ROUTES.editProfile, {
      state: { edit: true, recordId: record.id },
    });
  };

  const onDelete = (record) => {
    deleteUserProfile(record.id);
    navigate(ROUTES.root);
  };

  const columns = [
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
    {
      render: (record) => (
        <Space size="middle">
          <button
            onClick={() => {
              onDelete(record);
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
    {
      render: (record) => (
        <Space size="middle">
          <button onClick={() => onUpdate(record)}>Update</button>
        </Space>
      ),
    },
  ];

  return (
    <div className="ant-table-container">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={userProfileList}
        scroll={{ x: 1500 }}
        sticky
      />
    </div>
  );
};
