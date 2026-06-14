
import { modulePages } from '../../data/portfolioData';

const slug = 's1-sciences-education';

export default function S1SciencesEducationPage() {
  const module = modulePages.find((item) => item.slug === slug);
  const resources = module?.resources ?? [];

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }

    const query = `${module?.title ?? 'Sciences de l\'éducation'} ${resource.label} CRMEF`;
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
  };
 
  return (
    <main className="section-shell bg-white" dir="rtl">
      <div className="portfolio-container">

        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <article className="lg:col-span-2">
            {/* ── رأس الصفحة ── */}
            <div className="rounded-[16px] border border-border bg-bg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                CRMEF مراكش آسفي · 2025/2026
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl">
                ملخص شامل: علوم التربية
              </h1>
              <p className="mt-3 text-sm leading-7 text-text">
                السياق التاريخي | نظريات التعلم | البيداغوجيات | علم الاجتماع التربوي | السوسيولوجيا
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "السياق التاريخي",
                  "علوم التربية",
                  "النظرية السلوكية",
                  "البنائية",
                  "السوسيوبنائية",
                  "الجشطلت",
                  "بيداغوجيا حل المشكلات",
                  "الفارقية",
                  "بيداغوجيا الخطأ",
                  "ديناميكية الجماعة",
                  "السوسيولوجيا التربوية",
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
            {resources.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={getResourceLink(resource)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text transition hover:border-primary-light/40 hover:bg-white"
                    >
                      <span>{resource.label}</span>
                      <span className="text-primary-light">Ouvrir</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-[10px] border border-dashed border-border bg-bg px-3 py-2 text-sm text-text-light">
                Les ressources seront ajoutees prochainement.
              </p>
            )}
          </aside>
        </section>

        <div className="space-y-8">

          {/* ══════════════════════════════════════════
              المحور 01 — السياق التاريخي
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">01. السياق التاريخي لنشأة علوم التربية</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              علوم التربية فرع من العلوم الإنسانية تتخذ من التربية موضوعاً للبحث، وتنفتح على كافة
              العلوم الإنسانية كعلم الاجتماع والنفس واللغة والأنثروبولوجيا والبيولوجيا والوراثة.
            </p>

            {/* المراحل التاريخية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">📜 مراحل التطور التاريخي</h3>
              <div className="relative mt-4 pr-5">
                <span aria-hidden className="absolute right-[7px] top-2 h-[calc(100%-12px)] w-[2px] rounded-full bg-border" />
                {[
                  {
                    e: "أ. التربية البدائية (التربية الغريزية)",
                    d: "عملية غير واعية تقوم على التقليد، المحاكاة، التكيف مع البيئة. الحياة هي المعلم والتقليد هو المنهج.",
                    q: "بول مونرو: «التربية في المرحلة البدائية تتمثل أساساً في تكييف الفرد مع بيئته المادية والاجتماعية من خلال محاكاة الكبار.»",
                  },
                  {
                    e: "ب. العصور القديمة والوسطى (التربية الفلسفية التأملية)",
                    d: "أفلاطون: «التربية هي التي تعطي للجسم والروح كل الجمال والكمال.» التعلم يعتمد على نقل المعرفة بهدف تنمية العقل.",
                    q: "ابن خلدون: «تلقين العلوم للمتعلمين إنما يكون مفيداً إذا كان على التدريج شيئاً فشيئاً وقليلاً قليلاً.»",
                  },
                  {
                    e: "ج. ميلاد العلم — مارك أنطوان جوليان (1812)",
                    d: "أحدث قطيعة معرفية مع التأمل الفلسفي ودعا إلى تحويل التربية إلى «علم وضعي» يعتمد الملاحظة وجمع الوقائع في «جداول تحليلية» لاستنباط قوانين ثابتة.",
                    q: "",
                  },
                  {
                    e: "د. من علم التربية إلى علوم التربية (المنعطف الأكاديمي 1967)",
                    d: "انتقل الفكر التربوي من «علم التربية» بالمفرد إلى «علوم التربية» بالجمع.",
                    q: "مياالري: «علوم التربية لا يمكن أن تُختصر في علم واحد، بل تتشكل من مجموعة من التخصصات العلمية.»",
                  },
                ].map(({ e, d, q }) => (
                  <div key={e} className="relative pb-4 last:pb-0">
                    <span aria-hidden className="absolute -right-[13px] top-[5px] h-3 w-3 rounded-full border-2 border-primary-light bg-white" />
                    <div className="rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                      <p className="font-bold text-dark">{e}</p>
                      <p className="mt-1">{d}</p>
                      {q && <p className="mt-1 italic text-text-light">{q}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* عوامل الظهور */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">⚙️ عوامل ظهور علوم التربية الحديثة</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { e: "الاتجاه الاقتصادي", d: "نمو الاتجاه الإيجابي والاقتصادي للتربية." },
                  { e: "النظرة التبادلية", d: "التربية علم يستفيد من نتائج العلوم الأخرى." },
                  { e: "التوسع في المنهج العلمي", d: "استخدام المنهج العلمي في بحث مشكلات التربية." },
                ].map(({ e, d }) => (
                  <div key={e} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{e}</p>
                    <p className="mt-1 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 02 — التعريف والحقول
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">02. علوم التربية — التعريف والحقول والتصنيف</h2>

            <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 تعريف غاستون مياالري (1984)</p>
              <p className="mt-2">
                «مجموعة من المواد التي تدرس شروط وجود الوضعيات التربوية واشتغالها وتطورها.»
              </p>
            </div>

            {/* خصائص الوضعية التربوية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🔍 خصائص الوضعية التربوية</h3>
              <ul className="mt-3 list-disc space-y-1 pr-5 text-sm leading-7 text-text">
                {[
                  "تشترط وجود شخصين على الأقل.",
                  "توجد في أماكن مختلفة: الأسرة، المدرسة، الشارع.",
                  "قد تكون دائمة أو عابرة وظرفية.",
                  "تؤثر على شركائها وتأخذ منهم نشاطاً معيناً.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* حقول علوم التربية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🏛️ حقول علوم التربية</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الحقل العلمي", "موضوع الدراسة"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { h: "فيزيولوجيا التربية", m: "العلاقة بين الصحة والتغذية والنوم وبين التعلم المدرسي." },
                      { h: "سيكولوجيا التربية", m: "قضايا النمو النفسي وعلاقتها بالتربية والتعلم وطرائقه." },
                      { h: "سوسيولوجيا التربية", m: "العلاقات القائمة بين التربية والمجتمع وتحليل الأنظمة التعليمية." },
                      { h: "سيكوسوسيولوجيا التربية", m: "التفاعل بين ما هو نفسي وما هو اجتماعي داخل جماعة القسم." },
                      { h: "فلسفة التربية", m: "ماهية التربية وطبيعتها وإمكاناتها وغاياتها." },
                      { h: "تاريخ التربية", m: "تطور الفكر والممارسة التربوية عبر الزمن." },
                    ].map(({ h, m }) => (
                      <tr key={h}>
                        <td className="py-2 pl-4 font-bold text-primary-light">{h}</td>
                        <td className="py-2 leading-6">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* صعوبات */}
            <div className="mt-4 rounded-[10px] bg-bg px-4 py-3 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">⚠️ صعوبات تعريف علوم التربية</p>
              <ul className="mt-1 list-disc space-y-1 pr-5">
                {[
                  "حداثة هذه العلوم: بعضها لا يزال في طور النضج.",
                  "اختلافات بين الباحثين حول مكانتها العلمية.",
                  "تميزها بخاصية التعدد والتداخل بين التخصصات.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 03 — نظريات التعلم
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">03. نظريات التعلم الكبرى</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  n: "3.1 النظرية السلوكية (Behaviorisme)",
                  r: "واطسون، بافلوف، سكينر",
                  pts: [
                    "التعلم = تغيير السلوك الخارجي الملاحظ.",
                    "المثير ← الاستجابة (S → R).",
                    "التعزيز والعقاب أدوات تشكيل السلوك.",
                    "إهمال العمليات العقلية الداخلية.",
                  ],
                  app: "التعزيز الإيجابي، التقييم الفوري، التكرار والتدريب المنتظم.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  n: "3.2 النظرية المعرفية (Cognitivisme)",
                  r: "بياجيه، أوزوبل، برونر",
                  pts: [
                    "التعلم عملية معالجة داخلية للمعلومات.",
                    "الذاكرة (قصيرة + طويلة المدى) في صميم التعلم.",
                    "تنظيم المعلومات واستراتيجيات الترميز.",
                    "المخططات المعرفية (Schémas) تُبنى وتُعدَّل.",
                  ],
                  app: "الخرائط الذهنية، التنظيم المسبق للمعلومات، استراتيجيات الاسترجاع.",
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  n: "3.3 النظرية البنائية (Constructivisme)",
                  r: "جان بياجيه",
                  pts: [
                    "المتعلم يبني معرفته بنفسه اعتماداً على مكتسباته السابقة.",
                    "التعلم عملية نشطة مستمرة وليس مجرد حفظ.",
                    "الوضعية المشكلة تدفع المتعلم للتفكير والبحث.",
                    "الخطأ مرحلة ضرورية لبناء المعرفة.",
                  ],
                  app: "الوضعية المشكلة، الصراع المعرفي، التمثلات، إعادة البناء المعرفي.",
                  color: "border-orange-200 bg-orange-50",
                  badge: "text-orange-700",
                },
                {
                  n: "3.4 النظرية السوسيوبنائية (Socioconstructivisme)",
                  r: "فيكوتسكي",
                  pts: [
                    "المعرفة تُكتسب عبر التواصل مع الآخرين والمجتمع.",
                    "منطقة التنمية القريبة (ZPD): ما يفعله المتعلم بمساعدة.",
                    "اللغة أداة تفكير وليس مجرد وسيلة تواصل.",
                    "التفاعل الاجتماعي يُحفّز النمو المعرفي.",
                  ],
                  app: "حل المشكلات، المشاريع الجماعية، التعلم التعاوني، القسم المنقلب.",
                  color: "border-purple-200 bg-purple-50",
                  badge: "text-purple-700",
                },
              ].map(({ n, r, pts, app, color, badge }) => (
                <div key={n} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <p className={`font-bold ${badge}`}>{n}</p>
                  <p className="mt-1 text-xs font-semibold text-text-light">الروّاد: {r}</p>
                  <ul className="mt-2 list-disc space-y-1 pr-5 leading-6 text-text">
                    {pts.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <div className="mt-3 rounded-[8px] bg-white px-3 py-2">
                    <span className="font-semibold text-dark">التطبيقات: </span>{app}
                  </div>
                </div>
              ))}
            </div>

            {/* ZPD بالتفصيل */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🔎 مفاهيم السوسيوبنائية بالتفصيل</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المفهوم", "التعريف", "الأهمية التربوية"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "منطقة التنمية القريبة (ZPD)", t: "نطاق القدرات التي يمكن للفرد القيام بها بمساعدة ما.", a: "تحديد مستوى تدخل المعلم." },
                      { m: "الصراع السوسيو-معرفي", t: "تعارض أفكار المتعلمين أثناء التفاعل الاجتماعي.", a: "التعلم التعاوني والنقاش." },
                      { m: "اللغة", t: "أداة تفكير وليس مجرد وسيلة تواصل.", a: "أهمية النقاش والحوار." },
                      { m: "التفاعل الاجتماعي", t: "يُحفّز النمو المعرفي.", a: "العمل في مجموعات." },
                    ].map(({ m, t, a }) => (
                      <tr key={m}>
                        <td className="py-2 pl-4 font-bold text-primary-light">{m}</td>
                        <td className="py-2 pl-4 leading-6">{t}</td>
                        <td className="py-2 leading-6 italic text-text-light">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 04 — النظرية الجشطلتية
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">04. النظرية الجشطلتية</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              «الجشطلت» كلمة ألمانية تعني الشكل أو البنية الكلية. ظهرت في ألمانيا مطلع القرن العشرين.
              ترى أن التعلم يقوم على الانطلاق <strong>من الكل إلى الجزء</strong>، من خلال تفكيك المضمون
              العام للمادة المدروسة إلى أجزاء ومحاولة فهمها في إطار المضمون العام.
            </p>

            {/* الرواد */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">👨‍🔬 الرواد الأساسيون</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { n: "ماكس فيرتهيمر", y: "1880–1943", r: "مؤسس النظرية الجشطلتية." },
                  { n: "فولفانج كولر", y: "1887–1967", r: "دراسات الاستبصار عند الشمبانزي." },
                  { n: "كورت كوفكا", y: "1886–1941", r: "تطبيق الجشطلت في التعلم والنمو." },
                ].map(({ n, y, r }) => (
                  <div key={n} className="rounded-[12px] border border-border bg-bg p-4 text-sm text-center">
                    <p className="font-bold text-dark">{n}</p>
                    <p className="text-xs text-text-light">{y}</p>
                    <p className="mt-2 leading-6 text-text">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* المفاهيم */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🧩 المبادئ والمفاهيم الأساسية</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المفهوم", "التعريف", "مثال تربوي"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "الاستبصار", t: "الفهم المفاجئ التحليلي لكل الأجزاء وترابطاتها.", ex: "الطالب يكتشف فجأة قاعدة نحوية من أمثلة." },
                      { m: "الإدراك", t: "الإلمام بكل الأجزاء المكونة للبنية أو الموقف التعليمي.", ex: "رؤية الدرس ككل قبل التفاصيل." },
                      { m: "إعادة التنظيم", t: "إعادة هيكلة الفعل التعليمي لتجاوز الغموض.", ex: "إعادة ترتيب المعلومات بشكل مختلف." },
                      { m: "الانتقال", t: "تعميم الموقف على مواقف مشابهة.", ex: "تطبيق قاعدة مكتسبة على وضعيات جديدة." },
                      { m: "الدافعية الأصلية", t: "دافع ذاتي داخلي يدفع المتعلم للتعلم.", ex: "الفضول الطبيعي لحل المشكلة." },
                    ].map(({ m, t, ex }) => (
                      <tr key={m}>
                        <td className="py-2 pl-4 font-bold text-primary-light">{m}</td>
                        <td className="py-2 pl-4 leading-6">{t}</td>
                        <td className="py-2 leading-6 italic text-text-light">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* قوانين الإدراك */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">📐 قوانين الإدراك عند الجشطلت</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { q: "قانون التقارب", d: "نميل لإدراك الأشياء القريبة من بعضها كأنها مجموعة واحدة." },
                  { q: "قانون التشابه", d: "الأشياء المتشابهة في الشكل أو اللون نراها كوحدة متصلة." },
                  { q: "قانون الإغلاق", d: "يميل عقلنا لتكملة الفجوات في الأشكال الناقصة." },
                  { q: "قانون الاستمرار", d: "يميل الدماغ لاتباع المسارات السلسة بدلاً من الزوايا الحادة." },
                ].map(({ q, d }) => (
                  <div key={q} className="rounded-[10px] border border-border bg-bg px-4 py-3 text-sm text-text">
                    <span className="font-bold text-dark">{q}: </span>{d}
                  </div>
                ))}
              </div>
            </div>

            {/* خلاصة */}
            <div className="mt-4 rounded-[10px] bg-bg px-4 py-3 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">💡 خلاصة وانتقادات</p>
              <ul className="mt-1 list-disc space-y-1 pr-5">
                {[
                  "الاستبصار أساس التعلم الحقيقي وبدونه لا يتحقق التعلم.",
                  "الانتقال شرط أساسي لتعميم التعلم على مواقف جديدة.",
                  "الحفظ دون إبداع = تعليم سلبي.",
                  "الدافعية الداخلية أقوى من التعزيز الخارجي.",
                  "انتقاد السلوكية: التعلم فعل إنساني واعٍ ولا يمكن مقارنته بتجارب الحيوان.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 05 — البيداغوجيات
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">05. البيداغوجيات المتمركزة حول المتعلم</h2>

            {/* بيداغوجية حل المشكلات */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🧠 5.1 بيداغوجية حل المشكلات</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                تتمركز حول المتعلم لاستثارة مهاراته ومعارفه وقدراته لإيجاد حل لمشكلة ما.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {/* الخطوات */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">خطوات الحل</p>
                  <ol className="mt-2 list-decimal space-y-1 pr-5 leading-6 text-text">
                    {[
                      "مواجهة مشكل دافع للبحث.",
                      "تقديم فرضيات ومناقشتها جماعياً.",
                      "التفاوض على معايير الاختيار.",
                      "الاشتغال على الأنشطة للوصول للحل.",
                      "فحص النتائج وتقويمها.",
                    ].map((s) => <li key={s}>{s}</li>)}
                  </ol>
                </div>
                {/* أنواع الوضعية */}
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">أنواع الوضعية المشكلة</p>
                  <div className="mt-2 space-y-2">
                    {[
                      { t: "الديداكتيكية", pos: "بداية الدرس", goal: "تقديم تعلمات جديدة وخلق صراع معرفي." },
                      { t: "الإدماجية", pos: "بعد تقديم المعارف", goal: "ربط المعارف المجزأة وإعطاء معنى جديد." },
                      { t: "التقويمية", pos: "نهاية الوحدة", goal: "امتحانات وعروض لتقويم الكفايات." },
                    ].map(({ t, pos, goal }) => (
                      <div key={t} className="rounded-[8px] bg-white px-3 py-2 text-text">
                        <span className="font-semibold text-dark">{t} ({pos}): </span>{goal}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-xs text-text">
                <span className="font-semibold text-dark">شروط الوضعية المشكلة: </span>
                ربط بمحيط المتعلم — مستفزة — لها حل ممكن — تستهدف كفاية معينة.
              </p>
            </div>

            {/* البيداغوجية الفارقية */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">🎯 5.2 البيداغوجية الفارقية</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                بيداغوجية تُقرّ بوجود فوارق بين المتعلمين وتجعلها أساساً لبناء التعلمات.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { b: "الفوارق الذهنية/المعرفية", d: "تختلف طرق الاكتساب وسرعة ودرجة التحصيل." },
                  { b: "الفوارق السيكولوجية", d: "تأثير البيئة المعيشية على نفسية المتعلم." },
                  { b: "الفوارق السوسيوثقافية", d: "المعتقدات واللغة والوسط الاجتماعي." },
                ].map(({ b, d }) => (
                  <div key={b} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">{b}</p>
                    <p className="mt-1 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-text">
                <span className="font-semibold text-dark">الأهداف: </span>
                تقليص الفوارق — الحد من الفشل الدراسي — تحقيق تكافؤ الفرص — تنمية الاستقلالية.
              </p>
              <p className="mt-1 text-sm text-text">
                <span className="font-semibold text-dark">أشكال التفعيل: </span>
                مجموعات حسب المستويات / حسب الحاجات / حسب الاهتمامات.
              </p>
            </div>

            {/* بيداغوجيا المشروع */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">📋 5.3 بيداغوجيا المشروع</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["نوع المشروع", "القائم به"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "المشروع البيداغوجي", q: "الوزارة أو المديريات الإقليمية." },
                      { n: "مشروع المؤسسة", q: "المؤسسة ككل." },
                      { n: "مشروع القسم", q: "المدرس داخل الفصل." },
                      { n: "مشروع المجموعات", q: "مجموعات صغيرة داخل القسم." },
                      { n: "المشروع الفردي", q: "كل متعلم بشكل مستقل." },
                    ].map(({ n, q }) => (
                      <tr key={n}>
                        <td className="py-2 pl-4 font-bold text-primary-light">{n}</td>
                        <td className="py-2 leading-6">{q}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 rounded-[10px] bg-bg px-4 py-2 text-sm text-text">
                <span className="font-semibold text-dark">مراحل المشروع: </span>
                1. التخطيط (اختيار، تحديد أهداف ووسائل) ← 2. التنفيذ ← 3. التقويم (مناقشة النتائج ومقارنتها بالأهداف).
              </p>
            </div>

            {/* بيداغوجيا الخطأ */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark">❌ 5.4 بيداغوجيا الخطأ</h3>
              <p className="mt-2 text-sm leading-6 text-text">
                الخطأ استراتيجية للتعليم والتعلم — أمر طبيعي إيجابي يترجم سعي المتعلم للوصول إلى المعرفة.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { d: "الابستمولوجي", desc: "الخطأ مرتبط بالمعرفة في حد ذاتها: يمكن للمتعلمين إعادة ارتكاب أخطاء تاريخ العلم." },
                  { d: "السيكولوجي", desc: "الخطأ ترجمة للتمثلات التي راكمها المتعلم عبر تجاربه." },
                  { d: "البيداغوجي", desc: "أخطاء ناجمة عن عدم ملاءمة الطرائق البيداغوجية لحاجات المتعلم." },
                ].map(({ d, desc }) => (
                  <div key={d} className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                    <p className="font-bold text-dark">البُعد {d}</p>
                    <p className="mt-1 leading-6 text-text">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-text">
                <span className="font-semibold text-dark">أنواع الخطأ: </span>
                منتظمة (تتكرر) / عشوائية (سهو وعدم انتباه) / معبّرة (تمس فئة واسعة وتشير لخلل في التعليم).
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 06 — علم الاجتماع التربوي
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">06. علم الاجتماع التربوي</h2>

            <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text">
              <p className="font-semibold text-dark">📌 التعريف التركيبي</p>
              <p className="mt-2">
                العلم الذي يدرس العلاقات والتفاعلات بين التربية والمجتمع من خلال تحليل أثر المجتمع
                في التربية والعكس.
              </p>
            </div>

            {/* مجالاته */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🔬 مجالاته</h3>
              <ul className="mt-3 list-disc space-y-1 pr-5 text-sm leading-7 text-text">
                {[
                  "دراسة المؤسسات التربوية من الداخل: الأدوار الاجتماعية، ديناميكية الجماعات، الظواهر الاجتماعية.",
                  "دراسة العلاقة بين المدرسة ومؤسسات المجتمع: السياسية والاقتصادية والاجتماعية والثقافية.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* علاقته بالعلوم الأخرى */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🔗 علاقته بالعلوم الأخرى</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["العلم", "طبيعة العلاقة"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { e: "علم النفس", r: "دراسة التنشئة الاجتماعية ومشكلات التلاميذ عبر مراحل النمو." },
                      { e: "علم الاقتصاد", r: "اقتصاديات التعليم فرع مهم من فروع علم اجتماعيات التربية." },
                      { e: "علم السكان", r: "دراسة البنية الاجتماعية للمؤسسات التربوية." },
                      { e: "علم اللغة", r: "اللغة وسيلة التنشئة الاجتماعية والاتصال." },
                    ].map(({ e, r }) => (
                      <tr key={e}>
                        <td className="py-2 pl-4 font-bold text-primary-light">{e}</td>
                        <td className="py-2 leading-6">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* فوائده للمدرس */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">✅ فائدته للمدرس — 7 أبعاد</h3>
              <ol className="mt-3 list-decimal space-y-1 pr-5 text-sm leading-7 text-text">
                {[
                  "فهم النظام التعليمي كنظام اجتماعي له صلة بباقي الأنظمة.",
                  "إلقاء الضوء على المدرسة كنظام له معايير وقيم وتفاعلات.",
                  "فهم وتفسير الثقافة التي تؤطر ذهن التلميذ وسلوكه.",
                  "بناء الشخصية وتعزيز الهوية.",
                  "رصد القوى الفاعلة في تشكيل بنية المؤسسة.",
                  "فهم تبادلية الأدوار والقيم والظواهر بين المدرسة والمجتمع.",
                  "مواكبة التغيير المتسارع لمؤسسات التنشئة الاجتماعية.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ol>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 07 — الجماعة وديناميكيتها
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">07. الجماعة وديناميكيتها وتقنيات التنشيط</h2>

            {/* التعاريف */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">📖 تعريف الجماعة</h3>
              <div className="mt-3 space-y-2 text-sm text-text">
                {[
                  { ref: "شريف (1956)", def: "«الجماعة وحدة اجتماعية تتكون من عدد من الأفراد تربط بينهم صلات وفق أطر وأدوار وتجمعهم قيم ومعايير ضابطة للتوجه والسلوك.»" },
                  { ref: "ليبيانسكي (1992)", def: "«الجماعة مؤسسة حاملة لقيم ومعايير وقواعد تنظم إدراك ومشاعر وسلوكات أفرادها.»" },
                  { ref: "شاو (2000)", def: "«هي كل فردين أو أكثر يتفاعلان ويتبادلان التأثير وينتقلان من إدراك الأنا إلى إدراك النحن.»" },
                ].map(({ ref, def }) => (
                  <div key={ref} className="rounded-[10px] border border-border bg-bg px-4 py-3">
                    <span className="font-bold text-primary-light">{ref}: </span>{def}
                  </div>
                ))}
              </div>
            </div>

            {/* التصنيف */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🗂️ تصنيف الجماعة</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">التوجه السوسيولوجي (فلتشر)</p>
                  <ul className="mt-2 list-disc space-y-1 pr-5 leading-6 text-text">
                    <li><span className="font-semibold">المجموع (Agrégat): </span>أفراد يجمعهم تقارب جسدي دون تواصل أو تبادل.</li>
                    <li><span className="font-semibold">الجماعة (Groupe): </span>ارتباط بين أفراد بينهم تواصل وتبادل حقيقي.</li>
                  </ul>
                </div>
                <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                  <p className="font-bold text-dark">التوجه السيكولوجي (مارتن)</p>
                  <div className="mt-2 space-y-1">
                    {[
                      { t: "الحشد", n: "كبير", org: "ضعيفة", x: "عرضة لعدوى انفعالية." },
                      { t: "العصابة", n: "قليل", org: "ضعيفة", x: "بحث عن النظير." },
                      { t: "المجموعة الأولية", n: "قليل", org: "عالية", x: "أفعال مهمة ومتطورة." },
                      { t: "المجموعة الثانوية", n: "قليل", org: "عالية جداً", x: "أهداف وأفعال مخطط لها." },
                    ].map(({ t, n, org, x }) => (
                      <div key={t} className="rounded-[6px] bg-white px-3 py-1.5 text-text">
                        <span className="font-semibold text-dark">{t} </span>
                        <span className="text-text-light text-xs">({n} | {org})</span>
                        <span>: {x}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* تقنيات التنشيط */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">⚡ تقنيات تنشيط الجماعة</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["التقنية", "خطوات التطبيق"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { t: "حول المائدة (Tour de table)", s: "طرح سؤال أو مشكلة — مناقشة من قِبل جميع الفاعلين بالتسلسل." },
                      { t: "العصف الذهني (Brainstorming)", s: "عرض المشكلة — تقديم اقتراحات حرة — عدم نقد الأفكار — تدوينها — ترتيبها — انتخابها." },
                      { t: "فيليبس 6/6", s: "مجموعات من 6 أفراد — مناقشة 6 دقائق — عرض الخلاصة — فتح النقاش." },
                      { t: "لعب الأدوار", s: "تحديد الوضعية والأدوار — تشجيع الارتجال — تقديم الانطباعات." },
                      { t: "السيناريو", s: "وضع فرضيات — استشراف الاستراتيجيات — تجريب سيناريو واقعي." },
                      { t: "دراسة الحالة", s: "تحليل حالة واقعية وإيجاد الحلول الممكنة جماعياً." },
                    ].map(({ t, s }) => (
                      <tr key={t}>
                        <td className="py-2 pl-4 font-bold text-primary-light whitespace-nowrap">{t}</td>
                        <td className="py-2 leading-6">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              المحور 08 — السوسيولوجيا التربوية
          ══════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark">08. السوسيولوجيا التربوية</h2>
            <p className="mt-3 text-sm leading-7 text-text">
              دراسة علمية للظاهرة التربوية من منظور اجتماعي، تتناول كيفية تأثير البنى الاجتماعية
              على الفرص التعليمية ودور المدرسة في المجتمع.
            </p>

            {/* الاتجاهات النظرية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🏛️ الاتجاهات النظرية الكبرى</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    a: "الوظيفية",
                    t: "دوركهايم، بارسونز",
                    d: "المدرسة تؤدي وظيفة اجتماعية: التضامن والتكامل.",
                    color: "border-blue-200 bg-blue-50",
                    badge: "text-blue-700",
                  },
                  {
                    a: "نظرية إعادة الإنتاج",
                    t: "بورديو وباسيرون",
                    d: "المدرسة تُعيد إنتاج التفاوتات الاجتماعية عبر رأس المال الثقافي.",
                    color: "border-orange-200 bg-orange-50",
                    badge: "text-orange-700",
                  },
                  {
                    a: "التفاعلية الرمزية",
                    t: "غوفمان، ميد",
                    d: "التفاعلات اليومية داخل المؤسسة تُشكّل الهويات.",
                    color: "border-green-200 bg-green-50",
                    badge: "text-green-700",
                  },
                  {
                    a: "نظرية الصراع",
                    t: "ماركس، ألتوسير",
                    d: "المدرسة جهاز إيديولوجي للدولة يُكرّس السيطرة الطبقية.",
                    color: "border-red-100 bg-red-50",
                    badge: "text-red-600",
                  },
                ].map(({ a, t, d, color, badge }) => (
                  <div key={a} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className={`font-bold ${badge}`}>{a}</p>
                    <p className="text-xs font-semibold text-text-light">المفكرون: {t}</p>
                    <p className="mt-2 leading-6 text-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* المفاهيم الأساسية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark">🔑 مفاهيم أساسية</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المفهوم", "التعريف"].map((h) => (
                        <th key={h} className="pb-2 pl-4 font-semibold text-dark first:pl-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "التنشئة الاجتماعية", t: "العملية التي يكتسب الفرد بموجبها القيم والمعايير الاجتماعية." },
                      { m: "رأس المال الثقافي", t: "مجموع المعارف والمهارات والعادات التي يرثها الفرد من محيطه الاجتماعي." },
                      { m: "الإعادة الإنتاجية", t: "ميل المدرسة لإعادة إنتاج التراتبية الاجتماعية القائمة." },
                      { m: "الهابيتوس", t: "منظومة الاستعدادات الدائمة المكتسبة اجتماعياً (بورديو)." },
                      { m: "الفشل الدراسي", t: "ظاهرة متعددة الأسباب: اجتماعية وثقافية واقتصادية وتربوية." },
                      { m: "المؤسسة التربوية", t: "جهاز لنقل القيم والمعايير الثقافية وإعادة الإنتاج الاجتماعي." },
                    ].map(({ m, t }) => (
                      <tr key={m}>
                        <td className="py-2 pl-4 font-bold text-primary-light whitespace-nowrap">{m}</td>
                        <td className="py-2 leading-6">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── ذيل الصفحة ── */}
          <div className="rounded-[12px] border border-border bg-bg px-6 py-4 text-center text-xs text-text-light">
            ملخص علوم التربية |{" "}
            <span className="font-semibold text-dark">المركز الجهوي لمهن التربية والتكوين — مراكش آسفي</span>
            {" "}| الموسم التكويني 2025/2026
          </div>

        </div>
      </div>
    </main>
  );
}