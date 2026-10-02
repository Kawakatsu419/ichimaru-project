import { Anchor, Ship } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[75vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/img/kazuhiko.png"
          alt="夜明けの海で漁をする漁師"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-stone-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20">
          <Ship className="w-4 h-4" />
          <span className="text-xs font-medium tracking-wider">大村市漁業協同組合</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          脱サラで家を継いで<br className="hidden sm:block" />漁師になりました
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-2 font-medium">
          川勝 一彦さん　56歳
        </p>
        <p className="text-sm sm:text-base text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
          27年間勤めた会社を辞め、定年まで6年を残して父の跡を継ぎました。
          大村湾でなまこ漁をはじめ、ウニやサザエ漁、かご漁や刺網漁など、
          時期に応じていろいろな漁業を営んでいます。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 bg-blue-700 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-700/30"
          >
            <Anchor className="w-4 h-4" />
            プロフィールを見る
          </a>
          <a
            href="#fishing"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all"
          >
            <Ship className="w-4 h-4" />
            漁業の種類
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-[40px] lg:h-[60px]" preserveAspectRatio="none">
          <path d="M0,40 C320,80 640,0 960,40 C1280,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
