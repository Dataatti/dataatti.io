import { useRef, useEffect } from "react";
import Background from "@pagerland/themes/src/Startup/containers/About/Background";
import { BlogCard } from "./blog-card";

export const BlogSection = ({ WrapperProps, name, content }) => {
  const draggable = useRef();
  const blogs = ["/test1", "/test2", "/test3", "/test4", "/test4"];

  // useEffect(() => {
  //   if (screen.width < 460) return;
  //   draggable.current.style.cursor = "grab";

  //   let pos = { top: 0, left: 0, x: 0, y: 0 };

  //   const mouseDownHandler = function (e) {
  //     draggable.current.style.cursor = "grabbing";
  //     draggable.current.style.userSelect = "none";

  //     pos = {
  //       left: draggable.current.scrollLeft,
  //       top: draggable.current.scrollTop,
  //       // Get the current mouse position
  //       x: e.clientX,
  //       y: e.clientY,
  //     };

  //     document.addEventListener("mousemove", mouseMoveHandler);
  //     document.addEventListener("mouseup", mouseUpHandler);
  //   };

  //   const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;
  //     const dy = e.clientY - pos.y;

  //     // Scroll the element
  //     draggable.current.scrollTop = pos.top - dy;
  //     draggable.current.scrollLeft = pos.left - dx;
  //   };

  //   const mouseUpHandler = function () {
  //     draggable.current.style.cursor = "grab";
  //     draggable.current.style.removeProperty("user-select");

  //     document.removeEventListener("mousemove", mouseMoveHandler);
  //     document.removeEventListener("mouseup", mouseUpHandler);
  //   };

  //   // Attach the handler
  //   draggable.current.addEventListener("mousedown", mouseDownHandler);

  //   return () => {
  //     draggable.current.removeEventListener("mousedown", mouseDownHandler);
  //   };
  // }, []);

  return (
    <div className="blogs-wrapper">
      <Background />
      <div className="blogs-wrapper" ref={draggable}>
        {blogs.map((el, i) => (
          <BlogCard
            _key={i}
            href={el}
            // Workaround toistaseks et saan css:n toimii näis korteis oikein
            last={i + 1 === blogs.length}
            content={{
              header: "Dataatti founders story",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis imperdiet tortor. Cras felis quam, finibus sed turpis eget, cursus euismod eros. Praesent vitae commodo mauris. Praesent luctus dignissim feugiat. Fusce non mauris leo. Maecenas et tincidunt purus. Aliquam non est mauris. Nunc ultricies eros at enim posuere, vel hendrerit mauris accumsan. Vestibulum faucibus, ante nec tempus lobortis, lacus felis efficitur mauris, at condimentum lectus lorem at leo. Nam condimentum rhoncus suscipit.Vestibulum volutpat finibus dolor viverra volutpat.Ut accumsan pellentesque placerat.Nam sagittis non libero quis eleifend.Donec in rhoncus dolor.Integer bibendum vitae ex laoreet vestibulum.Aliquam erat volutpat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Suspendisse at nulla et nisl venenatis pulvinar.Sed luctus lobortis orci.Cras ornare, dolor bibendum ultricies aliquet, enim nisl sodales risus, vel facilisis urna metus a tellus.Nullam vitae tincidunt risus.Donec quis massa porttitor, imperdiet nunc a, sollicitudin dolor.Suspendisse vestibulum lacus non nulla facilisis, in egestas nunc tristique.Suspendisse mollis iaculis erat sit amet tempus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              author: content.find((el) => el.fields.name === "Matias Lappalainen"),
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .blogs-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          overflow-x: scroll;
          padding: 40px 0;
        }
      `}</style>
    </div>
  );
};
