import React, { useCallback } from 'react';
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

  li {
    display: inline-block;
    background: ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 5px;
    padding: 5px;
    margin: 5px 5px 5px 0;
  }
`;
export default function DiaryEditor() {
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
        value={tagValue}
        onChange={onChangeTag}
        onKeyPress={onKeypress}
        placeholder="태그 키워드 작성 후 Enter"
      />
      <ul>
        {tagList.map((tagItem, index) => (
          <li key={index}>{tagItem}</li>
        ))}
      </ul>
      <BaseButton text="작성" type="submit" />
    </DiaryEditorContainer>
  );
}
