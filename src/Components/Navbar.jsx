import logo from '../assets/gangaram_gawade_image.gif'
import Resume from "../assets/Gangaram_Gawade_Resume.pdf"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack, useColorMode,
  Heading,
  Badge,
  Divider
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { HiChatAlt2, HiHome } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import { FiPaperclip } from 'react-icons/fi';
import { useState } from "react";

export default function Navbar({ currentSection }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState("#homepage");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onClose();
  }

  return (
    <Box bg={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      // pos="sticky"
      /* Remove key frames from about section and you can make position sticky
      laptopboy image animation will not work if you do so .
      */
      top="0px"
      w="100%"
      zIndex={1000}
      fontFamily={'Signika Negative, sans-serif'}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
      <Flex h={16}
        alignItems={'center'}
        justifyContent={'space-between'}>

        <HStack spacing={4}
          alignItems={['flex-start', 'center']}
          flexWrap={['wrap', 'nowrap']}
          justifyContent={['flex-start', 'space-between']}
          ml={{ base: 0, sm: 2 }}
          py={2}
          px={4}>
          <Box flexShrink={0}>
            <Avatar
              size={'sm'}
              src={logo}
            />
          </Box>
          <Badge
            px={[1, 2]}
            fontSize={['sm', 'lg']}
            fontWeight='400'
            fontFamily={"Signika Negative, sans-serif"}
            colorScheme={useColorModeValue("green", "yellow")}
            mt={[2, 0]}
          >
            HEY! I'M GANGARAM
          </Badge>
        </HStack>

        <HStack
          as={'nav'}
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          gap={'30px'}
          fontFamily={"Signika Negative, sans-serif"}
          color={colorMode === "light" ? "gray.800" : "yellow.50"}
          width="70%"
        >
          <Stack direction={'row'}
            width="100%"
            height="100%"
            display="flex"
            justifyContent={"space-between"}
            alignItems="center">
            <HashLink to={'#homepage'}
              offset={-100}
              smooth={true}
              spy={true}
              style={{ width: "90px" }}>
              <Heading size={'sm'}
                p={2}
                onClick={() => handleLinkClick('#homepage')}
                className={currentSection === "home" ? "home active" : "home"}
                gap={'30px'}
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button ><HiHome /></button>
                HOME
              </Heading>
            </HashLink>

            <HashLink to={'#aboutpage'}
              offset={-100}
              smooth={true}
              spy={true}
              style={{ width: "90px" }}>
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#aboutpage')}
                className={currentSection === "about" ? "about active" : "about"}
                p={2}
                max-width="90px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}
              >
                <button><FaUserAlt /></button>
                ABOUT
              </Heading>
            </HashLink>

            <HashLink to={'#projectpage'}
              offset={-100}
              smooth={true}
              spy={true}
              style={{ width: "105px" }}>
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#projectpage')}
                className={currentSection === "project" ? "project active" : "project"}
                p={2}
                max-width="105px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button><AiOutlineFundProjectionScreen /> </button>
                PROJECT
              </Heading>
            </HashLink>

            <HashLink to={'#skillpage'}
              offset={-100}
              smooth={true}
              spy={true}
              style={{ width: "90px" }}>
              <Heading
                size={'sm'}
                gap={'30px'}
                max-width="90px"
                onClick={() => handleLinkClick('#skillpage')}
                className={currentSection === "skills" ? "skills active" : "skills"}
                p={2}
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button ><GiSkills /></button>
                SKILL
              </Heading>
            </HashLink>

            <HashLink to={'#contactpage'}
              offset={-100}
              smooth={true}
              spy={true}
              style={{ width: "110px" }} >
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#contactpage')}
                p={2}
                className={currentSection === "contact" ? "contact active" : "contact"}
                max-width="110px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button><HiChatAlt2 /></button>
                CONTACT
              </Heading>
            </HashLink>

            <a
              href={Resume}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1e0lf7vIXjXUONUtJpUS2Q1A7d1k1rS4Z/view?usp=drive_link"
                )}
              download={'Gangaram_Gawade_Resume.pdf'}
              textDecoration='null'
              target="_blank"
              rel="noreferrer"
              style={{ width: "110px" }}
            >
              <Heading size={'sm'}
                gap={'30px'}
                p={3}
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.10)'
                }}>
                <button><FiPaperclip /></button>
                RESUME
              </Heading>
            </a>

          </Stack>

        </HStack>

        <Flex
          alignItems={'center'}
          marginRight={2}>
          <Menu m={1}>
            <Button onClick={toggleColorMode} >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon color={"gold"} />}
            </Button>
          </Menu>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            m={1}
          />


        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}
          px={4}
          display={{ lg: 'none' }} >
          <Divider borderBottom="2px solid gray"
            fontWeight="bold"
            my={4} />
          <Stack as={'nav'}
            spacing={4}
            onClick={isOpen ? onClose : onOpen}
            alignItems={"center"}
          >

            <HashLink to={'#homepage'}
              offset={-100}
              smooth={true}
              spy={true}>
              <Heading size={'sm'}
                p={2}
                onClick={() => handleLinkClick('#homepage')}
                height="35px"
                width="90px"
                className={currentSection === "home" ? "home active" : "home"}
                gap={'30px'}
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button><HiHome /></button>
                HOME
              </Heading>
            </HashLink>

            <HashLink to={'#aboutpage'}
              offset={-100}
              smooth={true}
              spy={true}>
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#aboutpage')}
                className={currentSection === "about" ? "about active" : "about"}
                p={2}
                width="90px"
                height="35px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}
              >
                <button><FaUserAlt /></button>
                ABOUT
              </Heading>
            </HashLink>

            <HashLink to={'#projectpage'}
              offset={-100}
              smooth={true}
              spy={true}>
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#projectpage')}
                className={currentSection === "project" ? "project active" : "project"}
                p={2}
                width="105px"
                height="35px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button><AiOutlineFundProjectionScreen /> </button>
                PROJECT
              </Heading>
            </HashLink>

            <HashLink to={'#skillpage'}
              offset={-100}
              smooth={true}
              spy={true}>
              <Heading
                size={'sm'}
                gap={'30px'}
                width="90px"
                height="35px"
                onClick={() => handleLinkClick('#skillpage')}
                className={currentSection === "skills" ? "skills active" : "skills"}
                p={2}
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button ><GiSkills /></button>
                SKILL
              </Heading>
            </HashLink>

            <HashLink to={'#contactpage'}
              offset={-100}
              smooth={true}
              spy={true}>
              <Heading size={'sm'}
                gap={'30px'}
                onClick={() => handleLinkClick('#contactpage')}
                p={2}
                className={currentSection === "contact" ? "contact active" : "contact"}
                width="110px"
                height="35px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.03)'
                }}>
                <button><HiChatAlt2 /></button>
                CONTACT
              </Heading>
            </HashLink>

            <a href={Resume}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hVfRaKfP6PQqdW1sqIuNOxeQVbqfrvlO/view?usp=sharing"
                )}
              download={'Gangaram_Gawade_Resume.pdf'}
              textDecoration='null'
              target="_blank"
              rel="noreferrer"
            >
              <Heading size={'sm'}
                gap={'30px'}
                p={3}
                width="110px"
                height="35px"
                _hover={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  transform: 'scale(1.10)'
                }}>
                <button><FiPaperclip /></button>
                RESUME
              </Heading>
            </a>
          </Stack>
        </Box>
      ) : null}
    </Box>

  );
}

