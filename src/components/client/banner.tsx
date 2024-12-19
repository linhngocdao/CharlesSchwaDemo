import { Bitcoin, DollarSign, RefreshCcw } from 'lucide-react';
import { useRef } from 'react';
import AdditionalMarketData from './icon';

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const marketData = [
        { symbol: 'BTC/USDT', price: '42,869.50', change: '+2.34%', color: 'green' },
        { symbol: 'ETH/USDT', price: '2,274.25', change: '+1.56%', color: 'green' },
        { symbol: 'BNB/USDT', price: '305.78', change: '-0.45%', color: 'red' },
    ];

    return (
        <div ref={containerRef} className="relative w-full h-[800px] bg-[#1a1832] overflow-hidden">
            {/* Base Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1832] via-[#1f1d3a] to-[#1a1832]" />

            {/* Original Floating Cubes */}
            <div className="absolute inset-0">
                {[...Array(24)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${20 + Math.random() * 30}px`,
                            height: `${20 + Math.random() * 30}px`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animation: `floatCube ${8 + Math.random() * 6}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Original Glowing Dots */}
            <div className="absolute inset-0">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute rounded-full bg-[#00c2ff]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            filter: 'blur(1px)',
                            animation: `glowPulse ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.6,
                        }}
                    />
                ))}
            </div>

            {/* New Market Data Cards */}
            <div className="absolute right-0 top-1/4 w-80">
                {marketData.map((data, index) => (
                    <div
                        key={data.symbol}
                        className="absolute bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                        style={{
                            top: `${index * 100}px`,
                            right: '10%',
                            animation: `float ${6 + index}s ease-in-out infinite`,
                            animationDelay: `${index * 0.5}s`,
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-white/10">
                                {index === 0 ? <Bitcoin className="w-5 h-5 text-[#f7931a]" /> :
                                    index === 1 ? <RefreshCcw className="w-5 h-5 text-[#627eea]" /> :
                                        <DollarSign className="w-5 h-5 text-[#f3ba2f]" />}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-medium">{data.symbol}</span>
                                    <span className={`text-${data.color}-500 text-sm`}>{data.change}</span>
                                </div>
                                <span className="text-[#a4b1cd] text-sm">${data.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Candlestick Chart Elements */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`candle-${i}`}
                        className="absolute bottom-0 bg-[#00c2ff]"
                        style={{
                            left: `${i * 10}%`,
                            width: '4px',
                            height: `${50 + Math.random() * 100}px`,
                            animation: `pulseHeight ${4 + Math.random() * 2}s ease-in-out infinite`,
                        }}
                    >
                        <div className="absolute w-[1px] h-[20px] bg-[#00c2ff] -top-[20px] left-1/2" />
                        <div className="absolute w-[1px] h-[20px] bg-[#00c2ff] -bottom-[20px] left-1/2" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative h-full max-w-[1400px] mx-auto px-8 flex flex-col justify-center z-10">
                <div className="max-w-3xl">
                    <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
                        Move Money
                        <br />
                        to All Corners
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#a855f7]">
                            of the World.
                        </span>
                    </h1>

                    <p className="text-xl text-[#a4b1cd] max-w-2xl mb-8 leading-relaxed">
                        Discover why hundreds of financial institutions choose "KraKen" to provide
                        a better payments and enable economic opportunity.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-[#00c2ff] hover:bg-[#00a0df] text-white rounded-lg
                           text-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg
                           hover:shadow-[#00c2ff]/20">
                            Get Started
                        </button>
                        <button className="px-8 py-4 border border-[#00c2ff] text-[#00c2ff] rounded-lg
                           text-lg font-medium hover:bg-[#00c2ff]/10 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
        @keyframes floatCube {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
        }

        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulseHeight {
          0%, 100% { height: var(--base-height); opacity: 0.8; }
          50% { height: calc(var(--base-height) * 1.2); opacity: 0.4; }
        }
      `}</style>
            <AdditionalMarketData />
        </div>
    );
};

export default Banner;
