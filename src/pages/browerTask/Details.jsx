import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const Details = () => {
    const {name,email,deadline ,budget, title, category, description} = useLoaderData()
    return (
<div className="max-w-3xl mx-auto my-10 px-4">
  <Helmet>
     <title>Freelancer || Browser|| Details</title>
  </Helmet>
  <div className="card bg-base-100 shadow-xl border">
    <div className="card-body">
      <h2 className="card-title text-3xl font-bold">
        {title}
      </h2>

      <div className="divider"></div>

      <div className="space-y-4">

        <p>
          <span className="font-semibold">Category:</span>{" "}
          {category}
        </p>

        <p>
          <span className="font-semibold">Description:</span>{" "}
          {description}
        </p>

        <p>
          <span className="font-semibold">Deadline:</span>{" "}
          {deadline}
        </p>

        <p>
          <span className="font-semibold">Budget:</span>{" "}
          ${budget}
        </p>

        <p>
          <span className="font-semibold">Posted By:</span>{" "}
          {name}
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {email}
        </p>

      </div>
    </div>
  </div>
</div>
    );
};

export default Details;