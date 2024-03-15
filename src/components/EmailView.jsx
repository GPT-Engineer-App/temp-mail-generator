import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const EmailView = () => {
  const { id } = useParams();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Fetch email details from API
    const fetchEmail = async () => {
      const response = await fetch(`/api/emails/${id}`);
      const data = await response.json();
      setEmail(data);
    };

    fetchEmail();
  }, [id]);

  if (!email) {
    return <Text>Loading...</Text>;
  }
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h2" size="xl" marginBottom={4}>
        {email.subject}
      </Heading>
      <Text fontSize="md" marginBottom={8}>
        From: {email.from}
      </Text>
      <Text fontSize="lg">{email.body}</Text>
    </Box>
  );
};

export default EmailView;
