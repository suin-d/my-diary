import DiaryEditor from 'components/Editor/diaryEditor';
import 'react-datepicker/dist/react-datepicker.css';
import { diaryCardProps, Header } from './main';

type DiaryEditorProps = {
  onAddDiary: (diaryCard: diaryCardProps) => void;
};
export default function Write({ onAddDiary }: DiaryEditorProps) {
  return (
    <>
      <Header>일기 작성</Header>
      <DiaryEditor onAddDiary={onAddDiary} />
    </>
  );
}
