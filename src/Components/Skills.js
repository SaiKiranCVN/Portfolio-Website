import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"proficiencies"} />
      <InnerLayout>
        <div className='skills'>
          <ProgressBar title={"PYTHON"} width={"95%"} text={"95%"} />
          <ProgressBar title={"SQL"} width={"60%"} text={"60%"} />
          <ProgressBar title={"PySpark"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Pytorch"} width={"75%"} text={"75%"} />
          <ProgressBar
            title={"AWS(S3,EC2,EMR,RDS,Redshift,Kenesis,Comprehend)"}
            width={"70%"}
            text={"70%"}
          />
          <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Django"} width={"40%"} text={"40%"} />
          <ProgressBar
            title={"Docker,Kubernetes,Terraform"}
            width={"40%"}
            text={"40%"}
          />
          <ProgressBar title={"Terraform"} width={"70%"} text={"70%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
