import Header from 'components/common/header';
import DiaryEditor from 'components/Editor/diaryEditor';
import 'react-datepicker/dist/react-datepicker.css';
import { diaryCardProps } from './main';

type DiaryEditorProps = {
  onAddDiary: (diaryCard: diaryCardProps) => void;
};
export default function Write({ onAddDiary }: DiaryEditorProps) {
  return (
    <>
      <Header text="일기 작성" />
      <DiaryEditor onAddDiary={onAddDiary} />
    </>
  );
}
