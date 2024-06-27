import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justifyContent={{base:"center",sm:"center",md:"space-around"}}
     paddingBottom={5}
     flexDirection={{base:"column-reverse",sm:"column-reverse",md:"row",lg:"row"}}>
      <Text padding={2} mx={"auto"}>© Portfolio by  Gangaram Gawade | All rights reserved.</Text>
      <Text padding={2} mx={"auto"}>Made with 💖 by Gangaram Gawade</Text>
    </Flex>
  );
};

export default Footer;
