import { FaWallet, FaMoneyBillWave } from 'react-icons/fa';

const ActionButton = ({ children, type }: { children: React.ReactNode; type: 'deposit' | 'withdraw' }) => {
    const baseClasses = "relative overflow-hidden text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2";

    const buttonStyles = {
        deposit: `${baseClasses} bg-gradient-to-r from-[#2a2833] to-[#343241] hover:from-[#343241] hover:to-[#2a2833]
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00c2ff]/20 before:to-transparent
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
              border border-[#2a2833] hover:border-[#00c2ff]/30 text-white`,
        withdraw: `${baseClasses} bg-gradient-to-r from-[#343241] to-[#2a2833] hover:from-[#2a2833] hover:to-[#343241]
               before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00c2ff]/20 before:to-transparent
               before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
               border border-[#2a2833] hover:border-[#00c2ff]/30 text-white`
    };

    return (
        <button className={`group ${buttonStyles[type]}`}>
            <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                {type === 'deposit' ? (
                    <>
                        <span className="relative">
                            <FaMoneyBillWave className="w-4 h-4" />
                            {/* Continuous pulse effect */}
                            <span className="absolute -inset-1 bg-[#00c2ff]/20 rounded-full animate-ping" />
                            {/* Continuous flow effect */}
                            <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#00c2ff]/0 via-[#00c2ff]/20 to-[#00c2ff]/0" />
                        </span>
                        {children}
                    </>
                ) : (
                    <>
                        <FaWallet className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        {children}
                    </>
                )}
            </span>
            {/* Animation overlay */}
            <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                     bg-gradient-to-r from-[#00c2ff]/10 to-transparent origin-left" />
            {type === 'deposit' && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#00c2ff]/5 to-transparent
                      animate-shimmer"
                    style={{
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s infinite linear'
                    }}
                />
            )}
        </button>
    );
};

const HeaderActions = () => {
    return (
        <div className="hidden md:flex items-center space-x-3">
            <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
            <ActionButton type="deposit">
                Nạp Tiền
            </ActionButton>
            <ActionButton type="withdraw">
                Rút Tiền
            </ActionButton>
        </div>
    );
};

export default HeaderActions;
