// eslint-disable-next-line import/no-unresolved
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="h-[80vh] flex items-center">
      <div className="max-w-[1170px] bg-darkGray w-fit p-4 rounded-lg flex flex-col gap-4  mx-auto">
        <h1 className=" text-3xl text-center">Bienvenue de retour</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login