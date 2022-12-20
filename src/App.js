import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Progress,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [getStart, setgetStart] = useState(false);
  const startGame = () => {
    setgetStart(true);
  };

  const number = [1, 2, 3, 4, 5, 6];

  const [selectedNum, setSelectednum] = useState();

  const onClickButton = (nums) => {
    setSelectednum(nums);
    setError(null);
  };
  const [dice, setDice] = useState(1);
  const [error, setError] = useState();

  const [score, setScore] = useState(0);
  const getrandom = () => {
    if (selectedNum) {
      const genratedNum = Math.ceil(Math.random() * 6);
      setDice(genratedNum);

      if (genratedNum === selectedNum) {
        setScore((prev) => prev + genratedNum);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError("Please Selected A number");
    }
  };

  return (
    <>
      {getStart ? (
        <>
          <Stack
            justify="center"
            align="center"
            maxW="1300px"
            mx="auto"
            h="100vh"
          >
            <Heading
              color={error ? "red" : "black"}
              as="h1"
              fontSize="6xl"
              mb="8"
            >
              {error ? error : "Select Any One"}
              <Progress size="xs" isIndeterminate />
            </Heading>
            <Flex pb={14}>
              {number.map((nums) => (
                <Flex
                  justify={"center"}
                  align="center"
                  h={"50px"}
                  w="50px"
                  fontSize={"2xl"}
                  bg={selectedNum === nums ? "green" : "black"}
                  color="white"
                  marginRight={5}
                  borderRadius={4}
                  onClick={() => {
                    onClickButton(nums);
                  }}
                >
                  {nums}
                </Flex>
              ))}
            </Flex>
            <Box onClick={getrandom}>
              <Image
                width="120px"
                height="120px"
                src={`./dice/dice${dice}.png`}
              ></Image>
            </Box>

            <Text a="p" fontSize={"2xl"}>
              click to roll the dice
            </Text>

            <Text
              color={score > 0 ? "green" : "red"}
              fontSize={"8xl"}
              fontWeight="bold"
            >
              {score}
            </Text>
            <Text fontSize={"6xl"}>Total Score</Text>
            <Button
              onClick={() => {
                setScore(0);
              }}
              colorScheme="teal"
            >
              Reset Score
            </Button>
          </Stack>
          <Stack maxW="900px" mx="auto" mb={100}>
            <Heading as="h2">Game Rules:-</Heading>
            <List>
              <ListItem>1 Select Number any number</ListItem>
              <ListItem>2 Click on dice image to roll it</ListItem>
              <ListItem>
                3 Select number is equal to obtained dice result then you will
                get same point of dice
              </ListItem>
              <ListItem>
                4 if You are Wrong Score will be deducted by 2 points
              </ListItem>
              <Box
                color="#C53030"
                fontFamily={"monospace"}
                fontWeight="bold"
                pt={20}
                fontSize={"2xl"}
              >
                - - Developed By Akash Ghosh
              </Box>
            </List>
          </Stack>
        </>
      ) : (
        <Flex
          bg={"#38B2AC"}
          justify="center"
          align="center"
          paddingTop="80px"
          h={"100vh"}
        >
          <Image width="40%" src="./dices.png"></Image>
          <Stack>
            <Heading color={"#322659"} fontSize="7xl">
              The Dice Game
            </Heading>
            <Button
              alignSelf="flex-end"
              bg={"red"}
              color="white"
              _hover={{ bg: "#ebedf0", color: "black" }}
              onClick={startGame}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                mr={5}
              />
              Play Now
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
}

export default App;
