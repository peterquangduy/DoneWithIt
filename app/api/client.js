import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.0.29:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  // Before
  const response = await get(url, params, axiosConfig);
  // After
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  //console.log("cache ...", data);

  return data ? { ok: true, data } : response;
};

export default apiClient;
