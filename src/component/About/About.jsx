
const About = () => {
    return (
      <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#2ad2ef] text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to WordScape</h1>
        <p className="text-xl mb-6">Learn new words, expand your vocabulary, and unlock the power of communication.</p>
      </section>

      {/* How to Learn Section */}
      <section id="how-to-learn" className="py-16 bg-gray-100 text-center px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-blue-600 mb-6">How to Learn Vocabulary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">1. Choose Your Language</h3>
            <p className="text-lg mb-4">Select a language you're interested in learning. We offer various languages like French, Japanese, Arabic, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">2. Explore Vocabulary</h3>
            <p className="text-lg mb-4">Browse through a list of words and their meanings, pronunciations, and examples to understand their usage in real-life contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">3. Practice</h3>
            <p className="text-lg mb-4">Test your knowledge through quizzes and exercises to reinforce your learning and remember the words better.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">4. Track Progress</h3>
            <p className="text-lg mb-4">Keep track of your learning progress, see how many words you've mastered, and stay motivated to keep going!</p>
          </div>
        </div>
      </section>

</div>
    
    );
};
            
export default About;