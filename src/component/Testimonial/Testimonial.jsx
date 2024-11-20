

const Testimonial = () => {
    return (
        <div className="bg-gray-50 py-20 px-5 md:px-20">
  <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">What Our Users Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-700">
        "This website has completely changed the way I learn vocabulary. It's interactive and fun!"
      </p>
      <h3 className="mt-4 font-semibold text-gray-800">- Sarah L.</h3>
    </div>
    <div className="p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-700">
        "I improved my communication skills significantly. Highly recommended!"
      </p>
      <h3 className="mt-4 font-semibold text-gray-800">- James P.</h3>
    </div>
  </div>
</div>

    );
};

export default Testimonial;