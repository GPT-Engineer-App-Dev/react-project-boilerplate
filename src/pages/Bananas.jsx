import { Container, Heading, VStack, Text } from "@chakra-ui/react";

const Bananas = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Bananas Page</Heading>
        <Text fontSize="xl">This page is protected and requires authentication to access.</Text>
      </VStack>
    </Container>
  );
};

export default Bananas;