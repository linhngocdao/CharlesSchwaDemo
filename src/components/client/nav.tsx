import { useState } from 'react';

interface MenuItem {
    label: string;
    href: string;
}

const NavMenu = () => {
    const [activeItem, setActiveItem] = useState<string>('');

    const menuItems: MenuItem[] = [
        { label: 'Trang chủ', href: '#' },
        { label: 'Khám phá', href: '#' },
        { label: 'Thị Trường', href: '#' },
        { label: 'Quỹ đầu tư', href: '#' },
    ];

    return (
        <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
                <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveItem(item.label)}
                    onMouseLeave={() => setActiveItem('')}
                >
                    <a
                        href={item.href}
                        className="text-[#838B9C] font-medium px-3 hover:text-[#00c2ff] text-[16px] py-2 transition-all duration-300
                                 relative flex items-center group"
                    >
                        {/* Menu Item Text */}
                        <span className="relative z-10 transform py-3 transition-transform duration-300">
                            {item.label}
                        </span>

                        {/* Hover Underline Effect */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00c2ff] transform
                                     origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>

                        {/* Glow Effect */}
                        <span className="absolute inset-0 bg-[#00c2ff]/5 rounded-lg opacity-0
                                     group-hover:opacity-100 transition-opacity duration-300 -z-10"/>

                        {/* Active Dot */}
                        {activeItem === item.label && (
                            <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5
                                         bg-[#00c2ff] rounded-full animate-pulse"/>
                        )}
                    </a>
                </div>
            ))}

            {/* Navigation Indicator */}
            <div
                className="absolute bottom-0 h-0.5 bg-gradient-to-r from-[#00c2ff] to-[#00c2ff]/0
                         transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    left: '0',
                    width: '100%',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left'
                }}
            />
        </nav>
    );
};

export default NavMenu;
