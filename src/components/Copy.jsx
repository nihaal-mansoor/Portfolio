import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Copy = ({ children, animateOnScroll = true, delay = 0 }) => {

   const containerRef = useRef(null);
   const elementRef = useRef([]);
   const splitRef = useRef([]);
   const lines = useRef([]);

   
   useGSAP(() => {
      if (!containerRef.current) return;
    
      // Wait for all fonts to be loaded before running GSAP + SplitText logic
      document.fonts.ready.then(() => {
        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];
    
        let elements = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else {
          elements = [containerRef.current];
        }
    
        elements.forEach((element) => {
          elementRef.current.push(element);
    
          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
          });
    
          splitRef.current.push(split);
    
          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;
    
          if (textIndent && textIndent !== "0px" && textIndent !== "none") {
            if (split.lines.length > 0) {
              split.lines[0].style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }
    
          lines.current.push(...split.lines);
        });
    
        gsap.set(lines.current, { y: "100%" });
    
        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };
    
        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 76%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      });
    
      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    }, {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
   });

   if (React.Children.count(children) === 1) {
       return React.cloneElement(children, { ref: containerRef });  
   }

   return (
      <div ref={containerRef} data-copy-wrapper="true">
         {children}
      </div>
   )
}

export default Copy