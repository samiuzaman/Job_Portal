import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
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
import { DotsThreeOutlineVertical } from "phosphor-react";

const MyPostJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(user);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <h2 className="text-2xl lg:text-4xl font-semibold text-primary-700 text-center mb-8">
        My Post Job {jobs?.length}
      </h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Title</TableHead>

              <TableHead>applicationCount</TableHead>
              <TableHead>Deadline</TableHead>
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
                <TableCell>{item.applicationCount}</TableCell>
                <TableCell>{item.applicationDeadline}</TableCell>

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
    </div>
  );
};

export default MyPostJob;
