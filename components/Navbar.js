import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button, IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  SiBosch,
  SiSamsung,
  SiSiemens,
  SiLg,
  SiMitsubishi,
} from "react-icons/si";
import { GiWashingMachine, GiMagnifyingGlass } from "react-icons/gi";
import {
  CgSmartHomeRefrigerator,
  CgSmartHomeWashMachine,
} from "react-icons/cg";
import { GiVacuumCleaner } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <div className={styles.navarka}>
      <Box
        w="100%"
        h="150px"
        bgGradient={"linearto-l, #ffffff,#ffffff"}
        animation={`2.25s  cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`}
        paddingTop={"30px"}
      ></Box>
      <Box bg={("gray.100", "gray.900")} px={4} height={"auto"} width={"auto"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
          />
          <Flex alignItems={"center"} height={"auto"} w={"auto"}>
            <Menu height={"auto"} w={"auto"}>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                bgColor={"dark"}
              >
                <Avatar
                  size={"md"}
                  color={"red"}
                  src={
                    "http://anasayfailan.com/photo/ba9703425096611e731438d3becd1fee_h359.jpg"
                  }
                />
              </MenuButton>
              <MenuList>
                <Text size={"lg"} ml={"60px"}>
                  <b>SERVİSLER</b>
                </Text>
                <MenuDivider />
                <CgSmartHomeRefrigerator />
                <MenuItem>
                  <a href="/teknik_servis/beko">
                    <Text ml={"25px"} bg color={"#0000ff"}>
                      BEKO
                    </Text>
                  </a>
                </MenuItem>
                <MenuDivider />

                <GiWashingMachine />

                <MenuItem>
                  <a href="/teknik_servis/arcelik">
                    <Text ml={"25px"} bg color={"red"}>
                      ARÇELİK
                    </Text>
                  </a>
                </MenuItem>

                <MenuDivider />
                <SiBosch />
                <MenuItem>
                  <Link href="/teknik_servis/bosch">
                    <Text ml={"10px"} bg color={"#581d22"}>
                      BOSCH
                    </Text>
                  </Link>
                </MenuItem>
                <MenuDivider />
                <SiSamsung />
                <MenuItem>
                  <a href="/teknik_servis/samsung">
                    <Text ml={"10px"} bg color={"#000080"}>
                      SAMSUNG
                    </Text>
                  </a>
                </MenuItem>
                <MenuDivider />

                <MenuDivider />
                <GiVacuumCleaner />
                <MenuItem>
                  <a href={"/teknik_servis/vestel"}>
                    <Text ml={"10px"} bg color={"#F62817"}>
                      VESTEL
                    </Text>
                  </a>
                </MenuItem>
                <MenuDivider />
                <SiLg />
                <MenuItem>
                  <a href="/teknik_servis/lg">
                    <Text ml={"10px"}>LG</Text>
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
            <Flex gap={"15px"} color={"white"} ml={"20px"}>
              <Link href={"/"}>
                <Text fontWeight={700} cursor="pointer">
                  ANASAYFA
                </Text>
              </Link>
              <Link href="/marka">
                <Text fontWeight={700} cursor="pointer">
                  MARKALAR
                </Text>
              </Link>
              <Link href="/servis">
                <Text fontWeight={700} cursor="pointer">
                  HİZMETLER
                </Text>
              </Link>
              <Link href="/hakkimizda">
                <Text fontWeight={700} cursor="pointer">
                  İLETİŞİM
                </Text>
              </Link>
            </Flex>

            <Button
              colorScheme="orange"
              ml={"a"}
              bgColor={"bgColorLight, bgColorDark"}
              marginLeft={"25px"}
            >
              <a href="tel:05051349629">CANLI DESTEK</a>
            </Button>
          </Flex>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftAddon children={<GiMagnifyingGlass />} />
              <Input placeholder="Search" textColor={"white"} />
            </InputGroup>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}
