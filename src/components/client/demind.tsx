const DefiMiningSection = () => {
    const levels = [
        {
            level: 1,
            image: "https://www.krakenvipex.com/resource/images/dark/tu02.png?2.0.1733409595382",
            account: "Basic",
            cycle: "30 days",
            returns: "8-12% APY"
        },
        {
            level: 2,
            image: "https://www.krakenvipex.com/resource/images/dark/tu02.png?2.0.1733409595382",
            account: "Standard",
            cycle: "60 days",
            returns: "12-15% APY"
        },
        {
            level: 3,
            image: "https://www.krakenvipex.com/resource/images/dark/tu02.png?2.0.1733409595382",
            account: "Premium",
            cycle: "90 days",
            returns: "15-18% APY"
        },
        {
            level: 4,
            image: "https://www.krakenvipex.com/resource/images/dark/tu02.png?2.0.1733409595382",
            account: "Elite",
            cycle: "120 days",
            returns: "18-25% APY"
        }
    ];

    return (
        <div className="bg-[#1a1832] py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Selected Defi Mining
                    </h2>
                    <p className="text-[#838B9C] text-lg">
                        Learn how to make money with our recommendations.
                    </p>

                    {/* Decorative Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent" />
                    </div>
                </div>

                {/* Mining Levels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {levels.map((level, index) => (
                        <div
                            key={level.level}
                            className="relative group"
                            style={{
                                animation: `fadeInUp 0.5s ease-out forwards`,
                                animationDelay: `${index * 0.1}s`,
                                opacity: 0
                            }}
                        >
                            {/* Card */}
                            <div className="bg-[#1f1d3a]/50 rounded-xl p-6 border border-[#2a2833]
                             backdrop-blur-sm hover:bg-[#2a2833]/50 transition-all duration-300
                             transform hover:-translate-y-2">
                                {/* Mining Image */}
                                <div className="relative h-48 mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00c2ff]/20 to-transparent
                                 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={level.image}
                                        alt={`Mining Level ${level.level}`}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Glowing Bitcoin Icon */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#f7931a] rounded-full flex items-center justify-center
                                 animate-pulse">
                                        <span className="text-white text-xl">₿</span>
                                    </div>
                                </div>

                                {/* Level Info */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                        Level:{level.level}
                                        <div className="w-2 h-2 rounded-full bg-[#00c2ff] animate-ping" />
                                    </h3>

                                    <div className="space-y-2">
                                        <p className="text-[#838B9C]">
                                            Account: <span className="text-white">{level.account}</span>
                                        </p>
                                        <p className="text-[#838B9C]">
                                            Cycle: <span className="text-white">{level.cycle}</span>
                                        </p>
                                        <p className="text-[#838B9C]">
                                            Expected Returns:
                                            <span className="text-[#00c2ff] font-medium ml-1">{level.returns}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Lines */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent" />
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00c2ff] to-transparent" />
                                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00c2ff] to-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animations */}
            <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        </div>
    );
};

export default DefiMiningSection;
