import React from "react";
const Blogs = () => {
  return (
    <div className=" my-10">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-teal-300 md:w-2/3 w-full mx-auto  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Question 1. Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border my-3 border-teal-300 md:w-2/3 w-full mx-auto  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Question 2. What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. How works:JWTs differ
            from other web tokens in that they contain a set of claims. Claims
            are used to transmit information between two parties. What these
            claims are depends on the use case at hand. For example, a claim may
            assert who issued the token, how long it is valid for, or what
            permissions the client has been granted.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow mb-3 border border-teal-300 md:w-2/3 w-full mx-auto  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Question 3. What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-teal-300 md:w-2/3 w-full mx-auto  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Question 4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
