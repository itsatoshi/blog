"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Card,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="4xl" py={8} mx="auto">
      <Stack gap={8}>
        {/* Font Test Section */}
        <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="md">
          <Text fontSize="sm" color="gray.500" mb={2}>
            Font Test:
          </Text>
          <div style={{ fontFamily: "var(--font-sora)" }}>
            <strong>This should be Sora font</strong>
          </div>
          <div style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
            This should be Zen Maru Gothic font
          </div>
        </Box>

        {/* Header Section */}
        <Box textAlign="center">
          <Heading
            size="2xl"
            mb={4}
            bgGradient="to-r"
            gradientFrom="blue.400"
            gradientTo="purple.500"
            bgClip="text"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Welcome to Chakra UI v3
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            This demo showcases your custom Google Fonts setup with Zen Maru
            Gothic as body text and Sora for headings.
          </Text>
        </Box>

        {/* Font Demo Section */}
        <Stack gap={6}>
          <Card.Root p={6}>
            <Card.Body>
              <Heading size="lg" mb={3}>
                Heading Font: Sora
              </Heading>
              <Text>
                Body text uses Zen Maru Gothic font. This paragraph demonstrates
                how the body font looks in a longer piece of text. The
                Japanese-inspired Zen Maru Gothic provides excellent readability
                for body content while maintaining a modern, clean aesthetic.
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root p={6}>
            <Card.Body>
              <Heading size="md" mb={3}>
                Typography Hierarchy
              </Heading>
              <Stack gap={3} align="start">
                <Heading size="xl">Extra Large Heading (Sora)</Heading>
                <Heading size="lg">Large Heading (Sora)</Heading>
                <Heading size="md">Medium Heading (Sora)</Heading>
                <Heading size="sm">Small Heading (Sora)</Heading>
                <Text fontSize="lg">Large body text (Zen Maru Gothic)</Text>
                <Text fontSize="md">Regular body text (Zen Maru Gothic)</Text>
                <Text fontSize="sm">Small body text (Zen Maru Gothic)</Text>
              </Stack>
            </Card.Body>
          </Card.Root>

          <Card.Root p={6}>
            <Card.Body>
              <Heading size="lg" mb={4}>
                Interactive Components
              </Heading>
              <Stack direction="row" gap={4} flexWrap="wrap">
                <Button colorScheme="blue" size="lg">
                  Primary Button
                </Button>
                <Button variant="outline" colorScheme="blue" size="lg">
                  Outline Button
                </Button>
                <Button variant="ghost" colorScheme="blue" size="lg">
                  Ghost Button
                </Button>
              </Stack>
              <Text mt={4}>
                These buttons and this text demonstrate the font system working
                together seamlessly. Button text inherits from the body font
                (Zen Maru Gothic) while maintaining proper hierarchy.
              </Text>
            </Card.Body>
          </Card.Root>
        </Stack>

        {/* Footer */}
        <Box textAlign="center" pt={8}>
          <Text color="gray.500">
            Built with Next.js 15, Chakra UI v3, and Google Fonts
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
