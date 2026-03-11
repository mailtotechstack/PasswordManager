import { useState } from "react";
import { useDetails } from "../context/context";
export default function ListPassword(){

    const [isHover, setIsHover] = useState(false);
    const {details, setDetails, detail, setDetail} = useDetails();

    function handleEdit(idx){
        setDetail(details[idx]);
        handleDelete(idx);
    }

    function handleDelete(idx){
        console.log(idx);
        setDetails((prev)=>{
            return prev.filter((data, i)=>(
                idx !== i
            ));
        });
    };

    return(<div className="py-2 bg-green-100 md:px-5 lg:w-2/3 lg:mx-auto my-5">
        <h3 className="text-2xl font-bold mx-5">My Passwords</h3>
        <table className="my-2 w-full table-fixed">
            <thead>
                <tr className="bg-green-800 text-white h-12 wrap-break-word">
                    <th >Website</th>
                    <th className="border-x ">Username</th>
                    <th className="border-e">Password</th>
                    <th className="w-20">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-green-200">
                {details.map((detail, idx)=>{
                   return <tr key={idx} className="border text-center h-10 ">
                    <td className=" overflow-hidden" ><span>{detail.site}</span><img className="h-5 px-2 inline-block mb-1 rounded-full" src="/copy.gif" alt="copy"/></td>
                    <td className=" border-x overflow-hidden"><span>{detail.username}</span><img className="h-5 px-2 inline-block mb-1 rounded-full" src="/copy.gif" alt="copy"/></td>
                    <td className=" border-e overflow-hidden"><span>{detail.password}</span><img className="h-5 px-2 inline-block mb-1 rounded-full" src="/copy.gif" alt="copy"/></td>
                    <td className=" py-2 w-20 flex flex-wrap">
                        <img onClick={()=>{handleEdit(idx)}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="h-5 mx-2" src={isHover? "/edit.gif" : "/edit.svg"} alt="edit" /> 
                        <img onClick={()=>{handleDelete(idx)}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="h-5 mx-2" src={isHover? "/delete.gif" : "/delete.svg"} alt="delete" />
                    </td>
                </tr>
                })
                }
            </tbody>
        </table>
    </div>);
};