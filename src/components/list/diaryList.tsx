import DiaryCard from 'components/card/diaryCard';
import { diaryCardProps } from 'pages/main';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryListContainer = styled.section`
  overflow-y: auto;
  height: 100%;
  span {
    display: inline-block;
    margin-top: 20px;
  }
  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

type diaryListProps = {
  diaryCards: diaryCardProps[];
};
export default function DiaryList({ diaryCards }: diaryListProps) {
  return (
    <DiaryListContainer>
      <span>{diaryCards.length}개의 일기가 있습니다.</span>
      {diaryCards.map((diaryItem) => (
        <Link to={`/post/${diaryItem.id}`}>
          <DiaryCard diaryItem={diaryItem} key={diaryItem.id} />
        </Link>
      ))}
    </DiaryListContainer>
  );
}
