import Background from "@pagerland/themes/src/Startup/containers/About/Background";
import { BlogCard } from "./blog-card";

export const BlogSection = ({ WrapperProps, name, content }) => {
  const blogs = ["/test1", "/test2", "/test3", "/test4"];

  return (
    <div className="blogs-wrapper">
      <Background />
      {blogs.slice(0, 3).map((el, i) => (
        <BlogCard
          _key={i}
          href={el}
          content={{
            header: "Dataatti founders story",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis imperdiet tortor. Cras felis quam, finibus sed turpis eget, cursus euismod eros. Praesent vitae commodo mauris. Praesent luctus dignissim feugiat. Fusce non mauris leo. Maecenas et tincidunt purus. Aliquam non est mauris. Nunc ultricies eros at enim posuere, vel hendrerit mauris accumsan. Vestibulum faucibus, ante nec tempus lobortis, lacus felis efficitur mauris, at condimentum lectus lorem at leo. Nam condimentum rhoncus suscipit.Vestibulum volutpat finibus dolor viverra volutpat.Ut accumsan pellentesque placerat.Nam sagittis non libero quis eleifend.Donec in rhoncus dolor.Integer bibendum vitae ex laoreet vestibulum.Aliquam erat volutpat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Suspendisse at nulla et nisl venenatis pulvinar.Sed luctus lobortis orci.Cras ornare, dolor bibendum ultricies aliquet, enim nisl sodales risus, vel facilisis urna metus a tellus.Nullam vitae tincidunt risus.Donec quis massa porttitor, imperdiet nunc a, sollicitudin dolor.Suspendisse vestibulum lacus non nulla facilisis, in egestas nunc tristique.Suspendisse mollis iaculis erat sit amet tempus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: content.find((el) => el.fields.name === "Matias Lappalainen"),
          }}
        />
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
