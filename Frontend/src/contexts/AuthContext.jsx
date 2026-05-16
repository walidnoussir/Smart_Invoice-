import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const login = (token) => {
    localStorage.setItem("token", token);

    navigate("/home");
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
