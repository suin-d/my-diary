import React, { useRef } from 'react';
import styled from 'styled-components';

export const CustomInputBox = styled.div<{ width?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 5px 0;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  color: ${({ theme }) => theme.colors.black};
  span {
    width: 100px;
  }
  input {
    border: none;
    flex: 1;
    outline: none;
    background: none;
    border-radius: none;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 0;
    color: ${({ theme }) => theme.colors.black};
  }

  .line {
    width: 100%;
    transition: 0.3s;
    position: absolute;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }
  &:focus-within {
    .line {
      transform: translateX(100px);
    }
  }
`;

type CustomInputPropsType = {
  title: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  width?: number;
  name?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
};
export default function CustomInput({
  title,
  width = 0,
  value = '',
  name,
  onChange,
  onKeyPress,
  type = 'text',
  placeholder,
  maxLength,
}: CustomInputPropsType) {
  const inputEl = useRef<null | HTMLInputElement>(null);
  return (
    <CustomInputBox width={width} className="input__custom">
      <div className="line"></div>
      {title && <span onClick={() => inputEl.current?.focus()}>{title}</span>}
      <input
        type={type}
        ref={inputEl}
        value={value || ''}
        onChange={onChange}
        onKeyPress={onKeyPress}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </CustomInputBox>
  );
}
