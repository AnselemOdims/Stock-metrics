import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsCard = ({ first, second, third }) => (
  <Container>
    <span>{first}</span>
    <span>{second}</span>
    <span>{third}</span>
  </Container>
);

export default DetailsCard;
