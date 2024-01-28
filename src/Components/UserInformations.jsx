const UserInformations = ({ nom, prenom, email }) => {
  // const { user } = useContext(UserContext);

  return (
    <div className="border flex flex-col gap-4 border-black p-4 rounded mt-5">
      <div className="flex gap-4">
        Name:
        <p className="border border-black rounded-lg p-2 w-1/2 ml-4">{`${nom} ${prenom}`}</p>
      </div>
      <div className="flex gap-4">
        Email:
        <p className="border border-black rounded-lg p-2 w-1/2 ml-4">{email}</p>
      </div>
    </div>
  );
};

export default UserInformations;
