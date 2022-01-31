import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsCard = ({
  children, first, second, third,
}) => (
  <Container>
    <span>{first}</span>
    <span>
      {children?.[0]}
      {second}
    </span>
    <span>
      {children?.[1]}
      {third}
    </span>
  </Container>
);

export default DetailsCard;
