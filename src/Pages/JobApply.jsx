import { Button, Input, Label } from "keep-react";
import { useParams } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const handleApplyJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const job_id = id;
    const candidate_email = user.email;
    const candidate = {
      job_id,
      candidate_email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(candidate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Application Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-sm mx-auto mt-12 border-2 border-metal-600 p-8 rounded-lg">
      <form onSubmit={handleApplyJob} className="space-y-2">
        <fieldset className="space-y-1">
          <Label htmlFor="url">LinkedIn URL</Label>
          <div className="relative">
            <Input
              required
              name="linkedin"
              type="url"
              placeholder="LinkedIn URL"
              className=""
            />
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="url">Github URL</Label>
          <div className="relative">
            <Input
              required
              name="github"
              type="url"
              placeholder="Github URL"
              className=""
            />
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="url">Resume URL</Label>
          <div className="relative">
            <Input
              required
              name="resume"
              type="url"
              placeholder="Resume URL"
              className=""
            />
          </div>
        </fieldset>

        <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
          Apply
        </Button>
      </form>
    </div>
  );
};

export default JobApply;
