"use strict";

import Element from "@globals/element.js";
import "./App.scss";

const App = () => {


  const init = () => {
    const [
      scrollContent1,
      scrollContent2,
      scrollContent3
    ] = Element()
      .createElement("div", 3)
      .setStyle({
        backgroundColor: "var(--color-1)",
        width: "100%",
        height: "1500px"
      }, ".scroll-content")
      .init();

    Element(scrollContent2)
      .setStyle({
        backgroundColor: "var(--color-2)"
      }, ".scroll-content-middle")

    const elements = Element()
      .createElement("div", 5)
      .setStyle({
        // maxWidth: "1000px",
        // maxHeight: "800px",
        // width: "100%",
        // height: "100%",
        width: "1000px",
        height: "800px",

        backgroundColor: "purple",
        margin: "0 20px 0 0",
        flexShrink: "0",
      }, ".element")

    const elementWrapper = Element()
      .createElement("div")
      .setStyle({
        position: "relative",
        display: "flex"
      }, ".element-wrapper")
      .appendChildren(elements);

    const stickyWrapper = Element()
      .createElement("div")
      .setStyle({
        position: "sticky",
        top: "10px",
        width: "100%",
        overflow: "hidden",
      }, ".sticky-wrapper")
      .appendChild(elementWrapper)

    const horizontalWrapper = Element()
      .createElement("section")
      .setStyle({
        padding: "100px 0",
        backgroundColor: "var(--color-3)"
      }, ".horizontal-wrapper")
      .appendChild(stickyWrapper)



    Element()
      .queryElement("body")
      .setRootCSS({
        "--color-1": "lightblue",
        "--color-2": "lightgreen",
        "--color-3": "orange",
      })
      .appendChildren([
        scrollContent1,
        horizontalWrapper,
        scrollContent2,
        scrollContent3,
      ]);


    let windowsWidth = window.innerWidth;
    let horizontalLength = elementWrapper.init().scrollWidth;
    let distanceFromTop = horizontalWrapper.init().offsetTop;
    let scrollDistance = distanceFromTop + horizontalLength - windowsWidth;

    horizontalWrapper.setInlineStyle(({ style }) => {
      style.height = `${horizontalLength}px`;
      style.background = "transparent";
    })

    Element(window)
      .addEvent("scroll", () => {
        let scrollTop = window.pageYOffset;
        if (scrollTop >= distanceFromTop && scrollTop <= scrollDistance) {
          elementWrapper.setInlineStyle(({ style }) => {
            style.transform = `translateX(-${scrollTop - distanceFromTop}px)`;
          })
        }
      })

  };

  const app = {
    init,
  };
  return app;
};

export default App();
