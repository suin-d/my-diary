import styled from 'styled-components';
import {
  MdOutlineHome,
  MdAddCircleOutline,
  MdOutlineCalendarToday,
} from 'react-icons/md';
import EmptyContent from 'components/common/EmptyContent';
import DiaryList from 'components/list/diaryList';
import { useNavigate } from 'react-router-dom';

export const Header = styled.header`
  text-align: center;
  font-size: 24px;
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

export type hashTagProps = {
  id: string;
  name: string;
};
export const hashTag: hashTagProps[] = [
  { id: '1', name: '여름' },
  { id: '2', name: 'summer' },
  { id: '3', name: '일상' },
];

export type diaryCardProps = {
  id: number;
  title: string;
  content: string;
  date: string;
  tag?: hashTagProps[];
};

export const mockDiaryList: diaryCardProps[] = [
  {
    id: 1,
    title: '여름의 끝',
    content:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do...',
    date: '2022/07/25',
    tag: hashTag,
  },
  {
    id: 2,
    title: '여름의 중간',
    content:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do...',
    date: '2022/07/23',
  },
  {
    id: 3,
    title: '여름의 시작',
    content:
      ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do...',
    date: '2022/07/21',
  },
];

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header>my diary</Header>
      {/* <EmptyContent /> */}
      <DiaryList diaryList={mockDiaryList} />
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
