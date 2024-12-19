
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ICrypto {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

const CryptoTracker = () => {
    const [cryptoData, setCryptoData] = useState<ICrypto[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchCryptoData = async (): Promise<ICrypto[]> => {
        try {
            const response = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching crypto data:', error);
            return [];
        }
    };



    useEffect(() => {
        const getCryptoData = async () => {
            setLoading(true);
            const data = await fetchCryptoData();
            setCryptoData(data);
            setLoading(false);
        };

        getCryptoData();

        // Refresh data every minute
        const interval = setInterval(getCryptoData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#1a1832] min-h-screen">
            <div className="max-w-[1400px] mx-auto p-4">
                {/* Top Cards */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                    {loading ? (
                        // Loading skeleton
                        [...Array(5)].map((_, index) => (
                            <div key={index} className="bg-[#1f1d3a] p-3 rounded-lg animate-pulse">
                                <div className="h-12 bg-[#2a2833] rounded-full w-12 mx-auto mb-2" />
                                <div className="h-4 bg-[#2a2833] rounded w-20 mx-auto mb-2" />
                                <div className="h-4 bg-[#2a2833] rounded w-16 mx-auto" />
                            </div>
                        ))
                    ) : (
                        cryptoData.slice(0, 5).map((crypto) => (
                            <div
                                key={crypto.id}
                                className="bg-[#1f1d3a] p-3 rounded-lg border border-[#2a2833]
                                         hover:border-[#00c2ff]/50 transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src={crypto.image}
                                        alt={crypto.name}
                                        className="w-12 h-12 mb-2"
                                    />
                                    <span className="text-sm text-white">{crypto.symbol.toUpperCase()}/USDT</span>
                                    <span className="text-sm text-white font-medium">
                                        ${crypto.current_price.toLocaleString()}
                                    </span>
                                    <span className={`text-xs ${crypto.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        {crypto.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                                <div className="flex justify-end mt-1">
                                    <ArrowRight className="w-4 h-4 text-[#838B9C] opacity-0 group-hover:opacity-100
                                                       transition-opacity duration-300" />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Table Content */}
                <div className="bg-[#1f1d3a] rounded-lg border border-[#2a2833] overflow-hidden">
                    {/* ... Rest of your table code ... */}
                    <div className="px-4">
                        {loading ? (
                            // Loading skeleton for table
                            [...Array(6)].map((_, index) => (
                                <div key={index} className="py-3 border-b border-[#2a2833] animate-pulse">
                                    <div className="flex items-center gap-4">
                                        <div className="h-8 w-8 bg-[#2a2833] rounded-full" />
                                        <div className="h-4 w-24 bg-[#2a2833] rounded" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            cryptoData.map((crypto) => (
                                <div
                                    key={crypto.id}
                                    className="grid grid-cols-4 py-3 items-center border-b border-[#2a2833]
                                             hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={crypto.image}
                                            alt={crypto.name}
                                            className="w-8 h-8"
                                        />
                                        <span className="text-sm text-white">
                                            {crypto.symbol.toUpperCase()}/USDT
                                        </span>
                                    </div>
                                    <div className="text-right text-sm text-white">
                                        ${crypto.current_price.toLocaleString()}
                                    </div>
                                    <div className={`text-right text-sm ${crypto.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'
                                        }`}>
                                        {crypto.price_change_percentage_24h.toFixed(2)}%
                                    </div>
                                    <div className="text-right">
                                        <button className="px-3 py-1 bg-[#2ebd85] text-white text-xs rounded
                                                       hover:bg-[#259a6c] transition-colors">
                                            Thị Trường
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoTracker;
