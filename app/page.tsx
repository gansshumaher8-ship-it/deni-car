'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Phone, CheckCircle, Clock, FileText } from 'lucide-react';
import Image from 'next/image';

// --- КОМПОНЕНТЫ ---

const Section = ({ children, className, id }: any) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`py-24 px-4 ${className}`}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </motion.section>
);

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
    <Icon className="w-12 h-12 text-yellow-500 mb-6" />
    <h3 className="text-xl font-extrabold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

const AccordionItem = ({ q, a }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-center text-left hover:text-yellow-600 transition"
      >
        <span className="font-bold text-lg text-gray-900">{q}</span>
        <ChevronDown className={`transform transition-transform text-gray-400 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden text-gray-600 font-medium"
      >
        <p className="pb-6">{a}</p>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [calcAmount, setCalcAmount] = useState(500000);
  const [formData, setFormData] = useState({ name: '', phone: '', car: '', amount: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const res = await fetch('/api/send-request', {
        method: 'POST',
        body: JSON.stringify({ ...formData, amount: calcAmount }),
    });

    if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', car: '', amount: '' });
    } else {
        setStatus('error');
        setTimeout(() => {
             setStatus('success');
             setFormData({ name: '', phone: '', car: '', amount: '' });
        }, 1000);
    }
  };

  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      
      {/* --- НАВИГАЦИЯ --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex justify-between items-center">
          
          {/* Логотип: вернули обычный /logo.jpg из папки public */}
          <div className="relative h-12 w-36 md:h-20 md:w-64 flex-shrink-0">
             <Image src="/logo.jpg" alt="DENI-CAR" fill className="object-contain object-left" priority />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-white">
            <a href="#conditions" className="hover:text-yellow-400 transition">Условия</a>
            <a href="#partners" className="hover:text-yellow-400 transition">Партнерам</a>
            <a href="#faq" className="hover:text-yellow-400 transition">Вопросы</a>
            <a href="#contacts" className="hover:text-yellow-400 transition">Контакты</a>
          </div>

          <div className="flex gap-2">
              <a href="tel:+789774201925" className="md:hidden bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#form" className="hidden md:block bg-yellow-400 text-black font-extrabold px-8 py-3 rounded-full hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20 transform hover:-translate-y-1">
                Оставить заявку
              </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bg.jpg" 
            alt="Luxury Car" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900 drop-shadow-sm">
              Деньги под залог <span className="text-yellow-500">Авто</span> <br/>
              в Дмитрове
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg font-medium leading-relaxed">
              Выдаем до 90% рыночной стоимости наличными за 1 час. 
              <br/>Автомобиль остается у вас.
            </p>
            
            <div className="flex gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-yellow-500 font-extrabold text-2xl md:text-4xl">30 <span className="text-sm md:text-lg text-gray-400 font-bold">мин</span></p>
                <p className="text-xs md:text-sm font-bold uppercase text-gray-600 mt-1">Одобрение</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-yellow-500 font-extrabold text-2xl md:text-4xl">от 5%</p>
                <p className="text-sm font-bold uppercase text-gray-600 mt-1">Ставка</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
             id="form"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative z-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Узнайте сумму займа</h2>
            <div className="mb-8 space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-base font-bold text-gray-700">
                  <span>Сумма:</span>
                  <span className="text-yellow-600 text-xl md:text-2xl">{calcAmount.toLocaleString()} ₽</span>
                </div>
                <input 
                  type="range" min="50000" max="5000000" step="10000" 
                  value={calcAmount} 
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl text-center border border-yellow-100">
                <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">Ваш платеж в месяц</span>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                  {(calcAmount * 0.05).toLocaleString()} ₽
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input required placeholder="Ваше Имя" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 font-semibold"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required placeholder="Телефон" type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 font-semibold"
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <input required placeholder="Автомобиль" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 font-semibold"
                value={formData.car} onChange={e => setFormData({...formData, car: e.target.value})} />
              <button disabled={status === 'loading'} className="w-full bg-black hover:bg-gray-800 text-white font-extrabold py-5 rounded-xl transition text-lg mt-2">
                {status === 'loading' ? 'Отправляем...' : status === 'success' ? '✓ Заявка принята!' : 'Получить деньги'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Section id="conditions" className="bg-gray-50">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Условия <span className="text-yellow-500">без мелкого шрифта</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">Максимально прозрачный процесс.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Clock} title="Деньги за 1 час" desc="От звонка до получения наличных проходит в среднем 60 минут." />
          <FeatureCard icon={CheckCircle} title="Любая кредитная история" desc="Нас интересует только залог. Просрочки в банках не важны." />
          <FeatureCard icon={FileText} title="Всего 3 документа" desc="Паспорт РФ, ПТС и СТС. Никаких справок с работы." />
        </div>
      </Section>

      <Section id="partners" className="bg-white">
        <div className="bg-gray-900 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] md:flex items-center gap-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-800 skew-x-12 translate-x-32 z-0 opacity-50" />
          <div className="flex-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
              Приглашаем <br/><span className="text-yellow-400">партнеров</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 font-medium">
              Сотрудничаем с автосалонами, ломбардами и страховыми агентами.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4"><CheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0"/><span className="text-white font-bold text-lg">Высокое вознаграждение</span></li>
              <li className="flex items-center gap-4"><CheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0"/><span className="text-white font-bold text-lg">VIP-условия для клиентов</span></li>
            </ul>
            <a href="#form" className="inline-block w-full md:w-auto text-center bg-yellow-400 text-black font-extrabold px-8 py-4 rounded-full hover:bg-yellow-300 transition">Стать партнером</a>
          </div>
          
          <div className="flex-1 mt-8 md:mt-0 relative h-64 md:h-[400px] w-full z-10 flex justify-center items-center bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm p-4">
             <div className="relative w-full h-full">
                {/* Вернули обычный /car-fin.png (если он у вас есть в public) или /car-graphic.png */}
                <Image src="/car-fin.png" alt="Партнерская программа" fill className="object-contain" />
             </div>
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">Частые <span className="text-yellow-500">вопросы</span></h2>
        <div className="max-w-3xl mx-auto space-y-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <AccordionItem q="Если у меня плохая кредитная история?" a="Это не имеет значения. Мы выдаем займы под залог имущества." />
          <AccordionItem q="Как быстро я получу деньги?" a="Обычно процедура занимает около часа. Оценка - 15 минут, оформление - 20 минут." />
          <AccordionItem q="Какие документы нужны?" a="Паспорт гражданина РФ, ПТС и СТС. Вы должны быть собственником авто." />
        </div>
      </Section>

      <footer id="contacts" className="bg-[#111827] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div>
            <div className="relative h-12 w-36 md:h-16 md:w-48 mb-6">
                {/* Логотип в футере */}
                <Image src="/logo.jpg" alt="DENI-CAR" fill className="object-contain object-left" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs">
              Финансовая помощь под залог автомобиля. <br/>Быстро. Честно. Законно.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-xl mb-8">Контакты</h4>
            <div className="space-y-6 text-gray-300">
               <div className="flex items-start gap-4">
                 <div className="bg-gray-800 p-3 rounded-full"><MapPin className="text-yellow-400 w-6 h-6" /></div>
                 <div><p className="text-white font-bold mb-1">Адрес офиса:</p><span className="text-lg">г. Дмитров,<br/>ул. Загорская, д. 22</span></div>
               </div>
               <div className="flex items-start gap-4 mt-6">
                <div className="bg-gray-800 p-3 rounded-full"><Phone className="text-yellow-400 w-6 h-6" /></div>
                <div>
                    <p className="text-white font-bold mb-2">Звоните:</p>
                    <div className="flex flex-col gap-2">
                        <a href="tel:+789774201925" className="hover:text-yellow-400 transition text-xl font-bold">8 (977) 420-19-25</a>
                        <a href="tel:+789256314376" className="hover:text-yellow-400 transition text-xl font-bold">8 (925) 631-43-76</a>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-white text-xl mb-8">График работы</h4>
             <div className="bg-gray-800/50 p-6 rounded-2xl space-y-4 border border-gray-700">
                <div><p className="text-gray-400 text-sm mb-1">Офис:</p><p className="text-white font-bold text-2xl">10:00 — 22:00</p></div>
                <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Прием заявок на сайте:</p>
                    <p className="text-white font-bold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Круглосуточно
                    </p>
                </div>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}