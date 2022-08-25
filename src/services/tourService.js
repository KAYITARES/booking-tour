import axios from "axios";

class TourServices {
  static async getAllTours() {
    try {
      const response = await axios.get("http://localhost:9090/tours");
      console.log("response from Tours:", response.data);
      return response.data;
    } catch (e) {
      console.log("Error :>>>", e);
    }
  }

  static async createTour(data) {
    try {
      const response = await axios.post(
        "http://localhost:9090/tour/create",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response of creation:", response.data);
      return response.data;
    } catch (error) {
      console.log("failed !", Error);
    }
  }
  
}

export default TourServices;
