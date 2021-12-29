import styles from "../styles/Layout.module.css";
import React, { ReactChildren, ReactChild } from 'react';
import Nav from "./Nav";
import Header from "./Header";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
