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
            year={"Summer 2021"}
            title={"Research Assistant"}
            subTitle={"New York University(NYU)"}
            cert={false}
            text={
              "Implemented an Machine Learning pipeline for video analysis. Used Open CV to split video into frames and implemented Object Detection, Pose Estimation, Sematic Segmentation and Action Recognision. Generated JSON output from these models and fed into Tableau for GeoSpatial Analysis."
            }
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Systems Engineer"}
            subTitle={"Tata Consultancy Services(TCS)"}
            cert={false}
            text={
              "Imported data through Mainframes and on-boarded it into the SAS framework. Implemented very basic POCs of Knowledge Graphs in Neo4j and kore.ai. Worked on an internal bot framework to check if ER models are working correctly, which is used within the organization by around 5000 people."
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Machine Learning Engineer (Intern)"}
            subTitle={"Tata Consultancy Services(TCS)"}
            cert={false}
            text={
              "Deployed the YOLO model to detect and extract the text using the Tesseract API of TCS ID Cards. Collected ID cards and created bounding boxes around the regions of interests. Then, fed that data to a YOLO model and trained it in Google's GCP VM by creating a custom script for accessible data and I/O handling."
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
            subTitle={"New York University(NYU) - 3.89 / 4.0"}
            cert={false}
            text={
              "Relevant Coursework: Machine Learning, Database Systems, Data Structures and Algorithms, Internet Architecture and Protocols, Deep Learning, Operating Systems, ML for Cybersecurity, Cloud/Data Center Technologies and Computer System Architecture."
            }
          />
          <ResumeItem
            year={"2015 - 2019"}
            title={"Bachelor's in Computer Science and Engineering"}
            subTitle={
              "Gandhi Institute of Technology and Management(GITAM) University - 8.91 / 10"
            }
            cert={false}
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
            cert={true}
            refs={"https://confirm.udacity.com/DLMQ7LAZ"}
            text={
              "Relevant Coursework: Data Modeling(Postgres, Cassandra), Cloud Data Warehouses(AWS- S3, IAM, VPC, EC2, RDS, Redshift), Spark and Data Lakes(AWS - EMR) and Automate Data Pipelines(Airflow - Data Pipelines, Data Quality, Production Data Pipelines). "
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={"Complete React Developer"}
            subTitle={"Udemy"}
            cert={true}
            text={
              "Relevant Coursework: React Basics, Routing, Firebase, Redux, State Normalization, Deployment(Heroku), Styled Components, HOC and Container Patterns, Redux-Saga, Hooks, Context API, GraphQL + Apollo, Performance, Progressive Web App, Testing and GatsbyJS. "
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Deep Learning Specilization"}
            subTitle={"Coursera(deeplearning.ai)"}
            cert={true}
            refs={"https://coursera.org/share/7b3e016bd8b501e522c8e0b13f0fc655"}
            text={
              "Relevant Coursework: Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, Structuring Machine Learning Projects, Convolutional Neural Networks and Sequence Models."
            }
          />
          <ResumeItem
            year={"2019 - 2019"}
            title={"Machine Learning"}
            subTitle={"Coursera(deeplearning.ai)"}
            cert={true}
            refs={"https://coursera.org/share/2c28184517c4a695457e5d4295c5b447"}
            text={
              "Relevant Coursework: Linear Regression, Logistic Regression, Reguarization, Neural Network: Representation, Learning, Applying Machine Learning, System Design, Support Vector Machines, Unsupervised Learning, Dimentionality Reduction and Anomoly Dectection."
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
