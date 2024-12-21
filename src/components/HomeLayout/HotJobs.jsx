import { useEffect, useState } from "react";
import HotJobCards from "./HotJobCards";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-16">
      <h2 className="text-3xl text-center font-bold text-success-700 mb-8">Hot Job</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {jobs?.map((job) => (
          <HotJobCards key={job._id} job={job}></HotJobCards>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
