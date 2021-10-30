import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
