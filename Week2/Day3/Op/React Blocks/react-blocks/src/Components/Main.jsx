import React from 'react';

const Main = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#e06666", minHeight: "100px", flex: "4" , display:"flex", justifyContent:"space-evenly", flexWrap:"wrap",padding:"10px"}}>
      {children}
    </div>
  );
};

export default Main;
