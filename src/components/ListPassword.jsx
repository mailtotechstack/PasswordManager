import { useDetails } from "../context/context";
import PasswordRow from "./PasswordRow";
export default function ListPassword(){

    const {details, setDetails, setDetail} = useDetails();

    

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

    const handleCopy = async (text)=>{
        try{
            await navigator.clipboard.writeText(text);
        }catch(err){
            console.log("Copy failed", err);
        };
    };

    

    return(<div className="py-2 bg-green-100 md:px-5 lg:w-2/3 lg:mx-auto my-5">
        <h3 className="text-2xl font-bold mx-5">My Passwords</h3>
        <table className="my-2 w-full table-fixed">
            <thead>
                <tr className="bg-green-800 text-white h-12 wrap-break-word">
                    <th >Website</th>
                    <th className="border-x ">Username</th>
                    <th className="border-e">Password</th>
                    <th className="w-16">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-green-200">
                {details.map((detail, idx)=>{
                   return <PasswordRow 
                   key={idx}
                   detail={detail}
                   idx={idx}
                   onEdit={handleEdit}
                   onDelete={handleDelete}
                   onCopy={handleCopy}
                   />
                })
                }
            </tbody>
        </table>
    </div>);
};