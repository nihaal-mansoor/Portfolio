import { useSplitTextAnimation } from '../hooks/useGSAPAnimations.js';

const AnimatedTitle = ({ 
  children, 
  firstLetter = true, 
  className = "",
  tag = "h2",
  ...props 
}) => {
  const containerRef = useSplitTextAnimation();

  // Process text to highlight first letter
  const processTitle = (text) => {
    if (!firstLetter || !text) return text;
    
    const firstChar = text.charAt(0);
    const restOfText = text.slice(1);
    
    return (
      <>
        <span className="text-4xl font-clash-bold accent-100">{firstChar}</span>
        {restOfText}
      </>
    );
  };

  // Base classes for the animated title
  const baseClasses = "font-playfair text-4xl font-clash-regular line-height-base split-text";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  // Create element dynamically based on tag prop
  const Tag = tag;

  return (
    <div ref={containerRef}>
        <Tag 
      className={combinedClasses} 
      
      {...props}
    >
      {processTitle(children)}
    </Tag>
    </div>
    
  );
};

export default AnimatedTitle;