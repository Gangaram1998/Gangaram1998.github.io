import React from "react";
import {
  Box,
  useColorModeValue,
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Tooltip,
  useColorMode,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Grid,
} from "@chakra-ui/react";
import "./ComponentsStyles/skills.css";
import GitHubCalendar from "react-github-calendar";
import NextIcon from "../assets/next.png"

const all = [
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },

  {
    Image: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    name: "React",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    name: "Redux",
  },

  {
    Image:
      "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    name: "TypeScript",
  },
  {
    Image: "https://i.imgur.com/mAz7ftu.png",
    name: "Next JS"
  },
  {
    Image: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
    name: "Bootstrap",
  },

  {
    Image: "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    name: "Chakra UI",
  },

  {
    Image:
      "https://i.imgur.com/eVXNXxC.png",
    name: "Tailwind CSS",
  },
  {
    Image: "https://i.imgur.com/NESsARo.png",
    name: "Material Ui"
  },

  {
    Image: "https://img.icons8.com/fluency/512/node-js.png",
    name: "NodeJS",
  },

  {
    Image: "https://img.icons8.com/color/512/express-js.png",
    name: "Express",
  },
  {
    Image: "https://mohit-portfolio.vercel.app/assets/mongoose.20aad1bc.png",
    name: "Mongoose",
  },
  {
    Image:
      "https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png?f=webp&w=128",
    name: "MongoDB",
  },
  {
    Image:
      "https://i.imgur.com/fTBAkcu.png",
    name: "MySql",
  },
  {
    Image:
      "https://i.imgur.com/bslYeP2.png",
    name: "Prisma ORM",
  },
  {
    Image:
      "https://i.imgur.com/z6C3TaE.png",
    name: "Postgre Sql",
  },

  {
    Image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    name: "Postman",
  },
  {
    Image:
      "https://sujjwal21.github.io/static/media/github.3b9e32903aa89111875d.png",
    name: "Github",
  },
  {
    Image: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    name: "Git",
  },
  {
    Image: "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    name: "VScode",
  },
  {
    Image:
      "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    name: "Netlify",
  },
  {
    Image:
      "https://th.bing.com/th/id/R.55bc7de5fbee3567ea51a2b146057ccb?rik=FS1Xk2gxsTyIuw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_260234.png&ehk=RMqSsG5mX%2fU8dVGTgz7ObsPkayg3cpHbXlBOJEPwBFM%3d&risl=&pid=ImgRaw&r=0",
    name: "Vercel",
  },
  {
    Image:
      "https://static-blog.crozdesk.com/wp-content/uploads/2015/09/23114952/canva-logo.png",
    name: "Canva",
  },
  {
    Image: "https://www.cyclic.sh/og/summary_large_image.png",
    name: "Cyclic",
  },


];

const Frontend = [
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },

  {
    Image: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    name: "React",
  },
  {
    Image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    name: "Redux",
  },

  {
    Image:
      "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    name: "TypeScript",
  },
  {
    Image: "https://i.imgur.com/mAz7ftu.png",
    name: "Next JS"
  },
  {
    Image: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
    name: "Bootstrap",
  },

  {
    Image: "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    name: "Chakra UI",
  },

  {
    Image:
      "https://i.imgur.com/eVXNXxC.png",
    name: "Tailwind CSS",
  },
  {
    Image: "https://i.imgur.com/NESsARo.png",
    name: "Material Ui"
  }
];

const Backend = [
  {
    Image: "https://img.icons8.com/fluency/512/node-js.png",
    name: "NodeJS",
  },

  {
    Image: "https://img.icons8.com/color/512/express-js.png",
    name: "Express",
  },
  {
    Image: "https://mohit-portfolio.vercel.app/assets/mongoose.20aad1bc.png",
    name: "Mongoose",
  },
  {
    Image:
      "https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png?f=webp&w=128",
    name: "MongoDB",
  },
  {
    Image:
      "https://i.imgur.com/fTBAkcu.png",
    name: "MySql",
  },
  {
    Image:
      "https://i.imgur.com/bslYeP2.png",
    name: "Prisma ORM",
  },
  {
    Image:
      "https://i.imgur.com/z6C3TaE.png",
    name: "Postgre Sql",
  },
];

