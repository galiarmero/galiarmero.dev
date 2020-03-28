import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

export default (props) => (
  <nav css={css`
    position: fixed;
    width: 100%;
    top: auto;
    left: 50%;
    bottom: 0px;
    padding: 10px 0;
    transform: translate3d(-50%, 0, 0);
    overflow: hidden;
    z-index: 100;
    opacity: 1;
    display: flex;
    justify-content: center;
    background: var(--bgColor);
  `}>
    <ul css={css`
      display: flex;
      align-items: flex-end;
    `}>
      <Marker height={ (false ? props.activeMarkerHeight : props.markerHeight) + props.unit } />
      <Marker height={ (true ? props.activeMarkerHeight : props.markerHeight) + props.unit } />
      <Marker height={ (false ? props.activeMarkerHeight : props.markerHeight) + props.unit } />
      <Marker height={ (false ? props.activeMarkerHeight : props.markerHeight) + props.unit } />
    </ul>
  </nav>
)

const Marker = props => (
  <li css={css`
    display: block;
    position: relative;
    padding: 0 10px 0;
    height: auto;
    list-style-type: none;
  `}>
    <a css={css`
      display: block;
      position: relative;
      height: ${props.height};
      width: 2px;
      background: var(--textColor);
      transition: .3s;
      z-index: 1;
      cursor: pointer;
      text-decoration: none;
    `}>
      {props.children}
    </a>
  </li>
)