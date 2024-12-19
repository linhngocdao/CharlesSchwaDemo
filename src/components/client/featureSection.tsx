
const FeatureSection = () => {
    return (
        <div className="bg-[#1a1832] py-20 overflow-hidden">
            {/* First Feature */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Content Left */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight
                       animate-fade-in relative">
                            A valuable assistant for your cryptocurrency journey.
                            <div className="absolute -left-4 top-0 w-2 h-12 bg-gradient-to-b from-[#00c2ff] to-transparent" />
                        </h2>
                        <p className="text-[#838B9C] text-lg leading-relaxed animate-fade-in-delay">
                            From your first experience with cryptocurrency
                            <br />
                            trading to your first purchase,it will help you earn coins effortlessly.
                        </p>
                    </div>

                    {/* Image Right - will be replaced by your image */}
                    <div className="w-full md:w-1/2 relative group">
                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 to-purple-500/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                        <img
                            src="https://www.krakenvipex.com/resource/images/dark/tu03.png?2.0.1733409595382"
                            alt="Cryptocurrency Assistant"
                            className="relative w-full max-w-md mx-auto transform
                       hover:scale-105 transition-transform duration-700 ease-out
                       animate-float"
                        />

                        {/* Floating particles */}
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-[#00c2ff] rounded-full opacity-50"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Second Feature */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative w-full min-h-[600px] bg-[#1a1832] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                            {/* Left Side - Gradient Square with Image */}
                            <div className="w-full md:w-1/2 relative group">
                                {/* Gradient Square Container */}
                                <div className="relative aspect-square max-w-[400px] mx-auto">
                                    {/* Background Layers */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-[#00c2ff]/20
                                transform -rotate-3 transition-transform duration-500 group-hover:rotate-6" />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00c2ff]/20 to-purple-500/20
                                transform rotate-3 transition-transform duration-500 group-hover:-rotate-6" />

                                    {/* Main Container */}
                                    <div className="relative w-full h-full rounded-xl overflow-hidden
                                bg-gradient-to-br from-purple-600/30 to-[#00c2ff]/30
                                backdrop-blur-sm border border-white/10">
                                        {/* Image */}
                                        <img
                                            src="https://www.krakenvipex.com/resource/images/dark/tu01.png?2.0.1733409595382"
                                            alt="Trade Icon"
                                            className="w-full h-full object-contain p-8
                                    transform transition-all duration-700
                                    hover:scale-110 animate-float"
                                        />

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </div>
                                </div>

                                {/* Floating Particles */}
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-[#00c2ff] rounded-full animate-float"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDuration: `${3 + Math.random() * 2}s`,
                                            animationDelay: `${Math.random() * 2}s`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Right Side - Text Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-fade-in relative">
                                    Trade anytime,anywhere
                                    <div className="absolute -left-4 top-0 w-2 h-12 bg-gradient-to-b from-[#00c2ff] to-transparent" />
                                </h2>

                                <p className="text-[#838B9C] text-lg leading-relaxed animate-fade-in-delay">
                                    Compatible with multiple devices,
                                    <br />
                                    allowing you to start trading safely and conveniently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }


        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default FeatureSection;
