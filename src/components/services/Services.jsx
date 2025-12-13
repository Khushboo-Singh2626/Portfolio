import React from "react";
import Card from "./Card";
import { servicesData } from "../../data/servicesData";

export default function Services() {
  return (
    <section className="mt-20">
      <h1 className="text-white text-5xl font-bold mb-12 text-center">
        My Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            title={service.title}
            full={service.full}
          />
        ))}
      </div>
    </section>
  );
}
