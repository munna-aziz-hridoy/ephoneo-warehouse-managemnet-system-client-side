import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          question and answer
        </h2>
      </div>
      <div className="container mx-auto">
        {/* question - 1 */}
        <div className="p-8 rounded-lg border-l-4 border-[#5c2d91] my-20 shadow-xl">
          <h2 className="text-2xl font-bold text-[#25123a] my-5">
            Difference between JavaScript and Node JS
          </h2>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              defination:
            </p>
            <p>
              <span>
                a) Javascript is a programming language which run on javascript
                engine like spider monkey, chrome v8.
              </span>
              <br />
              <span>
                b) Node.js is an environment to run javascript with some useful
                libraries to implement javascript easily
              </span>
            </p>
          </div>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              useage:
            </p>
            <p>
              <span>
                a) javascript is mainly use for client side rendering.
              </span>
              <br />
              <span>
                b) node js is mainly use for creating server and handling server
                side.
              </span>
            </p>
          </div>
        </div>

        {/* question - 2 */}
        <div className="p-8 rounded-lg border-l-4 border-[#5c2d91] my-20 shadow-xl">
          <h2 className="text-2xl font-bold text-[#25123a] my-5">
            When to use nodejs and when to use mongodb
          </h2>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              nodejs:
            </p>
            <p>
              NodeJS is suitable for push-based, real-time applications. It is
              also suitable for the creation of backend APIs.But when dealing
              with heavy computing tasks, it reduces performance.
            </p>
          </div>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              mongodb:
            </p>
            <p>
              Mongodb is a good solution when data does not fit with a
              relational database schema, or when prototyping rapidly.
            </p>
          </div>
        </div>

        {/* question - 3 */}
        <div className="p-8 rounded-lg border-l-4 border-[#5c2d91] my-20 shadow-xl">
          <h2 className="text-2xl font-bold text-[#25123a] my-5">
            Difference between SQL and NoSQL
          </h2>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              sql:
            </p>
            <p>
              SQL is relational database. SQL uses structured query language and
              pre-defined data types.
            </p>
          </div>
          <div className="flex justify-start items-start">
            <p className="text-lg font-bold text-gray-500 capitalize w-[120px]">
              nosql:
            </p>
            <p>
              NoSQL is non relational database. The data schemas for NoSQL
              databases are dynamic for unstructured data.
            </p>
          </div>
        </div>

        {/* question - 4 */}
        <div className="p-8 rounded-lg border-l-4 border-[#5c2d91] my-20 shadow-xl">
          <h2 className="text-2xl font-bold text-[#25123a] my-5">
            What is the purpose of jwt and how does it work
          </h2>
          <p>
            SON Web Tokens are an open standard for sharing security information
            between two parties - clients and servers. JWTs contain encoded JSON
            objects containing a set of claims. The JWTs are signed with a
            cryptographic algorithm to ensure their authenticity after issuance
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
