import LocalStorage from "./localStorage";
export const saveToken = async (accessToken: string, refreshToken: string) => {
  LocalStorage.setItem("accessToken", accessToken);
  LocalStorage.setItem("refreshToken", refreshToken);
};
