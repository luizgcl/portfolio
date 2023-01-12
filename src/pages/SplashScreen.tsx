import React from "react";
import { Container, Section } from "../@global/styles";

export function SplashScreen() {
  return (
  <Section>
    <Container
      className="justify-center h-screen"
    >
      <h1
        className="default-gradient text-5xl h-20 mt-2 animate-pulse"
      >
        {'<luizgcl/>'}
      </h1>
    </Container>
  </Section>
  )
}