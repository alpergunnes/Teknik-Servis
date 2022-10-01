import React from "react";
import { Flex, Image, Box, Text, Link, Divider } from "@chakra-ui/react";
import Online from "../../components/online";
import Kalite from "../../components/kalite";
import Media from "../../components/media";
import { TiTick } from "react-icons/ti";

import styles from "../../styles/Home.module.css";
export default function arcelik() {
  return (
    <div className={styles.bosch}>
      <Flex mx="auto" w="80%" alignItems="center" justifyContent="space-around">
        <Image src={"/banner3.jpg"} width={"380px"} height={"380px"} />
        <Box>
          <Flex gap="10px">
            <Text
              fontSize={"50px"}
              color={"#4299e1"}
              fontFamily={"Montserrat, sans-serif"}
              fontWeight={"700"}
            >
              Arçelik Teknik Servis{" "}
            </Text>
          </Flex>
          <Flex gap="10px">
            <TiTick fill="#4299e1" size={"25px"} />
            <Text>Hızlı ve güvenilir servis</Text>
          </Flex>
          <Flex gap="10px">
            <TiTick fill="#4299e1" size={"25px"} />
            <Text>İzmir'ın tüm bölgelerinde servis hizmeti</Text>
          </Flex>
          <Flex gap="10px">
            <TiTick fill="#4299e1" size={"25px"} />
            <Text>Alanında uzman servis personelleri</Text>
          </Flex>
          <Flex gap="10px">
            <TiTick fill="#4299e1" size={"25px"} />
            <Text>Müşteri memnuniyeti</Text>
          </Flex>
          <Text>
            Hemen ekibimizi arayın:
            <Link href="tel:05462382385" color={"#f06721"}>
              <b>0546-238-2385</b>
            </Link>
          </Text>
        </Box>
      </Flex>
      <Divider />
      <div>
        <Text
          fontSize={"30px"}
          color={"#4299e1"}
          fontFamily={"Josefin Sans, sans-serif"}
          fontWeight={"600"}
          textAlign={"Center"}
          marginTop={"20px"}
        >
          Arçelik Beyaz Eşya Teknik Servisi
        </Text>
        <Text
          fontSize={"18px"}
          fontFamily={"Montserrat, sans-serif"}
          fontWeight={"500"}
          marginTop={"20px"}
          marginLeft={"auto"}
          marginRight={"auto"}
        >
          Beyaz eşyalarınız için özenle bakım ve onarım yapıyoruz.
          Arızalarınızdaki basit sorunları yerinde gideriyoruz. Sunduğumuz
          profesyonel teknik servis hizmeti ile sizlere masraf çıkarmadan
          cihazlarınızın tamirini yapıyoruz. Beyaz eşyalarınız ve ev
          aletlerinize yaptıracağınız düzenli bakım, cihazlarınızın
          performansını korur ve kullanım ömrünü uzatır. Profesyonel bakım ve
          onarım servisimiz hizmetinizde. Randevu almak ve sorunlarınızı bizimle
          paylaşmaktan çekinmeyin, bizi hemen arayın:
          <Link href="tel:05462382385" color={"#f06721"}>
            <b>0546-238-2385</b>
          </Link>
        </Text>
        <Divider />
        <Online />
        <Kalite />
        <Media />
      </div>
    </div>
  );
}
