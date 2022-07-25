import DiaryCard from 'components/card/diaryCard';
import { diaryCardProps } from 'pages/main';
import React from 'react';
import styled from 'styled-components';

interface diaryListProps {
  diaryList: diaryCardProps[];
}

export const DiaryListContainer = styled.section`
  overflow-y: auto;
  span {
    display: inline-block;
    margin-top: 20px;
  }
`;
export default function DiaryList({ diaryList }: diaryListProps) {
  return (
    <DiaryListContainer>
      <span>{diaryList.length}개의 일기가 있습니다.</span>
      {diaryList.map((diaryItem) => (
        <DiaryCard diaryItem={diaryItem} key={diaryItem.id} />
      ))}
    </DiaryListContainer>
  );
}
