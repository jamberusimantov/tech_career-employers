import React from 'react';
import { Table } from 'antd';
import '../../../App.css';

const CodeinTable = (props: any): any => {
  const { columns, data } = props;

  return (
    <div className="codein-table-wrapper">
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CodeinTable;