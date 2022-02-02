import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsCard = ({
  children, first, second, third,
}) => (
  <Container>
    <span data-testid="first">{first}</span>
    <span data-testid="second">
      {children?.[0]}
      {second}
    </span>
    <span data-testid="third">
      {children?.[1]}
      {third}
    </span>
  </Container>
);

DetailsCard.propTypes = {
  first: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  second: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  third: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default DetailsCard;
