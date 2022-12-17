import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { LEFT_ARROW_ICON, MORE_ICON } from '../../../styles/CommonIcons';
import ChatRoomModal from '../modal/ChatRoomModal/ChatRoomModal';

const TopTitleNav = ({ title, viewMoreBtn = true }) => {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={LEFT_ARROW_ICON} alt='뒤로가기 버튼' />
        </button>
        <TopNavH2>{title}</TopNavH2>
        {viewMoreBtn ? (
          <MoreBtn onClick={() => setIsOpenModal(true)}>
            <img src={MORE_ICON} alt='더보기 버튼' />
          </MoreBtn>
        ) : (
          <></>
        )}
      </TopNavBar>
      {isOpenModal ? <ChatRoomModal closeModal={closeModal} /> : <></>}
    </>
  );
};

export default TopTitleNav;

const TopNavH2 = styled.h2`
  font-size: var(--fs-md);
  flex-grow: 1;
  margin-left: 1em;
`;
