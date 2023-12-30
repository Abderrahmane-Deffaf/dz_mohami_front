import { Link } from "react-router-dom";

const CostumLink = ({text, dist}) => {
  return (
    <Link
      className=" text-white px-20 py-2 w-fit bg-orange font-semibold "
      to={dist}
    >
      {text}
    </Link>
  );
}

export default CostumLink