/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Table, Button,Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import '../../../App.css';


const CodeinTable = (props: any): any => {

  const { columns, getData } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [data, setData] = useState([])


  function itemRender(current: any, type:any, originalElement: any) {
    if (type === 'prev') {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>Previous</a>;
    }
    if (type === 'next') {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>Next</a>;
    }
    return originalElement;
  }



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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Pagination total={100} itemRender={itemRender} />
    </div>

  );
};

export default CodeinTable;