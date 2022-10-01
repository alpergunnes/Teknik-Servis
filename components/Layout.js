import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import { Text, Flex } from "@chakra-ui/react";
import { BsTools } from "react-icons/bs";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
