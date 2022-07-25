import { diaryCardProps } from 'pages/main';
import styled from 'styled-components';

export const DiaryItemBox = styled.article`
  margin: 33px 0 23px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  h1 {
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 20px;
  }
  span {
    display: inline-block;
    margin-top: 15px;
  }
`;

interface diaryItemProps {
  diaryItem: diaryCardProps;
}

export default function DiaryCard({ diaryItem }: diaryItemProps) {
  return (
    <DiaryItemBox>
      <h1>{diaryItem.title}</h1>
      <div>{diaryItem.content}</div>
      <div>{diaryItem.tag?.map((tagItem) => `#${tagItem.name} `)}</div>
      <span>{diaryItem.date}</span>
    </DiaryItemBox>
  );
}
