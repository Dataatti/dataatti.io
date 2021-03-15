import Fade from "react-reveal/Fade";
import Link from "next/link";
import { ArrowRight } from "@pagerland/icons/src/line";
import Icon from "@pagerland/common/src/components/Icon";

export const BlogCard = ({ _key, href, content, last }) => {
  return (
    <Fade bottom cascade duration={600} delay={_key * 100} key={_key}>
      <div className={`blog-card-wrapper ${last ? "blog-card-wrapper-last" : ""}`}>
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
      </div>
      <style jsx>{`
        .blog-card-wrapper {
          box-shadow: 0 16px 32px rgb(34 39 43 / 6%);
          background-color: white;
          min-width: 25%;
          border-radius: 32px;
          height: 420px;
          margin: 20px;
          overflow: hidden;
        }

        .blog-card-wrapper-last {
          padding-right: 20px;
        }

        .blog-inner-wrapper {
          padding: 1rem;
          display: flex;
          justify-content: center;
          position: relative;
          flex-wrap: wrap;
          box-shadow: 0px -40px 14px 0px rgba(255, 255, 255, 0.5) inset;
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
          font-size: 0.9rem;
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

        @media screen and (max-width: 1150px) {
          .blog-card-wrapper {
            min-width: 30%;
          }
        }

        @media screen and (max-width: 1000px) {
          .blog-card-wrapper {
            min-width: 45%;
          }
        }

        @media screen and (max-width: 740px) {
          .blog-card-wrapper {
            min-width: 60%;
          }
        }

        @media screen and (max-width: 560px) {
          .blog-card-wrapper {
            min-width: 90%;
          }
        }

        :global(.arrow-right) {
          fill: #51b3a7;
          padding-bottom: 4px;
        }
      `}</style>
    </Fade>
  );
};