const tools = [
  {
    Image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    name: "Postman",
  },
  {
    Image:
      "https://sujjwal21.github.io/static/media/github.3b9e32903aa89111875d.png",
    name: "Github",
  },
  {
    Image: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    name: "Git",
  },
  {
    Image: "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    name: "VScode",
  },
  {
    Image:
      "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    name: "Netlify",
  },
  {
    Image:
      "https://th.bing.com/th/id/R.55bc7de5fbee3567ea51a2b146057ccb?rik=FS1Xk2gxsTyIuw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_260234.png&ehk=RMqSsG5mX%2fU8dVGTgz7ObsPkayg3cpHbXlBOJEPwBFM%3d&risl=&pid=ImgRaw&r=0",
    name: "Vercel",
  },
  {
    Image:
      "https://static-blog.crozdesk.com/wp-content/uploads/2015/09/23114952/canva-logo.png",
    name: "Canva",
  },
  {
    Image: "https://www.cyclic.sh/og/summary_large_image.png",
    name: "Cyclic",
  },
];

const Skills = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="skillpage"
      className="section"
      w="95%"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      border="2px solid gray"
      margin="10px auto"
      borderRadius="20px"
      Color={useColorModeValue === "dark" ? "white" : "black"}
    >
      <Text>
        <Heading
          textAlign={"center"}
          marginTop={50}
          className="heading1"
          fontFamily={"Signika Negative, sans-serif"}
          _hover={{ transform: "scale(1.05)" }}
        >
          My <span style={{ color: "#dc143c" }}>Technical</span> Skills
        </Heading>
      </Text>

      <Box p="5%">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList
            pb="3%"
            justifyContent="center"
            alignItems="center"
            fontFamily={"Signika Negative, sans-serif"}
            fontSize={"md"}
          >
            <Tab>All</Tab>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>Tools</Tab>
          </TabList>
          <TabPanels>
            {/* All */}
            <TabPanel>
              <Wrap spacing="60px" justify="center">
                {all.map((e) => (
                  <WrapItem>
                    <Tooltip hasArrow label={e.name} placement="bottom">
                      <Center>
                        <Box
                          bgColor="blackAlpha.200"
                          boxShadow={"2xl"}
                          textAlign={"center"}
                          p={2}
                          border="1px solid gray"
                          borderRadius={"15px"}
                        >
                          <Image
                            boxSize={{
                              base: "60px",
                              md: "90px",
                              lg: "120px",
                            }}
                            _hover={{
                              bg: "white",
                              paddingBottom: "10px",
                              transform: "scale(1.05)",
                            }}
                            src={e.Image}
                          />
                          <Text
                            fontSize={{ base: "sm", md: "md", lg: "xl" }}
                            as="b"
                            fontFamily={"lorum"}
                          >
                            {e.name}
                          </Text>
                        </Box>
                      </Center>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </TabPanel>

            {/* Frontend */}
            <TabPanel>
              <Wrap spacing="60px" justify="center">
                {Frontend.map((e) => (
                  <WrapItem>
                    <Tooltip hasArrow label={e.name} placement="bottom">
                      <Center>
                        <Box
                          bgColor="blackAlpha.200"
                          boxShadow={"2xl"}
                          p={2}
                          border="1px solid gray"
                          borderRadius={"15px"}
                          textAlign={"center"}
                        >
                          <Image
                            boxSize={{
                              base: "60px",
                              md: "90px",
                              lg: "120px",
                            }}
                            _hover={{
                              bg: "white",
                              paddingBottom: "10px",
                              transform: "scale(1.05)",
                            }}
                            src={e.Image}
                          />
                          <Text
                            fontSize={{ base: "sm", md: "md", lg: "xl" }}
                            as="b"
                            fontFamily={"lorum"}
                          >
                            {e.name}
                          </Text>
                        </Box>
                      </Center>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </TabPanel>

            {/* Backend */}
            <TabPanel>
              <Wrap spacing="60px" justify="center">
                {Backend.map((e) => (
                  <WrapItem>
                    <Tooltip hasArrow label={e.name} placement="bottom">
                      <Center>
                        <Box
                          bgColor="blackAlpha.200"
                          boxShadow={"2xl"}
                          p={2}
                          border="1px solid gray"
                          borderRadius={"15px"}
                          textAlign={"center"}
                        >
                          <Image
                            boxSize={{
                              base: "60px",
                              md: "90px",
                              lg: "120px",
                            }}
                            _hover={{
                              bg: "white",
                              paddingBottom: "10px",
                              transform: "scale(1.05)",
                            }}
                            src={e.Image}
                          />
                          <Text
                            fontSize={{ base: "sm", md: "md", lg: "xl" }}
                            as="b"
                            fontFamily={"lorum"}
                          >
                            {e.name}
                          </Text>
                        </Box>
                      </Center>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </TabPanel>

            {/* Tools */}
            <TabPanel>
              <Wrap spacing="60px" justify="center">
                {tools.map((e) => (
                  <WrapItem>
                    <Tooltip hasArrow label={e.name} placement="bottom">
                      <Center>
                        <Box
                          bgColor="blackAlpha.200"
                          boxShadow={"2xl"}
                          p={2}
                          border="1px solid gray"
                          borderRadius={"15px"}
                          textAlign={"center"}
                        >
                          <Image
                            boxSize={{
                              base: "60px",
                              md: "90px",
                              lg: "120px",
                            }}
                            _hover={{
                              bg: "white",
                              paddingBottom: "10px",
                              transform: "scale(1.05)",
                            }}
                            src={e.Image}
                          />
                          <Text
                            fontSize={{ base: "sm", md: "md", lg: "xl" }}
                            as="b"
                            fontFamily={"lorum"}
                          >
                            {e.name}
                          </Text>
                        </Box>
                      </Center>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Divider m={4} />
      <Text>
        <Heading
          textAlign={"center"}
          marginTop={50}
          marginBottom={50}
          className="heading1"
          fontFamily={"Signika Negative, sans-serif"}
          _hover={{ transform: "scale(1.05)" }}
        >
          My <span style={{ color: "#dc143c" }}>Github</span> Stats
        </Heading>
      </Text>
      <Box p={2}>
        <Center m={2}
          display="flex"
          overflow="hidden"
          flexDirection={{ base: "column", sm: "column", lg: "row" }}>
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gangaram1998&layout=compact&theme=radical&hide_border=true"
            m={2}
            _hover={{ transform: "scale(1.05)" }} />
          <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Gangaram1998&theme=radical"
            m={2}
            _hover={{ transform: "scale(1.05)" }}
            maxWidth={{ lg: "500px" }}
          />
        </Center>

        <Center m={2}
          display="flex"
          overflow="hidden"
          flexDirection={{ base: "column", sm: "column", lg: "row" }}>
          <Image src="https://github-readme-stats.vercel.app/api?username=Gangaram1998&show_icons=true&theme=radical&count_private=true&include_all_commits=true&hide=issues,contribs&hide_border=true&line_height=24"
            m={2}
            _hover={{ transform: "scale(1.05)" }} />
          <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Gangaram1998&theme=radical&hide_border=true"
            m={2}
            _hover={{ transform: "scale(1.05)" }}
            minWidth={{ base: "275px" }}
            maxWidth={{ base: "275px", sm: "300px" }}
            width={"100%"}
          />
        </Center>
        <Box
          display={"flex"}
          justifyContent={"center"}
        >
          <Center m={2}
            p={2}
            display="flex"
            overflow="hidden"
            justifyContent={"center"}
            _hover={{ transform: "scale(1.05)" }}
            backgroundColor={"#DD6B20"}
            borderRadius="15px"
            maxWidth={{ base: "280px", sm: "500px", md: "700px", lg: "900px", xl: "1000px" }}
            width={"100%"}
          >
            <GitHubCalendar
              username="Gangaram1998"
              colorScheme="light"
              title="GitHub Calendar" />
          </Center>
        </Box>

      </Box>
    </Box>
  );
};

export default Skills;
