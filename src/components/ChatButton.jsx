import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { LuBot } from "react-icons/lu"; // Import LuBot icon

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        aria-label="Chat with us"
        icon={<LuBot size={45} />}
        position="fixed"
        bottom="20px"
        right="20px"
        width={isOpen ? "70px" : "60px"}
        height={isOpen ? "70px" : "60px"}
        backgroundColor="black"
        color="white"
        borderRadius="full"
        onClick={toggleChat}
        zIndex={1001}
        transition="transform 0.3s, width 0.3s, height 0.3s"
        transform={isOpen ? "scale(1.1)" : "scale(1)"}
        _hover={{
          backgroundColor: "#0056b3", // Hover background color
          transform: "scale(1.2)",
          width: "70px",
          height: "70px",
        }}
      />
      {isOpen && (
        <Box
          as="iframe"
          src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=2034f9fc-efce-465b-bfbb-a7432b5a1538"
          position="fixed"
          bottom="80px"
          right="20px"
          width="350px"
          height="500px"
          border="none"
          zIndex={1000}
          allow="microphone; camera"
          title="Botpress Webchat"
        />
      )}
    </>
  );
};

export default ChatButton;
