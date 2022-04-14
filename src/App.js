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
        height: "1500px",
        fontSize: "var(--font-size-1)",
      }, ".scroll-content")
      .init();

    Element(scrollContent1)
      .setInnerText("lorem loremh lorem loremhlorem loremh lorem loremh lorem loremh lorem loremh lorem loremh")

    Element(scrollContent2)
      .setInnerText("lorem loremh lorem loremhlorem loremh lorem loremh lorem loremh lorem loremh lorem loremh")

    Element(scrollContent3)
      .setInnerText("lorem loremh lorem loremhlorem loremh lorem loremh lorem loremh lorem loremh lorem loremh")

    Element(scrollContent2)
      .setStyle({
        backgroundColor: "var(--color-2)"
      }, ".scroll-content-middle")

    const elements = Element()
      .createElement("div", 20)
      .setStyle({
        width: "600px",
        height: "300px",

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
        top: "200px",
        // transform: "translateY(-50%)",
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
        "--font-size-1": "150px",
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
