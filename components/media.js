import { Box, Flex, Link, Text, wrap } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import React from "react";

export default function media() {
  return (
    <div>
      <div className={styles.media}>
        <Flex display={"flex"} marginLeft={"2vh"} textAlign={"center"}>
          <Box>
            <Text fontSize={"20px"} marginLeft={"3px"} color={"#4299e1"}>
              <b>Bize Ulaşın</b>
            </Text>
            <Text>100/1 Sk. No:31F Göztepe Mh. Konak - İzmir</Text>
            <Text
              fontSize={"20px"}
              color={"orange"}
              display={"flex"}
              marginTop={"15px"}
            >
              <BsFillTelephoneFill fill="#4299e1" size={"25px"} />
              <a href="tel:05462382385">0546-238-2385</a>
            </Text>
            <Text
              fontSize={"20px"}
              color={"orange"}
              display={"flex"}
              marginTop={"15px"}
            >
              <BsFillTelephoneFill fill="#4299e1" size={"25px"} />
              <a href="tel:05462382385">0546-238-2385</a>
            </Text>
            <Text
              fontSize={"20px"}
              color={"orange"}
              display={"flex"}
              marginTop={"15px"}
            >
              <BsFillTelephoneFill fill="#4299e1" size={"25px"} />
              <a href="tel:05462382385">0546-238-2385</a>
            </Text>
          </Box>
          <Flex display={"flex"} marginLeft={"2vh"} wrap={"wrap"}>
            <Box>
              <Text
                fontSize={"20px"}
                marginLeft={"3px"}
                color={"#4299e1"}
                textAlign={"center"}
              >
                <b>Teknik Servis Hizmeti</b>
              </Text>

              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a href="/">Çamaşır Makinesi Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Bulaşık Makinesi Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Fırın Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Buzdolabı Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Ocak Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Ocaklı Fırın Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Davlumbaz Servisi</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Çamaşır Kurutucu Servisi</a>
              </Text>
            </Box>
          </Flex>
          <Flex display={"flex"} marginLeft={"2vh"} wrap={"wrap"}>
            <Box>
              <Text
                fontSize={"20px"}
                marginLeft={"3px"}
                color={"#4299e1"}
                textAlign={"center"}
              >
                <b>Bütün Markaların Bakımları</b>
              </Text>

              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>AEG</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Beko</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Bosch</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Hotpoint</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Indesit</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>LG</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Samsung</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Siemens</a>
              </Text>
              <Text
                fontSize={"15px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a>Rangemaster</a>
              </Text>
            </Box>
          </Flex>
          <Flex display={"flex"} marginLeft={"2vh"} wrap={"wrap"}>
            <Box>
              <Text fontSize={"20px"} marginLeft={"3px"} color={"#4299e1"}>
                <b>Servis</b>
              </Text>
              <Text
                fontSize={"20px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a href="tel:05462382385">Randevu Al</a>
              </Text>
              <Text
                fontSize={"20px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a href={""}>Hizmetlerimiz</a>
              </Text>
              <Text
                fontSize={"20px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a href="/marka">Markalar</a>
              </Text>
              <Text
                fontSize={"20px"}
                color={"orange"}
                display={"flex"}
                marginTop={"15px"}
              >
                <a href={"#anasayfa"}>Anasayfa</a>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </div>
      <div className={styles.reklam}>
        <Text fontSize={"17px"}>
          Copyright İzmir Soğutma Sistemleri Teknik Servisi | 2022
        </Text>
        <Text fontSize={"15px"}>
          Sitedeki tüm logolar hizmetleri tanıtmak için kullanılmıştır.İzmir
          Soğutma Yetkili Servis Hizmeti Vermemektedir. 20 Yıllık sektör
          tecrübesi ile Sizlere Teknik Servis Hizmeti veriyoruz.
        </Text>
      </div>
    </div>
  );
}
