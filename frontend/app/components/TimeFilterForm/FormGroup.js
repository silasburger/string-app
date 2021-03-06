import styled from 'styled-components';

/**
 * Condition rendering is used here to make the background of the filter selector red when it is in 
 * effect.
 */
export default styled.div`
  display: inline-block;
  background-color: #41addd;
  padding: 5px;
  margin: 10px 10px 0 10px;
  color: white;
  border-radius: 5px;
  border: solid 2px #003366;
  box-shadow: -11px 11px 20px -13px rgba(0, 0, 0, 0.75);

  background-color: ${props => (props.selected ? 'red' : '#41addd')};
`;
