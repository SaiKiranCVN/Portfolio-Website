import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const cert = <CardMembershipIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Vita"} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={"Summer 2021 - Present"}
            title={"Research Assistant"}
            subTitle={"New York University(NYU)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Systems Engineer"}
            subTitle={"Tata Consultancy Services(TCS)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Machine Learning Engineer (Intern)"}
            subTitle={"Tata Consultancy Services(TCS)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={"2020 - Present"}
            title={"Master's in Computer Engineering"}
            subTitle={"New York University(NYU) - 3.889 / 4.0"}
            text={
              "Relevant Coursework: Machine Learning, Database Systems, Data Structures and Algorithms, Internet Architecture and Protocols, Deep Learning, Operating Systems, ML for Cybersecurity, Cloud/Data Center Technologies and Advanced Database Project."
            }
          />
          <ResumeItem
            year={"2015 - 2019"}
            title={"Bachelor's in Computer Science and Engineering"}
            subTitle={
              "Gandhi Institute of Technology and Management(GITAM) University - 8.9 / 10"
            }
            text={
              "Relevant Coursework:  Computer Architecture, Cryptography,  C, C++, Java, Machine Learning, Artificial Intelligence, Probability and Statistics, Web Technologies, Software Engineering, Microprocessors, Design and Analysis of Algorithms, Advanced Project etc. "
            }
          />
        </div>

        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={cert} title={"Certifications"} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={"2021 - 2021"}
            title={"Data Engineering Nanodegree"}
            subTitle={"Udacity"}
            text={
              "Relevant Coursework: Data Modeling(Postgres, Cassandra), Cloud Data Warehouses(AWS- S3, IAM, VPC, EC2, RDS, Redshift), Spark and Data Lakes(AWS - EMR) and Automate Data Pipelines(Airflow - Data Pipelines, Data Quality, Production Data Pipelines). "
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={"Complete React Developer"}
            subTitle={"Udemy"}
            text={
              "Relevant Coursework: React Basics, Routing, Firebase, Redux, State Normalization, Deployment(Heroku), Styled Components, HOC and Container Patterns, Redux-Saga, Hooks, Context API, GraphQL + Apollo, Performance, Progressive Web App, Testing and GatsbyJS. "
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Deep Learning Specilization"}
            subTitle={"Coursera(deeplearning.ai)"}
            text={
              "Relevant Coursework: React Basics, Routing, Firebase, Redux, State Normalization, Deployment(Heroku), Styled Components, HOC and Container Patterns, Redux-Saga, Hooks, Context API, GraphQL + Apollo, Performance, Progressive Web App, Testing and GatsbyJS. "
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Machine Learning"}
            subTitle={"Coursera(deeplearning.ai)"}
            text={
              "Relevant Coursework: React Basics, Routing, Firebase, Redux, State Normalization, Deployment(Heroku), Styled Components, HOC and Container Patterns, Redux-Saga, Hooks, Context API, GraphQL + Apollo, Performance, Progressive Web App, Testing and GatsbyJS. "
            }
          />
          <ResumeItem
            year={"2016 - 2016"}
            title={"Certified Ethical Hacker(CEH) v9"}
            subTitle={"EC-Council"}
            text={
              "Relevant Coursework: React Basics, Routing, Firebase, Redux, State Normalization, Deployment(Heroku), Styled Components, HOC and Container Patterns, Redux-Saga, Hooks, Context API, GraphQL + Apollo, Performance, Progressive Web App, Testing and GatsbyJS. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
