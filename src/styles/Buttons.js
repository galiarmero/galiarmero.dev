import styled from '@emotion/styled'

const Button = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--accentColor);
  border-radius: 0.2em;
  color: var(--accentColor);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.2em 1.8em;
  text-decoration: none;
  text-align: center;

  background-image: linear-gradient(45deg, var(--accentColor) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 200ms ease-in-out;
  transition: background 200ms ease-in-out;
  width: 200px;

  &:hover, &:focus {
    color: var(--textColor);
    outline: 0;
  }

  &:hover {
    background-position: 0;
  }
`

export default Button;