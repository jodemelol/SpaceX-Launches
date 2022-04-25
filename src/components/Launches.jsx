import { Badge, Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import dayjs from "dayjs";
import "dayjs/locale/es";

export function Launches({ launches }) {
  const MotionBox = motion(Box);
  return (
    <SimpleGrid columns={[1, 2, 2, 3]}>
      {launches.map((launch) => (
        <MotionBox
        initial={{opacity:0,scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.6}}
          bg="gray.100"
          m={4}
          p={4}
          borderRadius={8}
          maxW="sm"
          color="blackAlpha.900"
        >
          <HStack spacing={8} justifyContent="space-between">
            <Text as="h2" fontSize={24}>
              Mission {launch.mission_name}
            </Text>
            <Badge colorScheme={launch.launch_success ? "green" : "red"} p={1}>
              {launch.launch_success ? "Success" : "Failed"}
            </Badge>
          </HStack>
          <HStack fontSize="sm" py={2}>
            <FcCalendar />
            <Text>
              {dayjs(launch.launch_date_local.split("T")[0])
                .locale("es")
                .format("D MMMM, YYYY")}
            </Text>
          </HStack>
          <Link to={`/launch/${launch.flight_number}`}>
            <Button
              variant="outline"
              colorScheme="purple"
              my={4}
              _hover={{
                color:"white",
                bg:"black"
              }}
            >
              More Details
            </Button>
          </Link>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}
