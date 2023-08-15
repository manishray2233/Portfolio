import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) =>
    active &&
    `
background-color: ${theme.primary + 20};
`}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of Projects, Which includes various Web
          Apps. Here are some of my Projects.
        </Desc>

        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton active onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton active onClick={() => setToggle("android app")}>
              ANDROID APP'S
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("android app")}>
              ANDROID APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton active onClick={() => setToggle("machine learning")}>
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("machine learning")}>
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;
