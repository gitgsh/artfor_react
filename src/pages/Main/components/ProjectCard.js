import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAchievedRate } from "../../../utils";

function ProjectCard({
  id,
  imageUrl,
  name,
  summary,
  achievedAmount,
  goalAmount,
}) {
  const [isChecked, setIsCheck] = useState(true);

  const buttonHeartClick = () => {
    setIsCheck(!isChecked);
  };

  return (
    <>
      <StyledProjectCard>
        <ButtonHeart onClick={buttonHeartClick}>
          {isChecked ? <EmptyHeart /> : <FilledHeart />}
        </ButtonHeart>
        <ProjectCardWrap to={`/project/${id}`}>
          <ProjectImg src={imageUrl} alt={name} />
          <ProjectSubContent>{summary}</ProjectSubContent>
          <ProjectContent>{name}</ProjectContent>
          <AchievedRate>
            {getAchievedRate(achievedAmount, goalAmount)}% 달성
          </AchievedRate>
        </ProjectCardWrap>
      </StyledProjectCard>
    </>
  );
}

const StyledProjectCard = styled.div``;

const ProjectCardWrap = styled(Link)``;

const ProjectImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
`;

const ButtonHeart = styled.button`
  position: absolute;
  padding: 10px 10px 10px 220px;
  border: none;
  background: none;
  font-size: 24px;
`;

const EmptyHeart = styled(AiOutlineHeart)`
  color: ${({ theme }) => theme.colors.white};
`;

const FilledHeart = styled(AiFillHeart)`
  color: ${({ theme }) => theme.colors.red100};
`;

const ProjectSubContent = styled.p`
  margin-top: 10px;
  min-height: 24px;
  color: rgb(158, 158, 158);
  font-size: 12px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectContent = styled.p`
  margin: 0 0 10px 0;
  min-height: 55px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 16px;
  line-height: 27px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: keep-all;
`;

const AchievedRate = styled.p`
  color: ${({ theme }) => theme.colors.red100};
  font-weight: 700;
`;

export default ProjectCard;
