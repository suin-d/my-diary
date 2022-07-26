import Header from 'components/common/header';
import DiaryList from 'components/list/diaryList';
import DiaryDetail from 'components/post/diaryDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { diaryCardProps } from './main';

type diaryCardsProps = {
  diaryCards: diaryCardProps[];
};
export default function Post({ diaryCards }: diaryCardsProps) {
  const { id } = useParams();
  const [detailPost, setDetailPost] = useState<diaryCardProps>();

  useEffect(() => {
    if (DiaryList.length >= 1) {
      const matchDiary = diaryCards.find(
        (diaryItem) => `${diaryItem.id}` === id
      );
      if (matchDiary) {
        setDetailPost(matchDiary);
      }
    }
  }, [diaryCards, id]);

  if (!detailPost) return <></>;

  return (
    <>
      <Header text="my diary" />
      <DiaryDetail detailPost={detailPost}></DiaryDetail>
    </>
  );
}
