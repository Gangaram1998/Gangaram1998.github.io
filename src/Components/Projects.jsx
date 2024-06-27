import React from "react";
import {
  Box,
  useColorModeValue,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import style from "./ComponentsStyles/project.module.css";
import { FaGithub } from "react-icons/fa";
import ajio from "../assets/ajio.png"
import fitfusion from "../assets/fitfusion.png";
import stylux from "../assets/stylux.png"
import helthDr from "../assets/helthdr.png";
import hotstar from "../assets/HotStar.png";
import indiansAbroad from "../assets/indiansAbroad.png";

const Projects = () => {
  return (
    <Box
      id="projectpage"
      className="section"
      w="95%"
      height="fit-content"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      border="2px solid gray"
      margin="10px auto"
      borderRadius="20px"
      padding="10px"
      Color={useColorModeValue === "dark" ? "white" : "black"}
    >
      <Heading
        _hover={{ transform: "scale(1.05)" }}
        className="heading1"
        marginTop={"50px"}
        fontFamily={"Signika Negative, sans-serif"}
        fontSize={{ base: "20px", sm: "25px", md: "35px" }}
      >
        My Creative <span className={style.portfolio}>Portfolio</span>
      </Heading>

      <Center marginTop={55}>
        {/* Row-1, Container */}

        <Stack direction={{ base: "column", md: "row" }} gap={"25px"}>
          {/* Row-1, Container */}



          <Center py={12}>
            {/* Row-3-Element-2 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image rounded={"lg"} objectFit={"cover"} src={indiansAbroad} />
              </Box>
              <Stack
                pt={10}
                align={"center"}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Indians Abroad
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Connecting indians living Abroad .
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : Rect | Redux | Node | Express | MongoDb | Javascript | HTML | CSS | SOCKET.IO
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link>
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link
                    href={"https://play.google.com/store/apps/details?id=com.indianabroad&hl=en_US"}
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            {/* Row-3-Element-2 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image rounded={"lg"} objectFit={"cover"} src={ajio} />
              </Box>
              <Stack
                pt={10}
                align={"center"}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Ajio
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Clone of Fashion E-commerce website Ajio .
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : Rect | Redux | Node | Express | MongoDb | Javascript | HTML | CSS
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link
                    href={
                      "https://github.com/Gangaram1998/Ajio_clone"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link
                    href={"https://ajio-clone-3lxc9k0uf-gangaram1998.vercel.app/"}
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Center>

      <Center marginTop={55}>
        {/* Row-2-Container */}

        <Stack direction={{ base: "column", md: "row" }} gap={"25px"}>
          {/* Row-2-Container */}

          <Center py={12}>
            {/* Row-2-Element-1 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image rounded={"lg"} objectFit={"cover"} src={stylux} />
              </Box>
              <Stack
                pt={10}
                align={"center"}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Stylux Clone
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Clone of Fashion E-commerce website Stylux .
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : Rect | Redux | Node | Express | MongoDb | Javascript | HTML | CSS
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link
                    href={
                      "https://github.com/Gangaram1998/stylux_clone"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link
                    href={
                      "https://stylux-clone-6yylqgpi3-gangaram1998.vercel.app/"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            {/* Row-2-Element-2 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  objectFit={"cover"}
                  src={fitfusion}
                />
              </Box>
              <Stack
                pt={10}
                align={"center"}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Fitfusion
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Strem the hottest workouts from the world's top Trainers.
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : Rect | Redux | Node | Express | MongoDb | Javascript | HTML | CSS
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link
                    href={
                      "https://github.com/Gangaram1998/fitfusion"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link
                    href={
                      "https://fitfusion.vercel.app/"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Center>

      <Center marginTop={55}>
        {/* Row-3-Container */}

        <Stack direction={{ base: "column", md: "row" }} gap={"25px"}>
          {/* Row-3-Container */}

          <Center py={12}>
            {/* Row-3-Element-1 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image rounded={"lg"} objectFit={"cover"} src={helthDr} />
              </Box>
              <Stack
                pt={10}
                align={"center"}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Health Dr.
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Plan your diet with Health Dr.
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : HTML | CSS | JavaScript
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link
                    href={
                      "https://github.com/Gangaram1998/Health-Dr."
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link
                    href={"https://incomparable-blancmange-56e496.netlify.app/"}
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
          <Center py={12}>
            {/* Row-1 Element-1 */}
            <Box
              role={"group"}
              p={6}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={{ base: "120px", md: "180px", lg: "200px" }}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(35px)",
                  zIndex: -3,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(40px)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image rounded={"lg"} objectFit={"cover"} src={hotstar} />
              </Box>
              <Stack
                pt={10}
                mt={{ base: "20px", sm: "70px", md: "0px", lg: "0px" }}
                align={"center"}
              >
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"Signika Negative, sans-serif"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  HOTSTAR
                </Heading>
                <Text
                  fontWeight={600}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Clone of video streaming platform Hotstar.
                </Text>
                <Text
                  color={"blue.300"}
                  fontSize={"sm"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                  fontFamily={"Signika Negative, sans-serif"}
                >
                  Tech stack : HTML | CSS | JavaScript
                </Text>

                <Stack direction={"row"} align={"center"}>
                  <Link
                    href={
                      "https://github.com/Gangaram1998/movie-app"
                    }
                    target="_blank"
                  >
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "blue.500",
                        transform: "scale(1.2)",
                      }}
                      leftIcon={<FaGithub size="30px" />}
                    ></Button>
                  </Link>
                  <Link href={"https://splendid-kheer-2dc959.netlify.app/"} target="_blank">
                    <Button
                      rounded={"full"}
                      _hover={{
                        bg: "green.500",
                        transform: "scale(1.2)",
                      }}
                      fontFamily={"Signika Negative, sans-serif"}
                    >
                      Live
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

        </Stack>
      </Center>
    </Box>
  );
};

export default Projects;
