import DiaryList from 'components/list/diaryList';
import EmptyContent from 'components/common/EmptyContent';
import Header from 'components/common/header';

export type diaryCardProps = {
  id: number;
  title: string;
  content: string;
  date: string;
  tag?: string[];
};

type diaryCardsProps = {
  diaryCards: diaryCardProps[];
};
export default function Main({ diaryCards }: diaryCardsProps) {
  return (
    <>
      <Header text="my diary" />
      {diaryCards.length < 1 ? (
        <EmptyContent />
      ) : (
        <DiaryList diaryCards={diaryCards} />
      )}
    </>
  );
}
