import { diaryCardProps } from 'pages/main';

type diaryDetailPostProps = {
  detailPost: diaryCardProps;
};

export default function DiaryDetail({ detailPost }: diaryDetailPostProps) {
  return (
    <>
      <h1>{detailPost.title}</h1>
      <p>{detailPost.content}</p>
      <div>{detailPost.tag?.map((tagItem) => `#${tagItem} `)}</div>
      <span>{detailPost.date}</span>
    </>
  );
}
