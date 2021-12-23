import { PageHeader } from "antd";

import { ROUTES } from "../../Constants/routes";

import "./style.css";

export const HeaderView = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Profile Builder"
      extra={[
        <div key="header" className="header-links">
          <a className="create-profile" href={ROUTES.createProfile}>
            Create Profile
          </a>
          <a className="view-profile" href={ROUTES.root}>
            View Profile
          </a>
        </div>,
      ]}
      style={{ width: "100%" }}
    />
  );
};
