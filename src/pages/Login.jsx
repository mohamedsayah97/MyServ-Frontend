import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../config/axios";

const LoginPage = () => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Identifiants valides (à remplacer par une vraie vérification backend plus tard)
  // const validCredentials = {
  //   email: "test@example.com",
  //   password: "password123"
  // };

  // const showPassword = () => {
  //   let x = document.getElementById("inputPassword");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post("/users/login", { mail, password });

      localStorage.setItem('accessToken', res.data.accessToken);

      window.location.href='/dashboard';
    } catch (error) {
      console.log(error);
    }

    // // Vérification basique (à remplacer par un appel API en réalité)
    // if (email === validCredentials.email && password === validCredentials.password) {
    //   // Stockage simple du token (à adapter avec votre système d'authentification)
    //   localStorage.setItem("isAuthenticated", "true");
    //   navigate("/dashboard");
    // } else {
    //   setError("Wrong informations");
    // }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white shadow-md p-4 h-20">
        <h1 className="text-blue-600/100 dark:text-sky-400/100">
          GO Recrutement
        </h1>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* En-tête */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Connexion</h1>
              <p className="text-gray-600 mt-2">
                Entrez vos informations pour vous connecter
              </p>
            </div>

            {/* Affichage des erreurs */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* Formulaire */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Champ Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={mail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              {/* Champ Mot de passe */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
