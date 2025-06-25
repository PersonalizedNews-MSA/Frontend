import instance from "./axiosInstance";

export async function getMyFavorites() {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const response = await instance.get("/api/favorite/v1/",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}

export async function addFavorite({ newsLink, newsTitle, newsSummary, newsThumbnail, newsCategory }) {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const response = await instance.post("/api/favorite/v1/",
            {
                newsTitle: newsTitle,
                newsLink: newsLink,
                newsSummary: newsSummary,
                newsThumbnail: newsThumbnail,
                newsCategory: newsCategory
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}

export async function removeFavorite(favoriteId) {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const response = await instance.delete(`/api/favorite/v1/${favoriteId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}