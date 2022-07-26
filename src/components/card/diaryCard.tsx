import { TagBox } from 'components/Editor/diaryEditor';
import { diaryCardProps } from 'pages/main';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryItemBox = styled.article`
  margin: 27px 0;
  padding: 18px;
  border-radius: 5px;
  background-color: #fff;
  :hover {
    background-color: ${({ theme }) => theme.colors.beige};
  }
  h1 {
    padding-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
  p {
    padding-top: 5px;
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
    font-size: 16px;
  }
`;

type diaryItemProps = {
  diaryItem: diaryCardProps;
};
export default function DiaryCard({ diaryItem }: diaryItemProps) {
  return (
    <Link to={`/post/${diaryItem.id}`}>
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
    </Link>
  );
}
