// الدين الاسلامي
let islamQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "بسمالله",
		ques : "<p> أول ما يقال عند فعل أي شيئ ؟ </p>",
		characters : ["ل","د","ن","ه","ر","م","ل","ح","ت","س","ا","د","ح","ب","ظ"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟", 
		answer :"مصحف",
		ques : '<img src="../Images/islam/img1.jpeg" alt="">',
		characters : ["ص","د","ف","ه","ر","م","د","ح","ت","ه"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "محمد",
		ques : "<p> خاتم الأنبياء والمرسلين : </p>",
		characters : ["س","د","ن","ه","ر","م","د","ح","ت","م"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer :"موسى",
		ques :  "<p>من هو كليم الله ؟</p>",
		characters : ["ظ","د","ى","و","ر","م","ك","س","ت","م"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "صلاة",
		ques : "<p> من أركان الإسلام ؟ </p>",
		characters : ["و","ذ","ن","ص","ر","ظ","د","ح","ت","ا","د","ح","ة","ل"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "الرحمان",
		ques : "<p> ماهي السورة التي تسمى عروس القرآن ؟ </p>",
		characters : ["و","ا","ن","ص","ر","ظ","م","ح","ت","ا","د","ح","ة","ل"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "04",
		ques : "<p> كم كان سن النبي صلى الله عليه وسلم عند البعثة ؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "82",
		ques : "<p> كم عدد السور المدنية ؟  </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "68",
		ques : "<p> كم عدد السور المكية ؟  </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "51",
		ques : "<p> كم سجدة في القرآن الكريم ؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "يوسف",
		ques : "<p> من هو ابن البئر ؟ </p>",
		characters : ["و","ز","ن","ف","ر","ظ","س","ح","ت","ي","د"]
	}
];

// ############################################################
// ألغاز فكرية

let culQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "أبي",
		ques : "<p>من هو خال أولاد عمتك وليس عمك ؟</p>",
		characters : ["ي","د","ن","ه","ر","م","د","ب","ت","و","ش","ت","أ"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"هاتف",
		ques : "<p>ما هو الشيء الذي يسمع بلا أذن و يتكلم بلا لسان ؟</p>",
		characters : ["ك","د","ف","ش","ر","ظ","ي","ح","ت","ه","ا","و","ز"]
	},
	{
		typeofques :"أجب عن السؤال التالي :",
		answer :"إسفنجة",
		ques : "<p>كلها ثقوب و مع ذلك تحفظ الماء</p>",
		characters : ["ة","د","ف","س","ر","م","د","ح","ت","ن","د","إ","ت","ج","ئ","ح"]
	},
	{
		typeofques :"أجب عن السؤال التالي :",
		answer :"جرس",
		ques : "<p>ماهو الشيء الذي إذا لمسته صاح ؟</p>",
		characters : ["ص","س","ف","ه","ر","م","د","ح","ت","ج","ء","س","خ"]
	},
	{
		typeofques :"أجب عن السؤال التالي :",
		answer :"مرآة",
		ques : "<p>ترى كل شيء و ليس لها عيون فما هي ؟</p>",
		characters : ["ض","ئ","ج","ة","ر","م","د","ح","ت","ز","ء","آ","ك"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "سفينة",
		ques : "<p>حامل و محمول نصفه جاف و نصفه مبلول فما هو ؟</p>",
		characters : ["ش","ذ","ن","ة","ر","م","د","ح","ت","ي","د","ف","ت","س"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "جوع",
		ques : "<p>ما هو الذي يقرصك و لا تراه ؟</p>",
		characters : ["خ","ذ","ع","ة","ر","و","د","ح","ج","ي","د"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "ساعة",
		ques : "<p>ما هو الشيء الذي لا يتكلم ؟ إذا أكل صدق و إذا جاع كذب ؟</p>",
		characters : ["ش","ذ","ع","ة","ر","م","ا","ح","ت","ي","د","ف","ت","س"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "كتاب",
		ques : "<p>له أوراق ... و ما هو بنبات ، وله جلد ... و ما هو بحيوان ، و يعلم ... و ما هو بإنسان فما هو ؟</p>",
		characters : ["ز","خ","و","ة","ر","م","ا","ح","ت","ي","د","ك","ب","س"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "إبرة",
		ques : "<p>لها عين و لا ترى, فما هي ؟</p>",
		characters : ["ى","خ","و","ة","ر","م","إ","ح","ض","ي","ص","ك","ب","س"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "أنف",
		ques : "<p>  لحمه من الخارج و شعره من الداخل ... ما هو ؟</p>",
		characters : ["ظ","ف","و","ة","ر","ث","إ","أ","ض","ي","ص","ك","ن","ط"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "حفرة",
		ques : "<p> ما هو الشيء الذي إذا أخذنا منه ازداد و كبر ؟ </p>",
		characters : ["خ","ذ","ف","ة","ر","و","د","ح","ج","ي","د","ح","ة","ذ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "مسمار",
		ques :  "<p> ما هو الشيء الذي لا يمشي إلا بالضرب ؟</p>",
		characters : ["ى","خ","س","ة","ر","م","إ","ح","ض","ا","ص","ك","ب","م"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "بيضة",
		ques : "<p> ما هو الشيء الذي اسمه على لونه ؟</p>",
		characters : ["ظ","ب","ف","ة","ر","و","د","ل","ض","ي","د","ح","ة","ؤ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "مطر",
		ques : "<p> ما الذي يطلبه الناس إذا غاب عنهم ، و إذا حضر هربوا منه ؟ </p>",
		characters : ["ل","خ","ض","ة","ر","م","ط","ح","ض","ا","ص","ك","ب","م"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "ثلج",
		ques : "<p> أنا ابن الماء ، فإن تركوني فيه أموت ، فمن أنا ؟ </p>",
		characters : ["ل","ش","ض","ة","ر","ن","ط","ح","ض","ج","ق","ك","ث","ز"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "ضوء",
		ques : "<p> ما هو الشيء الذي يخترق الزجاج و لا يكسره ؟ </p>",
		characters : ["د","ذ","ش","ة","ر","و","د","ء","ج","ض","د","ك","ة","ذ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "غيمة",
		ques : "<p> أمشي بدون قدمين وأطير بلا جناحين وأبكي بدون عينين فمن أنا ؟ </p>",
		characters : ["ر","ذ","ي","ة","ر","و","د","م","ج","ض","د","ل","ة","غ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "هواء",
		ques : "<p> شيء يوجد فوق البحر وعند القبر وبين الشجر ؟ </p>",
		characters : ["ء","ذ","ك","ة","ر","و","د","م","ا","ظ","د","ه","ة","خ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "علي",
		ques : "<p> أم علي لديها أربعة أبناء وهي تحب أيام الأسبوع حبا شديدا فسمت الأول : السبت والثاني : الأحد	والثالث : الإثنين فما اسم الرابع ؟ </p>",
		characters : ["ء","ذ","ك","ل","ر","ي","د","م","ا","ظ","د","ع","ة","خ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "عشاء",
		ques : "<p> ما هو الشيء الذي لا تستطيع أكله في الفطور والغداء ؟ </p>",
		characters : ["ل","ش","ض","ة","ر","ء","ط","ع","ض","ج","ا","ك","ث","ء"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "حذاء",
		ques : "<p> ما الشيء الذي تحمله ويحملك ؟ </p>",
		characters : ["ء","ذ","ك","ة","ر","ا","د","م","ى","ظ","د","ه","ح","و"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "ريح",
		ques : "<p> ما هو الشيء الذي يضرب كل من يقف في طريقه دون أن يراه أو يعاقبه أحد ؟</p>",
		characters : ["ز","ح","ك","ظ","ر","ا","د","ي","ى","ت","د","ه","ر","م"]
	}		
];
// ############################################################
// البرمجة 
let programmationQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "html",
		ques : "<p> ماهو أول وسم عند كتابة كود Html ؟ </p>",
		characters : ["h","d","o","b","1","m","p","t","a","y","l"]
	},
	{
		typeofques : "أجب عن السؤال التالي :", 
		answer :"title",
		ques : "<p> ماهو وسم كتابة عنوان في صفحة Html ؟ </p>",
		characters : ["h","t","o","e","1","m","i","t","a","y","l"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer :"javascript",
		ques :  "<p> أحد لغات البرمجة في Front-end ؟ </p>",
		characters : ["s","t","a","r","n","m","i","c","v","y","l","j","p","t","a"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "center",
		ques : "<p> ماهو الوسم الذي يسمح بتوسيط الكلام في صفحة Html ؟ </p>",
		characters : ["c","t","a","r","n","m","e","c","v","e","l","j","p","t","r"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer :"python",
		ques : "<p> أحد لغات البرمجة الشهيرة </p>",
		characters : ["h","t","a","r","n","m","y","c","o","e","l","j","p","t","r"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "input",
		ques : "<p> وسم في Html من أجل تخصيص مكان لكتابة نص أو كلمة سر ... </p>",
		characters : ["c","i","a","r","l","m","e","u","v","e","n","j","p","t","r"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "button",
		ques : "<p> وسم إضافة زر في Html  </p>",
		characters : ["u","t","a","r","o","t","b","c","v","e","l","j","p","m","n"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "password",
		ques : "<p> نوع من أنواع input لكتابة كلمة السر  </p>",
		characters : ["w","t","a","r","o","t","s","c","s","e","l","j","p","m","d"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "php",
		ques : "<p> أحد لغات البرمجة لـ Back-end </p>",
		characters : ["w","h","a","r","o","p","s","c","s","e","l","j","p","m","d"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "id",
		ques : "<p> يستعمل لتمييز وسوم Html لتعديلها في css  </p>",
		characters : ["k","c","a","r","i","p","s","l","s","e","l","j","p","s","d"]
	}
];
// ############################################################
// أدب عربي 
let arabicQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "المتنبي",
		ques : "<p> من القائل : الخَيْـلُ وَاللّيْـلُ وَالبَيْـداءُ تَعرِفُنـي وَالسّيفُ وَالرّمحُ والقرْطاسُ وَالقَلَـمُ </p>",
		characters : ["ي","د","ب","ل","ر","ن","د","ش","م","و","ش","ت","ا"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"توت",
		ques : "<p> على أي شيء أطلق العرب اسم الفرصاد؟ </p>",
		characters : ["س","د","ت","غ","ر","م","ي","ح","ت","ه","ا","و","م"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"أبوالعتاهية",
		ques :  '<img src="../Images/arabic/img1.jpg" alt="">',
		characters : ["و","ي","ف","ل","ا","ب","ه","ا","ت","ن","ة","أ","ت","ع"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "0051",
		ques : "<p> كم يبلغ عدد أسماء الأسد في اللغة العربية؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9","0"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"قلم",
		ques : "<p> ما هو اليراع؟ </p>",
		characters : ["ص","د","ف","ق","ر","م","د","ح","ت","ل"]
	},
	{
		typeofques : "إلى ماذا تلمح الصورة ؟",
		answer : "أحمدشوقي",
		ques : '<img src="../Images/arabic/img2.jpg" alt="">',
		characters : ["ق","د","ن","ي","ر","م","ذ","ح","ت","ش","ر","خ","ح","و","أ"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "عذراء",
		ques : "<p> ماذا تعني كلمة البتول؟ </p>",
		characters : ["س","ا","ن","ذ","ر","م","د","ء","ت","ع"]
	}
];
// ############################################################
// الرياضة
let sportQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "الجزائر",
		ques : "<p> من الفائز بكأس إفريقيا سنة 2019 ؟ </p>",
		characters : ["ئ","د","ن","ل","ر","غ","ز","ل","ت","ا","ج","س","ا"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"قطر",
		ques : "<p> أين سيقام كأس العالم 2022 ؟ </p>",
		characters : ["س","ر","ف","غ","ط","م","ي","ح","ت","ق","ا","و","م"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"كريستيانو",
		ques :  '<img src="../Images/sport/img1.jpg" alt="">',
		characters : ["ي","د","ك","س","ر","م","و","ح","ت","ن","د","ا","ت","ي"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "البرازيل",
		ques : "<p> ماهو البلد الأكثر فوزا بكأس العالم ؟ </p>",
		characters : ["ل","د","ن","ل","ي","ا","د","ح","ت","ا","ح","ب","ر","س","ج","ز"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"0591",
		ques : "<p> ماهي أول سنة أقيم فيها كأس العالم لكرة السلة ؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "إلى ماذا تلمح الصورة ؟",
		answer : "مانوتبول",
		ques : '<img src="../Images/sport/img2.jpg" alt="">',
		characters : ["ب","د","ن","و","ر","ا","د","ل","و","ه","ن","ح","ت","م"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "مصر",
		ques : "<p> ماهو البلد الأكثر فوزا بكأس إفريقيا ؟ </p>",
		characters : ["ص","ق","ن","ه","ط","ر","د","ح","ت","ه","ب","ز","م"]
	}
];
// ############################################################
// التاريخ
let historyQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "1491",
		ques : "<p> في أي سنة اندلعت الحرب العالمية الأولى ؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9","1"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"السومر",
		ques : "<p> ما هو أسم أول حضارة بشرية ؟ </p>",
		characters : ["س","د","ف","غ","ر","م","ي","ح","ت","ل","ا","و","م"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"أدولفهتلر",
		ques :  '<img src="../Images/history/img1.jpg" alt="">',
		characters : ["و","د","ف","س","ر","م","ه","ح","ل","ن","ل","أ","ت","ف"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "بيزنطة",
		ques : "<p> ما هو اسم مدينة إسطنبول في الماضي ؟ </p>",
		characters : ["ز","د","ل","ب","ر","م","ش","ح","ط","ي","ذ","ن","ة"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"حادثةالمروحة",
		ques : '<img src="../Images/history/img2.jpg" alt="">',
		characters : ["ا","ة","ف","ث","ر","م","ل","ح","ت","ا","و","د","ح","ت","ة"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "القسطنطينية",
		ques : "<p> ماذا فتح محمد الفاتح ؟ </p>",
		characters : ["ط","ي","ن","ة","ي","س","ط","ح","ت","ل","م","ن","ق","ن","ا"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "0381",
		ques : "<p> في أي سنة احتلت فرنسا الجزائر؟</p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	}
];
// ############################################################
// الجغرافيا
let geoQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "صقلية",
		ques : "<p> ما هي أكبر جزيرة في البحر المتوسط ؟ </p>",
		characters : ["ي","د","ن","ل","ر","م","ة","ش","ق","و","ش","ت","ص"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"كندا",
		ques : "<p> ما هي ثاني دولة في العالم من حيث المساحة ؟ </p>",
		characters : ["ن","ا","ف","ك","ر","ه","ي","ح","ت","د","ا","ب","ى"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"الفاتيكان",
		ques : "<p> ما هي اصغر دولة في العالم ؟ </p>",
		characters : ["ن","ا","ف","ك","ر","ه","ي","ل","ت","د","ا","ب","ى","ا"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "أستراليا",
		ques : "<p> ما هي اصغر قارات العالم مساحة؟ </p>",
		characters : ["ا","ل","ف","ك","ا","س","ي","ح","ت","ر","أ","ب","ت"]
	},
	{
		typeofques :"أجب عن السؤال التالي :",
		answer :"الهند",
		ques : "<p> ما هي أكثر دول العالم انتاجا للفول السوداني ؟ </p>",
		characters : ["ة","د","ف","ا","ر","م","د","ح","ت","ه","ل","ن"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "الصومال",
		ques : "<p> ما هي الدولة العربية التي يمر بها خط الإستواء ؟ </p>",
		characters : ["ا","د","و","ل","ر","م","د","ح","ت","ا","ر","ص","ن","ل"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "لندن",
		ques : "<p> ما هي أكبر مدينة في أوروبا ؟ </p>",
		characters : ["س","د","ن","ئ","ر","م","د","ح","ت","ن","ح","ت","ل"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"الجزائر",
		ques : '<img src="../Images/geo/img1.png" alt="">',
		characters : ["ا","ة","ج","ئ","ر","م","ل","ح","ت","ز","و","د","ح","ت","ا"]
	}
];
// ############################################################
// علوم الطبيعة
let scienceQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "42",
		ques : "<p> كم عدد ضلوع جسم الإنسان ؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"23",
		ques : "<p> كم عدد أسنان الإنسان العادي؟ </p>",
		characters : ["0","1","2","3","4","5","6","7","8","9"]
	},
	{
		typeofques : "أجب عن السؤال التالي :", 
		answer : "قرنية",
		ques : "<p> يسمى الغشاء الشفاف الذي يغطي كرة العين بال </p>",
		characters : ["ق","د","ف","س","ة","م","د","ح","ت","ن","د","ر","ت","ي"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"أدن",
		ques : '<img src="../Images/science/img1.jpg" alt="">',
		characters : ["ص","د","ف","ن","ر","م","د","ح","ت","أ"]
	}
];
// ############################################################
// الحيوانات
let animalsQues = [
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "إنسان",
		ques : "<p> ما هو الحيوان الوحيد الذي ينام على ظهره ؟ </p>",
		characters : ["ي","ا","ن","ن","ر","م","د","ش","ت","و","س","ت","إ","ة","ن","ط"]
	},
	{
		typeofques :"أجب عن السؤال التالي :", 
		answer :"جمل",
		ques : "<p> الحيوان الوحيد الذي يملك أربعة أرجل و لا يقدر على السباحة ؟ </p>",
		characters : ["س","د","ج","غ","ر","م","ي","ح","ت","ل","ا","و","م"]
	},
	{
		typeofques :"إلى ماذا تلمح الصورة ؟",
		answer :"حرباء",
		ques :  '<img src="../Images/animals/img1.jpg" alt="">',
		characters : ["ي","ء","ف","س","ر","م","د","ح","ت","ن","د","ا","ت","ب"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "بكساس",
		ques : "<p> اسم الفأر الذي يقتل الزواحف بمجرد اقترابها منه ؟ </p>",
		characters : ["س","د","ن","ه","س","م","د","ب","ت","ا","د","ح","ت","ك"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "قرد",
		ques : "<p> ما هو الحيوان الذي يصاب بالحصبة كالإنسان ؟  </p>",
		characters : ["ج","ع","ن","ق","س","ظ","د","ب","ت","ا","د","ح","ر","ك"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "خرخرة",
		ques : "<p> ما هو صوت النمر ؟ </p>",
		characters : ["خ","د","ن","خ","س","م","ر","ب","ت","ا","د","ح","ر","ة"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "ديسم",
		ques : "<p> ما هو اسم صغير الدب ؟ </p>",
		characters : ["ج","د","ن","خ","س","م","ؤ","ر","ت","ا","د","غ","ي","ة"]
	},
	{
		typeofques : "أجب عن السؤال التالي :",
		answer : "علجوم",
		ques : "<p> ما هو الإسم الذي يطلق على ذكر الضفدع ؟  </p>",
		characters : ["ج","د","ن","خ","و","م","ؤ","ر","ت","ل","د","غ","ع","ة"]
	}
];
// #########################################################################
// Variables
let startGame = document.querySelectorAll(".sec-types .container .types .type a");
let numOfQuesIslam = 0;
let numOfQuesCul = 0;
let numOfQuesProgrammation = 0;
let numOfQuesArabic = 0;
let numOfQuesSport = 0;
let numOfQuesHistory = 0;
let numOfQuesGeo = 0;
let numOfQuesScience = 0;
let numOfQuesAnimals = 0;

if (localStorage.getItem("q-clr") !== null) {
	document.documentElement.style.setProperty("--q-clr",localStorage.getItem("q-clr"));
}
startGame.forEach(a => {
	a.onclick = function (){
		localStorage.setItem("q-clr",this.dataset.clr);
		localStorage.setItem("typeofquestion",this.dataset.type);
	};
});
if (localStorage.getItem("typeofquestion") === "islamQues") {
	showQues(numOfQuesIslam,islamQues,'islam');
} else if (localStorage.getItem("typeofquestion") === "culQues") {
	showQues(numOfQuesCul,culQues,'cul');
} else if (localStorage.getItem("typeofquestion") === "programmationQues") {
	document.querySelector(".inputs").style = 'direction:ltr;font-family: "Poppins", sans-serif;';
	document.querySelector(".chrs").style = 'font-family: "Poppins", sans-serif;';
	showQues(numOfQuesProgrammation,programmationQues,'programmation');
} else if (localStorage.getItem("typeofquestion") === "arabicQues") {
	showQues(numOfQuesArabic,arabicQues,'arabic');
} else if (localStorage.getItem("typeofquestion") === "sportQues") {
	showQues(numOfQuesSport,sportQues,'sport');
} else if (localStorage.getItem("typeofquestion") === "historyQues") {
	showQues(numOfQuesHistory,historyQues,'history');
} else if (localStorage.getItem("typeofquestion") === "geoQues") {
	showQues(numOfQuesGeo,geoQues,'geo');
} else if (localStorage.getItem("typeofquestion") === "scienceQues") {
	showQues(numOfQuesScience,scienceQues,'science');
} else if (localStorage.getItem("typeofquestion") === "animalsQues") {
	showQues(numOfQuesAnimals,animalsQues,'animals');
};

function showQues(index,type,nameOfLoclal){
	if (localStorage.getItem(nameOfLoclal) !== null){
		index = parseInt(localStorage.getItem(nameOfLoclal));
	};	
	document.querySelector(".box-question .head p .nowquess").innerHTML = index + 1;
	document.querySelector(".box-question .head p .nums").innerHTML = type.length;	
	document.querySelector(".bodyoftype").style.backgroundColor = "#f1f1f1";
	document.querySelector(".bigbox .image img").src = "../Images/waitanswer.png";
	document.querySelector(".inputs").innerHTML = "";
	document.querySelector(".chrs").innerHTML = "";
	if (index === type.length) {
		document.querySelector(".finir").classList.add('finich');
		document.querySelector(".box-question .head p .nowquess").innerHTML = index;
	} else {
		button('verifier','التأكد من الإجابة');
		document.querySelector(".box-question .head h3").innerHTML = type[index].typeofques;
		document.querySelector(".box-question .ques").innerHTML = type[index].ques;
		
		for (let input = 0; input < type[index].answer.length; input++){
			pForAnswer();
		}
		for (let p = 0; p < type[index].characters.length; p++){
			characters(type[index].characters[p]);
		};
		let ps = document.querySelectorAll(".chrs p");
		let pssChrs = document.querySelectorAll(".inputs p");
		ps.forEach((p)=>{
			p.onclick = function(){
				for (let i = 0; i < pssChrs.length; i++){
					if (pssChrs[i].innerHTML === '') {
						pssChrs[i].innerHTML = p.innerHTML;
						p.innerHTML = '';
						break;
					}
				}
			}
		});
		pssChrs.forEach((p)=>{
			p.onclick = function(){
				for (let i = 0; i < ps.length; i++){
					if (ps[i].innerHTML === '') {
						ps[i].innerHTML = p.innerHTML;
						p.innerHTML = '';
						break;
					}
				};
			};
		});
		let verifier = document.querySelector("button.verifier");
		verifier.onclick = function(){
			let myAnswer = '';
			pssChrs.forEach(p=>{
				myAnswer +=p.innerHTML;
			})
			console.log(myAnswer);
			if (myAnswer === type[index].answer){
				console.log("yes");
				document.querySelector(".bigbox .image img").src = "../Images/true.png";
				verifier.remove();
				button('next','السؤال التالي');
				document.getElementById("success").play();
				document.getElementById("success").play();
				document.querySelector(".bodyoftype").style.backgroundColor = "#31e231";
				// document.querySelector(".box-question").style.backgroundColor = "#31e231";
				const next = document.querySelector(".next");
				next.onclick = function(){
					index += 1;
					localStorage.setItem(nameOfLoclal,`${index}`);
					next.remove();
					showQues(index,type,nameOfLoclal);
				}
			} else {
					document.querySelector(".bigbox .image img").src = "../Images/false.png";
					document.getElementById("failed").play();
					document.querySelector(".bodyoftype").style.backgroundColor = "#f00";
					// document.querySelector(".box-question").style.backgroundColor = "#f00";
					document.querySelector(".box-question").classList.add("box-question-anim")
				setTimeout(()=>{
					document.querySelector(".bodyoftype").style.backgroundColor = "#f1f1f1";
					document.querySelector(".bigbox .image img").src = "../Images/waitanswer.png";
					document.querySelector(".box-question").classList.remove("box-question-anim")
					pssChrs.forEach((p)=>{
							for (let i = 0; i < ps.length; i++){
								if (ps[i].innerHTML === '') {
									ps[i].innerHTML = p.innerHTML;
									p.innerHTML = '';
									break;
								};
							};
						});
				},2000)
			};
		}
	}	
}
function button(cla,val){
	let btn = document.createElement("button");
	btn.classList.add(cla)
	let valueInBtn = document.createTextNode(val);
	btn.appendChild(valueInBtn);
	document.querySelector(".box-question .btn").appendChild(btn);
};
function pForAnswer(){
	let p = document.createElement("p");
	p.appendChild(document.createTextNode(''));
	document.querySelector(".inputs").appendChild(p);
};
function characters(character){
	let p = document.createElement("p");
	p.appendChild(document.createTextNode(character));
	document.querySelector(".chrs").appendChild(p);
};

const start = ()=>{
	setTimeout(function(){
		confetti.start();
	},0)
};
