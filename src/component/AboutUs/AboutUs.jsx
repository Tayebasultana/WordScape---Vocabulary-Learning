

const AboutUs = () => {
    return (
        <div className="">
          <section className="bg-gradient-to-r from-blue-200 via-white to-blue-300 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center text-black">
    <h2 className="text-5xl font-extrabold">About Us</h2>
    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
      At <span className="bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 via-blue-300 to-sky-500 font-semibold">WordScape</span>, we bring the world of words right to your fingertips. Our mission is simple: to connect cultures and people through language, making vocabulary-building fun, interactive, and enriching for everyone.
    </p>
  </div>

  
  <div className="max-w-6xl mx-auto mt-12 px-6 grid md:grid-cols-2 gap-10">
    
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="bg-blue-600 text-white p-6">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">
          Our mission is to create a platform where learners can easily access and explore words from every language. We aim to make language learning easy, enjoyable, and impactful by providing a fun and intuitive experience.
        </p>
      </div>
    </div>
    
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="bg-green-600 text-white p-6">
        <h3 className="text-2xl font-semibold">Our Vision</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">
          Our vision is to inspire a global community of learners who embrace the power of language as a way to connect cultures and broaden their horizons. We strive to provide a seamless and enriching experience for users from all around the world.
        </p>
      </div>
    </div>
  </div>

  
  <div className="bg-white py-16 mt-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold text-gray-800">Join Us on Our Journey</h3>
      <p className="mt-4 text-lg text-gray-600">
        Whether you're a seasoned language learner or just starting your journey, <span className="font-semibold bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 via-blue-300 to-sky-500">WordScape</span> is here to guide you. Explore, learn, and grow with us!
      </p>
      <div className="mt-8">
        <a href="/StartLearning" className="px-8 py-4 bg-blue-950 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default AboutUs;