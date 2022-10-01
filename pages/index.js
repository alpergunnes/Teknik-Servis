import styles from "../styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import Online from "../components/online";
import Media from "../components/media";
import Yorum from "../components/yorum";
import Icon from "../components/markalar";
import Servis from "./servis";
import Kalite from "../components/kalite";
import { FcApproval } from "react-icons/fc";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className={styles.container} id={"anasayfa"}>
        <div>
          <h1 className={styles.ustbaşlik}>Bakım, Onarım ve Teknik Servis</h1>
          <div>
            <h5 className={styles.sağ}>
              <Image
                src={"/check-circle-solid.svg"}
                width={"30px"}
                height={"20px"}
              ></Image>
              Hızlı ve Güvenilir Hizmet
            </h5>
          </div>
          <div>
            <h5 className={styles.sol}>
              <Image
                src={"/check-circle-solid.svg"}
                width={"30px"}
                height={"20px"}
              ></Image>
              Hızlı ve Güvenilir Hizmet
            </h5>
          </div>
          <div>
            <h5 className={styles.orta}>
              <Image
                src={"/check-circle-solid.svg"}
                width={"30px"}
                height={"20px"}
              ></Image>
              Hızlı ve Güvenilir Hizmet
            </h5>
          </div>
        </div>
      </div>
      <Icon />
      <Servis />
      <Kalite />
      <Online />
      <Yorum />
      <Media />
    </>
  );
}

// function Home() {
//   return <div></div>;
// }
// export default Home;
