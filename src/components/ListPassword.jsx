import { useDetails } from "../context/context";
export default function ListPassword(){

    const {details} = useDetails();
    console.log(details)

    return(<div className="border px-5 lg:w-2/3 lg:mx-auto my-5">
        <h3 className="text-2xl font-bold mx-5">My Passwords</h3>
        <table className="my-2 w-full">
            <thead>
                <tr className="border bg-green-800 text-white h-12">
                    <th className="">Website</th>
                    <th className="border-x">Username</th>
                    <th>Password</th>
                    <th className="border-s">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-green-200">
                {details.map((detail, idx)=>{
                   return <tr key={idx} className="border text-center h-10">
                    <td>{detail.site}</td>
                    <td className="border-x">{detail.username}</td>
                    <td>{detail.password}</td>
                    <td className="border-s"><span>0</span> <span>k</span></td>
                </tr>
                })
                }
            </tbody>
        </table>
    </div>);
};