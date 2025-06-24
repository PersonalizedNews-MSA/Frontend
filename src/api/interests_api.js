import instance from "./axiosInstance";

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
//TODO: 관심사 수정 API
export const putInterest = async ({ interests }) => {
  console.log("관심사 수정 API 호출");
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await instance.put(
      `api/interests/v1`,
      { name: interests },
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
//TODO: 관심사 요청  API
export const getInterest = async ({ interests }) => {
  console.log("관심사 수정 API 호출");
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await instance.get(`api/interests/v1`, {
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
