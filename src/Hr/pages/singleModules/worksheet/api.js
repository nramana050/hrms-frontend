import axios from "axios";

export const saveWorksheet = async (formData) => {
  try {
    await axios.post(
      "http://13.126.190.50:8087/worksheet/create/worksheet",
      formData
    );
  } catch (error) {
    console.error("saveWorksheet", error);
  }
};

export const deleteWorksheet = async (id) => {
  try {
    await axios.delete(`http://13.126.190.50:8087/worksheet/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Worksheet", error);
  }
};

export const loadWorksheet = async () => {
  try {
    const result = await axios.get(
      "http://13.126.190.50:8087/worksheet/get/worksheet",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load Worksheet", error);
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(
      "http://13.126.190.50:8086/projects/get/projects"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects data", error);
  }
};

export const fetchEmployee = async () => {
  try {
    const response = await axios.get(
      "http://13.126.190.50:8082/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching EmployeeName data", error);
  }
};