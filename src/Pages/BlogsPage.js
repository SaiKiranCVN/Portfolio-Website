import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Logs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <a href={blog.link} target='_blank' rel='noreferrer'>
                  <div className='image'>
                    <img src={blog.image} alt='' />
                  </div>
                  <div className='title'>{blog.title}</div>
                </a>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
