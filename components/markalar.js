import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { FaCalendarAlt, FaTools, FaRegAddressCard } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function markalar() {
  return (
    <div className={styles.Icon_hizmet}>
      <Flex alignItems={"center"}>
        <Box margin={"5%"} marginLeft={"200px"}>
          <FaCalendarAlt fill="#4299E1" style={{ width: "90", height: "90" }} />
          <br />
          <Text>
            <b>Aynı gün veya ertesi gün randevu</b>
          </Text>
        </Box>
        <Box margin={"5%"}>
          <FaTools fill="#4299E1" style={{ width: "90", height: "90" }} />
          <Text>
            <b>Tüm ev aletlerinin tamiri</b>
          </Text>
        </Box>
        <Box margin={"5%"}>
          <FaRegAddressCard
            fill="#4299E1"
            style={{ width: "90", height: "90" }}
          />
          <Text>
            <b>40 yılı aşkın iş tecrübesi ve uzmanlık</b>
          </Text>
        </Box>
        <Box margin={"5%"}>
          <AiOutlineStar fill="#4299E1" style={{ width: "90", height: "90" }} />
          <Text>
            <b>Müşteri memnuniyeti</b>
          </Text>
        </Box>
      </Flex>
      <hr />
    </div>
  );
}
