import { useHistory } from "react-router-dom";

// import useLoggedUser from './useLoggedUser';

export default function useAuth() {
  const history = useHistory();

  const onLogin = () => {
    history.push("/Home");
  };

  //   const onLogout = () => {
  //     history.push('/');
  //     updateLoggedUser(null);
  //   };

  return { onLogin };
}
