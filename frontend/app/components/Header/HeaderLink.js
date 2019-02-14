import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  background: #003366;
  transition: transform 300ms ease-out;
  backface-visibility: hidden;

  &:active,
  &.active {
    background: #41addd;
    color: #fff;
    transform: scale(1.05);
  }

  &:hover {
    transform: scale(1.05);
  }
`;
