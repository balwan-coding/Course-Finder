import { useState } from "react";
import CoursesCart from "./CoursesCart";
import { mockCourses } from "./api";

type Datas = {
  name: string;
  type: string;
};

type CourseProp = {
  id: number;
  name: string;
  type: "free" | "paid";
  description: string;
  location: string;
};

function Homepage() {
  const [formData, setFormData] = useState<Datas>({
    name: "",
    type: "",
  });

  const [courses, setCourses] = useState<CourseProp[]>([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const filteredCourses = mockCourses.filter(
      (course: { name: string; type: string }) =>
        (!formData.name || course.name === formData.name) &&
        (!formData.type || course.type === formData.type)
    );

    setCourses(filteredCourses);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 p-3 m-3 border border-black rounded-lg bg-slate-50 bg-">
        <label htmlFor="name">Course</label>
        <select
          id="name"
          onChange={handleInputChange}
          value={formData.name}
          className="p-3 border border-black rounded"
        >
          <option value="">Select Course</option>
          <option value="Business Essentials">Business Essentials</option>
          <option value="HTML & CSS Basics">HTML & CSS Basics</option>
          <option value="Introduction to VFX">Introduction to VFX</option>
          <option value="Game Design Basics">Game Design Basics</option>
        </select>

        <label htmlFor="type">Filter By</label>
        <select
          id="type"
          className="p-3 border border-black rounded"
          value={formData.type}
          onChange={handleInputChange}
        >
          <option value="">Select Type</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        <button
          onClick={handleClick}
          className="p-2 text-white bg-green-400 rounded-md hover:bg-green-700"
        >
          Find Course
        </button>
      </div>
      <div className="flex flex-col items-center">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CoursesCart key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-black">
            No courses found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
