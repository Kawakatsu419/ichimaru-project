import { timelineEvents } from '@/data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Journey</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mt-1">脱サラの歩み</h2>
          <p className="text-sm text-stone-500 mt-3 max-w-xl mx-auto">
            27年間勤めた会社を辞め、漁師になるまでの道のり
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />

          {timelineEvents.map((event, idx) => (
            <div
              key={idx}
              className={`relative flex items-start gap-6 mb-10 ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Age badge */}
              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-center leading-tight">{event.age}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`flex-1 pl-24 sm:pl-0 ${idx % 2 === 0 ? 'sm:text-right sm:pr-20' : 'sm:pl-20'}`}>
                <div className={`inline-block bg-stone-50 border border-stone-100 rounded-xl p-5 ${idx % 2 === 0 ? 'sm:ml-auto' : ''}`}>
                  <h3 className="text-sm font-bold text-stone-800 mb-2">{event.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-xs">{event.description}</p>
                </div>
              </div>

              <div className="hidden sm:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
