import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SubmitButton from "../Components/SubmitButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

import emailjs from "emailjs-com";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const YOUR_USER_ID = "user_RLhFB0zmlTuudT9IBjAw7";
  const YOUR_TEMPLATE_ID = "template_cnners8";
  const YOUR_SERVICE_ID = "portfolio";

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email Sent!");
    e.target.reset();
  }

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Reachout"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className='left-content'>
            <div className='contact-title'>
              <h4>Get In Touch</h4>
            </div>
            <form className='form' onSubmit={sendEmail} id='my_form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter your name*</label>
                <input type='text' id='name' name='from_name' required />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter your email*</label>
                <input type='email' id='email' name='reply_to' required />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Enter your Message*</label>
                <textarea
                  name='message'
                  id='textarea'
                  cols='30'
                  rows='10'
                  required
                ></textarea>
              </div>
              <div className='form-field f-button'>
                <SubmitButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem title={"Phone"} icon={phone} cont1={"+1-9174761028"} />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"saikirancvn@gmail.com"}
              cont2={"saikirancvn@nyu.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"375 56TH ST, Brooklyn, New York"}
              cont2={"USA"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
