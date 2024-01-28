// eslint-disable-next-line import/named
import { base_url } from "@/lib/constants";
import axios from "axios";

export const getAvocatBookings = async (cookie) => {
  try {
    const data = await axios.get(
      `${base_url}/appointment/avocat-appointments`,
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);

    return null;
  }
};
