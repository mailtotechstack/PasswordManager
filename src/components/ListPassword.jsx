import { useState } from "react";
import { useDetails } from "../context/context";
export default function ListPassword(){

    const [isHover, setIsHover] = useState(false);
    const {details} = useDetails();
    console.log(details)

    return(<div className="py-2 bg-green-100 md:px-5 lg:w-2/3 lg:mx-auto my-5">
        <h3 className="text-2xl font-bold mx-5">My Passwords</h3>
        <table className="my-2 w-full">
            <thead>
                <tr className="bg-green-800 text-white h-12">
                    <th>Website</th>
                    <th className="border-x">Username</th>
                    <th className="border-e">Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="bg-green-200">
                {details.map((detail, idx)=>{
                   return <tr key={idx} className="border text-center h-10">
                    <td>{detail.site}</td>
                    <td className="border-x">{detail.username}</td>
                    <td className="border-e">{detail.password}</td>
                    <td className="flex justify-center items-center py-2">
                        <img onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="h-5 mx-2" src={isHover? "/edit.gif" : "/edit.svg"} alt="edit" /> 
                        <img onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="h-5 mx-2" src={isHover? "/delete.gif" : "/delete.svg"} alt="delete" />
                    </td>
                </tr>
                })
                }
            </tbody>
        </table>
    </div>);
};