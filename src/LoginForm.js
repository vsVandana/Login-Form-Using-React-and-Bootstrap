import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const SubmitForm = () => {
    const info = {
      email: email,
      pass: passw,
    };
    setDataInput(info);
  };
  return (
    <div className="form d-flex align-items-center justify-content-center border rounded  m-auto  bg-white">
      <form onSubmit={SubmitForm} className="mb-2 mt-2 pb-2 pt-2">
        <h1 className=" m-3 p-4 ">Login Form</h1>
        <div className="input-container ">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Username Or Email"
            className="w-100 mb-4 border-none rounded p-2 fs-6  d-flex flex-wrap"
          />
        </div>
        <div className="input-container ">
          <input
            type="password"
            name="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            placeholder="Enter Password"
            className="w-100  mb-4 border-none rounded p-2 fs-6 d-flex flex-wrap"
          />
        </div>
        <div className="button-container pt-2 pb-2">
          <button
            type="submit"
            className="fw-bold fs-5 mt-2 mb-2 rounded text-white p-2 w-100"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
