import { useState } from "react";
import { useDetails } from "../context/context";

export default function Form() {
  const {details, setDetails, detail, setDetail} = useDetails();
  const [isHover, setIsHover] = useState(false);

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

  const [visible, setVisible] = useState(false);

  function handleVisibility(){
    setVisible(!visible);
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
        required
        value={detail.site}
        name="site"
        onChange={handleInput}
        placeholder="Enter website URL"
        className="border w-full h-10 rounded-full border-green-400 ps-5"
        type="text"
      />
      <div className="md:flex gap-5 ">
        <input
          required
          value={detail.username}
          name="username"
          onChange={handleInput}
          placeholder="Enter Username"
          className="border h-10 w-full rounded-full border-green-400 ps-5"
          type="text"
        />
        <span tabIndex={0} className="ps-5 mt-5 md:mt-0 outline outline-green-400  focus-within:outline-black focus-within:outline-2 flex items-center md:w-1/3 w-full rounded-full h-10">
          <input
            required
            value={detail.password}
            name="password"
            onChange={handleInput}
            placeholder="Enter Password"
            className=" w-full h-full outline-none"
            type={visible? "text": "password"}
          />
          <img onClick={handleVisibility} className="h-5 px-5 cursor-pointer" src={!visible ? "/invisible.png" : "/visible.svg"}  alt="eye" />
        </span>
      </div>
      <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="border flex items-center mx-auto rounded-full border-blue-900 px-5 py-1 active:font-bold bg-green-500">
        <img className="h-5 me-1" src={isHover ? "/add.gif" : "/addStatic.svg"} alt="icon" />
        <span>Save</span>
      </button>
    </form>
  );
}
