import React, { useCallback } from "react";

import {
  useColorModeValue,
  useColorMode,
  Box,
  Flex,
  Grid,
  Img,
  Text,
  Image,
} from "@chakra-ui/react";
import { TypeDot, TypeText } from "./TypeDot";
import { motion } from "framer-motion";
import portfolioImg from "../assets/gangaram_gawade_image.gif";
import Resume from "../assets/Gangaram_Gawade_Resume.pdf";
import style from "./ComponentsStyles/home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  return (
    <Box
      id="homepage"
      className="section"
      w="95%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px solid gray"
      margin="10px auto"
      height="auto"
      borderRadius="20px"
      overflow="hidden"
      position="relative"
      backgroundColor={"#000000"}
    >
      {/* <Particles options={ParticlesConfig} id="particles" /> */}

      <Grid
        py={{ sm: "50px" }}
        px={{ sm: "10px" }}
        templateColumns={{
          lg: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        h={{ lg: "100vh" }}
        zIndex={10}
        p="5%"
        mb="30px"
        alignContent="center"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign="left"
          className="i-name"
          py="20"
        >
          <Box
            mx={{
              base: "20px",
              sm: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "2xl",
                  lg: "3xl",
                }}
                color={"white"}
              >
                Hello I Am
              </Text>
              <TypeDot />
            </div>

            <Text
              className="yellowText"
              fontSize={{
                base: "30px",
                sm: "40px",
                md: "3rem",
                lg: "3.2rem",
                xl: "4rem",
              }}
              _hover={{ color: "brown" }}
              fontWeight="bold"
              bgGradient="linear(to-b, #fdc50f, #fb982f)"
              bgClip="text"
            >
              Gangaram Gawade...
            </Text>
          </Box>

          <Text
            color="rgb(161, 160, 153)"
            lineHeight={{
              base: "20px",
              sm: "23px",
              md: "24px",
              lg: "26px",
              xl: "35px",
            }}
            fontSize={{ sm: "16px", md: "16px", lg: "18px", xl: "20px" }}
            mx={{ base: "20px" }}
          >
            Looking for a suitable work opportunity, preferably in an IT
            company, which renders a challenging career, providing the
            opportunities to enhance my educational and technical skills
            <br />
            <br />
            <hr />
            <TypeText />
          </Text>

          <Box
            display="flex"
            flexDirection={{ sm: "row", base: "column" }}
            my={4}
            py={4}
            px={4}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <a
              href={Resume}
              download={"Gangaram_Gawade_Resume.pdf"}
              className={style.ResumeBtn}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Resume
                <Image
                  src="https://em-content.zobj.net/source/noto-emoji-animations/344/fire_1f525.gif"
                  w="30px"
                  mb="1"
                  ml="1"
                />
              </div>
            </a>

            <a href="https://github.com/Gangaram1998">
              <Box
                border="1px solid white"
                borderRadius={"10px"}
                m={1}
                p={2}
                fontSize="30"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
                  background: "black",
                }}
                color="white"
              >
                <AiFillGithub />
              </Box>
            </a>
            <a href="https://www.linkedin.com/in/gangaram-gawade-a73301240/">
              <Box
                border="1px solid white"
                borderRadius={"10px"}
                p={2}
                m={1}
                fontSize="30"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
                  background: "black",
                }}
                color="#0a66c2"
              >
                <FaLinkedinIn />
              </Box>
            </a>
            <a href="mailto:ramggawade1998@gmail.com">
              <Box
                border="1px solid white"
                borderRadius={"10px"}
                p={2}
                m={1}
                fontSize="30"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
                  background: "black",
                }}
                color="#ea4335"
              >
                <SiGmail />
              </Box>
            </a>
          </Box>
        </Flex>

        <Box
          display="flex"
          maxW={{ sm: "60%", md: "80%" }}
          alignItems="center"
          m="auto"
          borderRight="4px"
          overflow="hidden"
          borderRadius="40%"
          borderColor="#fb982f"
        >
          <motion.div
            initial={{ x: "400px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ delay: "0.2", duration: "1.5" }}
          >
            <Img
              className="profileimg"
              src={portfolioImg}
              p="4"
              alignItems="center"
              alt="no img"
              objectFit="cover"
              maxW="70%"
              borderRadius={"40%"}
              _hover={{ transform: "scale(1)" }}
            />
          </motion.div>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
