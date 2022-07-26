import React, { useRef } from 'react';
import styled from 'styled-components';

export const CustomTextareaBox = styled.div<{ width: number }>`
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  overflow: hidden;
  padding: 5px 0;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  span {
    display: block;
    margin-bottom: 10px;
    width: 100px;
  }
  textarea {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    transition: 0.3s;
    outline: none;
    border: none;
    border-radius: 0;
    padding: 10px;
    width: 100%;
    height: 200px;
    resize: none;
  }
`;

type CustomTextareaPropsType = {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  width?: number;
};
export default function CustomTextarea({
  title,
  value,
  onChange,
  placeholder,
  width = 0,
}: CustomTextareaPropsType) {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  return (
    <CustomTextareaBox width={width} className="textarea__custom">
      <div className="line"></div>
      <span onClick={() => textareaRef.current?.focus()}>{title}</span>
      <textarea
        value={value}
        onChange={onChange}
        ref={textareaRef}
        placeholder={placeholder}
      ></textarea>
    </CustomTextareaBox>
  );
}
