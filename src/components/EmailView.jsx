import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const EmailView = ({ email }) => {
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
