import React from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <Box marginTop={8}>
      <Text fontSize="xl" fontWeight="bold" marginBottom={4}>
        Received Emails
      </Text>
      <List spacing={2}>
        {emails.map((email) => (
          <ListItem key={email.id} onClick={() => onSelectEmail(email)} cursor="pointer" _hover={{ bg: "gray.100" }} padding={2}>
            {email.subject}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EmailList;
