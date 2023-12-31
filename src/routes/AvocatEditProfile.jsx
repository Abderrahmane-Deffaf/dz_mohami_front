// eslint-disable-next-line import/no-unresolved
import EditAvocatPassword from "@/components/EditAvocatPassword";
// eslint-disable-next-line import/no-unresolved
import EditAvocatProfile from "@/components/EditAvocatProfile";

const AvocatEditProfile = () => {
  

  return (
    <div className="basis-[80%] bg-lightGray space-y-[5rem] p-8">
      <h1>Modifier votre profile</h1>
      <EditAvocatProfile />
      <h2>Changer le mot de passe</h2>
      <EditAvocatPassword />
    </div>
  );
};


export default AvocatEditProfile