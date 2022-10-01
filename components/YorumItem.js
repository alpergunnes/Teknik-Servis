import { Avatar, Box, Flex, MenuOptionGroup } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { AiFillStar, AiFillLike, AiFillDislike } from "react-icons/ai";

const YorumItem = ({ description, name, AvatarSrc }) => {
  const [likesayisi, likesayisiniDegistir] = useState(0);
  const [disLikesayisi, disLikesayisiniDegistir] = useState(0);

  return (
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
      borderRadius={"25px"}
    >
      <p fontSize={"Josefin Sans, sans-serif"}>{description}</p>
      <Flex wrap={"wrap"}>
        <Avatar src={AvatarSrc} marginLeft={"300px"}></Avatar>
        <AiFillStar fill="#ffd414" /> <AiFillStar fill="#ffd414" />{" "}
        <AiFillStar fill="#ffd414" />
        <AiFillStar fill="#ffd414" /> <AiFillStar fill="#ffd414" />
      </Flex>
      <b>{name}</b>
      <Flex wrap={"wrap"} className={styles.like}>
        <AiFillLike
          style={{ width: "28", height: "28" }}
          fill="#38a169"
          onClick={() => {
            likesayisiniDegistir((a) => {
              return a + 1;
            });
          }}
        />
        {likesayisi}

        <AiFillDislike
          style={{ width: "28", height: "28" }}
          fill="#ff0000"
          onClick={() => {
            disLikesayisiniDegistir((b) => {
              return b + 1;
            });
          }}
        />
        {disLikesayisi}
      </Flex>
    </Box>
  );
};

export default YorumItem;
