import styled from 'styled-components';

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
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: white; 
  }
`;