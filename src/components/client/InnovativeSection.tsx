const InnovativeSection = () => {
    return (
        <div className="relative w-full bg-[#1a1832] overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1832] via-[#1f1d3a] to-[#1a1832]" />
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00c2ff]/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left Side - 3D Icon */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="max-w-[500px] mx-auto relative">
                            {/* Glowing Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/20 via-purple-500/20 to-[#00c2ff]/20
                             rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                            {/* 3D Icon */}
                            <div className="relative transform hover:scale-105 transition-transform duration-500
                             animate-float">
                                <img
                                    src="https://www.krakenvipex.com/resource/images/dark/tu01.png?2.0.1733409595382"
                                    alt="Innovative Technology"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Decorative Lines */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16
                               bg-gradient-to-b from-[#00c2ff] to-transparent" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-16
                               bg-gradient-to-t from-[#00c2ff] to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-[#ff3b9a] text-5xl md:text-6xl font-bold
                         animate-fade-in leading-tight">
                            Innoveactive
                        </h2>

                        <div className="space-y-4">
                            <h3 className="text-white text-3xl md:text-4xl font-medium animate-fade-in-delay">
                                KraKen
                            </h3>
                            <h4 className="text-white text-2xl md:text-3xl animate-fade-in-delay-2">
                                Explore Diverse Markets
                            </h4>
                        </div>

                        <p className="text-[#838B9C] text-lg leading-relaxed animate-fade-in-delay-3 max-w-xl">
                            In 2023,M North stra Stock Exchange,new content
                            Stocks,cryptocurrencies,and fund management will play
                            with the entire capital market.
                        </p>

                        <button className="px-8 py-3 bg-[#2ebd85] text-white rounded-full
                             transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#2ebd85]/20
                             transition-all duration-300 animate-fade-in-delay-4">
                            Learn
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.5); opacity: 0.2; }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }

          .animate-fade-in-delay {
            animation: fadeIn 0.6s ease-out 0.2s forwards;
            opacity: 0;
          }

          .animate-fade-in-delay-2 {
            animation: fadeIn 0.6s ease-out 0.4s forwards;
            opacity: 0;
          }

          .animate-fade-in-delay-3 {
            animation: fadeIn 0.6s ease-out 0.6s forwards;
            opacity: 0;
          }

          .animate-fade-in-delay-4 {
            animation: fadeIn 0.6s ease-out 0.8s forwards;
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

export default InnovativeSection;
