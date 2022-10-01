import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Media from "../components/media";
export default function servis() {
  return (
    <div className={styles.servisler1}>
      <Text
        color={"#4299e1"}
        fontSize={"30px"}
        textAlign={"center"}
        padding={"45px"}
        fontFamily={"Josefin Sans, sans-serif"}
        fontWeight={"600"}
        width={"180vh"}
      >
        İzmir'ın Tüm Bölgelerinde Teknik Servis
      </Text>
      <Text
        fontFamily={"Montserrat, sans-serif;"}
        fontWeight={"500"}
        textAlign={"center"}
        padding={"45px"}
      >
        Yılları aşkın tecrübemizle çamaşır makinesi, bulaşık makinesi, fırın,
        buzdolabı, çamaşır kurutucu, ocak ve tüm ev aletleriniz için profesyonel
        bakım ve onarım.
      </Text>
      <div className={styles.serviss}>
        <Flex wrap={"wrap"}>
          <Box className={styles.servi}>
            <Image src="/servisler/camasır.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Çamaşır Makinesi Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/bulsık.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Bulaşık Makinesi Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/buz.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Buzdolabı Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/fırın.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Ocaklı Fırın Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/fırın.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Fırın Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/kurutmamak.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Çamaşır Kurutucu Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/ocak.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Ocak Servisi</b>
            </Text>
          </Box>
          <Box className={styles.servi}>
            <Image src="/servisler/davlumbazz.png" width={200} height={200} />
            <Text textAlign={"center"}>
              <b>Davlumbaz Servisi</b>
            </Text>
          </Box>
        </Flex>
      </div>
      <Text fontFamily={"sans-serif"} textAlign={"center"} padding={"45px"}>
        Bunlara ek olarak: Mikrodalga Fırın Tamiri • Kombi Tamiri
      </Text>
      <hr />
    </div>
  );
}
