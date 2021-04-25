import { useHistory } from "react-router-dom";

// import useLoggedUser from './useLoggedUser';
import UseLoggedUser from "./useLoggedUser";

export default function useAuth() {
  const history = useHistory();

  const onLogin = (user) => {
    history.push("/Home");
    UseLoggedUser(user);
  };

  //   const onLogout = () => {
  //     history.push('/');
  //     updateLoggedUser(null);
  //   };

  return { onLogin };
}
