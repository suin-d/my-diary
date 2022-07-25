import React from 'react';
import { useState } from 'react';
import BaseButton from 'components/common/baseButton';
import CustomInput from 'components/common/customInput';
import CustomTextarea from 'components/common/customTextarea';
import useInput from 'components/hooks/useInput';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

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
export default function DiaryEditor() {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [tag, onChangeTag] = useInput('');
  const [checkDate, setCheckDate] = useState(new Date());

  return (
    <DiaryEditorContainer>
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
        value={tag}
        onChange={onChangeTag}
        placeholder="# + 키워드 작성 후 엔터키로 등록"
      />
      <BaseButton text="작성" type="submit" />
    </DiaryEditorContainer>
  );
}
