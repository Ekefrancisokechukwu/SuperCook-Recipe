export const authFetch = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "d2846e6954cf44f98f5b44bb0b58ef11",
    },
  });
  return response;
};
