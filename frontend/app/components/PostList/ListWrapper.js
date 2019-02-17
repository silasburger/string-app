import styled from 'styled-components';

export default styled.div`
  width: 70%;
  max-width: 775px;
  border: solid 2px #003366;
  height: 70%;
  overflow-y: scroll;
  overflow-x: hidden;

  background-color: ${({ posts }) => (posts.length === 0 ? 'goldenrod' : null)};
`;
