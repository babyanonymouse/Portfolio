import { Children, createContext, React } from "react";

// create context
const CursorContext = createContext();

const CursorProvider = () => {
  return (
    <CursorContext.Provider value={"this is the cursor"}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
