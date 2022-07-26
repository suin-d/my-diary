import { TagBox } from 'components/Editor/diaryEditor';
import { diaryCardProps } from 'pages/main';
import styled from 'styled-components';

export const DiaryItemBox = styled.article`
  margin: 33px 0 23px;
  padding: 18px;
  border-radius: 5px;
  background-color: #fff;
  h1 {
    margin-bottom: 18px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p,
  ul {
    margin-bottom: 10px;
  }
  span {
    display: inline-block;
    margin-top: 8px;
  }
  div {
    text-align: right;
  }
`;

type diaryItemProps = {
  diaryItem: diaryCardProps;
};
export default function DiaryCard({ diaryItem }: diaryItemProps) {
  return (
    <DiaryItemBox>
      <h1>{diaryItem.title}</h1>
      <p>{diaryItem.content}</p>
      <ul>
        {diaryItem.tag?.map((tagItem, index) => (
          <TagBox key={index}>{tagItem}</TagBox>
        ))}
      </ul>
      <div>{diaryItem.date}</div>
    </DiaryItemBox>
  );
}
