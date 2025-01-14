import axios from "axios";

export const NotifyApi = {
  baseUrl:  "http://ctu-social-api.onrender.com"+"/api/",

  formatUrl: (url) => NotifyApi.baseUrl + url,

  request: async (method, url, data = null) => {
    try {
      const response = await axios({ method, url: NotifyApi.formatUrl(url), data });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  method: {
    post: (url, data) => NotifyApi.request("post", url, data),
    get: (url) => NotifyApi.request("get", url),
    put: (url) => NotifyApi.request("put", url),
    delete: (url) => NotifyApi.request("delete", url),
  },

  createNotify: (url, data) => NotifyApi.method.post(url, data),
  getNotifyOfUser: (url) => NotifyApi.method.get(url),
  updateSeenStatus: (url) => NotifyApi.method.put(url),
  clearAllNotify: (url) => NotifyApi.method.delete(url),
};

export default NotifyApi;
