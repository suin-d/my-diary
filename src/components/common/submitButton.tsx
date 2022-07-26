import React from 'react';
import styled from 'styled-components';

export const SubmitButtonBox = styled.button`
  cursor: pointer;
  padding: 8px 25px;
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
`;

type SubmitButtonProps = {
  onClick: (event: { preventDefault: () => void }) => void;
  type?: 'submit';
  className?: string;
  text: string;
};
export default function SubmitButton({
  onClick,
  type = 'submit',
  className,
  text,
}: SubmitButtonProps) {
  return (
    <SubmitButtonBox onClick={onClick} type={type} className={className}>
      {text}
    </SubmitButtonBox>
  );
}
