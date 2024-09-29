import swapiAPI from "./swapiAPI";

const getpeople = async () => {
  const res = await swapiAPI.get("/people");
  return res.data.results;
};

export default getpeople;
