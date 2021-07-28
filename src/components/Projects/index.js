import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/man-coding.svg'
import {ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP} from './ProjectElements'


const Project = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1}/>
          <ProjectH2> Knowledge Graph</ProjectH2>
          <ProjectP> Place Holder</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}/>
          <ProjectH2>Place Holder</ProjectH2>
          <ProjectP> Place Holder</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3}/>
          <ProjectH2>Place Holder</ProjectH2>
          <ProjectP> Place Holder</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  )
}

export default Project
