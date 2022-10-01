import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TiTick } from "react-icons/ti";
import Media from "../components/media";
export default function Marka() {
  return (
    <div className={styles.Icon_hizmet}>
      <Flex mx="auto" w="80%" alignItems="center" justifyContent="space-around">
        <Image src={"/banner3.jpg"} width={"400px"} height={"400px"} />
        <Box>
          <Flex gap="10px">
            <Text fontSize={"50px"} color={"#4299e1"}>
              Beyaz Eşya Teknik Servisi
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
        </Box>
      </Flex>
      <hr />
      <div>
        <Text
          align={"center"}
          margin={"5%"}
          color={"#4299e1"}
          fontSize={"25pt"}
        >
          <b>Hizmet Verdiğimiz Markalar</b>
        </Text>
      </div>
      <div className={styles.marka_beyaz}>
        <Flex wrap={"wrap"} padding={"1px"}>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/AEG.PNG" width={150} height={150} />{" "}
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/ARİSTON.PNG" width={150} height={150} />{" "}
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/BEKO.PNG" width={150} height={150} />{" "}
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/BOSCH.PNG" width={150} height={150} />{" "}
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/caple.png" width={150} height={150} />{" "}
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/CDA.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/CREDA.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/DE-DİETRİCH.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/DYSON.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/ELECTROLUX.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/ELİCA.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/FAGOR.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/FİSHER.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/GORENJE.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/HOTPOİNT.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/HOWDENS.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/INDESIT.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/JOHNLEVİSS.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/kenwod.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/KÜPPERSBUSCH.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/Lg.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/samsung.svg" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/SIEMENS.PNG" width={150} height={150} />
          </Box>
          <Box
            shadow={
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }
            maxW={"sm"}
            p={"1"}
            borderWidth={"1px"}
            rounded={"md"}
            box-sizing={"border-box"}
            marginLeft={"55px"}
            display={"inline-block"}
            margin={"1%"}
            padding={"20px"}
          >
            <Image src="/Markalar/PANASONİC.png" width={150} height={150} />
          </Box>
        </Flex>
      </div>
      <Media />
    </div>
  );
}
