import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

// Define the navigation structure based on the request
const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Solutions',
    href: '#', // Parent wrapper
    children: [
      { label: 'AI Engineering', href: '/solutions/engineering' },
      {
        label: 'AI for Healthcare',
        href: '#',
        children: [
          { label: 'Rules Compliance Checker', href: '/solutions/healthcare/compliance' },
          { label: 'AI Voice Agent for Clinics', href: '/solutions/healthcare/voice' },
          { label: 'AI Avatars for Doctors', href: '/solutions/healthcare/avatars' }
        ]
      },
      { label: 'AI for Creative and Media', href: '/solutions/creative' }
    ]
  },
  { label: 'AI Capability Center', href: '/capability-center' },
  { label: 'Clientele', href: '/clientele' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Case Studies', href: '/resources/case-studies' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActivePath = (href: string): boolean => {
    if (href.startsWith('#')) return false;
    if (href === '/' && location.pathname === '/') return true;
    if (href === '/') return false;
    return location.pathname.startsWith(href) || location.pathname === href;
  };

  // Helper to check if any child is active (for parent highlighting)
  const hasActiveChild = (item: NavItem): boolean => {
    if (isActivePath(item.href)) return true;
    if (item.children) {
      return item.children.some(child => {
        if (isActivePath(child.href)) return true;
        if (child.children) {
          return child.children.some(subChild => isActivePath(subChild.href));
        }
        return false;
      });
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
        isScrolled ? 'glass-nav border-gray-200/50 py-3 shadow-sm' : 'bg-white/90 backdrop-blur-md border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* LEFT: Logo Section (Flex-1 ensures it takes equal space to Right section for centering Middle) */}
          <div className="flex-1 flex justify-start items-center min-w-0">
            <Link to="/" className="flex items-center group transition-opacity hover:opacity-80">
               <img src="/assets/images/logo.png" alt="Nextdot" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>

          {/* CENTER: Desktop Navigation (Perfectly Centered) */}
          <div className="hidden lg:flex items-center justify-center gap-1">
            {navigation.map((item) => (
              <DesktopMenuItem 
                key={item.label} 
                item={item} 
                isActive={hasActiveChild(item)}
                currentPath={location.pathname}
              />
            ))}
          </div>

          {/* RIGHT: CTA Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4 min-w-0">
             <div className="hidden lg:block">
               <Link to="/contact">
                 <Button size="sm" className="shadow-md shadow-blue-900/5 hover:shadow-blue-900/10 font-semibold px-5">
                  Book a Call
                </Button>
              </Link>
             </div>
             
             {/* Mobile Menu Button */}
             <div className="lg:hidden">
               <button 
                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                 className="p-2 text-gray-600 hover:text-black hover:bg-gray-100/50 rounded-full transition-all active:scale-95"
                 aria-label="Toggle menu"
               >
                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
             </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl max-h-[85vh] overflow-y-auto z-40 animate-in slide-in-from-top-2 duration-300">
          <div className="p-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <MobileMenuItem 
                key={item.label} 
                item={item} 
                expanded={mobileExpanded} 
                toggleExpand={toggleMobileExpand} 
                depth={0}
                closeMenu={() => setMobileMenuOpen(false)}
                currentPath={location.pathname}
              />
            ))}
            <div className="h-px bg-gray-100 my-4" />
            <Link to="/contact" className="w-full">
              <Button className="w-full">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Desktop Menu Components ---

