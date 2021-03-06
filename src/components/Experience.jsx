import React from 'react';
import H3Styled from '../styled/H3Styled';
import H2Styled from '../styled/H2Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (

    <div className="Experience">
        <H2Styled name="Experiencias"></H2Styled>
        <div className="Experience-container">

            {props.data.map((experience, index) => {
                return (
                    <div className="Experience item" key={`Experiences-${index}`}>
                        <H3Styled>{experience.jobTitle} @ {experience.company}
                            <span>{experience.startDate} - {experience.endDate}</span>
                        </H3Styled>

                        <PStyled name={experience.jobDescription}></PStyled>

                        {experience.descriptions.map((description, idx) => {
                            return (
                                <PStyled key={`descr-${idx}`} name={description.description} />
                            )
                        })}
                        <br />
                    </div>
                )
            })}

        </div>
    </div>

);

export default Experience;