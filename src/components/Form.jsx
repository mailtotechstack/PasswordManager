export default function Form(){
  return (
    <form className="lg:w-2/3 md:mx-5 p-5 lg:mx-auto border flex flex-col gap-5">
      <input placeholder="Enter website URL" className="border w-full rounded-full border-green-400 ps-5" type="text" />
      <div className="md:flex gap-5">
        <input placeholder="Enter Username" className="border w-full rounded-full border-green-400 ps-5" type="text" />
        <span className="md:w-1/3 w-full rounded-full overflow-hidden">
            <input placeholder="Enter Password" className="rounded-full border border-green-400 ps-5 mt-5 md:mt-0 focus:border-black w-full h-full"  type="text" />
        </span>
      </div>
      <button className="border mx-auto rounded-full border-blue-900 w-fit px-5 py-1 active:font-bold bg-green-500">Save</button>
    </form>
  )
}
