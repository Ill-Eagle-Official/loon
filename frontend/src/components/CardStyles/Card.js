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
  & {
    .delete-btn {
      position: absolute;
      display: none;
      margin-left: -1rem;
      margin-top: -6.5rem;
      color: white;
      cursor: pointer;
      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
`;

export const CardFlex = styled.div`
  border: 2px solid black;
  background-color: black;
  border-radius: 2rem;
  width: 25rem;
  margin-bottom: 3rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 14px 6px 19px -1px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
    cursor: pointer;
    .delete-btn {
      display: inline-block;
    }
  }
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
    padding: 0.5rem;
    color: white; 
  }
`;