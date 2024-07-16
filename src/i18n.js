import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome to react",
          plans: "PLANS",
          all: "ALL",
          "theme park": "THEME PARK",
          packages: "PACKAGES",
          parkour: "PARKOUR",
          adult: "Adult",
          child: "Child",
          baby: "Baby",
          buy: "Buy",
          "Daily Ticket": "Daily Ticket",
          dailyTicketDetails: "Includes entry to the theme park for one day.",
          "Silver Package": "Silver Package",
          silverPackageDetails:
            "Includes: Vialand Theme Park entry, Parkur (All courses), 1 photo",
          "Gold Package": "Gold Package",
          goldPackageDetails:
            "Includes: Vialand Theme Park entry, Parkur (All courses), Upside Down House, Zipline, Hamburger, Menü (Hamburger and Chips), 1 photo",
          "Diamond Package": "Diamond Package",
          diamondPackageDetails:
            "Includes: Vialand Theme Park entry, FastPass, Parkur (All courses), Upside Down House, Zipline, Pizza/Pide, Ice Cream, 1 photo",
          "High Rope Parkour": "High Rope Parkour",
          highRopeParkourDetails:
            "Includes: High Rope Parkour entry for one person.",
          "Net Parkour": "Net Parkour",
          netParkourDetails:
            "A 2-storey giant spider web platform, 20 different games, take the first step and let the excitement begin.",

          "Net Trampoline": "Net Trampoline",
          netTrampolineDetails:
            "Forget the Trampolines you've seen before, this 2-storey giant net trampoline is unlike anything you've ever seen.",
          "Tubby Slide": "Tubby Slide",
          tubbySlideDetails:
            "It will give you the excitement of rafting with an artificial ski platform and special boats. Are you ready to go down 30 meters?",
          "Climbing Wall": "Climbing Wall",
          climbingWallDetails:
            "It has 8 different themes, is 7.5 meters high and is much more than an ordinary climbing wall. Are you ready to try it?",
          "Parkour Bundle": "Parkour Bundle",
          parkurBundleDetails:
            "It covers all High Rope Parkour-Net Parkour-Net Trampoline-Climbing Wall-Tubby Slide Products..",
          "Total Cost": "Total Cost",
          qr: "QR code will be sent to your mobile phone for entry. The ticket is only valid on the above date.",
          contact: "Contact",
          name: "Name",
          surname: "Surname",
          phone: "Phone",
          email: "Email",
          country: "Country",
          city: "City",
          idNumber: "ID Number",
          validate: "Only Turkish citizens ID numbers (TCKN) are valid.",
          address: "Address (Street, Neighborhood Number)",
          checkbox1: "Billing information should be the same.",
          checkbox2:
            "I have read and understood the <2>information notice</2> regarding the processing of my personal data.",
          checkbox3:
            "I give explicit consent to the processing and sharing of my personal data for the purpose of presenting advantageous offers to me. <1>Explicit consent</1>.",
          checkbox4:
            "I accept the sending of <2>electronic communications</2> to me.",
          payment: "PROCEED TO PAYMENT",
          date: "Date",
          locale: "en-US",
        },
      },
      tr: {
        translation: {
          welcome: "React'e hoş geldiniz",
          plans: "PLANLAR",
          all: "TÜMÜ",
          "theme park": "TEMA PARK",
          packages: "PAKETLER",
          parkour: "PARKUR",
          adult: "Yetişkin",
          child: "Çocuk",
          baby: "Bebek",
          buy: "Satın al",
          "Daily Ticket": "Günlük Bilet",
          dailyTicketDetails: "Bir günlük tema parkı girişini içerir.",
          "Silver Package": "Gümüş Paket",
          silverPackageDetails:
            "İçerir: Vialand Tema Parkı girişi, Parkur (Tüm parkurlar), 1 fotoğraf",
          "Gold Package": "Altın Paket",
          goldPackageDetails:
            "İçerir: Vialand Tema Parkı girişi, Parkur (Tüm parkurlar), Ters Ev, Zipline, Hamburger, Menü (Hamburger ve Patates), 1 fotoğraf",
          "Diamond Package": "Elmas Paket",
          diamondPackageDetails:
            "İçerir: Vialand Tema Parkı girişi, FastPass, Parkur (Tüm parkurlar), Ters Ev, Zipline, Pizza/Pide, Dondurma, 1 fotoğraf",
          "High Rope Parkour": "Yüksek Halat Parkuru",
          highRopeParkourDetails:
            "Bir kişi için Yüksek Halat Parkuru girişini içerir.",
          "Net Parkour": "Ağ Parkuru",
          netParkourDetails:
            "2 katlı dev örümcek ağı platformu, 20 farklı oyun, ilk adımı atın ve heyecan başlasın.",
          "Net Trampoline": "Ağ Trambolin",
          netTrampolineDetails:
            "Daha önce gördüğünüz Trambolinleri unutun, bu 2 katlı dev ağ trambolin hiç görmediğiniz bir şeydir.",
          "Tubby Slide": "Tüplü Kaydırak",
          tubbySlideDetails:
            "Bu, yapay kayak platformu ve özel teknelerle rafting heyecanını size yaşatacak. 30 metre aşağı inmeye hazır mısınız?",
          "Climbing Wall": "Tırmanma Duvarı",
          climbingWallDetails:
            "8 farklı temaya sahiptir, 7.5 metre yüksekliğindedir ve sıradan bir tırmanma duvarından çok daha fazlasıdır. Denemeye hazır mısınız?",
          "Parkour Bundle": "Parkur Paketi",
          parkurBundleDetails:
            "Tüm Yüksek Halat Parkuru-Ağ Parkuru-Ağ Trambolin-Tırmanma Duvarı-Tüplü Kaydırak Ürünlerini kapsar..",
          "Total Cost": "Genel Toplam",
          qr: "Giriş için QR kodunuz cep telefonunuza gönderilecektir. Bilet yalnızca yukarıdaki tarihte geçerlidir.",
          contact: "İletişim",
          name: "Ad",
          surname: "Soyad",
          phone: "Telefon",
          email: "E-posta",
          country: "Ülke",
          city: "Şehir",
          idNumber: "Kimlik Numarası",
          validate:
            "Sadece Türk vatandaşlarının kimlik numaraları (TCKN) geçerlidir.",
          address: "Adres (Cadde, Mahalle Numarası)",
          checkbox1: "Fatura bilgileri aynı olmalıdır.",
          checkbox2:
            "Kişisel verilerimin işlenmesine ilişkin <2>bilgilendirme metnini</2> okudum ve anladım.",
          checkbox3:
            "Kişisel verilerimin avantajlı teklifler sunulması amacıyla işlenmesine ve paylaşılmasına açık rıza veriyorum. <1>Açık Rıza</1>.",
          checkbox4:
            "Bana <2>elektronik ileti gönderilmesini</2> kabul ediyorum.",
          payment: "ÖDEMEYE GEÇ",
          date: "Tarih",
          locale: "tr-TR",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بك في رياكت",
          plans: "خطط",
          all: "الكل",
          "theme park": "مدينة ملاهي",
          packages: "حزم",
          parkour: "باركور",
          adult: "بالغ",
          child: "طفل",
          baby: "بيبي",
          buy: "شراء",
          "Daily Ticket": "تذكرة يومية",
          dailyTicketDetails: "يشمل دخول المدينة الترفيهية ليوم واحد.",
          "Silver Package": "حزمة فضية",
          silverPackageDetails:
            "يشمل: دخول مدينة فيالاند، باركور (جميع الدورات)، صورة واحدة",
          "Gold Package": "حزمة ذهبية",
          goldPackageDetails:
            "يشمل: دخول مدينة فيالاند، باركور (جميع الدورات)، منزل مقلوب، زيبلاين، همبرغر، قائمة (همبرغر وبطاطس)، صورة واحدة",
          "Diamond Package": "حزمة الماس",
          diamondPackageDetails:
            "يشمل: دخول مدينة فيالاند، فاست باس، باركور (جميع الدورات)، منزل مقلوب، زيبلاين، بيتزا/بيدا، آيس كريم، صورة واحدة",
          "High Rope Parkour": "باركور حبال عالية",
          highRopeParkourDetails: "يشمل دخول باركور حبال عالية لشخص واحد.",
          "Net Parkour": "باركور الشبكة",
          netParkourDetails:
            "منصة عنكبوتية عملاقة من طابقين، 20 لعبة مختلفة، خذ الخطوة الأولى ودع الإثارة تبدأ.",
          "Net Trampoline": "شبكة ترامبولين",
          netTrampolineDetails:
            "انسى الترامبولين التي رأيتها من قبل، هذا الترامبولين العملاق ذو الشبكة ذو طابقين ليس شبيهًا بأي شيء رأيته من قبل.",
          "Tubby Slide": "انزلاق الأنبوب",
          tubbySlideDetails:
            "سيمنحك إثارة التجديف مع منصة تزلج اصطناعية وقوارب خاصة. هل أنت مستعد للنزول 30 مترًا؟",
          "Climbing Wall": "جدار التسلق",
          climbingWallDetails:
            "لديه 8 مواضيع مختلفة، يبلغ ارتفاعه 7.5 أمتار وهو أكثر من مجرد جدار تسلق عادي. هل أنت مستعد لتجربته؟",
          "Parkour Bundle": "حزمة باركور",
          parkurBundleDetails:
            "تغطي جميع منتجات باركور حبال عالية-باركور الشبكة-شبكة ترامبولين-جدار التسلق-انزلاق الأنبوب..",
          "Total Cost": "التكلفة الإجمالية",
          qr: "سيتم إرسال رمز الاستجابة السريعة إلى هاتفك المحمول للدخول. التذكرة صالحة فقط في التاريخ أعلاه.",
          contact: "اتصل بنا",
          name: "الاسم",
          surname: "اللقب",
          phone: "هاتف",
          email: "البريد الإلكتروني",
          country: "بلد",
          city: "مدينة",
          idNumber: "رقم الهوية",
          validate: "فقط أرقام الهوية للمواطنين التركيين (TCKN) صالحة.",
          address: "عنوان (شارع، حي رقم)",
          checkbox1: "يجب أن تكون معلومات الدفع مماثلة.",
          checkbox2:
            "لقد قرأت وفهمت <2>إشعار المعلومات</2> المتعلق بمعالجة بياناتي الشخصية.",
          checkbox3:
            "أعطي موافقة صريحة على معالجة ومشاركة بياناتي الشخصية لغرض تقديم عروض ميسورة لي. <1>موافقة صريحة</1>.",
          checkbox4: "أقبل إرسال <2>الاتصالات الإلكترونية</2> إلي.",
          payment: "المتابعة إلى الدفع",
          date: "تاريخ",
          locale: "ar-SA",
        },
      },
    },
    caches: ["cookie"],
  });
