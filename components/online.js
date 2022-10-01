import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function servis() {
  return (
    <div className={styles.servisler1}>
      <div className={styles.serviss}>
        <Flex wrap={"wrap"}>
          <Box className={styles.servi}>
            <Image src="/servisler/mar1.jpg" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Fırın Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/mar2.jpg" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Çamaşır Kurutucu Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/mar3.jpg" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Ocak Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/mar4.jpg" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Davlumbaz Servisi</b>
            </Text>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
