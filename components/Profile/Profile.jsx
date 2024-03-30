'use client'

import React, {useState} from 'react'
import './Profile.css'
import { study, experinces, skills, projects } from '../../constants'
import StudyCard from './card/StudyCard'
import ExperienceCard from './card/ExperienceCard'
import ProjectsCard from './card/ProjectsCard/ProjectsCard'


const Profile = () => {
  const [actual,setActual] = useState('studies')


  return (
    <div className="profile_container" id="profile">
      <div className="header-aboutme_container">
        <div id="studies" onClick={()=>setActual('studies')} className={actual === 'studies' ? 'active' : ''}>
          Studies
        </div>
        <div id="projects" onClick={()=>setActual('projects')} className={actual === 'projects' ? 'active' : ''}>
          Projects
        </div>
        <div id="experiences" onClick={()=>setActual('experiences')} className={actual === 'experiences' ? 'active' : ''}>
          Experience
        </div>
      </div>
      <div className="profile_content">
        {actual==='studies' && study.map((item)=>(
          <StudyCard
            key={item.id}
            icon={item.icon}
            place={item.place}
            name={item.name}
            description={item.description}
            date={item.date}
          />
        ))}
        {actual === 'projects' && (
          projects.length !== 0 ? (
            projects.map((item) => (
              <ProjectsCard 
                key={item.id}
                name={item.name}
                image={item.image}
                url={item.url}
                deploy={item.deploy}
                description={item.description}
                leng={item.leng}
              />
            ))
          ) : (
            <div className='text-xl'>Oops, no data found! Not yet...</div>
          )
        )}
        {/* {actual === 'experiences' && (
          experinces.length !== 0 ? (
            experinces.map((item) => (
              <ExperienceCard key={item.id} />
            ))
          ) : (
            <div className='text-xl'>Oops, no data found! Not yet, unless you wanna hire me...</div>
          )
        )} */}
      </div>
    </div>
      )
}

export default Profile