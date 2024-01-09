import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const marginBottomSpace = {
    marginBottom: "10px"
  }
  const boldStyle = {
    fontWeight: 500
  }
  return (
    <VStack bgColor="white" borderRadius={10} spacing={5}>
      <Image src={imageSrc} borderRadius={10} ></Image>
      <HStack>
        <div>&nbsp;</div>
        <VStack alignItems="left">
          <Heading size="md" color="black" >{title}</Heading>
          <Text size="s" color="gray">{description}</Text>
          <HStack style={marginBottomSpace}>
            <Text size="s" color="black" style={boldStyle}>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Card;
