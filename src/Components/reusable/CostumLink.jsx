import { Link } from "react-router-dom";

const CostumLink = ({text}) => {
  return (
    <Link
      className=" text-white px-20 py-2 w-fit bg-orange font-semibold "
      to="/avocat-register"
    >
      {text}
    </Link>
  );
}

export default CostumLink