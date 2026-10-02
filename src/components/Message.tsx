import { Compass, Anchor, Heart } from 'lucide-react';

const messages = [
  {
    icon: Compass,
    title: '漁家育ちの強み',
    text: '私は漁家育ちで、漁業技術は大村市の研修制度を利用して、父から教わりました。そのため、あまり抵抗なく漁師生活に入ることができました。',
  },
  {
    icon: Anchor,
    title: 'サラリーマンとの違い',
    text: 'サラリーマンの生活と比べると、いいとか悪いとか単純には言えません。漁師は一人社長で自由ですが、頑張って漁をしないと誰も給料を払ってくれません。',
  },
  {
    icon: Heart,
    title: '覚悟とやりがい',
    text: '冬季の朝の操業は寒くて辛いです。それでも頑張ろうと思う方は漁師の道を検討したらいかがでしょうか。',
  },
];

export default function Message() {
  return (
    <section id="message" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Message</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mt-1">漁業就業を目指す方へ</h2>
          <p className="text-sm text-stone-500 mt-3 max-w-xl mx-auto">
            川勝さんから漁師の道を目指す方へのメッセージ
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg.title}
              className="bg-stone-50 rounded-xl p-6 border border-stone-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
                <msg.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-stone-800 mb-2">{msg.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Quote callout */}
        <div className="mt-10 bg-blue-700 rounded-2xl px-6 py-8 lg:px-12 lg:py-10 text-center">
          <p className="text-base lg:text-lg text-white font-medium leading-relaxed mb-2">
            「これからも漁師の腕を磨き、漁獲アップを図りたいです」
          </p>
          <p className="text-sm text-blue-200">— 川勝 一彦さん</p>
        </div>
      </div>
    </section>
  );
}
