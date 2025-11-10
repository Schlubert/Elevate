// src/components/Layout.tsx
import React from "react";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <main className="pt-1">{children}</main>
    <Footer />
  </>
);

export default Layout;
