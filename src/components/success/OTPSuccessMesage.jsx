import { Button, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const OTPSuccessMesage = () => (
  <>
    <Result
      style={{ marginTop: "30px" }}
      status="success"
      title="Email Verification Successful!"
      subTitle="We have successfully verified your email. You are now ready to access our app!"
      extra={[
        <>
          <NavLink to="/client/home">
            <Button type="primary" key="console">
              Go Home
            </Button>
          </NavLink>
          ,
          <NavLink to="/client/profile">
            <Button key="buy">Build Profile</Button>
          </NavLink>
        </>,
      ]}
    />
  </>
);
export default OTPSuccessMesage;
