import { scheduleItems } from '@/data';

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 lg:py-24 bg-blue-800 relative overflow-hidden">
      {/* Decorative wave */}
      <svg className="absolute top-0 left-0 w-full h-20 text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,0 L1440,0 L1440,40 C1280,80 1120,0 960,40 C800,80 640,0 480,40 C320,80 160,0 0,40 Z" fill="white" />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-blue-200 tracking-widest uppercase">Daily Schedule</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1">1日のスケジュール</h2>
          <p className="text-sm text-blue-100 mt-3 max-w-xl mx-auto">
            基本的に漁は朝が早いです。夜明け前から沖に出て、昼には帰港します。
            その後は自由時間です。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />

          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex items-center gap-6 mb-8 ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Icon dot */}
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-5 h-5 text-blue-700" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 pl-20 lg:pl-0 ${idx % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                <div className={`inline-block bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4 ${idx % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                  <p className="text-sm font-bold text-white mb-1">{item.time}</p>
                  <p className="text-xs text-blue-100/80 leading-relaxed">{item.activity}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
