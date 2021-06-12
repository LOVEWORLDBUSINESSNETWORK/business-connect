
import { Head } from "next/document";
import styles from "../styles/Layout.module.css";
import Nav from "./Navbar"
import Footer from "./Footer"
import Headers from "./Head.js"

export default function Layout({ children }) {
  return (<div className={styles.containa}>
    <Headers/>
    <Nav/>
    {children}
    <Footer />
    </div>
  )
}
