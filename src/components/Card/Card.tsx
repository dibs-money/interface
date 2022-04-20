import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: #b0a8b9;
  background-position: bottom right;
  border-radius: 15px;
  color: #4b4453;
`;

export default Card;
