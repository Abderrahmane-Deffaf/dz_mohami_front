// eslint-disable-next-line import/no-unresolved
import RegisterAvocatForm from "@/components/RegisterAvocatForm";

const AvocatRegister = () => {
  return (
    <div className=" h-screen bg-darkGray">
      <div className="max-w-[1170px] flex flex-col gap-8 py-8 mx-auto">
        <h1 className=" text-center">Registre Form </h1>
        <RegisterAvocatForm />
      </div>
    </div>
  );
};

export default AvocatRegister;
