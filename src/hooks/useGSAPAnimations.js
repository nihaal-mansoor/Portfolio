import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// HR animation hook
export const useHRAnimation = (scope, dependencies = []) => {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			const elements = containerRef.current?.querySelectorAll("hr") || [];
			elements.forEach((element) => {
				// Set initial state
				gsap.set(element, {
					scaleX: 0,
					opacity: 0,
					transformOrigin: "left center",
				});

				// Animate the HR
				gsap.to(element, {
					scrollTrigger: {
						trigger: element,
						toggleActions: "restart pause resume reverse",
						start: "top 76%",
						// end: "top 20%",
						markers: false,
					},
					duration: 1.5,
					ease: "circ.out",
					scaleX: 1,
					opacity: 1,
				});
			});
		},
		{ scope: containerRef, dependencies }
	);

	return containerRef;
};


