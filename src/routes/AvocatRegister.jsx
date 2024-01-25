import RegisterAvocatForm from "@/components/RegisterAvocatForm";

const AvocatRegister = () => {
  return (
    <div className=" bg-darkGray">
      <div className="max-w-[1170px] flex flex-col gap-8 py-8 mx-auto">
        <h1 className=" text-center">Formulaire d&apos;inscription</h1>
        <RegisterAvocatForm />
      </div>
    </div>
  );
};

export default AvocatRegister;
