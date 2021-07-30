import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <img src={resume} alt='' />
      </div>
      <div className='right-content'>
        <h4>
          I am <span>Sai Kiran</span>
        </h4>
        <p className='paragraph'>
          Being a good developer is not just obtaining the knowledge of one
          domain, rather a fundational knowledge of all domains, with
          concentraion in one
          <b>
            {" "}
            <a
              href='https://en.wikipedia.org/wiki/T-shaped_skills'
              target='_blank'
              rel='noreferrer'
            >
              T-shaped Skills
            </a>
          </b>
          .
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Experience</p>
          </div>
          <div className='info'>
            <p>: Venkata Naga Sai Kiran Challa</p>
            <p>: 24</p>
            <p>: Indian </p>
            <p>: English, Hindi, Telugu </p>
            <p>: New York City, New York</p>
            <p>: Fresh Grad (1 Year)</p>
          </div>
        </div>
        <PrimaryButton
          title={"Download Resume"}
          href={
            "https://drive.google.com/file/d/1qYFRRtXCi97mRMe-eiWr9toAEOBt7Lq2/view?usp=sharing"
          }
          download
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 448px) {
    .right-content {
      p {
        font-size: 80%;
      }
      b {
        font-size: 90%;
      }
    }
  }
  @media screen and (max-width: 374px) {
    .right-content {
      p {
        font-size: 70%;
      }
      b {
        font-size: 90%;
      }
    }
  }
  @media screen and (max-width: 336px) {
    .right-content {
      p {
        font-size: 60%;
      }
      b {
        font-size: 90%;
      }
    }
  }

  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
