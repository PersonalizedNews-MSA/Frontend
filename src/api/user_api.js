import { jwtDecode } from "jwt-decode";

import instance from "./axiosInstance";

// UNAUTHORIZED APIS

//TODO: 관심사 등록 API
export const postInterest = async ({ interests }) => {
  console.log("관심사 등록 API 호출");
  console.log("keywords :" + interests);
  try {
    const response = await instance.post(
      "/api/interests/v1",
      {
        name: interests,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
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

export const addInterest = async ({ userId, keywords }) => {
  console.log("Add Interest API 호출");
  console.log("UserId :" + userId);
  console.log("Name :" + keywords);
  try {
    const response = await instance.post(
      "/interest",
      {
        userId,
        name: keywords,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteInterest = async ({ userId, removeKeyword }) => {
  console.log("Delete Interest API 호출");
  console.log("UserId :" + userId);
  console.log("Name :" + removeKeyword);
  try {
    const response = await instance.delete(`/interest/delete/${userId}`, {
      data: {
        name: removeKeyword,
      },
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// AUTHORIZED APIS
export const getMe = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken : " + accessToken);
    const decode = jwtDecode(accessToken);
    console.log("userId : " + decode.userId);

    const response = await instance.get(`/user/${decode.userId}`, {
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

export const editUser = async ({ name, email, interests }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await instance.put(
      `/user`,
      { name, email, interests },
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
    // const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.delete("/api/user/v1/logout", {
      headers: {
        // refreshToken: `${refreshToken}`,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const deleteAccount = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.delete("/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const getUserInterests = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken : " + accessToken);
    const decode = jwtDecode(accessToken);
    console.log("userId : " + decode.userId);

    const response = await instance.get(`/interest/${decode.userId}`, {
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
