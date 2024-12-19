import { TrendingUp } from 'lucide-react';

const RandomMarketData = () => {
    const marketData = [
        { symbol: 'SOL/USDT', price: '118.45', change: '+4.12%', isPositive: true },
        { symbol: 'XRP/USDT', price: '0.5247', change: '+1.23%', isPositive: true },
        { symbol: 'ADA/USDT', price: '0.6182', change: '-0.87%', isPositive: false },
        { symbol: 'DOGE/USDT', price: '0.0912', change: '+2.54%', isPositive: true },
        { symbol: 'DOT/USDT', price: '7.482', change: '-1.34%', isPositive: false },
        { symbol: 'AVAX/USDT', price: '38.25', change: '+3.67%', isPositive: true }
    ];

    // Predefined positions for better control
    const positions = [
        { top: '15%', right: '25%', scale: 0.95 },
        { top: '28%', right: '38%', scale: 1.05 },
        { top: '42%', right: '28%', scale: 0.9 },
        { top: '20%', right: '45%', scale: 1 },
        { top: '35%', right: '22%', scale: 1.1 },
        { top: '48%', right: '42%', scale: 0.97 }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {marketData.map((data, index) => (
                <div
                    key={data.symbol}
                    className="absolute bg-[#1f1d3a]/80 backdrop-blur-sm rounded-lg p-3 border border-white/10
                   hover:bg-[#2a2833] transition-all duration-300 pointer-events-auto
                   hover:scale-105 hover:z-10"
                    style={{
                        top: positions[index].top,
                        right: positions[index].right,
                        transform: `scale(${positions[index].scale})`,
                        animation: `randomFloat ${5 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${index * 0.7}s`,
                        width: '220px',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-full ${data.isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                                <TrendingUp
                                    className={`w-4 h-4 ${data.isPositive ? 'text-green-500' : 'text-red-500'}`}
                                    style={{
                                        transform: data.isPositive ? 'rotate(-0deg)' : 'rotate(180deg)'
                                    }}
                                />
                            </div>
                            <div>
                                <div className="text-white text-sm font-medium">{data.symbol}</div>
                                <div className="text-[#a4b1cd] text-xs">${data.price}</div>
                            </div>
                        </div>
                        <div
                            className={`text-xs font-medium px-2 py-1 rounded-full
                       ${data.isPositive ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'}`}
                        >
                            {data.change}
                        </div>
                    </div>
                </div>
            ))}

            <style>{`
        @keyframes randomFloat {
          0%, 100% { transform: translate(0, 0) scale(${positions[0].scale}); }
          50% { transform: translate(${Math.random() * 10}px, ${-10 - Math.random() * 10}px) scale(${positions[0].scale}); }
        }
      `}</style>
        </div>
    );
};

export default RandomMarketData;
