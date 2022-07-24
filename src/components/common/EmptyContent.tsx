import MemoLogo from 'assets/images/memo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './baseButton';

const EmptyContentContainer = styled.div<{ backgroundImage: string }>`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  margin: 0 auto;
  width: 280px;
  background-size: 260px 230px;
  text-align: center;
  padding-top: 240px;
  button {
    margin-top: 18px;
  }
`;

export default function EmptyContent() {
  const navigate = useNavigate();

  return (
    <>
      <EmptyContentContainer backgroundImage={MemoLogo}>
        아직 작성된 일기가 없어요
        <Button text="작성하기" onClick={() => navigate('/write')} />
      </EmptyContentContainer>
    </>
  );
}
