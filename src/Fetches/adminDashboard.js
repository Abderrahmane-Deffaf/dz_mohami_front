// eslint-disable-next-line import/named
import axios from "axios";

export const getAdminData = async () => {
  const data = await axios.get("https://api.npoint.io/21563c4cbba08fd593b2");
  console.log(data.data);
  return data.data;
};
