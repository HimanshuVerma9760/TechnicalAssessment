const backendAPI = import.meta.env.VITE_BACKEND_API;

export const studentLoader = async () => {
  let response;
  try {
    response = await fetch(backendAPI);
    if (!response.ok) {
      throw new Error("Error Occurred while fetching student data!");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
