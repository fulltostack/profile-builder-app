import { Table, Space, Tag } from "antd";
import { useNavigate } from "react-router";
import moment from "moment";

import { deleteUserProfile, getUserProfile } from "../../Service/service";
import { COLUMNHEADERS } from "../../Constants";
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
    ...COLUMNHEADERS,
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (skills) => (
        <>
          {skills.map((item) => {
            let color = item.length > 5 ? "geekblue" : "green";
            return (
              <Tag color={color} key={item}>
                {item.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Experience",
      dataIndex: "workExperience",
      render: (workExperience) =>
        `${moment(workExperience?.at(-1).startDate).format(
          "MMM-YYYY"
        )} -Present`,
      key: "workExperience",
    },
    {
      title: "Actions",
      fixed: "right",
      width: 100,
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
      fixed: "right",
      width: 100,
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
