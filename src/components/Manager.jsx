import Form from "./Form";
import Header from "./Header";
export default function Manager() {
  return (<>
  <div className="absolute inset-0 -z-10 w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3e6_100%)]"></div>
  <div className="min-h-[90vh]">
    <Header />
    <Form />
  </div>
  </>
  );
}
