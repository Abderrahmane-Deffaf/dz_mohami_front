// eslint-disable-next-line import/no-unresolved
import { getUser } from "@/Fetches/global";
import LoginForm from "@/components/LoginForm";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { setUser, setType } = useContext(authContext);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const [userCookie] = cookies.filter((Element) => {
      if (Element?.trim().split("=")[0] == "token") {
        return Element;
      }
    });
    console.log(userCookie);
    const token = userCookie?.trim().split("=")[1];

    async function checkUser() {
      if (token) {
        setUser(token);
        try {
          const res = await getUser(token, "/auth/me");
          console.log("check", res);
          if (res?.role == "admin") {
            navigate("/admin-dashboard");
          } else if (res?.role == "avocat") {
            navigate("/avocat-dashboard/home");
          } else if (res?.role == "user") {
            setType("user");
            navigate("/user-dashboard");
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    checkUser();
  }, []);
  return (
    <div className="h-[80vh] flex items-center">
      <div className="max-w-[1170px] bg-darkGray w-fit p-4 rounded-lg flex flex-col gap-4  mx-auto">
        <h1 className=" text-3xl text-center">Bienvenue de retour</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
