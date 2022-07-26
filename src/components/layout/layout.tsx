import React from 'react';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;
  padding: 15px 24px;
  position: relative;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.black};
`;

interface LayoutPropsType {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutPropsType) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
