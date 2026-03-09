import Form from "./Form";
import Header from "./Header";
import ListPassword from "./ListPassword";
import { DetailsProvider } from "../context/context";
import { useEffect, useState } from "react";

export default function Manager() {
  
  const [details, setDetails] = useState(()=>{
    const savedDetails = localStorage.getItem("details");
    return savedDetails? JSON.parse(savedDetails) : [];
  });

  useEffect(()=>{
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  return (
    <DetailsProvider value={{details, setDetails}}>
      <div className="absolute inset-0 -z-10 w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3e6_100%)]"></div>
      <div className="min-h-[90vh]">
        <Header />
        <Form />
        <ListPassword />
      </div>
    </ DetailsProvider>
  );
}
