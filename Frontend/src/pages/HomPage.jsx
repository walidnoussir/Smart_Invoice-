import { useEffect, useState } from "react";

import { getProfile } from "../services/authService";

function HomPage() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response =
          await getProfile();

        setUser(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProfile();

  }, []);

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {
        user && (

          <div className="mt-5 bg-white shadow p-5 rounded-xl">

            <p>
              <span className="font-bold">
                Nom :
              </span>

              {" "}
              {user.name}
            </p>

            <p>
              <span className="font-bold">
                Email :
              </span>

              {" "}
              {user.email}
            </p>

          </div>
        )
      }

    </div>
  );
}

export default HomPage;
