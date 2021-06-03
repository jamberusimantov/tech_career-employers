/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import { Table, Button, Pagination, Input, Modal } from "antd";

import "../../../App.css";

const CodeinTable = (props: any): any => {
  const { columns, dataSource } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [data, setData] = useState([]);

  function itemRender(current: any, type: any, originalElement: any) {
    if (type === "prev") {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>Previous</a>;
    }
    if (type === "next") {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>Next</a>;
    }
    return originalElement;
  }
  return (
    <div className="codein-table-wrapper">
      <div>
        {/* <Button icon={loading ? <LoadingOutlined /> : ""} type="primary">רענן</Button> */}
      </div>

      <Table loading={loading} columns={columns} dataSource={dataSource} />

      <Pagination total={100} itemRender={itemRender} />
    </div>
  );
};

export default CodeinTable;
