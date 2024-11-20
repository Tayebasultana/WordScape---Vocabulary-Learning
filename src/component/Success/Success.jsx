import CountUp from 'react-countup';

const Success = () => {
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-blue-400 to-white text-center py-10 md:py-40 px-5 md:px-20">
  <h2 className="font-extrabold text-4xl md:text-5xl text-white">Our Success</h2>
  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
    <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-600">
      <h3 className="text-5xl font-bold">
        <CountUp start={0} end={5000} duration={3} />+
      </h3>
      <p className="mt-2 text-2xl font-semibold">Happy Users</p>
    </div> 

    <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-600">
      <h3 className="text-5xl font-bold">
        <CountUp start={0} end={100} duration={3} />+
      </h3>
      <p className="mt-2 text-2xl font-semibold">Lessons</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-600">
      <h3 className="text-5xl font-bold">
        <CountUp start={0} end={10000} duration={3} />+
      </h3>
      <p className="mt-2 text-2xl font-semibold">Vocabulary Words</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-600">
      <h3 className="text-5xl font-bold">
        <CountUp start={0} end={50} duration={3} />+
      </h3>
      <p className="mt-2">Tutorials</p>
    </div>

  </div>
</div>
    
    );
};

export default Success;