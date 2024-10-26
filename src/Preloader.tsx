import React, { useEffect, useState } from 'react';
import { Progress } from './components/ui/progress';

const Preloader: React.FC<{ loading: boolean }> = ({ loading }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!loading) {
      setProgress(0); //starting point 
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {          //basihan kung hanggang saan matatapos yung relasyon niyo
          clearInterval(interval); 
          return 100;               //endpoint
        }
        return prev + 20;           //breakingpoint
      });
    }, 500);                        //speedpoint

    return () => clearInterval(interval);
  }, [loading]);

  if (!loading) return null; 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral z-50">
      <div className="w-1/2">
        <Progress value={progress} />
        <div className="text-white text-center mt-2">{progress}%</div> {/* Display current progress */}
      </div>
    </div>
  );
};

export default Preloader;