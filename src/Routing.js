import React, { Suspense, useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router";

import Error from "./Error";
export const MovieContext = createContext();
const Routing = () => {
  const user = { name: "aziz", Role: "MoviesAdmin" };
  const [MoviesAdmin, setMoviesAdmin] = useState(false);
  const [MedicationAdmin, setMedicationAdmin] = useState(false);
  const [ProductAdmin, setProductAdmin] = useState(false);
  useEffect(() => {
    if (user.Role === "MoviesAdmin") {
      setMoviesAdmin(true);
    }
    if (user.Role === "MedicationAdmin") {
      setMedicationAdmin(true);
    }
    if (user.Role === "ProductAdmin") {
      setProductAdmin(true);
    }
  }, []);
  
  const MoviesRouting = React.lazy(() =>
    import("./components/Movies/MoviesRouting")
  );
  const MedicationRouting = React.lazy(() =>
    import("./components/Medication/MedicationRouting")
  );

  const ProductRouting = React.lazy(() => {
    import("./components/Product/ProductRouting");
  });
  return (
    <Suspense>
      <Routes>
        {MoviesAdmin && (
          <Route
            path="movie/*"
            element={
              <MovieContext.Provider value={user}>
                <MoviesRouting />
              </MovieContext.Provider>
            }
          />
        )}

        {MedicationAdmin && (
          <Route path="medication/*" element={<MedicationRouting />} />
        )}
        {ProductAdmin && (
          <Route path="product/*" element={<ProductRouting />} />
        )}
        <Route path="/*" element={<Error />} />
        {/* test */}
      </Routes>
    </Suspense>
  );
};

export default Routing;
