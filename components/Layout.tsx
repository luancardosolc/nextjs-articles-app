import styles from "../styles/Layout.module.css";
import React, { ReactChildren, ReactChild } from 'react';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: AuxProps) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Hello</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
