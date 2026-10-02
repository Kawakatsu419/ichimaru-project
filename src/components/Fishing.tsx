import { fishingMethods, monthlySchedule } from '@/data';

export default function Fishing() {
  return (
    <section id="fishing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Fishing Methods</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mt-1">漁業の種類</h2>
          <p className="text-sm text-stone-500 mt-3 max-w-xl mx-auto">
            大村湾の主な漁業種類はなまこ漁です。季節に応じて様々な漁業を営んでいます。
          </p>
        </div>

        {/* Method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {fishingMethods.map((method) => (
            <div
              key={method.name}
              className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/2] overflow-hidden bg-stone-100">
                <img
                  src={
                    method.name === 'なまこ漁'
                      ? 'https://images.pexels.com/photos/8826365/pexels-photo-8826365.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
                      : method.name === 'ウニ・サザエ漁'
                      ? 'https://images.pexels.com/photos/8826313/pexels-photo-8826313.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
                      : method.name === '刺網漁'
                      ? 'https://images.pexels.com/photos/18040607/pexels-photo-18040607.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
                      : 'https://images.pexels.com/photos/35181050/pexels-photo-35181050.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
                  }
                  alt={method.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <method.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-800">{method.name}</h3>
                    <p className="text-[10px] text-blue-700 font-medium">{method.season}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Annual schedule calendar */}
        <div className="bg-stone-50 rounded-2xl p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-stone-800">年間操業スケジュール</h3>
              <p className="text-xs text-stone-500 mt-1">大村市漁協・川勝さんの年間予定</p>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {monthlySchedule.map((item) => (
              <div
                key={item.month}
                className={`rounded-xl p-3 text-center border transition-all ${
                  item.active
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-white text-stone-400 border-stone-100'
                }`}
              >
                <p className="text-sm font-bold mb-1">{item.month}</p>
                <p className={`text-[10px] leading-tight ${item.active ? 'text-white/80' : 'text-stone-400'}`}>
                  {item.activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
