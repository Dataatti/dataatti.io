import Fade from "react-reveal/Fade";
import Link from "next/link";
import { ArrowRight } from "@pagerland/icons/src/line";

export const BlogCard = ({ _key, href, content }) => {
  return (
    <div className="blog-card-wrapper">
      <div className="blog-inner-wrapper">
        <div className="blog-bg-image"></div>
        <div className="blog-header-wrapper">
          <h3 className="blog-header-text">{content.header}</h3>
          <div className="blog-author-wrapper">
            <img src={content.author.fields.image.fields.file.url} />
            <div>
              <span>{content.author.fields.name}</span>
              <span>21.2.2021</span>
            </div>
          </div>
        </div>
        <p className="blog-preview-paragraph">{content.text}</p>
        <Link href={href || "/404"}>
          <a className="blog-link">
            <span>{content.readMore || "Read More"}</span> <ArrowRight className="arrow-right" />
          </a>
        </Link>
      </div>
      <style jsx>{`
        .blog-card-wrapper {
          width: 25rem;
          border-radius: 32px;
          height: 420px;
          margin: 20px;
          overflow: hidden;
          box-shadow: 0 16px 16px 0px rgb(34 39 43 / 10%);
        }

        .blog-inner-wrapper {
          padding: 1rem;
          display: flex;
          justify-content: center;
          position: relative;
          flex-wrap: wrap;
          background-color: white;
          height: 400px;
        }

        .blog-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: url("https://i.picsum.photos/id/1026/400/200.jpg?hmac=HAuXegf1JXD21IFkjxjPD7vdzD55W4HqEx_hgv7b1L4")
            no-repeat;
          background-size: cover;
          border-radius: 32px 32px 0px 0px;
        }

        .blog-header-wrapper {
          margin-top: 150px;
          width: 100%;
        }

        .blog-author-wrapper {
          display: flex;
          align-items: center;
        }

        .blog-author-wrapper div {
          margin-left: 8px;
          display: flex;
          flex-wrap: wrap;
        }

        .blog-header-wrapper h3 {
          color: #d06f3f;
          font-size: 1.75rem;
        }
        .blog-header-wrapper > * {
          margin: 0;
          margin-bottom: 8px;
          line-height: 1;
        }

        .blog-header-wrapper img {
          width: 50px;
          height: 50px;
          border-radius: 3rem;
        }

        .blog-header-wrapper span {
          color: gray;
          font-size: 1rem;
          line-height: 1rem;
          width: 100%;
        }

        .blog-header-text {
          text-align: left;
          width: 100%;
        }

        .blog-preview-paragraph {
          width: 100%;
          overflow: hidden;
          height: 120px;
          text-overflow: ellipsis;
        }

        .blog-link {
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          text-align: center;
          margin: 0;
          padding-top: 60px;
          background-image: linear-gradient(to bottom, transparent, white);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          color: #51b3a7;
          text-decoration: none;
        }

        @media screen and (max-width: 1330px) {
          .blog-card-wrapper {
            width: 20rem;
          }
        }

        @media screen and (max-width: 1080px) {
          .blog-card-wrapper {
            min-width: 20rem;
          }
        }

        @media screen and (max-width: 420px) {
          .blog-card-wrapper {
            margin: 0 auto;
          }
        }

        :global(.arrow-right) {
          fill: #51b3a7;
          padding-bottom: 4px;
        }
      `}</style>
    </div>
  );
};
