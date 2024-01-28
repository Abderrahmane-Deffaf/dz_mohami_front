import { base_url } from "@/lib/constants";
import axios from "axios";

export const getAdminData = async (cookie, filters) => {
  console.log(filters);
  const queryParams = [];

  if (filters.name) queryParams.push(`name=${filters.name}`);
  if (filters.wilaya) queryParams.push(`wilaya=${filters.wilaya}`);
  if (filters.categories) queryParams.push(`categories=${filters.categories}`);
  if (filters.status) queryParams.push(`status=${filters.status}`);
  if (filters.isBlocked) queryParams.push(`isBlocked=${filters.isBlocked}`);
  const finalUrl = `${base_url}/search/adminsearch?page=${
    filters.page + 1
  }&${queryParams.join("&")}`;

  try {
    const data = await axios.get(finalUrl);
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const acceptAvocat = async (id) => {
  try {
    const res = await axios.put(`${base_url}/admin/avocats/${id}/validate`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log("accept", e);
    return e;
  }
};

export const blockAvocat = async (id) => {
  try {
    const res = await axios.put(`${base_url}/admin/avocats/${id}/Blocked`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log("block", e);
    return e;
  }
};

export const deblockAvocat = async (id) => {
  try {
    const res = await axios.put(`${base_url}/admin/avocats/${id}/UnBlocked`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log("block", e);
    return e;
  }
};

export const refuserAvocat = async (id) => {
  try {
    const res = await axios.put(`${base_url}/admin/avocats/${id}/Invalidate`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log("block", e);
    return e;
  }
};

export const deleteAvocat = async (id) => {
  try {
    const res = await axios.delete(`${base_url}/admin/avocats/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log("block", e);
    return e;
  }
};
