import {
  Button,
  Input,
  Label,
  Select,
  SelectAction,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
  Textarea,
} from "keep-react";

import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddjob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "New Job Addded",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mypostjob");
        }
      });
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto">
      <form
        onSubmit={handleAddjob}
        className="w-11/12 lg:w-4/6 mx-auto space-y-2 rounded-lg border p-8 shadow-md my-12 "
      >
        <h3 className="text-3xl font-bold text-center text-primary-500 mb-6">
          Create New Job
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Job Title</Label>
            <div>
              <Input type="text" name="title" placeholder="Enter Job Title" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="Category">Job Type</Label>
            <Select name="jobType">
              <SelectAction className="w-full lg:w-[20rem]">
                <SelectValue placeholder="Select Type" />
              </SelectAction>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Onsite">Onsite</SelectItem>
                  <SelectItem value="Remote">Remote </SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="Description">Category</Label>
            <Select name="category">
              <SelectAction className="w-full lg:w-[20rem]">
                <SelectValue placeholder="Select Category" />
              </SelectAction>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Graphic Designer">
                    Graphic Designer
                  </SelectItem>
                  <SelectItem value="UX Designer">UX Designer </SelectItem>
                  <SelectItem value="Product Manager">
                    Product Manager
                  </SelectItem>
                  <SelectItem value="Web Designer">Web Designer</SelectItem>
                  <SelectItem value="Software Engineer">
                    Software Engineer
                  </SelectItem>
                  <SelectItem value="Marketing Manager">
                    Marketing Manager
                  </SelectItem>
                  <SelectItem value="Web Developer">Web Developer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="price">Application Deadline</Label>

            <div>
              <Input
                type="date"
                name="applicationDeadline"
                placeholder="Deadline"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Status</Label>
            <div>
              <Input type="text" name="status" placeholder="status" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="processing time">Company</Label>
            <div>
              <Input type="text" name="company" placeholder="Company" />
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="stock status">Salary</Label>
            <div className="flex items-center gap-2">
              <fieldset className="space-y-1">
                <div>
                  <Input type="number" name="min" placeholder="Min" />
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <div>
                  <Input type="number" name="max" placeholder="max" />
                </div>
              </fieldset>
              <Select name="currency">
                <SelectAction>
                  <SelectValue name="currency" placeholder="Currency" />
                </SelectAction>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BDT">BDT</SelectItem>
                    <SelectItem value="BRL">BRL</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="INR">INR </SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="stock status">Location</Label>
            <div>
              <Input type="text" name="location" placeholder="Location" />
            </div>
          </fieldset>
        </div>

        <div className="space-y-5 pt-5">
          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Description</Label>
            <div>
              <Textarea
                name="description"
                placeholder="Write your description"
                rows={2}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Requirements</Label>
            <div>
              <Textarea
                name="requirements"
                placeholder="Write your requirements"
                rows={2}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1">
            <Label htmlFor="customizatin">Responsibilities</Label>
            <div>
              <Textarea
                name="responsibilities"
                placeholder="Write your responsibilities"
                rows={2}
              />
            </div>
          </fieldset>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <fieldset className="space-y-1">
              <Label htmlFor="customizatin">HR Name</Label>
              <div>
                <Input type="text" name="hr_name" placeholder="HR Name" />
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="customizatin">HR Email</Label>
              <div>
                <Input
                  type="email"
                  name="hr_email"
                  defaultValue={user?.email}
                  placeholder="HR Email"
                />
              </div>
            </fieldset>
          </div>

          <fieldset className="space-y-1 pb-4">
            <Label htmlFor="name">Company Logo URL</Label>
            <div>
              <Input
                type="url"
                name="company_logo"
                placeholder="Company Logo URL"
              />
            </div>
          </fieldset>
        </div>

        <Button size="sm" color="secondary" type="submit" className="w-full">
          Add Equipment
        </Button>
      </form>
    </div>
  );
};

export default AddJob;
