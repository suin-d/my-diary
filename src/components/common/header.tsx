import styled from 'styled-components';

export const HeaderBox = styled.header`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 500;
`;

type headerProps = {
  text: string;
};
export default function Header({ text }: headerProps) {
  return <HeaderBox>{text}</HeaderBox>;
}
