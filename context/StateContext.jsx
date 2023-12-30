import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  const [selectedContent, setSelectedContent] = useState({
    id: 0,
    title: "",
    content: "",
  });

  return (
    <StateContext.Provider value={{ selectedContent, setSelectedContent }}>
      {props.children}
    </StateContext.Provider>
  );
}
