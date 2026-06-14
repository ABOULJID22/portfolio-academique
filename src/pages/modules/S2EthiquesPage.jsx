
import { modulePages } from '../../data/portfolioData';
import ModuleSimplePage from './ModuleSimplePage';

const slug = 's2-ethiques';

export default function S2EthiquesPage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Éthiques'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };
  
  return (
    <main className="section-shell bg-white" dir="rtl">
      <div className="portfolio-container">

        {/* ── En-tête + Ressources ── */}
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent text-right">
            المراكز الجهوية لمهن التربية والتكوين · 2024-2025
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl text-right">
            التشريع المدرسي وأخلاقيات المهنة
          </h1>
          <p className="mt-3 text-sm leading-7 text-text text-right">
            بطاقة تركيبية شاملة — جميع المحاور
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-end">
            {[
              "القاعدة القانونية",
              "تراتبية القوانين",
              "التشريع المدرسي",
              "الوظيفة العمومية",
              "موظفو وزارة التربية",
              "الأكاديميات الجهوية",
              "المسؤولية المدنية",
              "العقوبات التأديبية",
              "الميثاق الوطني",
              "أخلاقيات المهنة",
              "المبادئ المهيكلة",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light"
              >
                {tag}
              </span>
            ))}
          </div>
            </div>
          </article>

          <aside className="soft-card p-6 sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">Ressources du module</h2>
            <div className="mt-4 space-y-3">
              {(module?.resources ?? []).map((resource) => (
                <a
                  key={resource.label}
                  href={getResourceLink(resource)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[14px] border border-border bg-white px-4 py-3 text-sm font-medium text-text transition hover:border-primary-light hover:text-primary-light"
                >
                  <span>{resource.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <div className="space-y-8">

          {/* ══════════════════════════════════════════════
              المحور الأول — مدخل إلى دراسة القانون
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور الأول — مدخل إلى دراسة القانون
            </h2>

            {/* 1.1 مفهوم القانون */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">1.1 مفهوم القانون والتمييز الأساسي</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["التعريف", "المفهوم"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "القانون الموضوعي", d: "مجموعة من القواعد القانونية التي تفرضها السلطة العامة لتنظيم المجتمع وتحديد الوضعية القانونية للأفراد داخله بشكل عام ومجرد." },
                      { t: "الحقوق الذاتية", d: "السلطات أو الامتيازات المخولة لشخص معين انطلاقاً من مركزه القانوني، مثل حق الملكية وحق التقاضي." },
                    ].map(({ t, d }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 leading-6 text-right">{d}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.2 القاعدة القانونية */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">1.2 القاعدة القانونية</h3>
              <div className="mt-3 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
                <p>القاعدة القانونية هي وحدة تتكون من <strong>فرض أو حالة مفترضة</strong>، ومن <strong>حكم أو حل قانوني</strong> يطبق عند تحقق الفرض.</p>
              </div>

              {/* أنواع */}
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  { k: "من حيث التعبير", v: "قواعد مكتوبة ◀ قواعد غير مكتوبة (مثل العرف)" },
                  { k: "من حيث المضمون", v: "قواعد موضوعية ◀ قواعد شكلية" },
                  { k: "من حيث إطار التطبيق", v: "قواعد داخلية ◀ قواعد خارجية" },
                  { k: "من حيث الأشخاص المخاطبين", v: "قانون عام ◀ قانون خاص" },
                  { k: "من حيث القوة الملزمة", v: "قواعد آمرة ◀ قواعد مكملة" },
                  { k: "من حيث الطبيعة", v: "قاعدة مرنة ◀ قاعدة جامدة" },
                ].map(({ k, v }) => (
                  <div key={k} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-right text-text">
                    <p className="font-semibold text-dark">{k}</p>
                    <p className="mt-1 leading-5 text-text-light">{v}</p>
                  </div>
                ))}
              </div>

              {/* خصائص */}
              <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark text-right">خصائص القاعدة القانونية :</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    "قاعدة اجتماعية تنظم الحياة داخل الجماعة",
                    "قاعدة عامة ومجردة لا تستهدف شخصاً بعينه",
                    "قاعدة ملزمة تقترن بجزاء عند مخالفتها",
                    "قاعدة سلوك توجه الأفراد نحو ما ينبغي فعله أو تركه",
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2 rounded-[8px] bg-white border border-border px-3 py-2 text-text text-right">
                      <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 1.3 تراتبية القوانين */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">1.3 تراتبية القوانين</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الجهة المصدرة", "النص القانوني", "المرتبة"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { j: "الشعب المغربي عبر الاستفتاء", n: "الدستور", r: "1", color: "text-red-600" },
                      { j: "البرلمان مع رقابة المحكمة الدستورية", n: "القوانين التنظيمية", r: "2", color: "text-orange-600" },
                      { j: "البرلمان", n: "القانون العادي", r: "3", color: "text-yellow-600" },
                      { j: "الحكومة", n: "المراسيم التنظيمية والتطبيقية", r: "4", color: "text-green-600" },
                      { j: "الوزارات والسلطات الإدارية", n: "المناشير والدوريات", r: "5", color: "text-blue-600" },
                      { j: "الوزراء والولاة والعمال والمديرون", n: "القرارات الإدارية", r: "6", color: "text-purple-600" },
                    ].map(({ j, n, r, color }) => (
                      <tr key={r}>
                        <td className="py-2 pr-4 leading-6 text-right">{j}</td>
                        <td className="py-2 pr-4 font-bold text-dark text-right">{n}</td>
                        <td className={`py-2 font-extrabold text-right ${color}`}>{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg border border-border px-3 py-2 text-xs text-text text-right">
                💡 <strong className="text-dark">الشرعية</strong> : صفة الجهة المصدرة للقرار من حيث مطابقتها للقانون والدستور. <strong className="text-dark">المشروعية</strong> : مدى مطابقة القرار أو التصرف القانوني للقانون وتراتبيته.
              </p>
            </div>

            {/* 1.4 التشريع المدرسي */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">1.4 التشريع المدرسي — التعريف والمصادر</h3>
              <div className="mt-3 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
                <p>التشريع المدرسي هو <strong>مجموع القواعد القانونية المكتوبة</strong> التي تنظم وتدبر مرفق التربية والتعليم مركزياً وجهوياً وإقليمياً ومحلياً، وتحدد حقوق وواجبات مختلف الفاعلين التربويين والإداريين والمتعلمين والشركاء.</p>
              </div>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المضمون", "المجال"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { c: "المصادر الداخلية الرسمية", d: "التشريع والعرف الإداري" },
                      { c: "المصادر الخارجية الرسمية", d: "قواعد الشريعة الإسلامية ومبادئ القانون الطبيعي وقواعد العدالة" },
                      { c: "فروع القانون ذات الصلة", d: "القانون العام بفروعه، والقانون الخاص بفروعه" },
                    ].map(({ c, d }) => (
                      <tr key={c}>
                        <td className="py-2 pr-4 leading-6 text-right">{d}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              المحور الثاني — النظام الأساسي العام للوظيفة العمومية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور الثاني — النظام الأساسي العام للوظيفة العمومية
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p>المرجع الأساسي هو <strong>الظهير الشريف رقم 1.58.008 الصادر بتاريخ 24 فبراير 1958</strong> بشأن النظام الأساسي العام للوظيفة العمومية، كما وقع تعديله وتتميمه. ويُقصد بالموظف كل شخص يُعيَّن في وظيفة دائمة ويُرسَّم في إطار من أسلاك الدولة.</p>
            </div>

            {/* شروط الولوج */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">شروط الولوج إلى الوظيفة العمومية</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { s: "🇲🇦 الجنسية", d: "التمتع بالجنسية المغربية" },
                  { s: "⚖️ الحقوق الوطنية", d: "التمتع بالحقوق المدنية والسياسية وعدم صدور حكم مانع" },
                  { s: "🏅 المروءة", d: "مطابقة السلوك لمتطلبات الوظيفة" },
                  { s: "💪 القدرة البدنية", d: "إثبات القدرة على أداء المهام" },
                  { s: "📅 السن", d: "بين 18 و30 سنة مع بعض الاستثناءات في بعض الأنظمة الخاصة" },
                  { s: "🎓 الشهادة", d: "الحصول على الشهادة أو الدبلوم المطلوب قانوناً" },
                ].map(({ s, d }) => (
                  <div key={s} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-right text-text">
                    <p className="font-bold text-dark">{s}</p>
                    <p className="mt-1 leading-5">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* المسار المهني */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">المسار المهني للموظف</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المضمون", "المرحلة"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "📋 التوظيف", d: "ولوج الوظيفة العمومية عبر مباراة أو اختيار أو ترقية مع احترام المساواة وتكافؤ الفرص." },
                      { m: "📜 التسمية", d: "الإجراء الذي يتم بموجبه التعيين في وظيفة أو منصب عمومي." },
                      { m: "🔬 التمرين", d: "مرحلة تجريبية تسبق الترسيم ويُقيَّم خلالها أداء الموظف." },
                      { m: "✅ الترسيم", d: "تثبيت الموظف بعد نجاحه في فترة التمرين وإثبات الجدارة." },
                      { m: "⬆️ الترقية", d: "في الرتبة أو الدرجة وفق الشروط النظامية." },
                      { m: "📊 التنقيط والتقييم", d: "تقييم سنوي يؤثر في الترقية والتقدم الوظيفي." },
                    ].map(({ m, d }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 leading-6 text-right">{d}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* حقوق وواجبات */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
                <p className="font-bold text-green-700 text-right">✅ حقوق الموظف</p>
                <ul className="mt-3 list-disc space-y-1 pr-5 leading-6 text-text text-right">
                  {[
                    "حق الترسيم والاستقرار الوظيفي",
                    "حق الترقي في الرتبة والدرجة",
                    "تقاضي الأجرة والتعويضات القانونية",
                    "الاستفادة من الرخص الإدارية والمرضية ورخص الأمومة",
                    "الحق في التكوين المستمر",
                    "الحماية من التهديدات والإهانات",
                    "الضمانات التأديبية وحق الدفاع والاطلاع على الملف",
                    "الطعن في القرارات الإدارية أمام المحاكم الإدارية",
                    "الحق في المعاش والتقاعد والتغطية الصحية",
                    "ممارسة النشاط النقابي في حدود القانون",
                  ].map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
              <div className="rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm">
                <p className="font-bold text-red-700 text-right">📌 واجبات الموظف</p>
                <ul className="mt-3 list-disc space-y-1 pr-5 leading-6 text-text text-right">
                  {[
                    "الالتحاق بمقر التعيين وأداء المهام المكلف بها",
                    "احترام التسلسل الهرمي وتنفيذ التعليمات المشروعة",
                    "كتمان السر المهني وعدم إفشاء المعطيات الإدارية",
                    "التفرغ للوظيفة وعدم مزاولة نشاط مدر للدخل دون سند قانوني",
                    "احترام أوقات العمل والانضباط الإداري",
                    "الحياد واحترام القوانين والأنظمة والتعليمات",
                  ].map((w) => <li key={w}>{w}</li>)}
                </ul>
              </div>
            </div>

            {/* الوضعيات الإدارية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">الوضعيات الإدارية</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الأثر على الأجرة", "التعريف", "الوضعية"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { v: "القيام بالعمل", d: "مزاولة المهام الفعلية في المنصب المعين فيه الموظف.", a: "يتقاضى كامل الأجرة." },
                      { v: "الإلحاق", d: "وضع الموظف خارج إطاره الأصلي للعمل في إدارة أو هيئة أخرى.", a: "يتقاضى من الجهة الملحق بها." },
                      { v: "الاستيداع أو الإيداع", d: "توقف مؤقت عن العمل في حالات محددة قانونًا.", a: "قد يتوقف الأجر حسب الحالة." },
                      { v: "التوقيف المؤقت", d: "توقف مؤقت بسبب عقوبة أو احتياط.", a: "يؤثر على الأجرة بحسب النص." },
                      { v: "الوضعية العسكرية", d: "الالتحاق بالخدمة العسكرية الوطنية.", a: "تحتفظ الدولة ببعض الحقوق حسب الوضعية." },
                    ].map(({ v, d, a }) => (
                      <tr key={v}>
                        <td className="py-2 pr-4 italic text-text-light leading-6 text-right">{a}</td>
                        <td className="py-2 pr-4 leading-6 text-right">{d}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              المحور الثالث — موظفو وزارة التربية الوطنية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور الثالث — موظفو وزارة التربية الوطنية
            </h2>

            {/* تصنيف الأطر */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">تصنيف الأطر</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الأطر المكونة لها", "الهيئة"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { h: "👩‍🏫 هيئة التدريس", a: "أساتذة التعليم الابتدائي، أساتذة التعليم الثانوي الإعدادي، أساتذة التعليم الثانوي التأهيلي، الأساتذة المبرزون." },
                      { h: "🔍 هيئة التأطير والمراقبة التربوية", a: "المفتشون التربويون." },
                      { h: "🧭 هيئة التوجيه والتخطيط التربوي", a: "المستشارون والأطر المكلفة بالتوجيه والتخطيط." },
                      { h: "🏢 هيئة التسيير والإدارة التربوية", a: "مديرو المؤسسات ومساعدوهم." },
                      { h: "📊 هيئة التسيير الإداري والمالي", a: "الأطر المكلفة بالتدبير الإداري والمالي." },
                    ].map(({ h, a }) => (
                      <tr key={h}>
                        <td className="py-2 pr-4 leading-6 text-right">{a}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* شروط توظيف الأساتذة */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">شروط توظيف أساتذة التعليم</h3>
              <div className="mt-3 space-y-2">
                {[
                  { d: "الدرجة الثالثة", c: "التوظيف المباشر وفق الشروط القانونية الخاصة عند الاقتضاء.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { d: "الدرجة الثانية", c: "النجاح في المباراة والحصول على شهادة التأهيل التربوي من المراكز الجهوية لمهن التربية والتكوين، أو عبر الترقية وفق الشروط.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { d: "الدرجة الأولى", c: "بعد اجتياز امتحان الكفاءة المهنية أو الاختيار وفق الأقدمية والشروط النظامية.", color: "border-green-200 bg-green-50 text-green-700" },
                ].map(({ d, c, color }) => (
                  <div key={d} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold text-right">{d}</p>
                    <p className="mt-2 leading-6 text-text text-right">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* الحصص الأسبوعية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">الحصص الأسبوعية</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { f: "أساتذة التعليم الابتدائي", h: "30 ساعة أسبوعياً", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { f: "أساتذة التعليم الثانوي الإعدادي", h: "24 ساعة أسبوعياً", color: "border-green-200 bg-green-50 text-green-700" },
                  { f: "أساتذة التعليم الثانوي التأهيلي", h: "21 ساعة أسبوعياً", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ f, h, color }) => (
                  <div key={f} className={`rounded-[12px] border p-4 text-sm text-center ${color}`}>
                    <p className="font-bold text-2xl">{h}</p>
                    <p className="mt-2 leading-5 text-text">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* المهام الأساسية للمدرس */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">📌 المهام الأساسية للمدرس</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "التدريس وفق المناهج الرسمية وتخطيط التعلمات وتدبير القسم",
                  "تقويم المتعلمين وتتبع مساراتهم الدراسية وتشخيص التعثرات",
                  "المشاركة في الامتحانات والمراقبة المستمرة والتصحيح",
                  "الإسهام في المشروع التربوي للمؤسسة",
                  "تقديم الدعم والتقوية لفائدة المتعلمين المحتاجين",
                  "المشاركة في الأنشطة المدرسية والانفتاح على المحيط",
                  "المساهمة في التوجيه التربوي للمتعلمين",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2 rounded-[8px] bg-white border border-border px-3 py-2 text-text text-right">
                    <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              المحور الرابع — أطر الأكاديميات الجهوية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور الرابع — أطر الأكاديميات الجهوية للتربية والتكوين
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p>أُحدثت الأكاديميات الجهوية للتربية والتكوين بموجب <strong>الظهير الشريف رقم 1.00.203 المؤرخ في 19 ماي 2000</strong> تنفيذاً للقانون رقم 07.00، وتتمتع بالشخصية المعنوية والاستقلال المالي والإداري.</p>
            </div>

            {/* أبواب النظام الأساسي */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">أبواب النظام الأساسي للأكاديميات (10 أبواب)</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { b: "الباب الأول", c: "مقتضيات عامة : شروط التوظيف، المسار المهني، الحقوق والواجبات." },
                  { b: "الباب الثاني", c: "الحقوق والواجبات المشتركة لجميع الأطر." },
                  { b: "الباب الثالث", c: "أطر الأكاديمية : التدريس، الدعم، التسيير، التأطير، التوجيه، المتصرفون." },
                  { b: "الباب الرابع", c: "الأجور والتعويضات." },
                  { b: "الباب الخامس", c: "الوضعيات الإدارية." },
                  { b: "الباب السادس", c: "الاحتياط الاجتماعي والحماية الاجتماعية." },
                  { b: "الباب السابع", c: "تمثيلية الأطر النظامية." },
                  { b: "الباب الثامن", c: "التكوين المستمر." },
                  { b: "الباب التاسع", c: "النظام التأديبي والعقوبات." },
                  { b: "الباب العاشر", c: "الخروج من العمل." },
                ].map(({ b, c }) => (
                  <div key={b} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-right text-text">
                    <span className="font-bold text-primary-light">{b} : </span>{c}
                  </div>
                ))}
              </div>
            </div>

            {/* التكوين التأهيلي */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">🎓 التكوين التأهيلي وامتحان التأهيل المهني</p>
              <div className="mt-3 space-y-2">
                {[
                  { s: "السنة الأولى", d: "تكوين أولي لا تقل مدته عن سبعة أشهر مع تعويض شهري محدد في النصوص المنظمة.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { s: "السنة الثانية", d: "تكوين بالتناوب يجمع بين التدريب الميداني والدورات الحضورية والتكوين عن بعد.", color: "border-green-200 bg-green-50 text-green-700" },
                  { s: "امتحان التأهيل المهني", d: "يُنظَّم في دورات، ويترتب عن النجاح فيه الترسيم في الرتبة المناسبة حسب النظام الخاص.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                ].map(({ s, d, color }) => (
                  <div key={s} className={`rounded-[8px] border p-3 text-sm ${color}`}>
                    <span className="font-bold">✓ {s} : </span>
                    <span className="text-text">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              المحور الخامس — المسؤوليات والعقوبات التأديبية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور الخامس — المسؤوليات والعقوبات التأديبية
            </h2>

            {/* المسؤولية المدنية */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text text-right">
              <p className="font-bold text-dark">📌 المسؤولية المدنية للمدرس</p>
              <p className="mt-2">المسؤولية المدنية هي <strong>التزام بإصلاح الضرر اللاحق بالغير عن طريق التعويض</strong>، وقد تكون عقدية إذا نتجت عن الإخلال بالتزام تعاقدي، أو تقصيرية إذا نتجت عن الإهمال أو التقصير دون وجود عقد مباشر.</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                {
                  t: "⚖️ المسؤولية العقدية",
                  d: "تنشأ عن الإخلال بالتزام مصدره عقد بين طرفين.",
                  ex: "الإخلال بالتزامات تم الاتفاق عليها في إطار تعاقدي.",
                  color: "border-blue-200 bg-blue-50 text-blue-700",
                },
                {
                  t: "⚠️ المسؤولية التقصيرية",
                  d: "تنشأ عن الإهمال أو التقصير المؤدي إلى ضرر.",
                  ex: "ترك المتعلمين دون حراسة أو السماح بألعاب خطيرة.",
                  color: "border-red-200 bg-red-50 text-red-700",
                },
              ].map(({ t, d, ex, color }) => (
                <div key={t} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className="font-bold text-right">{t}</p>
                  <p className="mt-2 leading-6 text-text text-right">{d}</p>
                  <div className="mt-2 rounded-[8px] bg-white px-3 py-2 text-xs italic text-text-light text-right">
                    <span className="not-italic font-semibold text-dark">مثال : </span>{ex}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[10px] bg-bg border border-border px-3 py-2 text-xs text-text text-right">
              <p className="font-semibold text-dark">من صور الخطأ التقصيري :</p>
              <ul className="mt-1 list-disc space-y-0.5 pr-5 leading-6 text-text-light">
                {[
                  "ترك التلاميذ دون حراسة",
                  "السماح بألعاب عنيفة",
                  "تغيير الجداول دون إخبار المعنيين",
                  "السكوت عن سلوكات مخلة",
                  "السماح لمتعلم مريض بمتابعة الدراسة دون شهادة طبية",
                ].map((s) => <li key={s}>{s}</li>)}
              </ul>
              <p className="mt-2 text-dark font-semibold">الفصل 78 من قانون الالتزامات والعقود يؤسس للمسؤولية عن الضرر المادي أو المعنوي الناتج عن الخطأ.</p>
            </div>

            {/* المسؤولية الإدارية */}
            <div className="mt-5 rounded-[12px] border border-orange-200 bg-orange-50 p-4 text-sm">
              <p className="font-bold text-orange-700 text-right">🏛️ المسؤولية الإدارية أو التأديبية</p>
              <ul className="mt-2 list-disc space-y-1 pr-5 leading-6 text-text text-right">
                {[
                  "تتحقق عند إخلال المدرس أو الموظف بواجباته الوظيفية.",
                  "من أهداف النظام التأديبي : حسن سير المرفق العام، الإصلاح، الردع والزجر.",
                  "من أبرز المخالفات : عدم الالتحاق بمقر التعيين، الغياب غير المبرر، مغادرة المنصب، إفشاء الأسرار المهنية، عدم احترام التعليمات، الاعتداء على المتعلمين أو الزملاء، مزاولة نشاط مدر للدخل دون سند.",
                ].map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>

            {/* سلم العقوبات */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">سلم العقوبات التأديبية (9 درجات)</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الأثر", "العقوبة", "الدرجة"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { d: "1", e: "الإنذار", a: "تحذير كتابي دون أثر مالي فوري.", c: "text-green-600" },
                      { d: "2", e: "التوبيخ", a: "قد يؤثر على نقطة الترقية.", c: "text-yellow-600" },
                      { d: "3", e: "الحذف من لائحة الترقي", a: "التشطيب من لائحة الترقي برسم السنة.", c: "text-orange-600" },
                      { d: "4", e: "القهقرة من الرتبة", a: "تخفيض الرتبة إلى الأدنى مباشرة.", c: "text-orange-700" },
                      { d: "5", e: "الانحدار من الطبقة أو الدرجة", a: "إنزال الموظف إلى درجة أدنى.", c: "text-red-400" },
                      { d: "6", e: "الإقصاء المؤقت", a: "حرمان من الراتب مع الاحتفاظ ببعض التعويضات وفق النص.", c: "text-red-500" },
                      { d: "7", e: "الإحالة الحتمية على التقاعد", a: "إخراج من الخدمة مع تحقق شروط التقاعد.", c: "text-red-600" },
                      { d: "8", e: "العزل دون توقيف حق التقاعد", a: "حذف من الأسلاك مع إمكانية الاستفادة من التقاعد.", c: "text-red-700" },
                      { d: "9", e: "العزل مع توقيف حق التقاعد", a: "أقصى عقوبة مع الحرمان من حق التقاعد.", c: "text-red-900 font-extrabold" },
                    ].map(({ d, e, a, c }) => (
                      <tr key={d}>
                        <td className="py-2 pr-4 leading-6 italic text-text-light text-right">{a}</td>
                        <td className="py-2 pr-4 font-bold text-dark text-right">{e}</td>
                        <td className={`py-2 font-extrabold text-right ${c}`}>{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* الضمانات التأديبية */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">🛡️ الضمانات التأديبية</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "الاطلاع على الملف التأديبي قبل أي إجراء",
                  "حق الدفاع وتقديم الدفوعات",
                  "حضور جلسات المجلس التأديبي",
                  "الاستعانة بمحام أو ممثل نقابي",
                  "الطعن في القرارات أمام المحاكم الإدارية",
                ].map((g) => (
                  <div key={g} className="flex items-start gap-2 rounded-[8px] bg-white border border-border px-3 py-2 text-text text-right">
                    <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              المحور السادس — الميثاق الوطني وأخلاقيات المهنة
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              المحور السادس — الميثاق الوطني وأخلاقيات مهنة التدريس
            </h2>

            {/* الميثاق الوطني */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p className="font-bold text-dark">📜 الميثاق الوطني للتربية والتكوين</p>
              <p className="mt-2">يُعَدُّ الميثاق الوطني للتربية والتكوين <strong>وثيقة مرجعية إصلاحية</strong> أعادت تنظيم المنظومة التربوية وفق دعامات كبرى تروم تعميم التعليم، تحسين الجودة، الارتقاء بالمؤسسات والموارد البشرية، وتحديث التمويل والشراكة.</p>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-right">
                    {["المضمون الرئيسي", "الدعامة"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { d: "نشر التعليم وربطه بالمحيط", c: "تعميم التعليم الإلزامي، محاربة الأمية، تقوية الارتباط بالحياة الاقتصادية والاجتماعية." },
                    { d: "تحسين جودة التربية والتكوين", c: "تجديد المناهج والمضامين، تطوير أساليب التدريس، تحسين التقييم." },
                    { d: "الارتقاء بالإنسان والمؤسسات والتدبير", c: "تأهيل أطر التعليم، تفعيل دور المؤسسات، دعم اللامركزية والجهوية." },
                    { d: "الشراكة والتمويل", c: "تحديث التمويل وإشراك الشركاء الاقتصاديين والاجتماعيين." },
                  ].map(({ d, c }) => (
                    <tr key={d}>
                      <td className="py-2 pr-4 leading-6 text-right">{c}</td>
                      <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* أخلاقيات المهنة */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">أخلاقيات مهنة التدريس</h3>
              <div className="mt-3 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
                <p>أخلاقيات المهنة هي <strong>مجموع المبادئ والقيم والسلوكات المهنية</strong> التي ينبغي أن يلتزم بها المدرس أثناء ممارسة مهامه، انطلاقاً من رسالته التربوية والاجتماعية في تنشئة الأجيال وبناء الشخصية الإنسانية.</p>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { b: "👨‍🎓 العلاقة مع المتعلم", v: "الاحترام، العدل، مراعاة الفروق الفردية، تجنب الإهانة والتمييز، السرية في المعلومات.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { b: "👨‍👩‍👧 العلاقة مع الأسرة", v: "التواصل الإيجابي، الشفافية، مراعاة السياق الاجتماعي والأسري.", color: "border-green-200 bg-green-50 text-green-700" },
                  { b: "🏫 العلاقة مع المؤسسة", v: "الانضباط، تحمل المسؤولية، المساهمة في الحياة المدرسية، الالتزام بالمشروع التربوي.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                  { b: "📚 العلاقة مع المعرفة", v: "مواصلة التكوين الذاتي، تجديد الممارسة، الأمانة العلمية والموضوعية.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { b: "💼 العلاقة مع المهنة", v: "الانتماء المهني، الدفاع عن قيم التربية والتعليم، التكامل مع الزملاء.", color: "border-teal-200 bg-teal-50 text-teal-700" },
                ].map(({ b, v, color }) => (
                  <div key={b} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold text-right">{b}</p>
                    <p className="mt-1 leading-6 text-text text-right">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* حقوق المدرس */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">حقوق المدرس</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["التفاصيل", "نوع الحق"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "⚖️ الحقوق الدستورية", d: "المساواة في الولوج إلى الوظيفة، تكافؤ الفرص، عدم التمييز، حق الشغل، الحرية النقابية." },
                      { t: "🏢 الحقوق الإدارية", d: "الترسيم، الترقي، الانتقال، الرخص، التقاضي على الحقوق، الأجرة." },
                      { t: "🏥 الحقوق الاجتماعية", d: "التغطية الصحية، التعويض عن حوادث الشغل، المعاش والتقاعد، الضمانات التأديبية، الحماية من التهجمات." },
                      { t: "🎓 الحق في التكوين", d: "التكوين المستمر، حضور الدورات، المشاركة في مسابقات الترقي." },
                    ].map(({ t, d }) => (
                      <tr key={t}>
                        <td className="py-2 pr-4 leading-6 text-right">{d}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* المبادئ المهيكلة */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">المبادئ المهيكلة لمجزوءة التشريع</h3>
              <div className="mt-3 space-y-2">
                {[
                  { m: "⚖️ مبدأ المشروعية", t: "خضوع جميع التصرفات الإدارية للقانون وتراتبية النصوص.", color: "border-blue-200 bg-blue-50 text-blue-700" },
                  { m: "🤝 مبدأ المساواة", t: "عدم التمييز بين الموظفين في الحقوق والواجبات.", color: "border-green-200 bg-green-50 text-green-700" },
                  { m: "🎯 مبدأ الحياد والموضوعية", t: "عدم استغلال الوظيفة لأغراض شخصية أو فئوية.", color: "border-purple-200 bg-purple-50 text-purple-700" },
                  { m: "🔄 مبدأ الاستمرارية", t: "ضمان سير المرفق التعليمي بانتظام واطراد.", color: "border-orange-200 bg-orange-50 text-orange-700" },
                  { m: "📋 مبدأ المسؤولية", t: "تحمل كل فاعل تبعات قراراته وتصرفاته أمام القانون.", color: "border-red-200 bg-red-50 text-red-700" },
                  { m: "🤲 مبدأ التضامن المهني", t: "التعاون بين أطر المنظومة لخدمة المصلحة التربوية العليا.", color: "border-teal-200 bg-teal-50 text-teal-700" },
                ].map(({ m, t, color }) => (
                  <div key={m} className={`rounded-[12px] border p-3 text-sm flex items-start gap-3 justify-between ${color}`}>
                    <p className="leading-6 text-text text-right">{t}</p>
                    <p className="font-bold whitespace-nowrap text-right">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

         

        </div>
      </div>
    </main>
  );
}
