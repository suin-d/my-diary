import styled from 'styled-components';
import {
  MdOutlineHome,
  MdAddCircleOutline,
  MdOutlineCalendarToday,
} from 'react-icons/md';
import EmptyContent from 'components/common/EmptyContent';

const Header = styled.header`
  text-align: center;
  font-size: 24px;
`;

const MenuIconsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.mintGreen};
`;

export default function Main() {
  return (
    <>
      <Header>my diary</Header>
      <EmptyContent />
      <MenuIconsBox>
        <MdOutlineHome size="26" />
        <MdAddCircleOutline size="25" />
        <MdOutlineCalendarToday size="24" />
      </MenuIconsBox>
    </>
  );
}