const DesktopMenuItem: React.FC<{ 
  item: NavItem; 
  isActive: boolean;
  currentPath: string;
}> = ({ item, isActive, currentPath }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isHash = item.href.startsWith('#');
  
  // Check if specific child is active
  const isChildActive = (childHref: string): boolean => {
    if (childHref.startsWith('#')) return false;
    if (childHref === '/' && currentPath === '/') return true;
    if (childHref === '/') return false;
    return currentPath.startsWith(childHref) || currentPath === childHref;
  };

  // Common inner content with refined premium hover effect
  const InnerContent = ({ label, showChevron }: { label: string, showChevron?: boolean }) => (
    <>
      <span className="relative z-10">{label}</span>
      {showChevron && <ChevronDown size={14} className={`group-hover:rotate-180 transition-all duration-300 ml-1 ${isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900'}`} />}
      {/* Animated Bottom Border/Underline */}
      <span className={`absolute bottom-1.5 left-3 right-3 h-[2px] bg-blue-600/80 transition-transform duration-300 ease-out origin-center rounded-full ${
        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100'
      }`}></span>
    </>
  );

  const baseClasses = `relative group flex items-center text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50/50 transition-all duration-200 outline-none ${
    isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
  }`;

  if (!hasChildren) {
    return isHash ? (
      <span className={`${baseClasses} cursor-default`}>
         <InnerContent label={item.label} />
      </span>
    ) : (
      <Link to={item.href} className={baseClasses}>
        <InnerContent label={item.label} />
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className={baseClasses}>
        <InnerContent label={item.label} showChevron />
      </button>

      {/* Level 1 Dropdown */}
      {/* IMPORTANT: Removed overflow-hidden so nested submenus (Level 2) are not clipped */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
        <div className="w-64 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl p-2 ring-1 ring-black/5">
          {item.children?.map((child, idx) => (
            <div key={idx} className="relative group/sub">
              {child.children && child.children.length > 0 ? (
                <>
                  <button className="w-full text-left flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200">
                    {child.label}
                    <ChevronRight size={14} className="text-gray-400 group-hover/sub:text-gray-900" />
                  </button>
                  
                  {/* Level 2 Dropdown (Flyout) */}
                  <div className="absolute top-0 left-full ml-2 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ease-out transform group-hover/sub:translate-x-0 -translate-x-2">
                     <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl p-2 ring-1 ring-black/5">
                      {child.children.map((subChild, subIdx) => (
                        <Link 
                          key={subIdx} 
                          to={subChild.href}
                          className={`block px-4 py-2.5 text-sm hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                            isChildActive(subChild.href) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-600'
                          }`}
                        >
                          {subChild.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={child.href}
                  className={`block px-4 py-2.5 text-sm hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                    isChildActive(child.href) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {child.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Mobile Menu Components ---

interface MobileMenuItemProps {
  item: NavItem;
  expanded: string[];
  toggleExpand: (label: string) => void;
  depth: number;
  closeMenu: () => void;
  currentPath: string;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ 
  item, 
  expanded, 
  toggleExpand, 
  depth,
  closeMenu,
  currentPath
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expanded.includes(item.label);
  const isHash = item.href.startsWith('#');
  
  // Check if this item or any of its children are active
  const isActive = (): boolean => {
    if (item.href && !item.href.startsWith('#')) {
      if (item.href === '/' && currentPath === '/') return true;
      if (item.href !== '/' && currentPath.startsWith(item.href)) return true;
    }
    if (item.children) {
      return item.children.some(child => {
        if (child.href && !child.href.startsWith('#')) {
          if (child.href === '/' && currentPath === '/') return true;
          if (child.href !== '/' && currentPath.startsWith(child.href)) return true;
        }
        if (child.children) {
          return child.children.some(subChild => {
            if (subChild.href && !subChild.href.startsWith('#')) {
              if (subChild.href === '/' && currentPath === '/') return true;
              if (subChild.href !== '/' && currentPath.startsWith(subChild.href)) return true;
            }
            return false;
          });
        }
        return false;
      });
    }
    return false;
  };

  return (
    <div className="">
      {hasChildren ? (
        <button 
          onClick={() => toggleExpand(item.label)}
          className={`flex items-center justify-between w-full py-3 text-left font-medium hover:bg-gray-50 rounded-xl px-3 transition-all duration-200 active:scale-[0.99] ${
             depth > 0 ? 'text-gray-500 text-sm' : (isActive() ? 'text-gray-900 font-semibold text-base' : 'text-gray-900 text-base')
          }`}
          style={{ paddingLeft: depth === 0 ? 12 : (depth * 24) + 12 }}
        >
          {item.label}
          <ChevronDown size={16} className={`transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        isHash ? (
           <span className={`block py-3 font-medium text-gray-400 px-3 cursor-default`} style={{ paddingLeft: depth === 0 ? 12 : (depth * 24) + 12 }}>
             {item.label}
           </span>
        ) : (
          <Link 
            to={item.href}
            className={`block py-3 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl px-3 transition-all duration-200 active:scale-[0.99] ${
              isActive() ? 'text-blue-600 bg-blue-50 font-semibold' : (depth > 0 ? 'text-gray-500 text-sm' : 'text-gray-900 text-base')
            }`}
            style={{ paddingLeft: depth === 0 ? 12 : (depth * 24) + 12 }}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        )
      )}

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${hasChildren && isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-1 border-l-2 border-gray-100 ml-6 pl-1 my-1">
          {item.children?.map((child, idx) => (
            <MobileMenuItem 
              key={idx} 
              item={child} 
              expanded={expanded} 
              toggleExpand={toggleExpand} 
              depth={depth + 1}
              closeMenu={closeMenu}
              currentPath={currentPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};