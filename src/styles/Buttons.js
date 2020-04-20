import styled from '@emotion/styled'

const Button = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  background-image: linear-gradient(45deg, var(--lighterBgColor) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  border: 1px solid var(--accentColor);
  border-radius: 0.2rem;
  color: var(--accentColor);
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.9rem;
  line-height: 1.1;
  padding: 1rem 2.5rem;
  text-decoration: none;
  font-family: 'JetBrainsMono-Regular', monospace;
  letter-spacing: 0.05rem;
  transition: background 300ms ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:hover {
    background-position: 0;
  }
`

export default Button;