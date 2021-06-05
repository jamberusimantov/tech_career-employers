import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

const { Meta } = Card;

export default function JobCard() {
  return (
    <div style={{textAlign:"left"}}>
      <Link to="/recruiter/checkpoint">
        <Card style={{ padding: 5, cursor: "pointer"}}>
          <Meta
            avatar={<Avatar size="large" src="/img/checkpoint.png" />}
            title="Full Stack Developer"
             description="Check Point "
          />
          {/* <Avatar src="/img/checkpoint.png" />
          <div>
            <h3>full stack</h3>
            <p>HoneyBook</p>
            <p>Tel Aviv</p>
          </div> */}
          <p>Tel Aviv</p>
          <p>Aplicants 5</p>
        </Card>
      </Link>
    </div>
  );
}
