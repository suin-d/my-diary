import React from 'react';
import styled from 'styled-components';

export const ButtonBox = styled.div<{
  width: undefined | string;
  height: undefined | string;
}>`
  button {
    cursor: pointer;
    width: ${(props) => (props.width ? `${props.width}` : '90px')};
    height: ${(props) => (props.height ? `${props.height}` : '36px')};
    color: ${({ theme }) => theme.colors.beige};
    border-radius: 5px;
    border: ${({ theme }) => theme.colors.deepGreen};
    background: ${({ theme }) => theme.colors.deepGreen};
    outline: none;
    font-size: 16px;
    &:active,
    :hover {
      background: ${({ theme }) => theme.colors.lightGreen};
      border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    }
  }
`;

type ButtonPropsType = {
  text: string;
  type?: string;
  width?: undefined | string;
  height?: undefined | string;
  onClick?: () => void;
};
export default function BaseButton({
  text,
  type = 'button',
  width,
  height,
  onClick,
}: ButtonPropsType): JSX.Element {
  return (
    <ButtonBox width={width} height={height} onClick={onClick}>
      {type === 'button' && (
        <button type="button" className="button__base">
          {text}
        </button>
      )}
      {type === 'submit' && (
        <button type="submit" className="button__submit">
          {text}
        </button>
      )}
    </ButtonBox>
  );
}
