import { useState } from 'react';
import { Anchor, Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/data';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-700 rounded-full flex items-center justify-center">
              <Anchor className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm lg:text-lg font-bold text-stone-800 leading-tight">
                川勝一彦の漁師物語
              </span>
              <span className="text-[10px] lg:text-xs text-blue-700 font-medium">
                脱サラで継いだ家業〜大村湾の漁師〜
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-blue-700 transition-colors rounded-md"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-white rounded-lg shadow-lg border border-stone-100 py-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-stone-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-stone-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-blue-100 px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="mb-2">
              <a
                href={item.href}
                className="block py-2 text-sm font-medium text-stone-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4 mb-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-xs text-stone-500"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
