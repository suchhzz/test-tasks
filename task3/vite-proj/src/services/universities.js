import axios from "axios"

export const fetchUniversities = async (country) => {

    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);

        return response.data;
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
};