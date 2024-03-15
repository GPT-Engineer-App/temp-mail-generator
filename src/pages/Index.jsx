import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button, Stack, useToast, Image } from "@chakra-ui/react";
import { FaEnvelope, FaRandom } from "react-icons/fa";
import ReceivedEmails from "../components/ReceivedEmails";

const Index = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();

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

  const mockReceiveEmails = useCallback(() => {
    const subjects = ["Important: Action Required", "Your Order Confirmation", "New Message from a Friend", "Weekly Newsletter", "Discount Code Inside"];
    const bodies = ["Please click the link below to verify your account.", "Thank you for your purchase! Your order will be shipped soon.", "Hey there! Just wanted to catch up. How have you been?", "Here are the latest updates and news from our team.", "Use the code SAVE20 to get 20% off your next order!"];

    const newEmail = {
      id: Math.random().toString(36).substring(2, 9),
      subject: subjects[Math.floor(Math.random() * subjects.length)],
      from: `${Math.random().toString(36).substring(2, 8)}@example.com`,
      body: bodies[Math.floor(Math.random() * bodies.length)],
    };
    setEmails((prevEmails) => [...prevEmails, newEmail]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      mockReceiveEmails();
    }, 3000);
    return () => clearTimeout(timer);
  }, [mockReceiveEmails]);

  const handleSelectEmail = useCallback(
    (email) => {
      navigate(`/email/${email.id}`);
    },
    [navigate],
  );

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
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
      <ReceivedEmails emails={emails} onSelectEmail={handleSelectEmail} />
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
