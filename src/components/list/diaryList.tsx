import DiaryCard from 'components/card/diaryCard';
import { diaryCardProps } from 'pages/main';
import styled from 'styled-components';

export const DiaryListContainer = styled.section`
  overflow-y: auto;
  span {
    display: inline-block;
    margin-top: 20px;
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
        <DiaryCard diaryItem={diaryItem} key={diaryItem.id} />
      ))}
    </DiaryListContainer>
  );
}
