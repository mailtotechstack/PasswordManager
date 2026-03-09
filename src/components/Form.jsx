import { useState } from "react";
import { useDetails } from "../context/context";

export default function Form() {
  const {details, setDetails} = useDetails();

  const [detail, setDetail] = useState({
    site: "",
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if(!detail.site || !detail.username || !detail.password) return;
    setDetails([
        ...details,
        {...detail}
      ]);

    setDetail({
      site: "",
      username: "",
      password: "",
    });
    console.log(detail, details);
  }

  function handleInput(e) {
    const { name, value } = e.target;

    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-2/3 md:mx-5 p-5 lg:mx-auto border flex flex-col gap-5"
    >
      <input
        value={detail.site}
        name="site"
        onChange={handleInput}
        placeholder="Enter website URL"
        className="border w-full h-10 rounded-full border-green-400 ps-5"
        type="text"
      />
      <div className="md:flex gap-5 ">
        <input
          value={detail.username}
          name="username"
          onChange={handleInput}
          placeholder="Enter Username"
          className="border h-10 w-full rounded-full border-green-400 ps-5"
          type="text"
        />
        <span className="md:w-1/3 w-full rounded-full inline-block h-10">
          <input
            value={detail.password}
            name="password"
            onChange={handleInput}
            placeholder="Enter Password"
            className="rounded-full border border-green-400 ps-5 mt-5 md:mt-0 focus:border-black w-full h-full"
            type="text"
          />
        </span>
      </div>
      <button className="border mx-auto rounded-full border-blue-900 w-fit px-5 py-1 active:font-bold bg-green-500">
        Save
      </button>
    </form>
  );
}
