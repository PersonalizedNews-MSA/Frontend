import { jwtDecode } from "jwt-decode";

import instance from "./axiosInstance";
import { deleteInterest } from "./interests_api";

// UNAUTHORIZED APIS

export const login = async ({ email, password }) => {
  console.log("Login API 호출");
  console.log("Email :" + email);
  console.log("Password :" + password);
  try {
    const response = await instance.post(
      "/api/user/v1/auth/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const signup = async ({ email, password, name }) => {
  console.log("Signup API 호출");
  console.log("Email :" + email);
  console.log("Password :" + password);
  console.log("Name :" + name);
  try {
    const response = await instance.post(
      "/api/user/v1/auth/signup",
      {
        email,
        password,
        name,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const checkEmail = async (email) => {
  console.log("Check Email API 호출:", email);
  try {
    const response = await instance.post(
      "/api/user/v1/auth/email-check",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// AUTHORIZED APIS
export const getMe = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken : " + accessToken);
    // const decode = jwtDecode(accessToken);
    // console.log("userId : " + decode.userId);

    const response = await instance.get(`/api/user/v1/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const editUser = async ({ name }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await instance.put(
      `/api/user/v1/name`,
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const getUserFavorites = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken : " + accessToken);
    const decode = jwtDecode(accessToken);
    console.log("userId : " + decode.userId);

    const response = await instance.get(`/${decode.userId}/favorites`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const logout = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.post("/api/user/v1/logout",{}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const deleteAccount = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.delete("/api/user/v1/signout", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    await deleteInterest();

    localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

// export const getUserInterests = async () => {
//   try {
//     const accessToken = localStorage.getItem("accessToken");
//     console.log("accessToken : " + accessToken);
//     const decode = jwtDecode(accessToken);
//     console.log("userId : " + decode.userId);

//     const response = await instance.get(`/interest/${decode.userId}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error.response ? error.response.data : error;
//   }
// };
