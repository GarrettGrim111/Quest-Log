import React from "react";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer  />
    </Wrapper>
  );
};

export default Layout;
