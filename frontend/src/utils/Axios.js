
// import axios from "axios";
// import { baseUrl } from "../common/SummaryApi.js";
// import SummaryApi from "../common/SummaryApi.js";

// const Axios = axios.create({
//   baseURL: baseUrl,
//   withCredentials: true,
// });

// // REQUEST
// Axios.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("accessToken"); // consistent key
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // RESPONSE
// Axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry &&
//       !originalRequest.url.includes("refresh")
//     ) {
//       originalRequest._retry = true;

//       const refreshToken = localStorage.getItem("refreshToken");
//       if (refreshToken) {
//         const newAccessToken = await refreshAccessToken(refreshToken);
//         if (newAccessToken) {
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return Axios(originalRequest);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// // REFRESH FUNCTION
// const refreshAccessToken = async (refreshToken) => {
//   try {
//     const response = await Axios({
//       ...SummaryApi.refreshToken,
//       headers: {
//         Authorization: `Bearer ${refreshToken}`,
//       },
//     });

//     const accessToken = response?.data?.data?.accessToken;
//     if (!accessToken) return null;

//     localStorage.setItem("accessToken", accessToken);
//     return accessToken;
//   } catch (error) {
//     console.log("Refresh failed:", error);
//     return null;
//   }
// };

// export default Axios;


import axios from "axios";
import { baseUrl } from "../common/SummaryApi.js";
import SummaryApi from "../common/SummaryApi.js";

const Axios = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// REQUEST
Axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken"); // consistent key
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE
Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("refresh")
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

// REFRESH FUNCTION
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await Axios({
      ...SummaryApi.refreshToken,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const accessToken = response?.data?.data?.accessToken;
    if (!accessToken) return null;

    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.log("Refresh failed:", error);
    return null;
  }
};

export default Axios;
