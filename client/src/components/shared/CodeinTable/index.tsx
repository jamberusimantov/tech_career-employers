import React, { useEffect, useState } from "react";

import { Table } from "antd";

import "./style.css";

const CodeinTable = (props: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { columns, getData, scroll, tableReload,title } = props;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [getData, tableReload]);

  return (
    <div className="codein-table-wrapper">
      <div className="codein-table-title">
       {title && title}
      </div>

      <Table
        scroll={scroll}
        loading={loading}
        columns={columns}
        dataSource={data}

      />
    </div>
  );
};

export default CodeinTable;
