import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <Box
      position="relative"
      width={["271px", null, "381px"]}
      height={["484px", null, "554px"]}
      backgroundColor="#FFFFFF"
      border="1.37px solid rgba(147, 162, 211, 0.38)"
      borderRadius="20.937px"
      boxSizing="border-box"
      left={["52px", null, "108px"]}
      top={["280", null, "70x"]}
      p="27px"
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        position="absolute"
        width={["204px", null, "326px"]}
        height={["166px", null, "257px"]}
        top="27px"
        left="27px"
      />

      {/* Title */}
      <Text
        position="absolute"
        top={["200px", null, "315px"]}
        width={["204px", null, "285px"]}
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="700"
        fontSize={["18px", null, "21px"]}
        lineHeight="27px"
        color="#0E2368"
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        position="absolute"
        top={["230px", null, "350px"]}
        width={["204px", null, "295px"]}
        fontFamily="Open Sans"
        fontStyle="normal"
        fontWeight="400"
        fontSize="15px"
        lineHeight="27px"
        letterSpacing="-0.02em"
        color="#444957"
      >
        {description}
      </Text>

      {/* Read More Button */}
      <Button
        position="absolute"
        top={["400px", null, "460px"]}
        left="50%"
        transform="translateX(-50%)"
        width="131px"
        height="42px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid #424961"
        borderRadius="21px"
        bg="transparent"
        color="#424961"
      >
        Read More
      </Button>
    </Box>
  );
};

export default Card;
