import { useRef } from "react";
import Background from "@pagerland/themes/src/Startup/containers/About/Background";
import { BlogCard } from "./blog-card";
import useWindowSize from "../../hooks/useWindowSize";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";

export const BlogSection = ({ WrapperProps, name, content }) => {
  const draggable = useRef();
  const blogs = ["/test1", "/test2", "/test3", "/test4", "/test4"];

  const size = useWindowSize();

  const CarouselUI = ({ children }) => (
    <div className="blogs-wrapper" ref={draggable}>
      {children}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);

  const renderCards = () => {
    if (size.width > 420) {
      return (
        <div className="blogs-wrapper" ref={draggable}>
          {blogs.splice(0, size.width > 1080 ? 3 : 2).map((el, i) => (
            <Fade bottom cascade duration={600} delay={i * 100} key={i}>
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
            </Fade>
          ))}
        </div>
      );
    }

    return (
      <Carousel defaultWait={5000}>
        {blogs.splice(0, 3).map((el, i) => (
          <Slide right key={i}>
            <BlogCard
              _key={i}
              href={el}
              // Workaround toistaseks et saan css:n toimii näis korteis oikein
              content={{
                header: "Dataatti founders story",
                text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis imperdiet tortor. Cras felis quam, finibus sed turpis eget, cursus euismod eros. Praesent vitae commodo mauris. Praesent luctus dignissim feugiat. Fusce non mauris leo. Maecenas et tincidunt purus. Aliquam non est mauris. Nunc ultricies eros at enim posuere, vel hendrerit mauris accumsan. Vestibulum faucibus, ante nec tempus lobortis, lacus felis efficitur mauris, at condimentum lectus lorem at leo. Nam condimentum rhoncus suscipit.Vestibulum volutpat finibus dolor viverra volutpat.Ut accumsan pellentesque placerat.Nam sagittis non libero quis eleifend.Donec in rhoncus dolor.Integer bibendum vitae ex laoreet vestibulum.Aliquam erat volutpat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Suspendisse at nulla et nisl venenatis pulvinar.Sed luctus lobortis orci.Cras ornare, dolor bibendum ultricies aliquet, enim nisl sodales risus, vel facilisis urna metus a tellus.Nullam vitae tincidunt risus.Donec quis massa porttitor, imperdiet nunc a, sollicitudin dolor.Suspendisse vestibulum lacus non nulla facilisis, in egestas nunc tristique.Suspendisse mollis iaculis erat sit amet tempus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                author: content.find((el) => el.fields.name === "Matias Lappalainen"),
              }}
            />
          </Slide>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="blogs-wrapper">
      <Background />
      {renderCards()}
      <style global jsx>{`
        .blogs-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          padding: 40px 0;
          height: 500px;
        }

        @media screen and (max-width: 710px) {
          .blogs-wrapper {
            overflow-x: auto;
            overflow-y: hidden;
            justify-content: end;
          }
        }

        @media screen and (max-width: 420px) {
          .blogs-wrapper {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
