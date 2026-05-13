import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const validate = () => {

    let newErrors = {};

    // NAME
    if (!formData.name) {

      newErrors.name = "Nom obligatoire";

    } else if (formData.name.length < 3) {

      newErrors.name =
        "Minimum 3 caractères";
    }

    // EMAIL
    if (!formData.email) {

      newErrors.email = "Email obligatoire";

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = "Email invalide";
    }

    // PASSWORD
    if (!formData.password) {

      newErrors.password =
        "Mot de passe obligatoire";

    } else if (formData.password.length < 6) {

      newErrors.password =
        "Minimum 6 caractères";
    }

    // CONFIRM PASSWORD
    if (!formData.confirmedPassword) {

      newErrors.confirmedPassword =
        "Confirmation obligatoire";

    } else if (
      formData.password !==
      formData.confirmedPassword
    ) {

      newErrors.confirmedPassword =
        "Les mots de passe ne correspondent pas";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    try {

      await registerUser(formData);

      navigate("/login");

    } catch (error) {

      setServerError(
        error.response?.data?.message ||
        "Erreur serveur"
      );
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[400px] flex flex-col gap-4"
      >

        <div>
          <h1 className="text-3xl font-bold">
            Inscription
          </h1>

          <p className="text-gray-500 mt-2">
            Créer un nouveau compte
          </p>
        </div>

        {/* NAME */}

        <div className="flex flex-col gap-1">

          <label className="font-medium">
            Nom
          </label>

          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          {
            errors.name &&
            <p className="text-red-500 text-sm">
              {errors.name}
            </p>
          }

        </div>

        {/* EMAIL */}

        <div className="flex flex-col gap-1">

          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="nom@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          {
            errors.email &&
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          }

        </div>

        {/* PASSWORD */}

        <div className="flex flex-col gap-1">

          <label className="font-medium">
            Mot de passe
          </label>

          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          {
            errors.password &&
            <p className="text-red-500 text-sm">
              {errors.password}
            </p>
          }

        </div>

        {/* CONFIRM PASSWORD */}

        <div className="flex flex-col gap-1">

          <label className="font-medium">
            Confirmation
          </label>

          <input
            type="password"
            name="confirmedPassword"
            placeholder="********"
            value={formData.confirmedPassword}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          {
            errors.confirmedPassword &&
            <p className="text-red-500 text-sm">
              {errors.confirmedPassword}
            </p>
          }

        </div>

        {/* SERVER ERROR */}

        {
          serverError &&
          <p className="text-red-500 text-sm">
            {serverError}
          </p>
        }

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
        >
          S'inscrire
        </button>

        <p className="text-center text-gray-600">

          Déjà un compte ?

          <Link
            to="/login"
            className="text-blue-500 ml-2"
          >
            Se connecter
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;
