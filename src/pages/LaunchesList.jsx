import { useState, useEffect } from "react";
import { Heading, Spinner, Box } from "@chakra-ui/react";
import { getAllLaunches } from "../services/launches";
import { Launches } from "../components/Launches";

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      getAllLaunches().then((call) => {
        setLaunches(call);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (loading) {
    return (
      <Box align="center" py={8}>
        <Spinner />
      </Box>
    );
  }

  return (
    <>
      <Heading as="h1" textAlign="center" py={8}>
        SpaceX Launches
      </Heading>
      <Launches launches={launches} key={launches.flight_number} />
    </>
  );
}
