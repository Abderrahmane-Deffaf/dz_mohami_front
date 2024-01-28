import { base_url } from "@/lib/constants";
import axios from "axios";

export const getUser = async (cookie, url) => {
  if (!cookie) return null;
  try {
    const data = await axios.get(`${base_url}${url}`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);

    return null;
  }
};
