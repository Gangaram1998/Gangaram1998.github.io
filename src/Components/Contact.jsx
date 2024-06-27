import "./ComponentsStyles/contact.css";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Heading,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  useToast,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  user_email: Yup.string()
    .required("Email is Required")
    .email("Invalid email format"),

  user_name: Yup.string()
    .required("Name is Required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must not exceed 30 characters"),

  message: Yup.string()
    .required("Message is Required.")
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message must not exceed 500 characters"),
});

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("abhinavjoshi1798@gmail.com");
  const toast = useToast();
  const [disableFormSubmitButton, setDisableFormSubmitButton] = useState(false);

  const form = useRef();

  const [initialValues, setInitialValues] = useState({
    user_name: "",

    user_email: "",
    message: "",
  });

  const onSubmit = async (values) => {
    console.log("values just before sending post request", values);
    const errors = await Formik.validateForm(); // Manually validate the form
    if (Object.keys(errors).length === 0) {
      sendEmail();
    }
  };

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit,
  });

  const sendEmail = () => {
    setDisableFormSubmitButton(true);

    emailjs
      .sendForm("service_ucrwysq", "template_0mobdzr", form.current, {
        publicKey: "a8FO2izG-EhlwgGm_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Formik.resetForm();
          toast({
            title: "Message sent.",
            description:
              "We've received your message and will get back to you shortly.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          setDisableFormSubmitButton(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Message not sent.",
            description: "Please fill out all fields.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          setDisableFormSubmitButton(false);
        }
      );
  };

  return (
    <Box
      className="section"
      id="contactpage"
      w="95%"
      border="2px solid gray"
      margin="10px auto"
      height="fit-content"
      p={3}
      borderRadius="20px"
      Color={useColorModeValue === "dark" ? "white" : "black"}
    >
      <Text>
        <Heading
          textAlign={"center"}
          marginTop={5}
          className="heading1"
          fontFamily={"Signika Negative, sans-serif"}
          _hover={{ transform: "scale(1.05)" }}
          marginBottom={5}
        >
          Let's <span style={{ color: "#dc143c" }}>Work</span> Togther
        </Heading>
      </Text>

      <Box
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent={"center"}
        alignItems={"top"}
      >
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }} p={4}>
          <Stack
            align="left"
            justify="space-around"
            direction={{ base: "column", md: "column" }}
            width="fit-content"
            margin={"auto"}
          >
            <HStack p={{ base: "2px", sm: "5px", md: "10px", lg: "10px" }}>
              <Link
                id="contact-github"
                href="https://github.com/Gangaram1998"
                target="_blank"
              >
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsGithub />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
              </Link>
              <Text>@Gangaram1998</Text>
            </HStack>

            <HStack p={{ base: "2px", sm: "5px", md: "10px", lg: "10px" }}>
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/gangaram-gawade-a73301240/"
                target="_blank"
              >
                <IconButton
                  aria-label="LinkedIn"
                  variant="ghost"
                  size="lg"
                  icon={<BsLinkedin size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
              </Link>
              <Text>Gangaram Gawade</Text>
            </HStack>

            <HStack p={{ base: "2px", sm: "5px", md: "10px", lg: "10px" }}>
              <Tooltip label="+91 9587276447" closeOnClick={false} hasArrow>
                <IconButton
                  aria-label="phone"
                  variant="ghost"
                  size="lg"
                  icon={<CgPhone size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
              </Tooltip>
              <Text id="contact-phone">+91 8421361557</Text>
            </HStack>

            <HStack p={{ base: "2px", sm: "5px", md: "10px", lg: "10px" }}>
              <Tooltip
                label={hasCopied ? "Email Copied!" : "Copy Email"}
                closeOnClick={false}
                hasArrow
              >
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<MdEmail />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  onClick={onCopy}
                  isRound
                />
              </Tooltip>
              <Text>ramggawade1998@gmail.com</Text>
            </HStack>
          </Stack>
        </Box>

        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }} p={3}>
          <VStack>
            <Stack
              justifyContent="center"
              alignItems="left"
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                w={{ base: "100%", md: "full", lg: "100%" }}
                bg={useColorModeValue("white", "black")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                boxShadow={useColorModeValue("lg", "dark-lg")}
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "all 0.2s ease-out",
                  boxShadow: "0 10px 50px -20px #b0c4de",
                }}
              >
                <VStack>
                  <form ref={form} onSubmit={Formik.handleSubmit}>
                    <HStack marginBottom={5}>
                      <FormLabel width={"25%"}>Name</FormLabel>
                      <Flex direction={"column"} width={"75%"}>
                        {Formik.errors && (
                          <Text fontSize={"lg"} color={"red.500"}>
                            {Formik.errors.user_name}
                          </Text>
                        )}
                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            value={Formik.values.user_name}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                          />
                        </InputGroup>
                      </Flex>
                    </HStack>

                    <HStack marginBottom={5}>
                      <FormLabel width={"25%"}>Email</FormLabel>
                      <Flex direction={"column"} width={"75%"}>
                        {Formik.errors && (
                          <Text fontSize={"lg"} color={"red.500"}>
                            {Formik.errors.user_email}
                          </Text>
                        )}
                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            value={Formik.values.user_email}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                          />
                        </InputGroup>
                      </Flex>
                    </HStack>

                    <HStack marginBottom={5} alignItems={"top"}>
                      <FormLabel width={"25%"}>Message</FormLabel>
                      <Flex direction={"column"} width={"75%"}>
                        {Formik.errors && (
                          <Text fontSize={"lg"} color={"red.500"}>
                            {Formik.errors.message}
                          </Text>
                        )}
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          value={Formik.values.message}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                      </Flex>
                    </HStack>
                    <HStack width={"100%"}>
                      <Button
                        colorScheme="blue"
                        bg="blue.400"
                        color="white"
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                        isFullWidth
                        value="send"
                        margin={"auto"}
                        width={"70%"}
                        isDisabled={disableFormSubmitButton}
                      >
                        Send Message
                      </Button>
                    </HStack>
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
