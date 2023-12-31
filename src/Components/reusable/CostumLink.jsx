
import { Link } from "react-router-dom";

const CostumLink = ({text, dist, icon}) => {
  return (
    <Link
      className=" flex text-white px-16 py-2 w-fit bg-orange font-semibold items-center "
      to={dist}
    >
      {icon}
      {text}
    </Link>
  );
}

export default CostumLink