import { Divider, Flex, Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import YorumItem from "../components/YorumItem";

export default function yorum() {
  return (
    <div>
      <Divider marginY={"25px"} />
      <div className={styles.yorum}>
        <div className={styles.yorumbaslik}>
          <Text
            color={"#4299e1"}
            fontSize={"30px"}
            fontFamily={"Montserrat, sans-serif"}
            fontWeight={"600"}
            marginY={"15px"}
          >
            Bütün Şehir Kapsamında Beyaz Eşya Tamiri
          </Text>

          <Text fontFamily={"Montserrat, sans-serif;"} fontWeight={"500"}>
            Her marka ve modeldeki beyaz eşyalarınız için özenle bakım ve onarım
            yapıyoruz.
          </Text>
          <Text>
            Arızalarınızdaki basit sorunları yerinde gideriyoruz. Her marka ve
            modeldeki beyaz eşyalarınız için özenle bakım ve onarı yapıyoruz.
          </Text>
          <Text>
            Arızalarınızdaki basit sorunları yerinde gideriyoruz. Sunduğumuz
            profesyonel teknik servis hizmeti ile sizlere masraf çıkarmadan
            cihazlarınızın tamirini yapıyoruz.
          </Text>
        </div>
        <Flex
          wrap={"wrap"}
          padding={"1px"}
          fontFamily={"Josefin Sans, sans-serif"}
          fontWeight={"600"}
        >
          <YorumItem
            name="Kaan Özçeliker"
            description="
            Mükkemmel bir firma çok memnunuz.. Ekibe teşekkürler. Tavsiye ediyoruz.. tasarımcınız mükkeml gerçöekten 
            "
            AvatarSrc="/Avatar/kaan.png"
          />
          <YorumItem
            name="Atalay Sargın"
            description="
           İzmir Bölge Servis ailesine verdikleri hizmetlerden dolayı Çok Teşekkür Ederim. Emeği geçen tüm çalışanlara Teşekkürler,"
            AvatarSrc="/Avatar/atalay.png"
          />
          <YorumItem
            name="Ulaş Doğan Deniz"
            description="
            firme çok iyi 
            Hizmetleri gerçekten çok hızlı
            Daha önce başka bir firma ile de çalışan biri olarak kesinlikle öneririm.
            Destekleriniz için teşekkürler."
            AvatarSrc="/Avatar/ulas.png"
          />
        </Flex>
      </div>
      <Divider marginY={"20px"} />
    </div>
  );
}
