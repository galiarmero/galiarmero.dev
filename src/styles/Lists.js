import styled from "@emotion/styled"

export const BulletItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: 20px;
  &:before {
    content: "◦ ";
    position: absolute;
    left: 0px;
    color: var(--accentColor);
    font-size: 1.2rem;
    line-height: 1.2;
  }
`
