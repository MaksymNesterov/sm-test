import styled, { css } from "styled-components";

export const SelectContainer = styled.div<{ isOpen: boolean }>`
  border: 1px solid grey;
  border-radius: 2px;
  padding: 3px;
  min-width: 150px;
  font-size: 13px;
  display: flex;
  flex-direction: column;

  color: #888484;
  position: relative;
  cursor: pointer;
  ${({ isOpen }) =>
	isOpen &&
	css`
	  color: black;
	  border-bottom: none;
	  border-bottom-right-radius: 0;
	  border-bottom-left-radius: 0;
	`}
`;

export const SelectHeader = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 100%;

  &::after {
	display: ${({ isOpen }) => isOpen && "none"};
	content: "";
	width: 0.5em;
	position: absolute;
	height: 0.4em;
	top: 8px;
	right: 5px;
	background-color: grey;
	clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const SelectList = styled.div`
  position: absolute;
  border: 1px solid grey;
  border-top: none;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  left: -1px;
  top: 22px;
  width: 100%;
`;

export const SelectItem = styled.div`
  :hover {
	color: white;
	background-color: #0077cc;
  }
  padding: 3px;
`;
