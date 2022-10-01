import React from "react";
import { Text, Flex, Box, Divider } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { SiPytorchlightning } from "react-icons/si";
import { RiMoneyDollarCircleLine, RiUserSettingsFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiEarthAfricaEurope } from "react-icons/gi";
export default function kalite() {
  return (
    <div>
      <div className={styles.kalite}>
        <Text
          fontSize={"40px"}
          color={"#4299e1"}
          textAlign={"center"}
          padding={"50px"}
          fontFamily='"Josefin Sans", sans-serif'
          fontWeight={"400"}
        >
          Kalite ve Profesyonellik
        </Text>
        <Text textAlign={"center"}>
          Bütün servis ve bakım hizmetlerimizde bizimle çalışmanın avantajlarını
          keşfedin
        </Text>
        <Flex
          wrap={"wrap"}
          marginTop={"50px"}
          marginX={"25px"}
          marginY={"25px"}
        >
          <Flex wrap={"wrap"} marginLeft={"1vh"}>
            <SiPytorchlightning size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Çözüme Hızlı Ulaşın</b>
              <br />
              <Text>
                İhtiyacınız olduğu gün veya ertesi gün yanınızda olalım
              </Text>
            </Box>
          </Flex>
          <Flex wrap={"wrap"} marginLeft={"10vh"}>
            <RiMoneyDollarCircleLine size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Fiyatlandırma</b>
              <Text>Size masraf çıkarmadan sorununuzu çözelim</Text>
            </Box>
          </Flex>
          <Flex wrap={"wrap"} marginLeft={"1vh"} marginY={"25px"}>
            <AiTwotoneLike size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Güvenilir Onarım</b>

              <Text>
                Müşteri memnuniyeti önceliğimiz ile <br />
                ilk müşterilerimiz hala bizimle çalışıyor
              </Text>
            </Box>
          </Flex>

          <Flex wrap={"wrap"} marginLeft={"26vh"} marginY={"25px"}>
            <RiUserSettingsFill size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Tecrübeli Kadro</b>
              <br />
              <Text>
                Uzun yıllar boyu kazandığımız tecrübelerle <br />
                işinin ehli kadromuz hizmetinizde
              </Text>
            </Box>
          </Flex>
          <Flex wrap={"wrap"} marginLeft={"1vh"}>
            <MdOutlineDeveloperMode size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Güncel Yazılım</b>
              <Text>
                Cihazlarınızın en güncel sürümde çalışmasını <br />
                sağlamak için en son cihaz yazılımını kullanıyoruz.
              </Text>
            </Box>
          </Flex>
          <Flex wrap={"wrap"} marginLeft={"15vh"}>
            <GiEarthAfricaEurope size={"40px"} fill={"#4299e1"} />
            <Box marginLeft={"3px"}>
              <b>Her Yerdeyiz</b>
              <br />
              <Text>İzmir'ın bütün bölgelerinde hizmetinizdeyiz</Text>
            </Box>
          </Flex>
        </Flex>
      </div>
      <Divider marginY={"15px"} />
    </div>
  );
}
