import { Button, Divider } from "keep-react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const loadedJob = useLoaderData();
  const {
    _id,
    title,
    jobType,
    company,
    category,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    applicationDeadline,
    status,
  } = loadedJob;
  console.log(loadedJob);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-6">
      <div>
        <h2 className="text-3xl font-bold text-[#05264E]">{title}</h2>
        <p className="text-[#66789C]"> {jobType}</p>
      </div>
      <Divider className="my-6"></Divider>
      <div className="flex justify-between gap-6">
        <div className="w-3/6 border border-metal-500 p-6 rounded-xl">
          <h3 className="text-[#05264E] text-xl font-medium">
            Employment Info
          </h3>
          <Divider className="my-4"></Divider>
          <div className=" text-[#05264E] text-lg font-medium">
            <p className="flex">
              <span className="text-[#66789C]">Company: </span> {company}
            </p>
            <p>
              {" "}
              <span className="text-[#66789C]">Job Type: </span> {jobType}
            </p>
            <p>
              {" "}
              <span className="text-[#66789C]">Job Category: </span> {category}
            </p>
            <p>
              {" "}
              <span className="text-[#66789C]">Location: </span>
              {location}
            </p>
            <p>
              <span className="text-[#66789C]">Salary Range : </span>{" "}
              {salaryRange.min}-{salaryRange.max}/{salaryRange.currency}
            </p>
            <p>
              {" "}
              <span className="text-[#66789C]">Deadline: </span>{" "}
              {applicationDeadline}
            </p>
            <p>
              {" "}
              <span className="text-[#66789C]">Status: </span>
              {status}
            </p>
          </div>
        </div>

        <div className="w-1/2 p-4 my-6">
          <h4 className="text-xl text-[#05264E] font-medium">Description</h4>
          <p> {description}</p>
          <Divider className="my-4"></Divider>

          <div className="space-x-2">
            <Button>Apply Now</Button>
            <Button variant="softBg">Save Job</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
