import Http from "./Http";

export default {
  /**
   * List Patients
   * @return {Http} GET to /Patients
   */
  login(data) {
    return Http.post("http://127.0.0.1:8080/login", data);
  },
  register(data) {
    return Http.post("http://127.0.0.1:8080/register", data);
  },
};
