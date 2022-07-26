import styled from 'styled-components';
import { TagBox } from 'components/Editor/diaryEditor';
import { diaryCardProps } from 'pages/main';

const DiaryDetailContainer = styled.section`
  height: 100%;
  h1 {
    margin-bottom: 25px;
  }
  h1,
  p {
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
  }
  p {
    min-height: 100px;
    margin-bottom: 30px;
  }
  ul {
    margin-bottom: 35px;
  }
  div {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

type diaryDetailPostProps = {
  detailPost: diaryCardProps;
};
export default function DiaryDetail({ detailPost }: diaryDetailPostProps) {
  return (
    <>
      <DiaryDetailContainer>
        <div>{detailPost.date}</div>
        <h1>{detailPost.title}</h1>
        <p>{detailPost.content}</p>
        <ul>
          {detailPost.tag?.map((tagItem, index) => (
            <TagBox key={index}>{tagItem}</TagBox>
          ))}
        </ul>
      </DiaryDetailContainer>
    </>
  );
}
