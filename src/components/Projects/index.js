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
          <ProjectH2>Reduce Expenses</ProjectH2>
          <ProjectP> We Help reduce fees.</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}/>
          <ProjectH2>Virtual Offices</ProjectH2>
          <ProjectP> Help from anywhere in the world.</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3}/>
          <ProjectH2>Premium Benefits</ProjectH2>
          <ProjectP> Special membership cards.</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  )
}

export default Project
