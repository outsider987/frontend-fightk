
export const setTokenStorage = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const getTokenStorage = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("tokens");
    return token ? JSON.parse(token) : null;
  }
};

export const cleanTokenStorage = () => {
  localStorage.removeItem("tokens");
};
