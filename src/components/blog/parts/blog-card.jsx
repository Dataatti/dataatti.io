import Fade from "react-reveal/Fade";
import Link from "next/link";

export const BlogCard = ({ _key, href }) => {
  return (
    <div className="blog-card-wrapper">
      <Fade bottom cascade duration={600} delay={_key * 100} key={_key}>
        <Link href={href || "/404"}>
          <a className="blog-link">blog</a>
        </Link>
      </Fade>
      <style jsx>{`
        .blog-card-wrapper {
          box-shadow: 0 36px 64px rgb(34 39 43 / 6%);
          background-color: white;
          width: 30%;
          border-radius: 64px;
          height: 400px;
          margin: 20px 0px;
        }
      `}</style>
    </div>
  );
};
