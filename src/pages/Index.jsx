import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, useToast, Image } from "@chakra-ui/react";
import { FaEnvelope, FaRandom } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const generateEmail = () => {
    const randomString = Math.random().toString(36).substring(7);
    setEmail(`${randomString}@tempmail.com`);
    toast({
      title: "Email Generated",
      description: "Your temporary email address has been generated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="500px" margin="auto" padding={8}>
      <Image src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGljb258ZW58MHx8fHwxNzEwNDcxNzY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Email Icon" width="100px" margin="auto" marginBottom={8} />
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Temporary Email Generator
      </Heading>
      <Stack spacing={4}>
        <Input value={email} isReadOnly placeholder="Generated email will appear here" fontSize="lg" />
        <Button leftIcon={<FaRandom />} colorScheme="blue" size="lg" onClick={generateEmail}>
          Generate Email
        </Button>
      </Stack>
      <Text fontSize="sm" color="gray.500" marginTop={8} textAlign="center">
        The generated email is temporary and will expire after a certain period.
      </Text>
      <Text fontSize="sm" color="gray.500" textAlign="center">
        Powered by <FaEnvelope /> TempMail
      </Text>
    </Box>
  );
};

export default Index;
