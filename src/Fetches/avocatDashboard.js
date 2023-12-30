// eslint-disable-next-line import/named
import axios  from "axios";


export const getAvocatBookings = async () => {
  const data = await axios.get("https://api.npoint.io/5b6284b923c5345ae1f6");
  console.log(data.data) ; 
  return data.data
}