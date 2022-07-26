import styled from 'styled-components';
import {
  MdOutlineHome,
  MdAddCircleOutline,
  MdOutlineCalendarToday,
} from 'react-icons/md';
import DiaryList from 'components/list/diaryList';
import { useNavigate } from 'react-router-dom';
import EmptyContent from 'components/common/EmptyContent';

export const Header = styled.header`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
`;

const MenuIconsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mintGreen};
  }
`;

export type diaryCardProps = {
  id: number;
  title: string;
  content: string;
  date: string;
  tag?: string[];
};

type diaryCardsProps = {
  diaryCards: diaryCardProps[];
};
export default function Main({ diaryCards }: diaryCardsProps) {
  const navigate = useNavigate();

  return (
    <>
      <Header>my diary</Header>
      {diaryCards.length < 1 ? (
        <EmptyContent />
      ) : (
        <DiaryList diaryCards={diaryCards} />
      )}
      <MenuIconsBox>
        <button onClick={() => navigate('/')}>
          <MdOutlineHome size="26" />
        </button>
        <button onClick={() => navigate('/write')}>
          <MdAddCircleOutline size="25" />
        </button>
        <button onClick={() => alert('아직 준비중입니다.')}>
          <MdOutlineCalendarToday size="24" />
        </button>
      </MenuIconsBox>
    </>
  );
}
