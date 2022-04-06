import createInstance from "./instance";

const API = createInstance();

export const getCommonData = async (querySearch) => {
  const { data } = await API.get("/data", {
    params: {
      querySearch,
    },
  });

  return data;
};
