import { BD, CN, GB, IN, JP, KR, PK, SA, TH, VN } from 'country-flag-icons/react/3x2';
import { useRef, useState } from 'react';
import { BiCheck, BiChevronDown } from 'react-icons/bi';

interface Language {
    code: string;
    countryCode: string;
    name: string;
}

interface FlagProps {
    countryCode: string;
    className?: string;
}

const Flag: React.FC<FlagProps> = ({ countryCode, className }) => {
    const size = "w-5 h-5";
    const defaultClass = `${size} rounded-sm object-cover transition-transform duration-200`;
    const combinedClass = className ? `${defaultClass} ${className}` : defaultClass;

    const FlagComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
        us: GB,
        jp: JP,
        kr: KR,
        vn: VN,
        th: TH,
        pk: PK,
        bd: BD,
        sa: SA,
        in: IN,
        cn: CN
    };

    const FlagComponent = FlagComponents[countryCode.toLowerCase()];

    if (!FlagComponent) {
        return <div className={combinedClass} />;
    }

    return <FlagComponent className={combinedClass} />;
};

const LanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<string>('vi');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const languages: Language[] = [
        { code: 'en', countryCode: 'us', name: 'English' },
        { code: 'ja', countryCode: 'jp', name: '日本語' },
        { code: 'ko', countryCode: 'kr', name: '한국어' },
        { code: 'vi', countryCode: 'vn', name: 'Tiếng Việt' },
        { code: 'th', countryCode: 'th', name: 'ไทย' },
        { code: 'ur', countryCode: 'pk', name: 'اردو' },
        { code: 'bn', countryCode: 'bd', name: 'Bangladesh' },
        { code: 'ar', countryCode: 'sa', name: 'عربي' },
        { code: 'hi', countryCode: 'in', name: 'भारत गणराज्य' },
        { code: 'zh', countryCode: 'cn', name: '中文 (繁)' }
    ];

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // Slight delay before closing
    };

    const handleLanguageSelect = (langCode: string) => {
        setSelectedLang(langCode);
    };

    const selectedLanguage = languages.find(lang => lang.code === selectedLang);

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200
                         border border-[#2a2833] hover:border-[#00c2ff]/50
                         hover:bg-white/5 cursor-pointer"
            >
                <div className="flex items-center gap-2">
                    <Flag
                        countryCode={selectedLanguage?.countryCode || 'vn'}
                        className="transition-transform duration-200"
                    />
                    <BiChevronDown
                        className={`w-4 h-4 text-[#7f87a3] transition-transform duration-200
                                ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            <div
                className={`absolute right-0 mt-2 w-72 bg-[#1a1832] border border-[#2a2833] rounded-lg
                          shadow-lg z-50 overflow-hidden transform origin-top transition-all duration-200
                          backdrop-blur-sm ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <div className="divide-y divide-[#2a2833]/50">
                    <div className="px-4 py-3 text-sm font-medium text-[#7f87a3] bg-[#1f1d3a]">
                        Lựa chọn ngôn ngữ
                    </div>
                    <div className="max-h-[400px] overflow-y-auto">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang.code)}
                                className="w-full px-4 py-3 text-left flex items-center justify-between
                                         hover:bg-[#2a2833] transition-colors duration-200 group"
                            >
                                <div className="flex items-center space-x-3">
                                    <Flag countryCode={lang.countryCode} />
                                    <span className="text-sm text-[#7f87a3] group-hover:text-white
                                                   transition-colors duration-200">
                                        {lang.name}
                                    </span>
                                </div>
                                {selectedLang === lang.code && (
                                    <BiCheck className="w-4 h-4 text-[#00c2ff]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
