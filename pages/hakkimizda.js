import React from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function hakkimizda() {
  return (
    <div className={styles.hakkimizda}>
      <div>
        <Text
          color={"#4299e1"}
          fontSize={"30px"}
          textAlign={"Center"}
          margin={"45px"}
        >
          HAKKIMIZDA
        </Text>
        <Text paddingRight={"250px"} paddingLeft={"250px"}>
          Her marka ve modeldeki beyaz eşyalarınız için özenle bakım ve onarım
          yapıyoruz. Arızalarınızdaki basit sorunları yerinde gideriyoruz.
          Sunduğumuz profesyonel teknik servis hizmeti ile sizlere masraf
          çıkarmadan cihazlarınızın tamirini yapıyoruz.
        </Text>
        <Text paddingRight={"250px"} paddingLeft={"250px"} marginTop={"15px"}>
          Beyaz eşyalarınız ve ev aletlerinize yaptıracağınız düzenli bakım,
          cihazlarınızın performansını korur ve kullanım ömrünü uzatır.
          Profesyonel bakım ve onarım servisimiz hizmetinizde.
        </Text>
        <Text paddingRight={"250px"} paddingLeft={"250px"} marginTop={"15px"}>
          Randevu almak ve sorunlarınızı bizimle paylaşmaktan çekinmeyin, bizi
          hemen arayın!
        </Text>
      </div>
      <div>
        <Flex
          wrap={"wrap"}
          marginLeft={"150px"}
          marginTop={"50px"}
          fontWeight={"600"}
        >
          <FaPhoneAlt width={"25px"} height={"25"} fill="#4299e1" />
          <Link href="tel:05462382385">
            <Text
              color={"orange"}
              ml={"a"}
              bgColor={"bgColorLight, bgColorDark"}
              marginLeft={"25px"}
            >
              0546-238-2385
            </Text>
          </Link>
        </Flex>
        <Flex
          wrap={"wrap"}
          marginLeft={"150px"}
          marginTop={"30px"}
          fontWeight={"600"}
        >
          <FaPhoneAlt width={"25px"} height={"25"} fill="#4299e1" />
          <Link href="tel:05462382385">
            <Text
              color={"orange"}
              ml={"a"}
              bgColor={"bgColorLight, bgColorDark"}
              marginLeft={"25px"}
            >
              0546-238-2385
            </Text>
          </Link>
        </Flex>
        <Flex
          wrap={"wrap"}
          marginLeft={"150px"}
          marginTop={"30px"}
          fontWeight={"600"}
        >
          <FaPhoneAlt width={"25px"} height={"25"} fill="#4299e1" />
          <Link href="tel:05462382385">
            <Text
              color={"orange"}
              ml={"a"}
              bgColor={"bgColorLight, bgColorDark"}
              marginLeft={"25px"}
            >
              0546-238-2385
            </Text>
          </Link>
        </Flex>
        <Flex
          wrap={"wrap"}
          marginLeft={"150px"}
          marginTop={"30px"}
          fontWeight={"600"}
        >
          <SiGooglemaps width={"25px"} height={"25"} fill="#4299e1" />
          <Link href="tel:05462382385">
            <Text
              ml={"a"}
              bgColor={"bgColorLight, bgColorDark"}
              marginLeft={"25px"}
            >
              100/1 Sk. No:31F Göztepe Mh. Konak - İzmir
            </Text>
          </Link>
        </Flex>
      </div>
    </div>
  );
}
