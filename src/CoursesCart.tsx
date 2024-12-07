import { FC } from "react";

type CoursesCartProps = {
  name: string;
  id: number;
  description: string;
  location: string;
  type: string;
};

const CoursesCart: FC<{ course: CoursesCartProps }> = ({ course }) => {
  return (
    <div className="flex flex-col gap-3 p-3 m-auto bg-indigo-600 rounded-lg w-72 md:w-80 lg:w-96 sm:w-80">
      <h1 className="text-xl text-white">
        <span className="text-xl text-red-600 ">Name:</span> {course.name}
      </h1>
      <p className="text-xl text-white">
        <span className="text-xl text-red-600 ">Description:</span>{" "}
        {course.description}
      </p>
      <p className="text-xl text-white">
        <span className="text-xl text-red-600 ">Location:</span>{" "}
        {course.location}
      </p>
      <span className="text-xl text-white">
        <span className="text-xl text-red-600 ">Type:</span> {course.type}
      </span>
    </div>
  );
};

export default CoursesCart;
