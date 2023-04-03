import React from 'react';

function useIncrement(percentage) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => oldProgress + 1);
    }, 25);
    if (progress === percentage) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    progress
  );
}

export default useIncrement;
