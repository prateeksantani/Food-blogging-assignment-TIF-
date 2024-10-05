import React from "react";
import { Box, Text, Link, Flex, VStack, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg"; // Add your logo if needed\
import "../App.css";

function Footer() {
  return (
    <Box
      as="footer"
      bg="white"
      width="100%"
      height={["auto", "auto"]}
      p={10}
      position="relative"
    >
      {/* Desktop View */}
      <Flex justify="space-around" display={["none", "flex"]}>
        <VStack spacing={4} align="start">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            Contact Us
          </Text>
          <Text fontSize="16px" color="#444957" lineHeight="24px">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
            <br />
            Phartosh Gate near YTM Market, XYZ-343434
          </Text>
          <Text fontSize="16px" color="#444957">
            example2020@gmail.com
          </Text>
          <Text fontSize="16px" color="#444957">
            (904) 443-0343
          </Text>
        </VStack>

        <VStack spacing={4} align="start">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            More
          </Text>
          <Link fontSize="16px" color="#444957">
            About Us
          </Link>
          <Link fontSize="16px" color="#444957">
            Products
          </Link>
          <Link fontSize="16px" color="#444957">
            Career
          </Link>
          <Link fontSize="16px" color="#444957">
            Contact Us
          </Link>
        </VStack>

        <VStack spacing={4} align="start">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            Social Links
          </Text>
          <HStack spacing={6}>
            <Link>
              <Image src="/assets/instagram-icon.svg" alt="Instagram" />
            </Link>
            <Link>
              <Image src="/assets/twitter-icon.svg" alt="Twitter" />
            </Link>
            <Link>
              <Image src="/assets/facebook-icon.svg" alt="Facebook" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Mobile View */}
      <VStack display={["flex", "none"]} spacing={10} align="center">
        <Image src={logo} alt="Logo" boxSize="60px" />
        <VStack spacing={2} align="center">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            Contact Us
          </Text>
          <Text fontSize="16px" color="#444957" textAlign="center">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>
          <Text fontSize="16px" color="#444957" textAlign="center">
            example2020@gmail.com
          </Text>
          <Text fontSize="16px" color="#444957" textAlign="center">
            (904) 443-0343
          </Text>
        </VStack>

        <VStack spacing={2} align="center">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            More
          </Text>
          <Link fontSize="16px" color="#444957">
            About Us
          </Link>
          <Link fontSize="16px" color="#444957">
            Products
          </Link>
          <Link fontSize="16px" color="#444957">
            Career
          </Link>
          <Link fontSize="16px" color="#444957">
            Contact Us
          </Link>
        </VStack>

        <VStack spacing={4} align="center">
          <Text
            fontSize="18.8433px"
            fontWeight="600"
            color="#0E2368"
            lineHeight="27px"
          >
            Social Links
          </Text>
          <HStack spacing={6}>
            <Link>
              <Image src="/assets/instagram-icon.svg" alt="Instagram" />
            </Link>
            <Link>
              <Image src="/assets/twitter-icon.svg" alt="Twitter" />
            </Link>
            <Link>
              <Image src="/assets/facebook-icon.svg" alt="Facebook" />
            </Link>
          </HStack>
        </VStack>

        <Text fontSize="14px" color="#444957" textAlign="center">
          © 2022 Food Truck Example
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
