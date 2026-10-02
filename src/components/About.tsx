import { Ship, MapPin, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: '大村湾の漁場',
    description: '漁場は沿岸から目視できる沿岸域だけ。漁協の共同漁業権の区域内での操業です。',
  },
  {
    icon: Ship,
    title: '漁船「勝栄丸」',
    description: '父が使っていた漁船を譲り受けました。なまこ漁はこの船で、その他の漁は小型の伝馬船を使います。',
  },
  {
    icon: Award,
    title: '大村市の研修制度',
    description: '就業にあたっては市の研修制度を活用。技術習得や生活面で助けられました。',
  },
  {
    icon: Clock,
    title: '自由な時間',
    description: '以前と比べて収入は減りましたが、その分、自由に使える時間が増えました。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/img/kazuhiko.png"
                alt="漁師の日常"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-blue-700 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold leading-none">56</p>
              <p className="text-xs mt-1 text-white/80">歳で漁師に</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Profile</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mt-1 mb-6">
              川勝一彦さんのご紹介
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              川勝さんは56歳で漁師になりました。サラリーマンをしていましたが、
              定年まで6年を残して、父の跡を継ぐ形で実家に戻りました。
              子供のころから父の操業を見たり、あるいは手伝ったりして漁業のことは
              分かっているつもりでしたが、実際に生活の基盤として漁業をすると
              大変でした。今でも修行中です。
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-800 mb-1">{feature.title}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ship model quote */}
        <div className="mt-16 bg-white rounded-2xl p-6 lg:p-8 border border-stone-100 flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
            <img
              src="/img/katsuemaru.png"
              alt="漁船"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
            <img
              src="/img/asuka2.png"
              alt="漁船"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm text-stone-600 leading-relaxed">
              「私の漁船『勝栄丸』と客船の模型です。勝栄丸は父が使っていたもので、この船でなまこ漁をします。
              その他の漁は、小型の伝馬船を使います。模型は、漁を終えた午後に時間をかけて作りました。
              自宅の玄関に飾っています。今は次の模型を構想しています。」
            </p>
            <p className="text-xs text-stone-400 mt-2">— 川勝 一彦さん</p>
          </div>
        </div>
      </div>
    </section>
  );
}
