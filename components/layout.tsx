import React from "react";
// Components
import { Header, Footer } from "@components/index";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
