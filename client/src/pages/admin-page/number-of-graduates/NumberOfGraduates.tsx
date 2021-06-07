import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { getGraduatesByCourse } from "../../../service/admin.service";
import { Popover, Spin } from "antd";

function NumberOfGraduates(props: any) {
  const [loading, setLoading] = useState(false);
  const [courseGraduates, setCourseGraduates] = useState([]);

  const { courseId, numberOfGraduates } = props;

  const content = (
    <div>
      {loading && <Spin />}
      {!loading &&
        courseGraduates.map((student: any, index) => (
          <Link to={`studentPage/${student._id}`} key={index}>{student.name}</Link>
        ))}
    </div>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const graduates = await getGraduatesByCourse(courseId);

        setCourseGraduates(graduates);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [courseId]);

  return (
    <Popover content={content} title="בוגרים">
      <span>{numberOfGraduates}</span>
    </Popover>
  );
}

export default NumberOfGraduates;
