import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsList from "../components/NewsList";
import React, { useEffect, useState } from "react";
import { getInterest } from "../api/interests_api";

const Home = () => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const data = await getInterest();
        setInterests(data);
      } catch {
        setInterests([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInterests();
  }, []);

  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Flex direction="column" alignItems="start" mx={12} mt={0} flex="1">
        <VStack mx={4} align="start" mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            내가 선택한 키워드로 보는 AI 실시간 뉴스
          </Text>
          {loading ? null : (
            <Text color="gray.400" fontSize="xl">
              {interests.length > 0
                ? interests.map((i) => i.name).join(", ")
                : "관심 키워드를 설정해주세요."}
            </Text>
          )}
        </VStack>
        <NewsList url={`/api/news/v1/ai`} isHome={true} />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
