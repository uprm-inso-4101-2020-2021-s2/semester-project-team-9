import Http from "./Http";

export default {
  /**
   * List Patients
   * @return {Http} GET to /Patients
   */
  getServices() {
    return Http.get("http://127.0.0.1:8080/get-services");
  },
};