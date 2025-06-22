import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
// import { Lenis } from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Main GSAP setup hook - handles Lenis and global config
export const useGSAPSetup = () => {
	const lenisRef = useRef(null);

	useGSAP(() => {
		// Initialize Lenis
		lenisRef.current = new Lenis({
			autoRaf: true,
		});

		// Configure ScrollTrigger
		ScrollTrigger.config({
			autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
		});

		gsap.ticker.lagSmoothing(0);

		// Return cleanup function for non-GSAP items
		return () => {
			if (lenisRef.current) {
				lenisRef.current.destroy();
			}
		};
	}, []);

	return lenisRef.current;
};

// Split text animation hook
export const useSplitTextAnimation = (scope, dependencies = []) => {
	const splitRefs = useRef({});
	const containerRef = useRef(null);

	useGSAP(
		() => {
			const elements =
				containerRef.current?.querySelectorAll(".split-text") || [];

			// Wait for fonts to load before setting up animations
			document.fonts.ready.then(() => {
				elements.forEach((element, index) => {
					// Create unique key for each element
					const key = `split-${index}`;

					// Clean up previous split if it exists
					if (splitRefs.current[key]) {
						splitRefs.current[key].revert();
					}

					// Create new SplitText instance
					splitRefs.current[key] = new SplitText(element, {
						type: "words,chars",
						linesClass: "split-line",
					});

					// Animate the split text
					gsap.from(splitRefs.current[key].chars, {
						scrollTrigger: {
							trigger: element,
							toggleActions: "restart pause resume reverse",
							start: "top 80%",
							end: "top 20%",
							markers: false,
						},
						duration: 0.9,
						ease: "circ.out",
						y: 80,
						opacity: 0,
						stagger: 0.05,
					});
				});
			});
		},
		{ scope: containerRef, dependencies }
	);

	return containerRef;
};

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

// Custom animation hook for more flexibility
export const useCustomGSAP = (
	animationFunction,
	dependencies = [],
	options = {}
) => {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			if (typeof animationFunction === "function") {
				return animationFunction(containerRef.current);
			}
		},
		{
			scope: containerRef,
			dependencies,
			...options,
		}
	);

	return containerRef;
};

// Timeline hook for complex sequences
export const useGSAPTimeline = (
	timelineFunction,
	dependencies = [],
	options = {}
) => {
	const containerRef = useRef(null);
	const tl = useRef(null);

	useGSAP(
		() => {
			tl.current = gsap.timeline(options.timelineOptions);

			if (typeof timelineFunction === "function") {
				timelineFunction(tl.current, containerRef.current);
			}

			return () => {
				if (tl.current) {
					tl.current.kill();
				}
			};
		},
		{
			scope: containerRef,
			dependencies,
			...options,
		}
	);

	return { containerRef, timeline: tl.current };
};
