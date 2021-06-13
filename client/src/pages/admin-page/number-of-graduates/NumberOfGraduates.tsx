import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getManyStudents } from "../../../utils/drafts/student.utils";
import { Popover, Spin } from "antd";

function NumberOfGraduates(props: any) {
  const [loading, setLoading] = useState(false);
  const [courseGraduates, setCourseGraduates] = useState([]);

  const { courseId, numberOfGraduates } = props;

  const content = (
    <div>
      {loading && <Spin />}
      {!loading &&
        courseGraduates.map((student: any) => (
          <div key={`${student._id}`}>
            {" "}
            <Link to={`studentPage/${student._id}`}>{student.name}</Link>
          </div>
        ))}
    </div>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const graduatesFromSameCycle = await getManyStudents({ courseId });
        console.log(graduatesFromSameCycle);

        setCourseGraduates(graduatesFromSameCycle);

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
