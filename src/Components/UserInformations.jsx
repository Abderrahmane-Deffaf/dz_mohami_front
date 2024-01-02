const UserInformations = () => {
    // const { user } = useContext(UserContext);


  return (
    <div className="border border-black p-4 rounded mt-5">
      <label>
        Name:
        <input
        className="border border-black rounded-lg p-2 w-1/2 ml-4"    
          type="text"
          name="name"
          value="Ranim benkerri"
        
        />
      </label>
      <br />
      <br />
      <label>
        Email: 
        <input
        className="border border-black rounded-lg p-2 w-1/2 ml-4"    
          type="email"
          name="email"
          value="ranim@gmail.com"
       
        />
      </label>

      <br />

    
    </div>
  );
};

export default UserInformations;