import { PageHeader, Anchor } from "antd";

export const HeaderView = () => {
  const { Link } = Anchor;

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Profile Builder"
      extra={[
        <Anchor>
          <Link href="/home">Home</Link>
          <Link href="#components-anchor-demo-basic">Edit Profile</Link>
          <Link href="#components-anchor-demo-basic">View Profile</Link>
        </Anchor>,
      ]}
      style={{ width: "100%" }}
    />
  );
};
