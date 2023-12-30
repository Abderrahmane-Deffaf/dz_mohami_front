import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profile = ({text, image, fb}) => {
  return (
    <div className="flex items-center gap-2 justify-center flex-col">
      <Avatar>
        <AvatarImage src={image} alt="profile" />
        <AvatarFallback>{fb}</AvatarFallback>
      </Avatar>
      <p className=" font-semibold text-xl ">{text}</p>
    </div>
  );
}

export default Profile