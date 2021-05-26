import Fade from "react-reveal/Fade";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight } from "@pagerland/icons/src/line";
import { options } from "marked";

export const BlogCard = ({ href, content }) => {
  const router = useRouter();

  return (
    <div className="blog-card-wrapper" onClick={() => router.push(href)}>
      <div className="blog-bg-image"></div>
      <div className="blog-inner-wrapper">
        <div className="blog-header-wrapper">
          <h3 className="blog-header-text">{content?.header}</h3>
          <div className="blog-author-wrapper">
            <img src={content?.author?.fields?.image?.fields?.file?.url} />
            <div>
              <span>{content.author.fields.name}</span>
              <span>{new Intl.DateTimeFormat(router.query.lang).format(new Date(content.created))}</span>
            </div>
          </div>
        </div>
        <p className="blog-preview-paragraph">{content.shortText.slice(0, 100) + "..."}</p>
        <div className="blog-link">
          <span>{content.readMore || "Read More"}</span> <ArrowRight className="arrow-right" />
        </div>
      </div>
      <style jsx>{`
        .blog-card-wrapper {
          width: 25rem;
          border-radius: 32px;
          height: 420px;
          margin: 20px;
          overflow: hidden;
          box-shadow: 0 16px 16px 0px rgb(34 39 43 / 10%);
          cursor: pointer;
        }

        .blog-inner-wrapper {
          padding: 1rem;
          flex-wrap: wrap;
          background-color: white;
          height: 400px;
        }

        .blog-bg-image {
          top: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: url(${content.headerImageUrl}) no-repeat;
          background-size: cover;
          border-radius: 32px 32px 0px 0px;
        }

        .blog-header-wrapper {
          width: 100%;
        }

        .blog-author-wrapper {
          display: flex;
          align-items: center;
        }

        .blog-author-wrapper div {
          margin-left: 0.5rem;
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
          margin: 0.5rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .blog-link {
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          color: #d06f3f;
          text-decoration: none;
          user-select: none;
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
          fill: #d06f3f;
        }
      `}</style>
    </div>
  );
};
