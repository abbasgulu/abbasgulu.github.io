'use strict';

/* Bilingual dictionary. English is the default (also the source text in HTML);
   Azerbaijani strings come from the AZ CV. Keys match data-i18n / data-i18n-html
   / data-i18n-ph attributes in index.html. */

const I18N = {
  az: {
    // nav
    'nav.about': 'Haqqımda',
    'nav.resume': 'Rezüme',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Əlaqə',

    // sidebar / hero
    'hero.role': 'Data Analitik',
    'sidebar.contacts': 'Əlaqələri göstər',
    'sidebar.downloadcv': 'CV-ni yüklə',

    // about
    'about.title': 'Haqqımda',
    'about.intro': 'Bakıda yaşayan Data Analitik. Məlumatın bütün həyat dövrü ilə işləyirəm — <strong>SQL</strong>, <strong>Python</strong>, <strong>Excel</strong> və <strong>Power BI</strong> ilə toplayır, təmizləyir, araşdırır və modelləşdirir — sonra bunu real biznes suallarına cavab verən dashboard-lara çevirirəm.',
    'about.howiwork': 'Necə İşləyirəm',
    'svc.1.title': 'Məlumat Toplama',
    'svc.1.text': 'Verilənlər bazaları <strong>SQL</strong> ilə, veb isə <strong>Python</strong> scraper-ləri ilə — özü işləyəcək şəkildə avtomatlaşdırılmış.',
    'svc.2.title': 'Məlumat Təmizləmə',
    'svc.2.text': 'Çatışmayan dəyərlər, təkrarlar və qarışıq formatlar <strong>Python</strong> və <strong>Excel</strong>-də düzəldilir — rəqəmlər etibarlı olsun deyə.',
    'svc.3.title': 'Kəşfiyyatçı Data Təhlili',
    'svc.3.text': 'Nümunələr, kənar dəyərlər və əlaqələr <strong>Power BI</strong> dashboard-larında bir baxışda oxunacaq şəkildə üzə çıxarılır.',
    'svc.4.title': 'Modelləşdirmə və Alqoritmlər',
    'svc.4.text': 'Rəqəmləri nəyin idarə etdiyini izah edən və növbətini proqnozlaşdıran statistik metodlar və alqoritmlər.',

    // resume
    'resume.title': 'Rezüme',
    'resume.edu': 'Təhsil',
    'resume.exp': 'Təcrübə',
    'resume.certs': 'Sertifikatlar və Mükafatlar',
    'resume.skills': 'Bacarıqlar',
    'resume.langs': 'Dillər',
    'resume.credential': 'Sənədə bax',
    'resume.downloadcv': 'Tam CV-ni yüklə (PDF)',
    'date.present': 'İndi',

    // education
    'edu.yildiz.title': 'Yıldız Texniki Universiteti',
    'edu.yildiz.deg': 'Riyaziyyat Mühəndisliyi (Bakalavr)',
    'edu.yildiz.text': 'Statistika, xətti cəbr, ədədi üsullar və proqramlaşdırma üzərində qurulmuş təhsil. Məhz orada qeyri-müəyyən problemi modelə, modeli isə kiminsə hərəkətə keçə biləcəyi cavaba çevirməyi öyrəndim.',

    // experience
    'exp.bir.title': 'Biznes Analitiki (Təcrübəçi)',
    'exp.bir.org': 'Bir Ekosistem — Bakı, Azərbaycan',
    'exp.bir.text': 'Məlumatları toplayıb təhlil edərək müştəri ehtiyacları, biznes trendləri və əsas fəaliyyət göstəricilərini (KPI) müəyyənləşdirir, yuxarı rəhbərlik üçün hazırlanan hesabat və təqdimatlara dəstək oluram. Həmçinin yeni layihələr üzrə tələblərin toplanması, proseslərin xəritələndirilməsi və iş axınının təhlilində iştirak edirəm.',
    'exp.ta.title': 'Tədris Assistenti (Təcrübəçi)',
    'exp.ta.org': 'İsrail Azərbaycan Təlim Mərkəzi',
    'exp.ta.text': 'Data analitikası kursunda təlimçiyə dəstək oldum: tələbələrə laboratoriyada Python, SQL və statistika üzrə praktik köməklik göstərdim, təhlillərini nəzərdən keçirdim və çətinlik çəkdikləri konseptləri sadələşdirdim.',
    'exp.da.title': 'Data Analitiki (Təcrübəçi)',
    'exp.da.org': 'Beynəlxalq Təlim və Layihə Mərkəzi',
    'exp.da.text': 'Statistik üsullardan istifadə edərək böyük dataset-ləri təmizlədim və təhlil etdim, hərəkətə keçirici tapıntılar üçün trendləri müəyyənləşdirdim və maraqlı tərəflər üçün hesabat və vizuallar hazırladım.',

    // languages
    'lang.az': 'Azərbaycan dili',
    'lang.az.level': 'Ana dili',
    'lang.tr': 'Türk dili',
    'lang.en': 'İngilis dili',

    // award
    'award.tubitak.title': 'U-Net Arxitekturasından İstifadə edərək Beyin Şişi Seqmentasiyasının Tədqiqi',
    'award.tubitak.org': 'TÜBİTAK · 2209-A Tədqiqat Layihələri Proqramı',

    // portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.intro': 'Qurduğum layihələr — məlumat toplama, təhlil və dashboard-lar.',

    // project links
    'link.github': 'GitHub deposu',
    'link.notebook': 'Təhlil notebook-u',
    'link.dataset': 'Dataset',
    'link.kagglenb': 'Kaggle notebook',
    'link.projectfile': 'Layihə faylı',
    'link.edanb': 'EDA notebook',
    'link.viewfull': 'Tam ölçüdə bax',

    // HR project
    'hr.subline': 'Oracle SQL və Python — Əvvəldən Sonadək',
    'hr.text': '<strong>10,000 işçidən</strong> ibarət sintetik təşkilat Oracle-də qurdum, sonra əvvəldən sonadək təhlil etdim. Ağır hesablamalar — window funksiyaları, ierarxik <strong>CONNECT BY</strong> sorğuları, percentile-lər — <strong>birbaşa verilənlər bazasında</strong> icra olunur; Python isə şərh üçündür. Hər sorğu notebook-da sətir kimi yox, <code>sql/</code> qovluğunda nəzərdən keçirilə bilən fayl kimi saxlanılır.',
    'hr.showed': 'Təhlil nəyi göstərdi',
    'hr.findings': '<li>Vəzifə yüksəlişləri <strong>performansdan çox imkanla</strong> bağlıdır — bir şöbə sadəcə hər yüksək vəzifəyə 6.6 junior düşdüyü üçün işçilərinin 14.5%-ni yüksəldir.</li><li>Sabit 24 aylıq müşahidə pəncərəsi hansı kohortların "az yüksəldilmiş" göründüyünü dəyişir — çərçivə tapıntını dəyişir.</li><li>Bir ierarxiya sorğusunu korrelyasiyalı subquery-dən öncədən aqreqasiya edilmiş CTE-yə yenidən yazdım: <strong>85.6s → 0.06s, ~1,400× daha sürətli</strong>, eyni nəticə ilə.</li>',

    // Boston project
    'boston.subline': 'EDA və Ciddiyət Proqnozu',
    'boston.text': '<strong>~319,000 Boston cinayət qeydinə</strong> (2015–2018) əvvəldən sonadək baxış: nə baş verir, nə vaxt və harada — sonra yalnız zaman və məkanla hadisənin nə qədər ciddi olduğunu proqnozlaşdıran <strong>Random Forest</strong>. Ən çətin hissə model deyildi; Latin-1 kodlaşdırma, natamam illər və yanlış koordinatlar idi.',
    'boston.showed': 'Məlumat nəyi göstərdi',
    'boston.findings': '<li>Cinayətlərin çoxu zorakılıq deyil — əsas çağırışlar nəqliyyat, tibbi yardım və istintaqdır. Ciddi hadisələr məlumatın yalnız <strong>~19%-dir</strong>.</li><li>Cinayətin ritmi var: <strong>yay axşamları (16–18)</strong> pik edir və həftəsonu gecələri boyu aktiv qalır.</li><li>Zorakılıq cəmlənir — atışmalar hadisələrin 0.32%-dir, amma <strong>74%-i cəmi 3 rayona</strong> düşür, əsasən gec gecə.</li><li>Yalnız zaman və məkanla (sızmadan qaçmaq üçün hadisə növü olmadan) model <strong>ROC-AUC 0.60</strong>-a çatdı — təvazökar, amma real siqnal.</li>',

    // Churn project
    'churn.subline': 'İnteraktiv Power BI Dashboard',
    'churn.text': 'Kredit kartı müştərilərinin niyə getdiyini və saxlama səyinin harada faydalı olduğunu araşdıran dashboard. Təmizləmə üçün <strong>Power Query</strong>, ölçülər üçün <strong>DAX</strong>, və bütün hesabatı cins, kart və gəlirə görə filtrləyən slicer-lər. <strong>10,127 müştəri</strong> təhlil olundu.',
    'churn.showed': 'Məlumat nəyi göstərdi',
    'churn.findings': '<li>Ümumi churn <strong>16.07%-dir</strong> — amma <strong>3 ay aktiv olmayan</strong> müştərilər ən çox gedir, bu, hərəkətə dəyən erkən siqnaldır.</li><li><strong>Aşağı gəlirli</strong> müştərilər (<$40K) ən çox churn edir, insanlar daha çox məhsul saxladıqca churn kəskin düşür — cross-selling saxlama alətidir.</li><li><strong>46–55</strong> yaş qrupu ən yüksək churn sayını daşıyır.</li>',

    // Oxu project
    'oxu.subline': 'Xəbər Bazası — 52,946 məqalə',
    'oxu.text': 'Yerli dildə dataset-lər azdır, ona görə özüm qurdum. Python pipeline 13 kateqoriyanın arxivini gəzir və 2013-dən bəri dərc olunmuş hər məqalənin başlığını, tarixini, müəllifini və oxucu reaksiyalarını toplayır — <strong>cəmi 52,946 məqalə</strong>.',
    'oxu.showed': 'Təhlil nəyi göstərdi',
    'oxu.findings': '<li><strong>İdman</strong> ən çox yazılan kateqoriyadır (5,812 məqalə), amma <strong>Cəmiyyət</strong> ən çox oxunandır — redaksiya fokusu ilə auditoriya marağı üst-üstə düşmür.</li><li>Bəzi kateqoriyalarda <strong>median məqalə sıfır bəyənmə</strong> alır. İnsanlar sakit kateqoriyaları oxuyur, sadəcə düyməyə basmır.</li><li>Qısa başlıqlar (1–4 söz) cüzi əlaqə üstünlüyü saxlayır — folklorun dediyindən kiçik.</li>',

    // Superstore project
    'superstore.subline': 'İnteraktiv Excel Dashboard',
    'superstore.text': 'Global Superstore dataset-i üzərində tam interaktiv dashboard: təmizləmə və transformasiya üçün <strong>Power Query</strong>, model və ölçülər üçün <strong>Power Pivot və DAX</strong>, ön hissə üçün PivotChart-lar və slicer-lər.',
    'superstore.showed': 'Məlumat nəyi göstərdi',
    'superstore.findings': '<li><strong>Central</strong> $2.8M satışla liderdir; <strong>North Asia</strong> 20% ilə ən yaxşı marjaya malikdir.</li><li><strong>Technology</strong> mənfəəti idarə edir, hərçənd Office Supplies daha çox vahid satır — həcm və mənfəət eyni hekayə deyil.</li><li><strong>Southeast Asia</strong> 2% marjadadır. Bu, iclasa dəyər rəqəmdir.</li>',

    // contact
    'contact.title': 'Əlaqə',
    'contact.lead': 'Hər dataset-in bir hekayəsi var. Öz hekayəni danış.',
    'contact.formtitle': 'Əlaqə Formu',
    'form.name': 'Ad, Soyad',
    'form.email': 'E-poçt ünvanı',
    'form.message': 'Mesajınız',
    'form.send': 'Mesaj Göndər',
  }
};

// language-aware CV files
const CV_LINKS = {
  en: './assets/doc/CV_Abbasgulu_Allahverdili_ENG.pdf',
  az: './assets/doc/CV_Abbasgulu_Allahverdili_AZ.pdf',
};
