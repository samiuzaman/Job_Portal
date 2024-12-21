import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "keep-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const HotJobCards = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <Card className="pt-6 pb-3">
        <CardHeader className="flex items-center gap-3 px-4">
          <img src={company_logo} />
          <div>
            <h4 className="text-2xl font-semibold">{company}</h4>
            <p className="flex gap-2 items-center text-metal-600">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>

          <div className="space-y-2">
            {requirements.map((skill) => (
              <Badge variant="border" className="mr-2">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-6 pb-3">
          <p className="text-metal-600">
            <span className="text-xl text-primary-600">
              {salaryRange.min}-{salaryRange.max}
            </span>
            /{salaryRange.currency}
          </p>
          <Button variant="softBg" className="hover:bg-primary-700 hover:text-white">Apply Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HotJobCards;
