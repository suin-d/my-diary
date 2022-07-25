import DiaryEditor from 'components/Editor/diaryEditor';
import 'react-datepicker/dist/react-datepicker.css';
import { Header } from './main';

export default function Write() {
  return (
    <>
      <Header>일기 작성</Header>
      <DiaryEditor />
    </>
  );
}
