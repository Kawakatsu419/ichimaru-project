import { Quote } from 'lucide-react';
import { familyVoices } from '@/data';

export default function Family() {
  return (
    <section id="family" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Family Voice</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mt-1">家族の声</h2>
        </div>

        {familyVoices.map((voice) => (
          <div
            key={voice.title}
            className="bg-white rounded-2xl p-6 lg:p-10 border border-stone-100 shadow-sm relative"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-2xl">妻</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-stone-800 mb-3">{voice.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {voice.text}
                </p>
                <p className="text-xs text-stone-400 mt-4">— {voice.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
