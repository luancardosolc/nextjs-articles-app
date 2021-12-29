import styles from "../styles/Layout.module.css";
import React, { ReactChildren, ReactChild } from 'react';
import Nav from "./Nav";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
