import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <main className="min-h-screen text-center flex items-center justify-center">
      <div>
        <img src={img} alt="not found" className="block mb-8 max-w-[600px]" />
        <h3 className="mb-2">Ohh! page not found</h3>
        <p className="mt-0 mb-2 text-grey-500">
          We can't seem to find the page you're looking for
        </p>
        <Link to="/" className="text-primary-500 underline capitalize">
          back home
        </Link>
      </div>
    </main>
  );
};

export default Error;
