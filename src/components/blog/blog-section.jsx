import { useRef } from "react";
import Background from "@pagerland/themes/src/Startup/containers/About/Background";
import { BlogCard } from "./blog-card";
import useWindowSize from "../../hooks/useWindowSize";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";
import { useRouter } from "next/router";

export const BlogSection = ({ WrapperProps, name, content }) => {
  const draggable = useRef();
  const blogs = content.map((item) => ({
    ...item.fields,
    headerImageUrl: item?.fields?.headerImage?.fields?.file?.url,
  }));

  const size = useWindowSize();

  const CarouselUI = ({ children }) => (
    <div className="blogs-wrapper" ref={draggable}>
      {children}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);

  const renderCards = () => {
    if (size.width > 420 || blogs.length === 1) {
      return (
        <div className="blogs-wrapper" ref={draggable}>
          {blogs.splice(0, size.width > 1080 ? 3 : 2).map((el, i) => (
            <Fade bottom cascade duration={600} delay={i * 100} key={i}>
              <BlogCard _key={i} href={""} content={el} />
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
              href={""}
              // Workaround toistaseks et saan css:n toimii näis korteis oikein
              content={el}
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
