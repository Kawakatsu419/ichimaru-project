import { Anchor, MapPin, Ship, Fish, Waves, Net } from 'lucide-react';

const footerLinks = [
  {
    title: 'プロフィール',
    icon: Anchor,
    links: ['川勝一彦さんについて', '漁船「勝栄丸」', '大村市漁業協同組合'],
  },
  {
    title: '漁業の種類',
    icon: Fish,
    links: ['なまこ漁', 'ウニ・サザエ漁', '刺網漁', 'かご漁'],
  },
  {
    title: '漁師への道',
    icon: Ship,
    links: ['脱サラの歩み', '1日のスケジュール', '漁業就業を目指す方へ'],
  },
  {
    title: '大村湾について',
    icon: Waves,
    links: ['大村湾の漁場', '年間操業スケジュール', '共同漁業権区域'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo + info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">川勝一彦の漁師物語</p>
                <p className="text-[10px] text-blue-400">脱サラで継いだ家業</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-500" />
                長崎県大村市
              </p>
              <p className="flex items-center gap-2">
                <Fish className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                大村市漁業協同組合
              </p>
              <p className="flex items-center gap-2">
                <Ship className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                漁船「勝栄丸」
              </p>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-white mb-3 flex items-center gap-1.5">
                <section.icon className="w-3 h-3 text-blue-500" />
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-xs text-stone-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-stone-500 text-center">
            出典：長崎県「脱サラで、家を継いで漁師になりました」
          </p>
        </div>
      </div>
    </footer>
  );
}
