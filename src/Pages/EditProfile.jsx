/*eslint-disable*/

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useParams 추가
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { dummy } from "../PrDummy"; // dummy 추가

const EditProfileContainer = styled.div`
  background-color: #121c2e;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditInput = styled.input`
  margin: 10px 0;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
`;

const EditButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #fb7b6a;
  color: #fff;
  cursor: pointer;
`;

export default function EditProfile() {
  const { id } = useParams(); // useParams로 URL 파라미터 가져오기
  const navigate = useNavigate();
  const [formData, setFormData] = useState(dummy.profile.find(profile => profile.id === id) || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 프로필 업데이트 로직 추가
    console.log("프로필이 업데이트되었습니다:", formData);
    // 프로필 수정 후 프로필 상세 페이지로 이동
    navigate(`/profile/${id}`);
  };

  return (
    <EditProfileContainer>
      <Header />
      <h3>프로필 수정</h3>
      <EditForm onSubmit={handleSubmit}>
        <EditInput
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="title"
          placeholder="타이틀"
          value={formData.title || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="category"
          placeholder="카테고리"
          value={formData.category || ''}
          onChange={handleChange}
        />
        <EditInput
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="insta"
          placeholder="인스타그램 팔로워 수"
          value={formData.insta || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="tictok"
          placeholder="틱톡 팔로워 수"
          value={formData.tictok || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="youtube"
          placeholder="유튜브 구독자 수"
          value={formData.youtube || ''}
          onChange={handleChange}
        />
        <EditInput
          type="text"
          name="photo"
          placeholder="프로필 사진 URL"
          value={formData.photo || ''}
          onChange={handleChange}
        />
        {/* TODO: YouTube 비디오 ID를 수정하는 input 추가 */}
        <EditButton type="submit">프로필 수정</EditButton>
      </EditForm>
      <Footer />
    </EditProfileContainer>
  );
}
