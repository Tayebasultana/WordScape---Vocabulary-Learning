

const Features = () => {
    return (
      <div className="py-32 bg-gradient-to-r from-blue-100 via-white to-blue-200 text-center px-4 md:px-8">
      <h2 className="font-extrabold text-4xl md:text-5xl text-blue-600">Why Choose Us?</h2>
      <p className="mt-4 text-lg text-blue-400 max-w-3xl mx-auto">
        Winter is the perfect time to dive deep into new knowledge. Our platform helps you improve vocabulary, step by step,
        with a cold breeze of inspiration to keep you motivated.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center text-blue-600">
          <h3 className="text-2xl font-semibold">Custom Learning</h3>
          <p className="text-blue-400">We provide personalized learning paths.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center text-blue-600">
          <h3 className="text-2xl font-semibold">Daily Lessons</h3>
          <p className="text-blue-400">Learn something new every day!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center text-blue-600">
          <h3 className="text-2xl font-semibold">Community Support</h3>
          <p className="text-blue-400">Join our community of learners.</p>
        </div>
      </div>
    </div>
    
    );
};

export default Features;