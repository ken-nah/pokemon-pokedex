import styled from 'styled-components';

const Container = styled.section`
  background-color: var(--color-light-gray);
  display: grid;
  grid-template-columns: 1fr 40%;
  column-gap: 4rem;
  min-height: 100vh;
  max-width: 130rem;
  margin: 0 auto;
  padding: 5rem 10rem;
`;

export { Container };
