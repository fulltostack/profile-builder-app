import React from "react";
import { PageHeader } from "antd";

import { ROUTES } from "../../Constants/routes";

import "./style.css";

export const HeaderView = () => {
  
  return (
    <PageHeader
      className="site-page-header"
      title={
        <a className="profile-builder" href={ROUTES.root}>
          Profile Builder
        </a>
      }
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
    />
  );
};
