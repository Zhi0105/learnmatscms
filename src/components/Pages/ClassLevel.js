import React from "react";
import Card from "../Card/Card";

export const ClassLevel = () => {
  const grades = ["Grade 1", "Grade 2", "Grade 3"];

  return (
    <div className="p-8 classlevel_main">
      <h1 className="mb-8 text-4xl font-bold">Class Levels</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {grades.map((grade, index) => (
          <Card key={index} grade={grade} />
        ))}
      </div>
    </div>
  );
};
