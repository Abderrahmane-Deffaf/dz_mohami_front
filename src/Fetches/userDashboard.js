export const getUserReviews = async (cookie) => {
  try {
    const data = await axios.get(`${base_url}/rating/user-ratings`, {
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
