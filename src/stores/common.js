export const axiosError = (error) => {
  console.error(error.response || error.message || error);
};
