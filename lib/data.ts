import {
  BadgeCheck,
  Clock3,
  Gem,
  HeartHandshake,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const brandName = "GRGN Güzellik";
export const whatsappNumber = "05301159374";
export const demoWhatsAppMessage =
  "Merhaba, GRGN Creative sitesinden GRGN Güzellik demo yapısı için geliyorum. Bu sistemi kendi markam için kurdurmak istiyorum.";

export const navItems = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Lazer Rehberi", href: "#assistant" },
  { label: "Süreç", href: "/#surec" },
  { label: "SSS", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

export const stats = [
  { value: "8+", label: "Yıllık uzman deneyim" },
  { value: "2.000+", label: "Memnun danışan" },
  { value: "%96", label: "Memnuniyet odaklı geri dönüş" },
];

export const aboutPoints = [
  {
    title: "Uzman protokol",
    description: "Her cilt yapısı ve uygulama bölgesi için özenle planlanan kişisel bakım yaklaşımı.",
    icon: ShieldCheck,
  },
  {
    title: "Premium deneyim",
    description: "Sessiz, steril ve konforlu bir ortamda kendinizi özel hissedeceğiniz bir deneyim.",
    icon: Gem,
  },
  {
    title: "Hızlı iletişim",
    description: "WhatsApp üzerinden kolayca bilgi alın, sürecinizi beklemeden başlatın.",
    icon: MessageCircleMore,
  },
];

export type ServiceItem = {
  title: string;
  description: string;
  detail: string;
  benefits: string[];
  modalCta: string;
  whatsappCta: string;
  featured?: boolean;
};

export const allServices: ServiceItem[] = [
  {
    title: "Lazer Epilasyon",
    description: "Pürüzsüz ve bakımlı bir görünüm için konfor odaklı seans planlaması.",
    detail:
      "Yüz, kol, bacak ve tüm vücut bölgelerinde cilt yapınıza uygun bir planlama ile rahat, düzenli ve özenli bir lazer deneyimi sunulur.",
    benefits: [
      "Cilt yapınıza uygun seans planı",
      "Konforu yüksek uygulama süreci",
      "Düzenli takip ve uzman yönlendirmesi",
    ],
    modalCta: "Bilgi al",
    whatsappCta: "WhatsApp'tan bilgi al",
    featured: true,
  },
  {
    title: "Erkek Lazer Epilasyon",
    description: "Erkek danışanlar için güçlü, düzenli ve kontrollü uygulama planı.",
    detail:
      "Sırt, göğüs, omuz, ense ve yüz gibi bölgelerde tüy yapınıza uygun, net ve profesyonel bir seans akışı hazırlanır.",
    benefits: [
      "Erkek tüy yapısına uygun planlama",
      "Hedef bölgeye göre doğru seans düzeni",
      "Konforlu ve güven veren uygulama ortamı",
    ],
    modalCta: "Detaylı bilgi al",
    whatsappCta: "Hemen danış",
    featured: true,
  },
  {
    title: "Cilt Bakımı",
    description: "Cilde daha canlı, dengeli ve aydınlık bir görünüm kazandıran bakım akışı.",
    detail:
      "Cildinizin ihtiyacına göre şekillenen bakım planı ile daha taze, dinlenmiş ve bakımlı bir görünüm hedeflenir.",
    benefits: [
      "Cilde uygun kişisel bakım planı",
      "Daha aydınlık ve dinlenmiş görünüm",
      "Bakım öncesi ve sonrası profesyonel öneriler",
    ],
    modalCta: "Size özel bakım planı",
    whatsappCta: "Size özel planı öğren",
    featured: true,
  },
  {
    title: "Altın Oran Kaş Alımı",
    description: "Yüz hattınıza uyumlu, doğal ve dengeli kaş formu için rafine uygulama.",
    detail:
      "Yüz proporsiyonunuza göre tasarlanan kaş formu ile daha düzenli, zarif ve doğal bir ifade desteklenir.",
    benefits: [
      "Yüz şekline uygun kaş tasarımı",
      "Doğal ve dengeli görünüm",
      "Özenli ve kontrollü uygulama",
    ],
    modalCta: "Kaş tasarımını öğren",
    whatsappCta: "WhatsApp'tan sor",
  },
  {
    title: "Dermapen",
    description: "Cilt görünümünü tazelemeye ve daha sağlıklı bir doku hissi oluşturmaya yönelik bakım.",
    detail:
      "Cilt yenilenme sürecini destekleyen profesyonel dermapen uygulaması ile daha canlı ve düzenli bir görünüm hedeflenir.",
    benefits: [
      "Cilt dokusunu destekleyen uygulama",
      "Canlı ve dengeli görünüm hedefi",
      "Kontrollü ve profesyonel bakım akışı",
    ],
    modalCta: "Dermapen hakkında bilgi al",
    whatsappCta: "Bilgi al",
    featured: true,
  },
  {
    title: "Protez Tırnak",
    description: "Bakımlı, güçlü ve zarif tırnak görünümü için profesyonel uygulama.",
    detail:
      "Günlük kullanım konforunu gözeten, temiz ve estetik sonuç hedefleyen protez tırnak uygulaması ile daha özenli bir görünüm sunulur.",
    benefits: [
      "Daha düzenli ve bakımlı görünüm",
      "Güçlü ve estetik tırnak formu",
      "Konforu gözeten uygulama süreci",
    ],
    modalCta: "Tırnak uygulamasını incele",
    whatsappCta: "Randevu bilgisi al",
  },
  {
    title: "Microblading",
    description: "Doğal kaş görünümünü güçlendiren zarif ve kalıcı bir uygulama.",
    detail:
      "Kaş formunu daha belirgin ve dengeli hale getiren microblading uygulaması ile yüz ifadenize uyumlu sonuçlar hedeflenir.",
    benefits: [
      "Doğal kaş görünümü",
      "Yüz hattına uyumlu tasarım",
      "Özenli ve kontrollü işlem akışı",
    ],
    modalCta: "Microblading bilgisi al",
    whatsappCta: "WhatsApp'tan bilgi al",
  },
  {
    title: "Kalıcı Makyaj",
    description: "Gün boyu düzenli ve rafine görünüm için profesyonel kalıcı makyaj uygulaması.",
    detail:
      "Dudak, dipliner veya kaş gibi bölgelerde doğal etkiyi koruyarak daha belirgin ve bakımlı bir görünüm amaçlanır.",
    benefits: [
      "Doğal ama belirgin sonuçlar",
      "Günlük rutinde pratiklik",
      "Yüz yapısına göre kişisel planlama",
    ],
    modalCta: "Kalıcı makyaj detayları",
    whatsappCta: "Size özel planı öğren",
    featured: true,
  },
  {
    title: "EMS",
    description: "Kas aktivasyonunu destekleyen düzenli ve profesyonel vücut bakım uygulaması.",
    detail:
      "Hedef bölgelere odaklı EMS planlaması ile daha sıkı, düzenli ve kontrollü bir bakım süreci sunulur.",
    benefits: [
      "Hedef bölgeye odaklı planlama",
      "Düzenli bakım desteği",
      "Kısa ve verimli seans akışı",
    ],
    modalCta: "EMS hakkında bilgi al",
    whatsappCta: "Bilgi al",
  },
  {
    title: "Bölgesel İncelme",
    description: "Daha dengeli ve fit bir görünüm hedefleyen profesyonel bölgesel bakım planı.",
    detail:
      "Bel, basen, karın veya bacak gibi bölgelerde size uygun cihaz ve uygulama planı ile düzenli bir bakım akışı oluşturulur.",
    benefits: [
      "Hedef bölgeye göre planlanan seanslar",
      "Daha fit ve dengeli görünüm hedefi",
      "Yakın takip ve kişisel yönlendirme",
    ],
    modalCta: "İncelme planını öğren",
    whatsappCta: "Hemen danış",
    featured: true,
  },
  {
    title: "Ücretsiz Cilt Analizi",
    description: "Cildinizin ihtiyaçlarını netleştirmek için ilk adımda sıcak ve profesyonel değerlendirme.",
    detail:
      "Cilt tipinizi, ihtiyaçlarınızı ve bakım önceliklerinizi daha doğru belirlemek için ücretsiz ön değerlendirme sunulur.",
    benefits: [
      "Cilt ihtiyaçlarını netleştiren analiz",
      "Doğru bakım planına başlangıç",
      "Ücretsiz ön görüşme imkanı",
    ],
    modalCta: "Analiz için bilgi al",
    whatsappCta: "Ücretsiz analiz talep et",
  },
];

export const featuredServices = allServices.filter((service) => service.featured).slice(0, 6);

export const processSteps = [
  {
    title: "1. İlk değerlendirme",
    description: "Cilt yapınız, tüy özellikleriniz ve ihtiyacınız özenle dinlenir.",
    icon: WandSparkles,
  },
  {
    title: "2. Size özel plan",
    description: "Uygulama bölgesi ve seans düzeni size uygun şekilde netleştirilir.",
    icon: BadgeCheck,
  },
  {
    title: "3. Konforlu uygulama",
    description: "Steril ve sakin ortamda, güven veren bir seans deneyimi sunulur.",
    icon: HeartHandshake,
  },
  {
    title: "4. Özenli takip",
    description: "Seans aralıkları ve bakım önerileri düzenli olarak sizinle paylaşılır.",
    icon: Clock3,
  },
];

export const benefits = [
  "Uzman ekip ve premium cihazlarla güven veren uygulama",
  "WhatsApp üzerinden hızlı ve kolay ön görüşme",
  "Temiz, sakin ve konforlu salon deneyimi",
  "Cilt yapınıza uygun, kişiselleştirilmiş bakım akışı",
];

export const faqs = [
  {
    question: "Lazer epilasyon kaç seans sürer?",
    answer:
      "Seans sayısı cilt yapısı, tüy yoğunluğu ve uygulama bölgesine göre değişir. İlk görüşmede size uygun bir plan oluşturularak süreç daha net ve rahat şekilde anlatılır.",
  },
  {
    question: "Acı hissedilir mi?",
    answer:
      "Hissedilen duyum kişiden kişiye değişebilir; ancak doğru cihaz ayarı ve özenli uygulama ile sürecin olabildiğince konforlu geçmesi hedeflenir. Danışanlarımızın büyük kısmı süreci rahat ve yönetilebilir bulur.",
  },
  {
    question: "Cilt bakımı kaç seans yapılmalı?",
    answer:
      "Cildinizin ihtiyacına ve beklediğiniz etkiye göre seans sayısı belirlenir. Bazen tek seans bile ferah bir görünüm sağlarken, daha kalıcı ve dengeli bir sonuç için düzenli bakım önerilebilir.",
  },
  {
    question: "Sonuçlar ne zaman görülür?",
    answer:
      "İlk etkiler bazen kısa sürede fark edilir, daha belirgin sonuçlar ise düzenli seanslarla netleşir. Sürecin sizin için nasıl ilerleyeceği ilk değerlendirmede açık ve sade şekilde paylaşılır.",
  },
  {
    question: "Erkek lazer epilasyon yapılır mı?",
    answer:
      "Evet, erkek danışanlar için de farklı bölgelere uygun uygulama planları hazırlanabilir. Tüy yapısı ve beklentinize göre size özel bir seans düzeni belirlenir.",
  },
];

export const testimonials = [
  {
    name: "Elif Yılmaz",
    initials: "EY",
    comment:
      "İlk seanstan sonra bile farkı hissettim. Ortam çok sakindi, kendimi gerçekten güvende ve özenle karşılanmış hissettim.",
  },
  {
    name: "Zeynep Kara",
    initials: "ZK",
    comment:
      "Sürecin başından sonuna kadar çok rahat ettim. Her şey o kadar incelikliydi ki içim son derece rahattı.",
  },
  {
    name: "Seda Demir",
    initials: "SD",
    comment:
      "Kesinlikle tavsiye ederim. Hem aldığım sonuç hem de iletişimdeki sıcaklık sayesinde tekrar tekrar tercih edeceğim bir yer oldu.",
  },
];

export const serviceAreas = [
  "Halıkent",
  "Fatih",
  "Emre",
  "Bahçelievler",
  "Çünür",
  "Davraz",
  "Modernevler",
];

export const contactCards = [
  {
    title: "Konum",
    value: "Isparta merkez ve yakın bölgelere ulaşılabilir hizmet",
    icon: Sparkles,
  },
  {
    title: "Çalışma Saatleri",
    value: "Pzt - Cmt / 10:00 - 20:00",
    icon: Clock3,
  },
  {
    title: "Ön Görüşme",
    value: "WhatsApp üzerinden sıcak ve hızlı geri dönüş",
    icon: MessageCircleMore,
  },
];
