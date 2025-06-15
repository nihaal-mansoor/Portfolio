import { useHRAnimation } from '../hooks/useGSAPAnimations.js';

const AnimatedHR = ({ 
  className = "",
  ...props 
}) => {
  const containerRef = useHRAnimation();

  return (
    <div ref={containerRef}>
        <hr 
        className={className}
        {...props}
        />
    </div>
    
  );
};

export default AnimatedHR;