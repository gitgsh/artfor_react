import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../../Container/Container';
import ProjectCard from './ProjectCard';
import { projectApi } from '../../../config';

function ProjectList() {
  const [projectsData, setProjectsData] = useState([]);

  const getProjectsData = async (offset, limit, category) => {
    try {
      const response = await projectApi.list(offset, limit, category);
      setProjectsData(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectsData(0, 9, 2);
  }, []);

  return (
    <MainProjectContainer>
      <Title></Title>
      <ProjectGrid>
        {projectsData.map(item => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </ProjectGrid>
    </MainProjectContainer>
  );
}

const MainProjectContainer = styled(Container)`
  padding-bottom: 45px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 20px;
`;


// color: ${({ theme }) => theme.colors.grey300};
const Title = styled.div`
  margin: 45px 0 20px 0;
  color : grey;
  font-size: 28px;
  font-weight: 700;
`;

export default ProjectList;
