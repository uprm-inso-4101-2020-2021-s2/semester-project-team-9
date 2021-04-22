import Http from "./Http";

const endpoint = "get-services";

export default {
  /**
   * List Patients
   * @return {Http} GET to /Patients
   */
  getPatients() {
    return Http.get(endpoint);
  },
};
