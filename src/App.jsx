import { Routes, Route, Link } from "react-router-dom";
import { Box, Container, Image } from "@chakra-ui/react";
import { LaunchesList } from "./pages/LaunchesList";
import { LaunchesDetails } from "./pages/LaunchesDetails";
import logo from "./assets/SpaceX-Logo.png";

export function App() {
  return (
    <Container maxW="container.xl" >
      <Link to="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="launch/:launchId" element={<LaunchesDetails />} />
      </Routes>
    </Container>
  );
}
