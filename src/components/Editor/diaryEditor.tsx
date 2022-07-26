import React, { useCallback, useRef } from 'react';
import { useState } from 'react';
import CustomInput from 'components/common/customInput';
import CustomTextarea from 'components/common/customTextarea';
import useInput from 'components/hooks/useInput';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { diaryCardProps } from 'pages/main';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import SubmitButton, { SubmitButtonBox } from 'components/common/submitButton';

export const DiaryEditorContainer = styled.section`
  height: 100%;
  .input__custom {
    margin-top: 20px;
  }
  .textarea__custom {
    margin-top: 20px;
  }
  .button__submit {
    margin-top: 60px;
  }
`;

export const TagBox = styled.li`
  display: inline-block;
  background: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.lightGreen};
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 5px;
  padding: 5px;
  margin: 5px 5px 5px 0;
`;

type DiaryEditorProps = {
  onAddDiary: (diaryCard: diaryCardProps) => void;
};
export default function DiaryEditor({ onAddDiary }: DiaryEditorProps) {
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [tagValue, setTagValue] = useState('');
  const [tagList, setTagList] = useState<string[] | []>([]);
  const [checkDate, setCheckDate] = useState(new Date());

  const onChangeTag = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  }, []);

  const onAddTag = () => {
    setTagList([...tagList, tagValue]);
    setTagValue('');
  };

  const onKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAddTag();
    }
  };

  const goHome = () => {
    navigate('/');
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const diaryCard: diaryCardProps = {
      id: Date.now(),
      title,
      content,
      date: dayjs(checkDate).format('YYYY-MM-DD'),
      tag: tagList,
    };
    if (!formRef.current) return;
    formRef.current.reset();
    alert('저장 성공');
    onAddDiary(diaryCard);
    goHome();
  };

  return (
    <DiaryEditorContainer>
      <form ref={formRef} />
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={checkDate}
        onChange={(date: Date) => setCheckDate(date)}
      />
      <CustomInput
        title="제목"
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력해주세요"
      />
      <CustomTextarea
        title="내용"
        value={content}
        onChange={onChangeContent}
        placeholder="오늘은 어떤 하루였나요?"
      ></CustomTextarea>
      <CustomInput
        title="태그"
        value={tagValue}
        onChange={onChangeTag}
        onKeyPress={onKeypress}
        placeholder="태그 키워드 작성 후 Enter"
      />
      <ul>
        {tagList.map((tagItem, index) => (
          <TagBox key={index}>{tagItem}</TagBox>
        ))}
      </ul>
      <SubmitButton
        onClick={handleSubmit}
        className="button__submit"
        text="작성"
      />
    </DiaryEditorContainer>
  );
}
