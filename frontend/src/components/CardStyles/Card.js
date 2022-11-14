import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Flex = styled(motion.div)`
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  align-content: flex-start;
  font-family: "Aclonica", sans-serif;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  position: relative;
`;

export const CardFlex = styled.div`
  border: 2px solid black;
  background-color: black;
  border-radius: 2rem;
  width: 25rem;
  margin-bottom: 3rem;
  transition: all 0.2s ease-in-out;
  img {
    width: 100%;
    height: 75%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    margin: 0.5rem;
    color: white; 
  }
`;