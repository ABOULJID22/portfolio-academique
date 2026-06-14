import { modulePages } from '../../data/portfolioData';

const slug = 's2-vie-scolaire';

export default function S2VieScolairePage() {
  const module = modulePages.find((item) => item.slug === slug);

  const getResourceLink = (resource) => {
    if (resource.href && resource.href !== '#') {
      return resource.href;
    }
    const query = `${module?.title ?? 'Vie'} ${resource.label} CRMEF`;
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
            ملخص شامل ومنظم · 2024-2025
          </div>
          <h1 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl text-right">
            الحياة المدرسية
          </h1>
          <p className="mt-3 text-sm leading-7 text-text text-right">
            فيشة تركيبية شاملة — جميع المحاور
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-end">
            {[
              "الإطار العام",
              "الفاعلون والشركاء",
              "مجالس المؤسسة",
              "أنشطة الحياة المدرسية",
              "الأندية التربوية",
              "خلايا الاستماع",
              "برلمان الطفل",
              "مشروع المؤسسة",
              "مشروع القسم",
              "المشروع الشخصي",
              "الجمعيات",
              "الزمن المدرسي",
              "الشراكة",
              "الصحة المدرسية",
              "الإطار التشريعي",
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
              1 — الإطار العام للحياة المدرسية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              1. الإطار العام للحياة المدرسية
            </h2>

            {/* 1.1 المفهوم */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p className="font-bold text-dark">📌 1.1 مفهوم الحياة المدرسية</p>
              <p className="mt-2">
                تُعَرَّف الحياة المدرسية بأنها: <strong>«صورة مصغرة للحياة الاجتماعية في أماكن وأوقات مناسبة»</strong>، وتهتم بالتنشئة الشاملة لشخصية المتعلم بواسطة أنشطة تفاعلية متنوعة تشرف عليها هيئة التدريس والإدارة ويسهم فيها مختلف الشركاء.
              </p>
              <p className="mt-2 text-text-light italic">
                وهي كذلك: الحياة التي يعيشها المتعلمون في جميع الأوقات والأماكن المدرسية (أوقات الدرس والاستراحة والإطعام؛ الفصول والساحة والملاعب الرياضية، ومواقع الزيارات والخرجات التربوية...)، قصد تربيتهم من خلال جميع الأنشطة المبرمجة التي تراعي كل جوانب شخصياتهم.
              </p>
            </div>

            {/* 1.2 الأهداف */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">1.2 أهداف الحياة المدرسية</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "جعل المتعلم في قلب الاهتمام والتفكير والفعل",
                  "إعمال الفكر والقدرة على الفهم والتحليل والنقاش الحر",
                  "التربية على قيم المجتمع المغربي وممارستها",
                  "النمو المتوازن والتنشئة الشاملة للمتعلم",
                  "تنمية الكفايات وبناء المشاريع الشخصية",
                  "تحرير الطاقات الإبداعية في كل المجالات",
                  "الإعداد للاندماج الفاعل في الحياة الشخصية والمهنية",
                ].map((g) => (
                  <div key={g} className="flex items-start gap-2 rounded-[10px] border border-border bg-white px-3 py-2 text-sm text-text text-right">
                    <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.3 المرجعيات */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-dark text-right">1.3 المرجعيات القانونية</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المضمون الأساسي", "المرجعية"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "يحدد غايات المدرسة وأهدافها بوصفها مفعمة بالحياة ومنفتحة على محيطها", r: "الميثاق الوطني للتربية والتكوين" },
                      { m: "يُلزم بتوفير الأنشطة التربوية وتعزيز الحياة المدرسية بمحتوى متنوع وشامل", r: "قانون الإطار 51.17" },
                      { m: "تُوجب تخصيص 20% من البرامج للأنشطة الفنية والرياضية وتعزيز المواطنة", r: "الرؤية الاستراتيجية 2015-2030" },
                      { m: "يُنظم مجالس المؤسسة ومهامها", r: "المرسوم 2.02.376 (2002)" },
                      { m: "مرجع عملي يُفصّل آليات التفعيل ومجالات الأنشطة", r: "دليل الحياة المدرسية 2019" },
                    ].map(({ m, r }) => (
                      <tr key={r}>
                        <td className="py-2 pr-4 leading-6 text-right">{m}</td>
                        <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.4 المكونات */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">1.4 مكونات الحياة المدرسية</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  "الفاعلون والشركاء في الحياة المدرسية",
                  "مجالس المؤسسة",
                  "المشاريع (مشروع المؤسسة، مشروع القسم، المشروع الشخصي)",
                  "أنشطة الحياة المدرسية (الفصلية، المندمجة، الموازية)",
                  "تدبير وتأمين الزمن المدرسي",
                  "الجمعيات الفاعلة في الحياة المدرسية",
                  "الصحة المدرسية والأمن الإنساني",
                  "ضوابط الحياة المدرسية (النظام الداخلي)",
                  "الشراكة والتواصل مع العالم الخارجي",
                ].map((c) => (
                  <div key={c} className="rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text text-right">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              2 — الفاعلون والشركاء
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              2. الفاعلون والشركاء في الحياة المدرسية
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-right">
                    {["الأدوار الأساسية", "الفاعل"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { f: "المتعلمون", a: "الحجر الأساس — المشاركة في إعداد النظام الداخلي، الانخراط في مجالس المؤسسة والأندية التربوية، الحضور المستمر والنشيط." },
                    { f: "المدرسون", a: "المتدخلون الرئيسيون — تنشيط الحياة المدرسية داخل الفصل وخارجه، تكوين أندية منفتحة على المجتمع، التربية على القيم والمواطنة." },
                    { f: "الإدارة التربوية", a: "المدير، الناظر، الحراس العامون — التأطير والتنظيم، تقوية التواصل والتنسيق، تشجيع السلوكات الإيجابية." },
                    { f: "أطر الدعم الاجتماعي", a: "الاستماع والإنصات للمتعلمين، تشخيص الظواهر السلبية ومحاربتها، الوساطة الأسرية." },
                    { f: "هيئة التأطير والمراقبة", a: "التأطير والتكوين، إبداء الملاحظات والاقتراحات، تتبع الحياة المدرسية وتقويمها." },
                    { f: "الشركاء الخارجيون", a: "الأسرة، جمعية آباء وأولياء التلاميذ، الجماعة الترابية، المجتمع المدني، الفاعلون الاقتصاديون." },
                    { f: "مراكز التكوين", a: "المساهمة في الأنشطة التربوية، إشراك المتدربين في إطار مشروع المؤسسة." },
                  ].map(({ f, a }) => (
                    <tr key={f}>
                      <td className="py-2 pr-4 leading-6 text-right">{a}</td>
                      <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              3 — مجالس المؤسسة
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              3. مجالس المؤسسة
            </h2>

            <p className="mt-3 text-sm leading-6 text-text text-right">
              تُعَدُّ مجالس المؤسسة الآليةَ الرئيسية لتدبير وتنشيط الحياة المدرسية. يشمل النظام الأساسي أربعة مجالس:
            </p>

            <div className="mt-5 space-y-3">
              {[
                {
                  name: "مجلس التدبير",
                  members: "مدير المؤسسة (رئيس)، الحراس العامون، ممثل هيئة التدريس، رئيس جمعية الآباء، ممثل المجلس الجماعي، تلميذان.",
                  tasks: "اقتراح النظام الداخلي، وضع البرنامج السنوي، تتبع تنفيذ القرارات، المصادقة على التقرير السنوي.",
                  freq: "مرتان على الأقل في السنة",
                  color: "border-blue-200 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  name: "المجلس التربوي",
                  members: "مدير المؤسسة (رئيس)، الحراس العامون، ممثل عن كل مادة، رئيس جمعية الآباء، تلميذان، مستشار التوجيه.",
                  tasks: "إعداد مشاريع برامج العمل التربوي، التنسيق بين المواد، إبداء الرأي بخصوص السير التربوي.",
                  freq: "مرتان على الأقل في السنة",
                  color: "border-green-200 bg-green-50",
                  badge: "text-green-700",
                },
                {
                  name: "المجلس التعليمي",
                  members: "مدير المؤسسة (رئيس)، أساتذة المادة الدراسية الواحدة.",
                  tasks: "رصد الصعوبات البيداغوجية، دراسة وضعية المادة، التنسيق الأفقي والعمودي، اقتراح الأنشطة.",
                  freq: "مرتان في السنة كحد أدنى",
                  color: "border-purple-200 bg-purple-50",
                  badge: "text-purple-700",
                },
                {
                  name: "مجلس الأقسام",
                  members: "مدير المؤسسة (رئيس)، أساتذة القسم، الحراس العامون، مستشار التوجيه، ممثل جمعية الآباء، تلميذ.",
                  tasks: "تتبع وتوجيه وتقييم عمل التلاميذ، تبادل المعلومات، اقتراح القرارات التأديبية، إصدار قرارات نهاية السنة.",
                  freq: "نهاية كل دورة دراسية",
                  color: "border-orange-200 bg-orange-50",
                  badge: "text-orange-700",
                },
              ].map(({ name, members, tasks, freq, color, badge }) => (
                <div key={name} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-text-light border border-border">{freq}</span>
                    <p className={`font-bold text-base ${badge}`}>{name}</p>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[8px] bg-white px-3 py-2 text-right text-text">
                      <p className="font-semibold text-dark">الأعضاء :</p>
                      <p className="mt-1 leading-6">{members}</p>
                    </div>
                    <div className="rounded-[8px] bg-white px-3 py-2 text-right text-text">
                      <p className="font-semibold text-dark">الاختصاصات :</p>
                      <p className="mt-1 leading-6">{tasks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              4 — أنشطة الحياة المدرسية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              4. أنشطة الحياة المدرسية
            </h2>

            {/* 4.1 تعريف وأسس */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p className="font-bold text-dark">📌 4.1 تعريف وأسس</p>
              <p className="mt-2">
                تشمل جميع الأنشطة التي يقوم بها المتعلم داخل المؤسسة التعليمية أو خارجها بتأطير منها. وتقوم على المبادئ التالية:
              </p>
              <ul className="mt-2 list-disc space-y-1 pr-5 leading-6">
                {[
                  "التركيز على الأبعاد التربوية ودورها في تنمية الكفاءات المنشودة.",
                  "مراعاة الملاءمة للفئات المستهدفة (المستوى، الاهتمامات، الاحتياجات).",
                  "إشراك المتعلمين بكيفية نشيطة في البرمجة والإعداد والتنظيم.",
                  "حسن التخطيط والتدبير (الأهداف، الفضاء، المسؤولون، الوسائل).",
                  "تقويم الأنشطة في أفق تطويرها وجذب مزيد من المتعلمين.",
                ].map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>

            {/* 4.2 أصناف الأنشطة */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">4.2 أصناف الأنشطة</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    s: "📘 الأنشطة الفصلية",
                    d: "أنشطة موزعة حسب المواد الدراسية، تُنجز من طرف مدرس القسم أو المادة، في وضعيات تعليمية معتادة داخل الحجرة أو خارجها.",
                    color: "border-blue-200 bg-blue-50 text-blue-700",
                  },
                  {
                    s: "🔗 الأنشطة المندمجة",
                    d: "تتكامل مع الأنشطة الفصلية بفضل مقاربة الكفايات. تشمل: أنشطة التفتح، أنشطة الدعم، أنشطة التوجيه التربوي.",
                    color: "border-green-200 bg-green-50 text-green-700",
                  },
                  {
                    s: "🌍 الأنشطة الموازية",
                    d: "تؤطرها مؤسسات المجتمع الشريكة (الأندية الرياضية، المعاهد، دور الشباب، الجمعيات).",
                    color: "border-purple-200 bg-purple-50 text-purple-700",
                  },
                ].map(({ s, d, color }) => (
                  <div key={s} className={`rounded-[12px] border p-4 text-sm ${color}`}>
                    <p className="font-bold text-right">{s}</p>
                    <p className="mt-2 leading-6 text-text text-right">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.3 أنشطة التفتح */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">4.3 أنشطة التفتح التفصيلية</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "أنشطة التربية الصحية والبيئية والتنمية المستدامة",
                  "الأنشطة الثقافية والفنية والإعلامية (المسرح، الإذاعة، المجلة الحائطية)",
                  "الأنشطة الرياضية المدرسية",
                  "أنشطة التربية على حقوق الإنسان والمواطنة",
                  "أنشطة الثقافة العلمية والتكنولوجية",
                  "أنشطة تكنولوجيات الإعلام والاتصال",
                ].map((a) => (
                  <div key={a} className="flex items-start gap-2 rounded-[10px] border border-border bg-bg px-3 py-2 text-sm text-text text-right">
                    <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.4 طرق الإنجاز */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">🛠️ 4.4 طرق وآليات إنجاز الأنشطة</p>
              <div className="mt-3 flex flex-wrap gap-2 justify-end">
                {[
                  "معارض ومنتديات وأبواب مفتوحة",
                  "إذاعة مدرسية",
                  "مجلة حائطية",
                  "نشرات",
                  "معامل وورشات",
                  "عروض سمعية بصرية",
                  "مسابقات وألعاب تربوية",
                  "المسرح المدرسي",
                  "الحكي — لعب الأدوار",
                  "أشغال تطبيقية",
                  "خرجات ورحلات تربوية",
                  "إنتاج ابتكاري",
                  "أبحاث وشهادات",
                ].map((t) => (
                  <span key={t} className="rounded-full border border-primary-light/30 bg-primary-light/5 px-3 py-1 text-xs font-semibold text-primary-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              5 — آليات الاشتغال في الحياة المدرسية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              5. آليات الاشتغال في الحياة المدرسية
            </h2>

            <p className="mt-3 text-sm leading-6 text-text text-right">
              آليات تفعيل الحياة المدرسية هي مجموع البرامج والأطر التنظيمية التي تؤدي إلى إنجاز الأنشطة وفق مخططات عمل محددة لبلوغ نتائج منتظرة في إطار مشاريع متكاملة ومنسجمة.
            </p>

            {/* 5.1 الأندية التربوية */}
            <div className="mt-5 rounded-[12px] border border-blue-200 bg-blue-50 p-4 text-sm">
              <p className="font-bold text-blue-700 text-right">🏫 5.1 الأندية التربوية</p>
              <p className="mt-2 leading-6 text-text text-right">
                <strong>المفهوم:</strong> آلية لتفعيل أنشطة الحياة المدرسية يصممها الكبار للعمليات والأنشطة بإشراف تربوي وإسهام فاعل من المتعلمين.
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">أهداف الأندية التربوية:</p>
                  <ul className="mt-2 list-disc space-y-1 pr-5 leading-6">
                    {[
                      "تنمية الميول والمواهب لدى المتعلمين",
                      "ترسيخ السلوك المدني القويم",
                      "التدريب على إبداء الرأي واحترام الرأي الآخر",
                      "تنمية قدرات التدبير والتنظيم والبرمجة والتقويم",
                    ].map((g) => <li key={g}>{g}</li>)}
                  </ul>
                </div>
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">مجالات الأندية:</p>
                  <div className="mt-2 space-y-1">
                    <div className="rounded-[6px] bg-blue-50 px-2 py-1.5">
                      <span className="font-semibold text-blue-700">التفتح الثقافي والاجتماعي والرياضي: </span>
                      الأنشطة الثقافية، الإعلامية والفنية، المواطنة، الرياضة، الصحة، البيئة، التنمية المستدامة.
                    </div>
                    <div className="rounded-[6px] bg-blue-50 px-2 py-1.5">
                      <span className="font-semibold text-blue-700">التفتح العلمي والتكنولوجي: </span>
                      التكنولوجيا الرقمية، العلوم، الفيزياء، الكيمياء، المشاريع التقنية، المعلوميات.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">صيغ إحداث الأندية:</p>
                  <ul className="mt-2 list-disc space-y-1 pr-5 leading-6">
                    <li><strong>الصيغة 1:</strong> نادي واحد شامل تحت إشراف مباشر للمجلس التربوي.</li>
                    <li><strong>الصيغة 2:</strong> ناديان (نادي التفتح الثقافي + نادي التفتح العلمي).</li>
                    <li><strong>الصيغة 3:</strong> تعدد الأندية حسب حاجات المؤسسة مع لجنة تنسيق.</li>
                  </ul>
                </div>
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">مراحل تأسيس الأندية:</p>
                  <ol className="mt-2 list-decimal space-y-1 pr-5 leading-6">
                    {[
                      "مرحلة الإخبار: تحديد الصيغ والإعلان لعموم التلاميذ",
                      "مرحلة اعتماد الأندية: دراسة المقترحات والمصادقة",
                      "مرحلة تشكيل لجنة التنسيق",
                      "مرحلة تشكيل وهيكلة الأندية عبر الجمع العام التأسيسي",
                      "مرحلة إخبار المصالح الإقليمية والجهوية والمركزية",
                    ].map((m) => <li key={m}>{m}</li>)}
                  </ol>
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { l: "التعليم الابتدائي", v: "3 ساعات فما فوق خارج الغلاف الزمني الأسبوعي" },
                  { l: "التعليم الثانوي الإعدادي والتأهيلي", v: "ساعتان متصلتان أو منفصلتان" },
                ].map(({ l, v }) => (
                  <div key={l} className="rounded-[8px] bg-white px-3 py-2 text-sm text-right text-text">
                    <span className="font-semibold text-dark">{l}: </span>{v}
                  </div>
                ))}
              </div>
            </div>

            {/* 5.2 خلايا الاستماع */}
            <div className="mt-5 rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
              <p className="font-bold text-green-700 text-right">📞 5.2 خلايا الاستماع والوساطة</p>
              <p className="mt-2 leading-6 text-text text-right">
                <strong>المفهوم:</strong> مراكز محلية للوقاية ومناهضة العنف بالوسط المدرسي، تحت إشراف الإدارة التربوية، وبتنشيط من أساتذة متطوعين.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "الاستماع والوساطة داخل المؤسسة التعليمية",
                  "رصد حالات العنف والعمل على معالجتها",
                  "وضع برنامج عمل سنوي والسهر على تنفيذه",
                  "تشجيع المتعلمين على التبليغ عن حالات العنف",
                  "وضع قاعدة معطيات حول العنف بالوسط المدرسي",
                  "التدخل الفوري واتخاذ الإجراءات اللازمة",
                  "خلق قنوات للتعاون والتواصل بين المؤسسة والأسرة",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2 rounded-[8px] bg-white px-3 py-2 text-text text-right">
                    <span className="mt-0.5 shrink-0 text-green-600">◀</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.3 برلمان الطفل */}
            <div className="mt-5 rounded-[12px] border border-purple-200 bg-purple-50 p-4 text-sm">
              <p className="font-bold text-purple-700 text-right">🏛️ 5.3 برلمان الطفل</p>
              <p className="mt-2 leading-6 text-text text-right">
                جهاز أُسِّس لتتبع إعمال اتفاقية الأمم المتحدة لحقوق الطفل التي وقَّع عليها المغرب عام 1993. أُحدث بمقتضى القانون رقم 41 لسنة 2002.
              </p>
              <p className="mt-2 text-text text-right">
                <strong className="text-dark">التركيبة:</strong> 395 عضوًا — 305 يمثلون الدوائر الانتخابية، 90 عن اللائحة الوطنية (11-16 سنة).
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "التربية على قيم الديمقراطية والمواطنة وثقافة حقوق الطفل",
                  "تفعيل حقوق المشاركة لدى الأطفال على أساس المساواة",
                  "دعم ثقافة الحوار واحترام الرأي والاختلاف",
                  "الدفاع عن حقوق الطفل ومسؤولياته",
                  "متابعة إعمال اتفاقية الأمم المتحدة لحقوق الطفل",
                ].map((h) => (
                  <div key={h} className="flex items-start gap-2 rounded-[8px] bg-white px-3 py-2 text-text text-right">
                    <span className="mt-0.5 shrink-0 text-purple-600">◀</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              6 — المشاريع المدرسية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              6. المشاريع المدرسية
            </h2>

            {/* 6.1 مشروع المؤسسة */}
            <div className="mt-5 rounded-[12px] border border-blue-200 bg-blue-50 p-4 text-sm">
              <p className="font-bold text-blue-700 text-right text-base">🏫 6.1 مشروع المؤسسة</p>
              <p className="mt-2 leading-6 text-text text-right">
                <strong>التعريف:</strong> إطار منهجي وآلية عملية ضرورية لتنزيل وأجرأة البرامج والمشاريع التربوية داخل كل مؤسسة تعليمية، يستشرف من خلاله الفاعلون التربويون الوضعية المستقبلية للمؤسسة في إطار رؤية موحدة.
              </p>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { b: "على المستوى المؤسستي", d: "تقديم الرؤية الموحدة بخصوص الوضعية الحالية والمستقبلية للمؤسسة عبر التعاقد بين الفاعلين." },
                  { b: "على المستوى التربوي", d: "وضع خطط تستجيب لوضعية المتعلمين وتتجه نحو جودة التعلم وتحسين النتائج." },
                  { b: "على المستوى المنهجي", d: "تنظيم عمل المؤسسة وفق خطوات معقلنة ونتائج قابلة للتحقق بشكل موضوعي." },
                ].map(({ b, d }) => (
                  <div key={b} className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                    <p className="font-semibold text-dark">{b}</p>
                    <p className="mt-1 leading-6">{d}</p>
                  </div>
                ))}
              </div>

              {/* منهجية DEPART */}
              <div className="mt-3">
                <p className="font-semibold text-dark text-right">خطوات مشروع المؤسسة (منهجية DEPART):</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {[
                    { k: "D — Départ", v: "الانطلاق من تشخيص الوضعية" },
                    { k: "E — État des lieux", v: "رصد الوضع وتحديد الأولويات" },
                    { k: "P — Priorités", v: "تحديد الأولويات المرتبطة بجودة التعلمات" },
                    { k: "A — Activités", v: "وضع الإجراءات والأنشطة والعدة" },
                    { k: "R — Régulation", v: "الضبط والتتبع الدوري" },
                    { k: "T — Transition", v: "الانتقال وتقييم النتائج" },
                  ].map(({ k, v }) => (
                    <div key={k} className="rounded-[8px] bg-white px-3 py-2 text-sm text-right text-text">
                      <span className="font-bold text-blue-700">{k}: </span>{v}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                <p className="font-semibold text-dark">شروط نجاح مشروع المؤسسة:</p>
                <ul className="mt-2 list-disc space-y-1 pr-5 leading-6">
                  {[
                    "التركيز على عدد محدود من الأولويات المرتبطة بجودة التعلمات.",
                    "استمرار التشاور مع المدرسين والأطر الإدارية والشركاء في كل المراحل.",
                    "تشجيع المبادرة والابتكار وتنمية مهارات المتعلمين.",
                    "تكريس التدبير التشاركي والجماعي للمؤسسة.",
                    "إرساء أسس الحكامة ومبدأ الإنصاف وتكافؤ الفرص.",
                  ].map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>

            {/* 6.2 مشروع القسم */}
            <div className="mt-5 rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm">
              <p className="font-bold text-green-700 text-right text-base">📚 6.2 مشروع القسم</p>
              <p className="mt-2 leading-6 text-text text-right">
                نشاط تربوي يُنجز داخل القسم بمشاركة المتعلمين وتحت إشراف الأستاذ، يهدف إلى معالجة مشكل معين أو تحقيق هدف تعليمي/تربوي/اجتماعي.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">مكوناته التسعة:</p>
                  <ol className="mt-2 list-decimal space-y-1 pr-5 leading-6">
                    {["عنوان المشروع","الإشكالية (الدافع)","الأهداف","الفئة المستهدفة","الأنشطة المقترحة","الوسائل والموارد","المدة الزمنية","الشركاء","التقويم"].map((c) => <li key={c}>{c}</li>)}
                  </ol>
                </div>
                <div className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                  <p className="font-semibold text-dark">أبعاده:</p>
                  <div className="mt-2 space-y-1">
                    {["بيداغوجي / تعليمي","اجتماعي","مهاري","وجداني","واقعي وعملي"].map((b) => (
                      <div key={b} className="rounded-[6px] bg-green-50 px-2 py-1 text-green-700 font-medium">{b}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 6.3 المشروع الشخصي */}
            <div className="mt-5 rounded-[12px] border border-purple-200 bg-purple-50 p-4 text-sm">
              <p className="font-bold text-purple-700 text-right text-base">🎯 6.3 المشروع الشخصي للمتعلم</p>
              <p className="mt-2 leading-6 text-text text-right">
                سيرورة متجددة ينخرط فيها المتعلم من أجل تحديد هدف مهني يطمح إلى تحقيقه، والمسارات الدراسية والتكوينية المؤدية إليه، وخطته الشخصية لبلوغه.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { m: "معرفة الذات", d: "القدرات، الميول، الاهتمامات" },
                  { m: "معرفة المحيط الدراسي والتكويني", d: "المسارات، الشهادات" },
                  { m: "معرفة المهن وسوق الشغل", d: "فرص العمل والتخصصات" },
                ].map(({ m, d }) => (
                  <div key={m} className="rounded-[10px] bg-white px-3 py-3 text-sm text-right text-text">
                    <p className="font-semibold text-dark">{m}</p>
                    <p className="mt-1 text-text-light italic">{d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["نوع المواكبة", "المقدِّم", "الغرض"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "التربوية", m: "الأستاذ الرئيس", g: "مساعدة المتعلم على الاندماج واكتساب المعارف والمهارات." },
                      { n: "التقنية الإدارية", m: "إدارة المؤسسة وأطر التوجيه", g: "تتبع الأنشطة واتخاذ قرارات التوجيه ورصد التعثرات." },
                      { n: "النفسية الاجتماعية", m: "إطار التوجيه والمختصون", g: "دعم المتعلمين ذوي الصعوبات النفسية والاجتماعية." },
                      { n: "التخصصية", m: "إطار التوجيه التربوي أو المهني", g: "الاستشارة في التوجيه المدرسي والمهني والجامعي." },
                    ].map(({ n, m, g }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-bold text-purple-700 whitespace-nowrap text-right">{n}</td>
                        <td className="py-2 pr-4 text-right">{m}</td>
                        <td className="py-2 leading-6 text-right">{g}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              7 — الجمعيات الفاعلة
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              7. الجمعيات الفاعلة في الحياة المدرسية
            </h2>

            {/* 7.1 جمعية الآباء */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">👨‍👩‍👧 7.1 جمعية أمهات وآباء وأولياء التلاميذ</p>
              <p className="mt-2 leading-6 text-text text-right">
                هيئة اجتماعية تطوعية تتألف من آباء وأمهات وأولياء التلاميذ المنتسبين للمؤسسة، تتأسس خلال جمع عام يُنتخب فيه مكتب لمدة <strong>3 سنوات</strong>.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "شريك ومحاور أساسي في تدبير شؤون المؤسسة التعليمية",
                  "المشاركة في مجالس التدبير والمجالس التربوية ومجالس الأقسام",
                  "تعبئة الآباء لدعم الأسرة التعليمية",
                  "توعية الآباء بحقوق الطفل وحقه في التعليم",
                  "الحملات التحسيسية لتشجيع التمدرس خاصة للفتيات",
                  "المساهمة في محاربة الهدر والفشل الدراسي والتغيب",
                  "التصدي لظاهرة العنف المدرسي",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2 rounded-[8px] bg-white px-3 py-2 text-text text-right">
                    <span className="mt-0.5 shrink-0 text-primary-light">◀</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7.2 الجمعية الرياضية */}
            <div className="mt-4 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">⚽ 7.2 الجمعية الرياضية المدرسية</p>
              <p className="mt-2 leading-6 text-text text-right">
                إطار تنظيمي داخل المؤسسات التعليمية يهدف إلى تعزيز النشاط الرياضي والتربوي. يرأسها مدير المؤسسة بحكم القانون، وتضم التلاميذ وأساتذة التربية البدنية.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[8px] bg-white px-3 py-2 text-sm text-right text-text">
                  <p className="font-semibold text-dark">الإطار القانوني:</p>
                  <ul className="mt-1 list-disc space-y-1 pr-5 leading-6">
                    <li>الظهير الشريف رقم 1.58.376 (1958) — القانون الأساسي للجمعيات بالمغرب</li>
                    <li>القانون رقم 09-30 (2010) المتعلق بالتربية البدنية والرياضة</li>
                    <li>القانون الإطار 51.17 — الحكامة الجيدة والشفافية والمساءلة</li>
                  </ul>
                </div>
                <div className="rounded-[8px] bg-white px-3 py-2 text-sm text-right text-text">
                  <p className="font-semibold text-dark">مصادر التمويل:</p>
                  <ul className="mt-1 list-disc space-y-1 pr-5 leading-6">
                    <li>واجبات الانخراط: من 10 إلى 20 درهمًا لكل تلميذ (30 درهمًا للعائلة كحد أقصى).</li>
                    <li>دعم جمعية الآباء أو شركاء خارجيين (جماعات محلية، مؤسسات داعمة).</li>
                    <li>منح ومساعدات من الجهات الرسمية.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              8 — تأمين الزمن المدرسي
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              8. تأمين الزمن المدرسي
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-6 text-text text-right">
              <p className="font-bold text-dark">⏰ 8.1 مفهوم الزمن التربوي</p>
              <p className="mt-2">
                الزمن شرط قبلي للفعل التربوي؛ فكل فعل تدريسي يرتبط بالمكان الذي يتم فيه (فضاء القسم والمدرسة) وبالزمن الذي يُؤطر هذا الفعل. <strong>كلما ارتفعت وتيرة إنجاز البرنامج انخفضت وتيرة جودة الاكتساب والتعلم.</strong>
              </p>
            </div>

            {/* 8.2 أنماط الزمن */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">8.2 أنماط الزمن في المنهاج المغربي</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["النمط", "المدى", "التفاصيل"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { n: "سيرورة طويلة", m: "سنة دراسية", t: "تتراوح بين 28 و32 أسبوعًا حسب السلك والمنطقة الجغرافية." },
                      { n: "سيرورة متوسطة", m: "مرحلة/مجزوءة", t: "6 أسابيع بناء للتعلمات + أسبوعان للتقويم والدعم." },
                      { n: "سيرورة قصيرة", m: "درس/حصة", t: "60-120 دقيقة بالثانوي؛ 45-60 دقيقة بالابتدائي." },
                    ].map(({ n, m, t }) => (
                      <tr key={n}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap text-right">{n}</td>
                        <td className="py-2 pr-4 font-medium text-dark text-right">{m}</td>
                        <td className="py-2 leading-6 text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8.3 المداخل الأربعة */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">8.3 المداخل الأربعة لتأمين الزمن (مذكرة 2010/154)</h3>
              <div className="mt-3 space-y-2">
                {[
                  { n: "1. إرساء آليات الشفافية", d: "نشر لوائح الموظفين، جداول الحصص، الغلاف الزمني السنوي، أسماء المتغيبين." },
                  { n: "2. ضبط وتسجيل الغياب", d: "تعبئة سجل المواظبة، إنجاز تقارير دورية، وضع خريطة مؤشرات الغياب." },
                  { n: "3. المعالجة البيداغوجية", d: "تعويض ساعات الغياب، برمجة حصص استدراكية، تكثيف الزيارات البيداغوجية." },
                  { n: "4. المعالجة الإدارية", d: "تحريك المسطرة التأديبية، إرسال التقارير، توثيق عمليات التتبع." },
                ].map(({ n, d }) => (
                  <div key={n} className="flex gap-3 rounded-[10px] border border-border bg-bg px-3 py-3 text-sm text-right text-text">
                    <div>
                      <p className="font-bold text-dark">{n}</p>
                      <p className="mt-1 leading-6">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8.4 فرق القيادة */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">8.4 فرق القيادة والتتبع</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["الفريق", "الأعضاء", "المهام"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { f: "الفريق الإقليمي", a: "المكلف بالموارد البشرية، الخريطة التربوية، تنسيق التفتيش.", m: "زيارة مؤسسات أسبوعيًا، تقارير دورية إقليمية." },
                      { f: "الفريق الجهوي", a: "مدير الأكاديمية، المكلفون بالموارد البشرية والتفتيش.", m: "زيارة نيابات شهريًا، تقارير تركيبية جهوية." },
                      { f: "الفريق المركزي", a: "فريق العمل المركزي وممثلو المصالح المركزية.", m: "زيارة أكاديميات كل 3 أشهر، تقرير سنوي عام." },
                    ].map(({ f, a, m }) => (
                      <tr key={f}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap text-right">{f}</td>
                        <td className="py-2 pr-4 leading-6 text-right">{a}</td>
                        <td className="py-2 leading-6 text-right">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              9 — الشراكة والانفتاح
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              9. الشراكة والانفتاح على العالم الخارجي
            </h2>

            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm leading-7 text-text text-right">
              <p>
                تُعَرَّف الشراكة بأنها: <strong>علاقة يتفق فيها طرفان أو أكثر، لهم أهداف مشتركة، على الاشتغال معًا</strong>. وهي ميثاق ينبني على التعاون والتنسيق على قدم المساواة يرسخ القيم المشتركة (الشفافية، النزاهة، التكامل).
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* مبادئ الشراكة */}
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark text-right">9.1 مبادئ الشراكة</p>
                <ul className="mt-3 list-disc space-y-1 pr-5 leading-6 text-text text-right">
                  {[
                    "الاحترام المتبادل والثقة والتوافق",
                    "الشفافية والصدق في المعاملة",
                    "الاستثمار المشترك للموارد",
                    "تقاسم المسؤوليات والمساءلة",
                    "المساواة بين الشركاء في طاولة المفاوضات",
                  ].map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>

              {/* دورة الشراكة */}
              <div className="rounded-[12px] border border-border bg-bg p-4 text-sm">
                <p className="font-bold text-dark text-right">9.2 دورة الشراكة (4 مراحل)</p>
                <div className="mt-3 space-y-2">
                  {[
                    { m: "1. بناء الشراكة", x: "التشخيص — اختيار الشركاء — بناء التصور — التخطيط." },
                    { m: "2. تدبير الشراكة", x: "الهيكلة — تعبئة الموارد — الشروع في التنفيذ." },
                    { m: "3. تقييم الشراكة", x: "قياس المردودية — تحليل التأثير — عرض النتائج." },
                    { m: "4. مراجعة الشراكة", x: "تعديل البرنامج — المأسسة — ضمان الاستمرارية أو الإنهاء." },
                  ].map(({ m, x }) => (
                    <div key={m} className="rounded-[8px] bg-white px-3 py-2 text-text text-right">
                      <span className="font-bold text-dark">{m}: </span>{x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              10 — الصحة المدرسية والأمن الإنساني
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              10. الصحة المدرسية والأمن الإنساني
            </h2>

            <p className="mt-3 text-sm leading-6 text-text text-right">
              تشمل الصحة المدرسية: <strong>الصحة الجسدية، النفسية، الاجتماعية</strong> للمتعلمين، وتندرج ضمن مسؤولية جميع الفاعلين في المنظومة التربوية.
            </p>

            {/* 10.1 مراكز الوقاية */}
            <div className="mt-5">
              <h3 className="text-base font-bold text-dark text-right">10.1 مراكز الوقاية ومناهضة العنف</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-text">
                  <thead>
                    <tr className="border-b border-border text-right">
                      {["المستوى", "المهام الأساسية"].map((h) => (
                        <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { m: "المركز الوطني", t: "يرأسه وزير التربية الوطنية — تحديد الاستراتيجية الوطنية ووضع برنامج عمل وطني." },
                      { m: "المركز الجهوي", t: "يشرف عليه مدير الأكاديمية — وضع خطة جهوية وقاعدة معطيات وإنجاز دراسات." },
                      { m: "المركز الإقليمي", t: "تحت إشراف المدير الإقليمي — التنسيق مع خلايا الاستماع، وضع خطة سنوية." },
                      { m: "خلايا الاستماع والوساطة", t: "على مستوى المؤسسة — الاستماع، الوساطة، رصد العنف ومعالجته." },
                    ].map(({ m, t }) => (
                      <tr key={m}>
                        <td className="py-2 pr-4 font-bold text-primary-light whitespace-nowrap text-right">{m}</td>
                        <td className="py-2 leading-6 text-right">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 10.2 التفتح الفني والأدبي */}
            <div className="mt-5 rounded-[12px] border border-border bg-bg p-4 text-sm">
              <p className="font-bold text-dark text-right">🎨 10.2 التفتح الفني والأدبي</p>
              <p className="mt-2 leading-6 text-text text-right">
                فضاء خاص للإبداع في المجال الثقافي والفني والأدبي، مفتوح أمام التلاميذ بين 6 و18 سنة (<strong>ساعتان أسبوعيًا</strong>).
              </p>
              <ul className="mt-3 list-disc space-y-1 pr-5 leading-6 text-text text-right">
                {[
                  "تنظيم دورات تكوينية في المجالات الفنية والأدبية",
                  "اكتشاف المواهب وصقلها",
                  "تسهيل الاندماج المجتمعي وبناء شخصية منفتحة",
                  "إنتاج عروض فنية وإبداعات أدبية",
                ].map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              11 — ضوابط الحياة المدرسية
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              11. ضوابط الحياة المدرسية — الإطار التشريعي
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-right">
                    {["ما يتعلق بالحياة المدرسية", "المرجعية"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { r: "الميثاق الوطني للتربية والتكوين", c: "يُوجب أن تكون المدرسة «مفعمة بالحياة» و«منفتحة على محيطها» — يُحدد حقوق وواجبات جميع الأطراف (مادة 19)." },
                    { r: "الرؤية الاستراتيجية 2015-2030", c: "تُلزم بتعزيز الأنشطة الثقافية والرياضية والإبداعية — إدماج تقنيات الإعلام والاتصال — الشراكة مع مؤسسات التعليم العالي." },
                    { r: "قانون الإطار 51.17", c: "يُكرس الحياة المدرسية ومشروع المؤسسة — يُوجب الانفتاح على محيط العمل (المادة 18) — يُعزز المواكبة النفسية والاجتماعية (المادة 22)." },
                    { r: "النموذج التنموي 2021", c: "الإجراء 12: 20% للأنشطة الفنية والرياضية — الإجراء 65: إعادة الثقافة لموقعها المحوري." },
                    { r: "المرسوم 2.02.376 (2002)", c: "النظام الأساسي لمؤسسات التعليم العمومي — ينظم مجالس المؤسسة وصلاحياتها ودورياتها." },
                  ].map(({ r, c }) => (
                    <tr key={r}>
                      <td className="py-2 pr-4 leading-6 text-right">{c}</td>
                      <td className="py-2 font-bold text-primary-light whitespace-nowrap text-right align-top">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              12 — مقارنة المشاريع الثلاثة
          ══════════════════════════════════════════════ */}
          <section className="soft-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-dark text-right">
              12. ملخص المقارنة بين المشاريع الثلاثة
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm text-text">
                <thead>
                  <tr className="border-b border-border text-right">
                    {["المشروع", "الهدف الأساسي", "الفاعلون الرئيسيون", "المدة"].map((h) => (
                      <th key={h} className="pb-2 pr-4 font-semibold text-dark last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      p: "مشروع المؤسسة",
                      g: "تطوير بيئة التعلم وجودة التعلمات",
                      f: "جميع مكونات المؤسسة والشركاء",
                      d: "متعدد السنوات ودوري",
                      color: "text-blue-600",
                    },
                    {
                      p: "مشروع القسم",
                      g: "تحسين التعلمات ومعالجة الصعوبات",
                      f: "الأستاذ + التلاميذ",
                      d: "مرحلة دراسية أو فصل",
                      color: "text-green-600",
                    },
                    {
                      p: "المشروع الشخصي للمتعلم",
                      g: "بناء مسار دراسي ومهني",
                      f: "المتعلم بمواكبة الأستاذ الرئيس وإطار التوجيه",
                      d: "طول المسار الدراسي",
                      color: "text-purple-600",
                    },
                  ].map(({ p, g, f, d, color }) => (
                    <tr key={p}>
                      <td className={`py-2 pr-4 font-bold whitespace-nowrap text-right ${color}`}>{p}</td>
                      <td className="py-2 pr-4 leading-6 text-right">{g}</td>
                      <td className="py-2 pr-4 leading-6 text-right">{f}</td>
                      <td className="py-2 italic text-text-light text-right">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          

        </div>
      </div>
    </main>
  );
}
