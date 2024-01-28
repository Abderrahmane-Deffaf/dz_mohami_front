import RegisterAvocatForm from "@/components/RegisterAvocatForm";

const AvocatRegister = () => {
  return (
    <div dir="ltr" className=" bg-darkGray">
      <div className="max-w-[1170px] flex flex-col gap-8 py-8 mx-auto">
        <h1 className=" text-center">Formulaire d&apos;inscription</h1>
        <p className="text-center ">Toutes les champs sont oblégatoire</p>
        <RegisterAvocatForm />
      </div>
    </div>
  );
};

export default AvocatRegister;
