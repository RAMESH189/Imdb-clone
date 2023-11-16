import React from "react";
import Card from "./Card";

export default function Results({ data }) {
  return (
    <div
      className="max-w-7xl mx-auto py-4 sm:grid sm:grid-cols-2
          md:grid-cols-3 lg:grid-cols-4"
    >
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
