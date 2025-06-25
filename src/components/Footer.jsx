import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaFigma, FaGithub } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <Box bg="black" color="white" height={220} mt={12} py={12} px={5}>
      <Flex mx="12" justify="space-between" wrap="wrap" align="flex-start">
        {/* 왼쪽 아이콘 영역 */}
        <HStack spacing={10} mb={{ base: 6, md: 0 }}>
          <Link href="http://localhost:3000" aria-label="Home Link">
            <Image
              mr={2}
              src={logo}
              alt="Logo"
              boxSize={"32px"}
              _hover={{
                opacity: 0.7,
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link
            href="https://github.com/LG-CNS-TEAM-8"
            aria-label="Github link"
            target="_blank"
          >
            <Icon
              as={FaGithub}
              mr={2}
              boxSize={7}
              color="white"
              _hover={{
                color: "gray.400",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link
            href="https://www.figma.com/design/791grcr2IGCbY72UPbNTtz/LG-CNS-%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-8%EC%A1%B0-Frontend?node-id=0-1&m=dev&t=P1Iw42SdDFb5CSWA-1"
            aria-label="Figma link"
            target="_blank"
          >
            <Icon
              as={FaFigma}
              boxSize={7}
              color="white"
              _hover={{
                color: "gray.400",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Link>
        </HStack>

        {/* 오른쪽 정보 영역 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 10, md: 60 }}
        >
          <VStack align="start" spacing={1}>
            <Link
              href="https://github.com/seoyoun8694"
              target="_blank"
              color="white"
            >
              채서윤
            </Link>
            <Link
              href="https://github.com/wkdnffla3"
              target="_blank"
              color="white"
            >
              박찬규
            </Link>
            <Link
              href="https://github.com/soobin70"
              target="_blank"
              color="white"
            >
              조수빈
            </Link>
          </VStack>

          <VStack align="start" spacing={1} pr={36}>
            <Link
              href="https://github.com/Sunhokim2"
              target="_blank"
              color="white"
            >
              김선호
            </Link>

            <Link
              href="https://github.com/whl5105"
              target="_blank"
              color="white"
            >
              최수인
            </Link>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
