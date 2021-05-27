import React, { useEffect, useState } from 'react';

import { Table, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import '../../../App.css';


const CodeinTable = (props: any): any => {
  const { columns, getData } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [data, setData] = useState([])




  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function fetchData() {

      try {
        setLoading(true);
        const dataC = await getData();
        setData(dataC);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [])

  return (
    
    <div className="codein-table-wrapper">

      <div>

        <Button icon={loading ? <LoadingOutlined /> : ""} type="primary">רענן</Button>

      </div>

      <Table

        loading={loading}
        columns={columns}
        dataSource={data}
      />
    </div>

  );
};

export default CodeinTable;