'use strict';

/*
  Azerbaijani text for the site.
  English lives in index.html itself; each element there carries a key
  (data-i18n = plain text, data-i18n-html = text with <strong> etc.,
  data-i18n-ph = form placeholder, data-i18n-cap = full-size image caption).
  To change an Azerbaijani wording, edit the matching line below.
  A key missing here simply stays in English.
*/

const I18N_AZ = {

  // ---- page title and search description ----
  'meta.title': 'Abbasqulu Allahverdili — Data Analitik',
  'meta.desc': 'Abbasqulu Allahverdili — Bakıda yaşayan Data Analitik. SQL, Python, Power BI. Açıq dataset-lər, web scraping və dashboard-lar.',

  // ---- profile card ----
  'side.name': 'Abbasqulu Allahverdili',
  'side.role': 'Data Analitik',
  'side.contacts': 'Əlaqələri göstər',
  'side.cv': 'CV-ni yüklə',

  // ---- menu ----
  'nav.about': 'Haqqımda',
  'nav.resume': 'Rezume',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Əlaqə',

  // ---- About ----
  'about.title': 'Haqqımda',
  'about.intro': 'Bakıda yaşayan Data Analitikəm. Məlumatın bütün dövrü üzərində işləyirəm — <strong>SQL</strong>, <strong>Python</strong>, <strong>Excel</strong> və <strong>Power BI</strong> ilə məlumatı toplayır, təmizləyir, araşdırır və modelləşdirirəm, sonra onu real biznes suallarına cavab verən dashboard-lara çevirirəm.',
  'about.howiwork': 'Necə İşləyirəm',
  'about.svc.title1': '<span class="step-num">1</span>Məlumatın Toplanması',
  'about.svc.text1': 'Verilənlər bazasından <strong>SQL</strong>, internetdən <strong>Python</strong> scraper-ləri ilə — özü işləyəcək şəkildə avtomatlaşdırılmış.',
  'about.svc.title2': '<span class="step-num">2</span>Məlumatın Təmizlənməsi',
  'about.svc.text2': 'Boş dəyərlər, təkrarlar və qarışıq formatlar <strong>Python</strong> və <strong>Excel</strong>-də düzəldilir — rəqəmlər etibarlı olsun deyə.',
  'about.svc.title3': '<span class="step-num">3</span>Kəşfiyyatçı Data Təhlili',
  'about.svc.text3': 'Qanunauyğunluqlar, kənar dəyərlər və əlaqələr bir baxışda oxunan <strong>Power BI</strong> dashboard-larında üzə çıxır.',
  'about.svc.title4': '<span class="step-num">4</span>Modelləşdirmə və Alqoritmlər',
  'about.svc.text4': 'Rəqəmlərin arxasında nə dayandığını izah edən və növbəti addımı proqnozlaşdıran statistik metodlar və alqoritmlər.',

  // ---- Resume ----
  'resume.title': 'Rezume',
  'resume.section1': 'Təhsil',
  'resume.item.title1': 'Yıldız Texniki Universiteti',
  'resume.item.org1': 'Riyaziyyat Mühəndisliyi (Bakalavr) <span class="timeline-date">(2018 — 2022)</span>',
  'resume.item.text1': 'Statistika, xətti cəbr, ədədi üsullar və proqramlaşdırma üzərində qurulmuş təhsil. Qeyri-müəyyən bir problemi modelə, modeli isə kiminsə əsasında qərar verə biləcəyi cavaba çevirməyi burada öyrəndim.',

  'resume.section2': 'Peşəkar Təcrübə',
  'resume.item.title2': 'Biznes Analitiki (Təcrübəçi)',
  'resume.item.org2': 'Bir Ekosistem — Bakı, Azərbaycan <span class="timeline-date">(07/2026 — 09/2026)</span>',
  'resume.item.text2': 'Müştəri ehtiyaclarını, biznes trendlərini və KPI-ları üzə çıxarmaq üçün məlumat toplayıb təhlil etdim, yuxarı rəhbərlik üçün hesabat və təqdimatların hazırlanmasına dəstək oldum. Yeni layihələr üzrə tələblərin toplanmasında, proseslərin xəritələndirilməsində və iş axınının təhlilində iştirak etdim.',
  'resume.item.title3': 'Tədris Assistenti (Təcrübəçi)',
  'resume.item.org3': 'İsrail Azərbaycan Təlim Mərkəzi <span class="timeline-date">(02/2023 — 05/2023)</span>',
  'resume.item.text3': 'Data analitikası kursunda təlimçiyə dəstək oldum: laboratoriyada tələbələrə Python, SQL və statistika üzrə praktik kömək etdim, təhlillərini yoxladım və çətinlik çəkdikləri mövzuları sadə dillə izah etdim.',
  'resume.item.title4': 'Data Analitiki (Təcrübəçi)',
  'resume.item.org4': 'Beynəlxalq Təlim və Layihə Mərkəzi <span class="timeline-date">(09/2021 — 03/2022)</span>',
  'resume.item.text4': 'Statistik üsullarla böyük dataset-ləri təmizləyib təhlil etdim, əməli nəticələr üçün trendləri müəyyənləşdirdim, maraqlı tərəflər üçün hesabat və vizuallar hazırladım.',

  'resume.section3': 'Sertifikatlar və Mükafatlar',
  'resume.credential': 'Sənədə bax',
  'resume.item.title5': 'Data Analyst Professional Certificate',
  'resume.item.org5': 'IBM <span class="timeline-date">(07/2026)</span>',
  'resume.item.title6': 'Data Analitika',
  'resume.item.org6': 'Handex <span class="timeline-date">(07/2026)</span>',
  'resume.item.title7': 'Data Science with Python',
  'resume.item.org7': 'Data SoCool <span class="timeline-date">(05/2024)</span>',
  'resume.item.title8': 'Programming Essentials in Python (PCAP)',
  'resume.item.org8': 'Cisco Networking Academy · OpenEDG Python Institute <span class="timeline-date">(03/2023)</span>',
  'resume.item.title9': 'U-Net Arxitekturasından İstifadə edərək Beyin Şişi Seqmentasiyasının Tədqiqi',
  'resume.item.org9': 'TÜBİTAK · 2209-A Tədqiqat Layihələri Proqramı <span class="timeline-date">(11/2022 — 11/2024)</span>',

  'resume.skills.title1': 'Bacarıqlar',
  'resume.skill.name1': 'Python',
  'resume.skill.note1': 'pandas, NumPy, Matplotlib, Seaborn, BeautifulSoup',
  'resume.skill.name2': 'SQL',
  'resume.skill.note2': 'Oracle, joins, aqreqasiya, window funksiyaları',
  'resume.skill.name3': 'Power BI',
  'resume.skill.note3': 'DAX, data modelləşdirmə, dashboard-lar',
  'resume.skill.name4': 'Excel',
  'resume.skill.note4': 'pivot cədvəllər, lookup-lar, hesabatlıq',
  'resume.skill.name5': 'Web Scraping',
  'resume.skill.note5': 'avtomatlaşdırılmış toplama sistemləri',
  'resume.skill.name6': 'Git',
  'resume.skill.note6': 'versiya nəzarəti',

  'resume.skills.title2': 'Dillər',
  'resume.lang.name1': 'Azərbaycan dili',
  'resume.lang.level1': 'Ana dili',
  'resume.lang.name2': 'Türk dili',
  'resume.lang.level2': 'C1',
  'resume.lang.name3': 'İngilis dili',
  'resume.lang.level3': 'B2',
  'resume.cv': 'Tam CV-ni yüklə (PDF)',

  // ---- Portfolio ----
  'portfolio.title': 'Portfolio',
  'portfolio.intro': 'Qurduğum layihələr — məlumatın toplanması, təhlil və dashboard-lar.',
  'p.viewfull': 'Böyük ölçüdə bax',
  'p.showed': 'TƏHLİL NƏYİ GÖSTƏRDİ',
  'p.tag.dataeng': 'Data mühəndisliyi',
  'p.tag.scraping': 'Web scraping',
  'p.link.github': 'GitHub repo',
  'p.link.notebook': 'Təhlil notebook-u',
  'p.link.tableau': 'Tableau dashboard',
  'p.link.dataset': 'Dataset',
  'p.link.kaggle': 'Kaggle notebook',
  'p.link.file': 'Layihə faylı',
  'p.link.datasetkaggle': 'Kaggle-da dataset',
  'p.link.eda': 'EDA notebook',

  'p.credit.cap': 'Kredit Əvvəlcədən Təsdiq Sistemi — Oracle SQL, LightGBM və Tableau',
  'p.credit.title': 'Kredit Əvvəlcədən Təsdiq Sistemi',
  'p.credit.sub': 'Oracle SQL, LightGBM və Tableau — əvvəldən sonadək',
  'p.credit.text': 'Kredit verən təşkilatın müraciət haqqında necə qərar verdiyi — bəli və ya xeyr, nə qədər və niyə — açıq Home Credit məlumatı üzərində əvvəldən sonadək qurulub. <strong>58.5 milyon xam sətir</strong> Oracle-a yüklənir və 88 sütunlu xüsusiyyət cədvəlinə çevrilir, <strong>kalibrlənmiş LightGBM</strong> modeli defolt ehtimalını hesablayır, qərar mühərriki isə limitlə təsdiqləyir və ya səbəb göstərərək rədd edir. Bütün qaydalar kodda yox, cədvəldə saxlanılır və bütün sistem <strong>bir əmrlə</strong> işləyir — 36 məlumat keyfiyyəti və 12 qərar yoxlaması ilə.',
  'p.credit.findings': '<li>Müraciətçilərin üçdə birini rədd etmək <strong>bütün ödəniş problemlərinin 61.8%-nin</strong> qarşısını aldı: təsdiqlənənlərin 4.7%-də, rədd edilənlərin isə 14.5%-də problem olub.</li><li>Heç bir seçimdə istifadə olunmamış müştərilər üzərində LightGBM klassik scorecard-ı qabaqladı: <strong>Gini 0.572 və 0.504</strong>; kalibrlənmiş orta PD faktiki defolt səviyyəsindən 0.1 faiz bəndindən az fərqlənir.</li><li>Borc qaydası (gəlirin 5 qatı) riskdən yox, ödəmə qabiliyyətindən qoruyur — yalnız bu qayda ilə rədd edilənlərin problem səviyyəsi təsdiqlənənlərə yaxındır (5.1% və 4.7%).</li><li>Risk səbəbilə hər rədd <strong>riski ən çox artıran üç faktı</strong> göstərir (SHAP); halların 87%-də onların arasında xarici kredit balı var.</li>',

  'p.hr.cap': 'HR İşçi Qüvvəsi Analitikası — Oracle SQL və Python',
  'p.hr.title': 'HR İşçi Qüvvəsi Analitikası',
  'p.hr.sub': 'Oracle SQL və Python — əvvəldən sonadək',
  'p.hr.text': 'Oracle-da <strong>10,000 işçidən ibarət sintetik təşkilat</strong> qurub əvvəldən sonadək təhlil etdim. Ağır hesablamalar — window funksiyaları, iyerarxik <strong>CONNECT BY</strong> sorğuları, percentile-lər — <strong>birbaşa verilənlər bazasında</strong> icra olunur; Python isə nəticələrin şərhi üçündür. Hər sorğu notebook içində sətir kimi yox, <code>sql/</code> qovluğunda ayrıca, yoxlanıla bilən fayl kimi saxlanılır.',
  'p.hr.findings': '<li>Vəzifə yüksəlişini <strong>performansdan çox mövcud imkan</strong> müəyyən edir — bir şöbə sadəcə hər yüksək vəzifəyə 6.6 junior düşdüyü üçün işçilərinin 14.5%-ni yüksəldir.</li><li>Sabit 24 aylıq müşahidə pəncərəsi hansı işə qəbul qruplarının "az yüksəldilmiş" göründüyünü tərsinə çevirir — çərçivə nəticəni dəyişir.</li><li>Bir iyerarxiya sorğusunu korrelyasiyalı subquery-dən öncədən aqreqasiya edilmiş CTE-yə yenidən yazdım: <strong>85.6s → 0.06s, ~1,400× sürətli</strong>, nəticə eyni.</li>',

  'p.boston.cap': 'Boston Cinayət Təhlili — EDA və ciddilik proqnozu',
  'p.boston.title': 'Boston Cinayət Təhlili',
  'p.boston.sub': 'EDA və ciddilik proqnozu',
  'p.boston.text': '<strong>~319,000 Boston cinayət qeydinin</strong> (2015–2018) əvvəldən sonadək təhlili: nə baş verir, nə vaxt və harada — sonra yalnız zaman və məkanla hadisənin nə qədər ciddi olduğunu proqnozlaşdırmağa çalışan <strong>Random Forest</strong>. Ən çətini model deyildi: Latin-1 kodlaşdırması, natamam illər və yanlış koordinatlar idi.',
  'p.boston.findings': '<li>"Cinayət"in çoxu zorakılıq deyil — ən çox çağırışlar nəqliyyat, tibbi yardım və araşdırmalarla bağlıdır. Ciddi cinayətlər məlumatın cəmi <strong>~19%-dir</strong>.</li><li>Cinayətin ritmi var: <strong>yay axşamları (16:00–18:00)</strong> pik edir və həftəsonu gecələri boyunca aktiv qalır.</li><li>Zorakılıq cəmlənir — atışmalar hadisələrin 0.32%-dir, amma <strong>74%-i cəmi 3 rayonda</strong> baş verir, əsasən gecə saatlarında.</li><li>Yalnız zaman və məkanla (məlumat sızmasının qarşısını almaq üçün cinayət növü olmadan) model <strong>ROC-AUC 0.60</strong>-a çatdı — təvazökar, amma real siqnal.</li>',

  'p.churn.cap': 'Kredit Kartı Churn Təhlili — Power BI dashboard',
  'p.churn.title': 'Kredit Kartı Churn Təhlili',
  'p.churn.sub': 'İnteraktiv Power BI dashboard',
  'p.churn.text': 'Kredit kartı müştərilərinin niyə getdiyini və müştərini saxlamaq səyinin harada özünü doğrultduğunu araşdıran dashboard. Təmizləmə üçün <strong>Power Query</strong>, göstəricilər üçün <strong>DAX</strong>, bütün hesabatı cins, kart və gəlirə görə süzən slicer-lər. <strong>10,127 müştəri</strong> təhlil olunub.',
  'p.churn.findings': '<li>Ümumi churn <strong>16.07%-dir</strong> — amma ən çox <strong>3 ay aktiv olmayan</strong> müştərilər gedir; bu, vaxtında reaksiya verməyə dəyən erkən xəbərdarlıq siqnalıdır.</li><li><strong>Aşağı gəlirli</strong> müştərilər ($40K-dan az) ən çox gedir, daha çox məhsuldan istifadə etdikcə isə churn kəskin azalır — çarpaz satış müştərini saxlamaq üçün vasitədir.</li><li>Ən çox churn <strong>46–55</strong> yaş qrupundadır.</li>',

  'p.oxu.cap': 'Oxu.az Xəbər Bazası — 52,946 Azərbaycan dilində xəbər məqaləsi',
  'p.oxu.title': 'Oxu.az',
  'p.oxu.sub': 'Xəbər bazası — 52,946 məqalə',
  'p.oxu.text': 'Azərbaycan dilində dataset-lər azdır, ona görə özüm birini qurdum. Python sistemi 13 kateqoriyanın arxivini gəzir və 2013-cü ildən bəri dərc olunmuş hər məqalənin başlığını, tarixini, müəllifini və oxucu reaksiyalarını toplayır — cəmi <strong>52,946 məqalə</strong>.',
  'p.oxu.findings': '<li><strong>İdman</strong> ən çox yazılan kateqoriyadır (5,812 məqalə), amma ən çox <strong>Cəmiyyət</strong> oxunur — redaksiyanın fokusu ilə oxucu marağı üst-üstə düşmür.</li><li>Mədəniyyət, turizm, İKT və şou-biznesdə <strong>median məqalə sıfır bəyənmə</strong> alır. İdman və siyasətdə hər bəyənməməyə təxminən üç bəyənmə düşür. İnsanlar sakit kateqoriyaları oxuyur, sadəcə düyməni basmırlar.</li><li>Qısa başlıqlar (1–4 söz) bir az daha çox reaksiya toplayır — amma fərq deyildiyindən kiçikdir.</li>',

  'p.superstore.cap': 'Global Superstore — interaktiv Excel dashboard',
  'p.superstore.title': 'Global Superstore',
  'p.superstore.sub': 'İnteraktiv Excel dashboard',
  'p.superstore.text': 'Global Superstore dataset-i üzərində tam interaktiv dashboard: təmizləmə və transformasiya üçün <strong>Power Query</strong>, model və göstəricilər üçün <strong>Power Pivot və DAX</strong>, görünən hissə üçün PivotChart-lar və slicer-lər.',
  'p.superstore.findings': '<li>Satışda <strong>Central</strong> $2.8M ilə liderdir; ən yüksək marja 20% ilə <strong>North Asia</strong>-dadır.</li><li>Office Supplies daha çox satılsa da, mənfəəti <strong>Technology</strong> gətirir — həcm və mənfəət eyni hekayə deyil.</li><li><strong>Southeast Asia</strong> 2% marjadadır. İclasa dəyən rəqəm budur.</li>',

  // ---- Contact ----
  'contact.title': 'Əlaqə',
  'contact.lead': 'Hər dataset-in bir hekayəsi var. Sizinkini danışın.',
  'contact.formtitle': 'Əlaqə Formu',
  'contact.ph.name': 'Ad və soyad',
  'contact.ph.email': 'E-poçt ünvanı',
  'contact.ph.message': 'Mesajınız',
  'contact.send': 'Göndər',

  // ---- small labels used by script.js ----
  'ui.lang.title': 'Switch to English',
  'ui.theme.title': 'Temanı dəyiş'
};

// CV file per language
const CV_FILES = {
  en: './assets/doc/CV_Abbasgulu_Allahverdili_ENG.pdf',
  az: './assets/doc/CV_Abbasgulu_Allahverdili_AZ.pdf'
};
