import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import { DotsThreeOutlineVertical } from "phosphor-react";
import {
  Avatar,
  Badge,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState();
  //   const { company_logo, company, title, candidate_email } = jobs;
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  console.log(jobs);
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto my-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>
              <div>Members</div>
            </TableHead>
            <TableHead>Role</TableHead>
            <TableHead>company</TableHead>
            <TableHead>location</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar>
                  <img src={item.company_logo} />
                </Avatar>
              </TableCell>

              <TableCell>{item.title}</TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{item.location}</TableCell>

              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="w-[200px] border border-metal-100 p-3 dark:border-metal-800"
                  >
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Move</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyApplication;
