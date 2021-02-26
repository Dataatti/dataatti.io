import Background from "@pagerland/themes/src/Startup/containers/About/Background";
import { BlogCard } from "./blog-card";

export const BlogSection = ({ WrapperProps, name }) => {
  const blogs = ["/test1", "/test2", "/test3", "/test4"];

  return (
    <div className="blogs-wrapper">
      <Background />
      {blogs.map((el, i) => (
        <BlogCard _key={i} href={el} />
      ))}
      <style jsx>{`
        .blogs-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
