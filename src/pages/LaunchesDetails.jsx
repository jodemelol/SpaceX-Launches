import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getLaunchByFlightNumber } from "../services/launches";

export function LaunchesDetails() {
  const [launch, setLaunch] = useState({});
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);
  let { launchId } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      getLaunchByFlightNumber(launchId).then((data) => {
        setLaunch(data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, [launchId]);

  if (loading) {
    return (
      <Box align="center">
        <Spinner />
      </Box>
    );
  }

  return (
    <Box align="center" py={8}>
      <Box maxW="md" bg="card" align="center" borderRadius={10} p={6}>
        <Heading textAlign="center" py={4}>
          Mission {launch.mission_name}
        </Heading>
        <VStack spacing={2}>
          <Text>Rocket Name: {launch.rocket?.rocket_name}</Text>
          <Text>Type Rocket: {launch.rocket?.rocket_type}</Text>
          <Text>Launch Year: {launch.launch_year}</Text>

          <Badge colorScheme={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failed"}
          </Badge>
        </VStack>
        <Box py={8}>
          <AspectRatio maxW="300px" ratio={1}>
            <iframe
              title={launch.launch_name}
              src={`https://www.youtube.com/embed/${launch.links?.youtube_id}`}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Text>{launch.details}</Text>
      </Box>
    </Box>
  );
}
