import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="w-full flex flex-col justify-center items-center " ref={ref}>
      <h1>Company Profile</h1>
      {inView && (
        <div className='grid grid-cols-3 justify-between w-full'>
        <div className="text-3xl mt-4 font-semibold flex flex-col items-center" data-target={100}>
          <CountUp className='text-black' start={0} end={200} duration={2} />
          <p className='text-blue-400'>Clients</p>
        </div>

        <div className="text-3xl mt-4 font-semibold flex flex-col items-center" data-target={100}>
          <CountUp className='text-black' start={0} end={500} duration={2} />
          <p className='text-blue-400'>Projects</p>
        </div>

        <div className="text-3xl mt-4 font-semibold flex flex-col items-center" data-target={100}>
          <CountUp className='text-black' start={0} end={10} duration={2} />
          <p className='text-blue-400'>Platforms</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default CounterComponent;
