import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdOutlineHome,
  MdAddCircleOutline,
  MdOutlineCalendarToday,
} from 'react-icons/md';

const MenuIconsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mintGreen};
  }
`;

export default function FooterMenu() {
  const navigate = useNavigate();
  return (
    <MenuIconsBox>
      <button onClick={() => navigate('/')}>
        <MdOutlineHome size="26" />
      </button>
      <button onClick={() => navigate('/write')}>
        <MdAddCircleOutline size="25" />
      </button>
      <button onClick={() => alert('아직 준비중입니다.')}>
        <MdOutlineCalendarToday size="24" />
      </button>
    </MenuIconsBox>
  );
}
