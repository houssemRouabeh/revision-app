import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../Routing";

const Movie = () => {
  const user = useContext(MovieContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return <div>Movie page{user.name} </div>;
};

export default Movie;
