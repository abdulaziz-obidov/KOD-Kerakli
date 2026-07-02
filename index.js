        // Quiz questions data (50 adapted from the images)
        const quizData = [
            {
                question: "___ is John? I can't see him!",
                options: ["When", "Where", "Which", "Why"],
                answer: 1,
                category: "Grammar",
                hint: "Suhbatdosh shaxsning qayerda joylashganligini so'rayapti.",
                explanation: "Joyga nisbatan 'Where' (Qayerda) so'rog'i to'g'ri bo'ladi."
            },
            {
                question: "Can you see ___ bird over there?",
                options: ["that", "this", "those", "these"],
                answer: 0,
                category: "Grammar",
                hint: "Yakkalikdagi ('bird') va uzoqdagi ('over there') narsaga ishora qilinmoqda.",
                explanation: "Uzoqdagi bitta narsaga 'that' (ana u) ko'rsatkich olmoshi qo'yiladi."
            },
            {
                question: "Alice and Yasmin ___ at work yesterday.",
                options: ["was", "were", "are", "be"],
                answer: 1,
                category: "Grammar",
                hint: "Yesterday (kecha) o'tgan zamon kalit so'zi va ega ko'plikda (Alice and Yasmin).",
                explanation: "Ko'plikdagi egalar bilan 'to be' fe'lining o'tgan zamondagi shakli 'were' ishlatiladi."
            },
            {
                question: "___ you know Philip?",
                options: ["Is", "Have", "Does", "Do"],
                answer: 3,
                category: "Grammar",
                hint: "Ega 'you', fe'l esa oddiy shaklda ('know'). Zamon Present Simple.",
                explanation: "Present Simple so'roq gapida 'you' olmoshi bilan 'Do' yordamchi fe'li ishlatiladi."
            },
            {
                question: "___ there a bank near here?",
                options: ["Be", "Are", "Is", "There"],
                answer: 2,
                category: "Grammar",
                hint: "'there' so'zidan keyin birlikdagi ot ('a bank') kelgan.",
                explanation: "Birlikdagi otlar so'rog'ida 'Is there...?' (bormi?) strukturasi ishlatiladi."
            },
            {
                question: "Rob doesn't like ___ in the city centre.",
                options: ["live", "living", "lives", "lived"],
                answer: 1,
                category: "Grammar",
                hint: "'like' fe'lidan keyin yana bir fe'l kelsa qanday shaklda bo'ladi?",
                explanation: "'Like' fe'lidan keyin keluvchi harakat fe'liga odatda '-ing' qo'shimchasi qo'shiladi (Gerund)."
            },
            {
                question: "I ___ born in Hong Kong.",
                options: ["were", "had", "did", "was"],
                answer: 3,
                category: "Grammar",
                hint: "'born' (tug'ilgan) iborasi bilan 'to be' o'tgan zamonda ishlatiladi.",
                explanation: "'I' (men) uchun 'was' shakli mos keladi: 'I was born...'"
            },
            {
                question: "I have tennis classes with ___.",
                options: ["his", "he", "me", "him"],
                answer: 3,
                category: "Grammar",
                hint: "Predlog ('with') dan keyin kelishik olmoshi (O'rin-payt/tushum) bo'ladi.",
                explanation: "Ushbu gapda kishilik olmoshining tushum kelishigi shakli 'him' (uning bilan/u bilan) to'g'ri keladi."
            },
            {
                question: "___ in class.",
                options: ["Not talking", "Can't talking", "No talk", "Don't talk"],
                answer: 3,
                category: "Grammar",
                hint: "Buyruq gapning inkor shaklini yasashimiz kerak.",
                explanation: "Buyruq gap inkorini yasashda 'Don't + verb' ishlatiladi: 'Don't talk'."
            },
            {
                question: "There aren't ___ people at this party.",
                options: ["lots", "many", "some", "much"],
                answer: 1,
                category: "Grammar",
                hint: "'People' sanoqli ko'plik ot. Gap esa inkor shaklida.",
                explanation: "Inkor gaplarda sanaladigan ko'plik otlar oldidan 'many' ishlatiladi."
            },
            {
                question: "You work a lot. You ___ relax more.",
                options: ["should", "do", "were", "have"],
                answer: 0,
                category: "Grammar",
                hint: "Maslahat yoki tavsiya ma'nosidagi modal fe'l kerak.",
                explanation: "Maslahat berishda 'should' (kerak/tavsiya etiladi) modal fe'li ishlatiladi."
            },
            {
                question: "___ are you feeling?",
                options: ["Where", "When", "Which", "How"],
                answer: 3,
                category: "Grammar",
                hint: "Sog'liq yoki kayfiyat so'ralganda qaysi so'roq so'zi ishlatiladi?",
                explanation: "Inson holatini so'rash uchun 'How are you feeling?' (O'zingizni qanday his qilyapsiz?) so'rog'i qo'llaniladi."
            },
            {
                question: "This is ___ apple.",
                options: ["me", "my", "I", "mine"],
                answer: 1,
                category: "Grammar",
                hint: "Otdan ('apple') oldin egalik sifatini qo'yish kerak.",
                explanation: "Orqasidan ot talab qiladigan egalik shakli 'my' (mening) hisoblanadi."
            },
            {
                question: "Frederick ___ three languages.",
                options: ["speak", "speaking", "speaks", "to speak"],
                answer: 2,
                category: "Grammar",
                hint: "Ega uchinchi shaxs birlikda ('Frederick' = He). Zamon Present Simple.",
                explanation: "Present Simple'da uchinchi shaxs birlikdagi fe'llarga '-s' qo'shimchasi qo'shiladi."
            },
            {
                question: "We always ___ lunch at 1 p.m.",
                options: ["has", "having", "have", "to have"],
                answer: 2,
                category: "Grammar",
                hint: "Ko'plikdagi ega 'We' va odatiy harakat.",
                explanation: "We (biz) olmoshi bilan 'have' fe'lining o'zi ishlatiladi: 'We always have lunch'."
            },
            {
                question: "Ian ___ in the office on Monday.",
                options: ["wasn't", "can't", "didn't", "weren't"],
                answer: 0,
                category: "Grammar",
                hint: "O'tgan dushanba kungi holat ('Ian idorada emas edi').",
                explanation: "'Ian' birlikda bo'lganligi uchun inkor shaklda 'wasn't' qo'llaniladi."
            },
            {
                question: "Pasta ___ an Italian food.",
                options: ["are", "is", "be", "does"],
                answer: 1,
                category: "Grammar",
                hint: "Pasta - sanalmaydigan birlikdagi ot.",
                explanation: "Sanalmaydigan otlar birlik deb hisoblanib, 'is' to'g'ri javob bo'ladi."
            },
            {
                question: "___ tall is your friend Uma?",
                options: ["What much", "How", "What many", "How much"],
                answer: 1,
                category: "Grammar",
                hint: "Sifatning darajasini so'rash uchun maxsus tuzilma qo'llaniladi.",
                explanation: "'How' so'zi sifat bilan kelib, uning miqdor/darajasini bildiradi: 'How tall' (bo'yi qanchalik baland?)."
            },
            {
                question: "A: Does Dina have a job? B: Yes, she ___.",
                options: ["does", "do", "doesn't", "don't"],
                answer: 0,
                category: "Grammar",
                hint: "Qisqa javob berish so'roq gap boshidagi yordamchi fe'lga bog'liq.",
                explanation: "'Does' bilan berilgan savolga 'Yes, she does' shaklida tasdiq javobi beriladi."
            },
            {
                question: "___ old are you?",
                options: ["How", "What", "When", "Did"],
                answer: 0,
                category: "Grammar",
                hint: "Yoshni so'rash iborasi.",
                explanation: "'How old' - yoshni so'rash uchun ishlatiladigan standart ibora."
            },
            {
                question: "I ___ eat onions. I hate them!",
                options: ["always", "often", "sometimes", "never"],
                answer: 3,
                category: "Grammar",
                hint: "'I hate them' (ularni yomon ko'raman) gapiga mos ravishda chastotani belgilang.",
                explanation: "Yomon ko'riladigan narsaga nisbatan hech qachon bajarmaslik ma'nosida 'never' (hech qachon) mos keladi."
            },
            {
                question: "There ___ four bedrooms in my house.",
                options: ["is", "be", "have", "are"],
                answer: 3,
                category: "Grammar",
                hint: "Ega 'four bedrooms' (to'rtta yotoqxona) ko'plikda turibdi.",
                explanation: "Ko'plikdagi otlar uchun 'There are...' (bor) tuzilmasi qo'llaniladi."
            },
            {
                question: "He ___ got a mobile phone.",
                options: ["hasn't", "haven't", "doesn't", "don't"],
                answer: 0,
                category: "Grammar",
                hint: "'got' so'zi borligiga e'tibor bering. He uchinchi shaxs birlikda.",
                explanation: "Present Perfect yoki 'have/has got' qoidasiga ko'ra, birlikda 'hasn't got' bo'ladi."
            },
            {
                question: "Would you like ___ peas?",
                options: ["a", "some", "any", "much"],
                answer: 1,
                category: "Grammar",
                hint: "Taklif ma'nosidagi 'Would you like...?' gaplarida odatda nima ishlatiladi?",
                explanation: "Taklif bildirilganda so'roq bo'lishiga qaramay, 'some' qo'llaniladi."
            },
            {
                question: "___ you got any money?",
                options: ["Does", "Have", "Has", "Do"],
                answer: 1,
                category: "Grammar",
                hint: "Savol 'you' olmoshi va 'got' bilan boshlangan.",
                explanation: "'Have you got...?' qolipi borlikni bildiradi: 'Have you got any money?'"
            },
            {
                question: "Aisha doesn't like ___ TV.",
                options: ["watch", "watched", "watching", "watches"],
                answer: 2,
                category: "Grammar",
                hint: "'like' fe'lidan keyingi fe'l shakli.",
                explanation: "'like/dislike' so'zlaridan keyin harakatning o'zini ifodalovchi Gerund (-ing) keladi."
            },
            {
                question: "I ___ get up early because I start work every day at 6 a.m.",
                options: ["sometimes", "usually", "never", "always"],
                answer: 3,
                category: "Grammar",
                hint: "Ish har kuni soat 6 da boshlansa, bu har doim takrorlanadigan ish bo'ladi.",
                explanation: "Har kungi odat bo'lganligi sababli 'always' (har doim) to'g'ri."
            },
            {
                question: "We haven't ___ a big garden in our house.",
                options: ["have", "got", "be", "take"],
                answer: 1,
                category: "Grammar",
                hint: "'haven't' dan keyin egalikni ifodalovchi qaysi so'z tushib qolgan?",
                explanation: "Britaniya ingliz tilida 'haven't got' (yo'q) birikmasi juda keng tarqalgan."
            },
            {
                question: "You don't look well. Let's ___ to the doctor's.",
                options: ["going", "go", "goes", "to go"],
                answer: 1,
                category: "Grammar",
                hint: "'Let's' (Keling, ...) birikmasidan keyin fe'l qanday shaklda bo'ladi?",
                explanation: "'Let's' dan keyin har doim fe'lning infinitiv (yalang'och) shakli keladi."
            },
            {
                question: "I'd like ___ cereal for breakfast.",
                options: ["any", "some", "a", "an"],
                answer: 1,
                category: "Grammar",
                hint: "Cereal (bo'tqa/quruq nonushta) sanalmaydigan ot. Tasdiq gap.",
                explanation: "Tasdiq gaplarda sanalmaydigan otlar oldidan 'some' (biroz) ishlatiladi."
            },
            {
                question: "Look at that new car! It's ___!",
                options: ["Susan", "of Susan", "Susan's", "is Susan"],
                answer: 2,
                category: "Grammar",
                hint: "Mashinaning kimga tegishli ekanligini ifodalash kerak.",
                explanation: "Ingliz tilida egalik apostrof va s bilan ko'rsatiladi: 'Susan's' (Suzanniki)."
            },
            {
                question: "A: ___ do you finish work? B: At 6.30 p.m.",
                options: ["Where", "When", "What", "Why"],
                answer: 1,
                category: "Grammar",
                hint: "Javobda vaqt ko'rsatilgan ('At 6.30 p.m.').",
                explanation: "Vaqtni so'rash uchun 'When' (Qachon) so'roq so'zi qo'llaniladi."
            },
            {
                question: "___ the manager of the shop.",
                options: ["She", "She's", "Her", "She'll"],
                answer: 1,
                category: "Grammar",
                hint: "Gapda ega va kesim ('u hisoblanadi') yetishmayapti.",
                explanation: "'She's' (She is) - gapda ham egani, ham kesimni o'rnini to'ldiradi."
            },
            {
                question: "Do you have ___ water?",
                options: ["any", "a", "some", "an"],
                answer: 0,
                category: "Grammar",
                hint: "So'roq gap va sanalmaydigan ot ('water').",
                explanation: "Odatdagi so'roq va inkor gaplarda sanalmaydigan otlar bilan 'any' (birorta/hech) ishlatiladi."
            },
            {
                question: "I don't eat ___ butter.",
                options: ["many", "much", "some", "lots"],
                answer: 1,
                category: "Grammar",
                hint: "Butter (sariyog') sanalmaydi, gap esa inkorda.",
                explanation: "Sanalmaydigan otlarning miqdorini inkor gaplarda ko'rsatish uchun 'much' qo'llaniladi."
            },
            {
                question: "Rose enjoys ___ football.",
                options: ["playing", "to play", "play", "plays"],
                answer: 0,
                category: "Grammar",
                hint: "'Enjoy' (zavqlanmoq) fe'lidan keyingi fe'l shakli.",
                explanation: "'Enjoy' fe'lidan keyin doimo Gerund ya'ni '-ing' olgan fe'l keladi."
            },
            {
                question: "Look at ___ plane in the sky!",
                options: ["these", "his", "that", "those"],
                answer: 2,
                category: "Grammar",
                hint: "Sky (osmon) uzoqda joylashgan va bitta samolyot ('plane') haqida gap ketmoqda.",
                explanation: "Uzoqdagi birlikdagi narsaga ishora qilishda 'that' ishlatiladi."
            },
            {
                question: "___ children over there go to my son's tennis club.",
                options: ["These", "This", "That", "Those"],
                answer: 3,
                category: "Grammar",
                hint: "'Over there' uzoqlikni anglatadi, 'children' esa ko'plikda.",
                explanation: "Uzoqdagi ko'plikdagi otlarga ishora qilishda 'Those' (ana ular) ishlatiladi."
            },
            {
                question: "___ coffee do you drink every day?",
                options: ["What many", "How much", "What much", "How many"],
                answer: 1,
                category: "Grammar",
                hint: "Coffee (ichimlik sifatida) sanalmaydigan ot.",
                explanation: "Sanalmaydigan narsalarning miqdorini so'rash uchun 'How much' ishlatiladi."
            },
            {
                question: "Are there ___ people in your family?",
                options: ["a lot of", "much", "many", "some"],
                answer: 2,
                category: "Grammar",
                hint: "So'roq gap va 'people' - sanaladigan ko'plik ot.",
                explanation: "So'roq gaplarda ko'plik otlar bilan 'many' qo'llanilishi afzal."
            },
            {
                question: "Can I have an apple? I'm ___.",
                options: ["angry", "thirsty", "tired", "hungry"],
                answer: 3,
                category: "Vocabulary",
                hint: "Olma yeyish istagi qaysi holatda paydo bo'ladi?",
                explanation: "Odam och qolganda 'hungry' (och) bo'ladi."
            },
            {
                question: "The day before Tuesday is ___.",
                options: ["Monday", "Thursday", "Saturday", "Sunday"],
                answer: 0,
                category: "Vocabulary",
                hint: "Seshanbadan (Tuesday) bitta oldingi kunni toping.",
                explanation: "Seshanbadan oldingi kun bu 'Monday' (Dushanba)."
            },
            {
                question: "My mum's brother is my ___.",
                options: ["uncle", "cousin", "nephew", "dunt"],
                answer: 0,
                category: "Vocabulary",
                hint: "Onamning akasi yoki ukasi menga kim bo'ladi?",
                explanation: "Ona yoki otaning akasi/ukasi ingliz tilida 'uncle' (tog' / amaki) deyiladi."
            },
            {
                question: "My aunt's children are my ___.",
                options: ["nieces", "grandchildren", "nephews", "cousins"],
                answer: 3,
                category: "Vocabulary",
                hint: "Xola/amma/tog'a/amakilarning farzandlari.",
                explanation: "Aunt (xola/amma) farzandlari 'cousins' (amakivachcha, xolavachcha) deyiladi."
            },
            {
                question: "Henry was at work two hours ___.",
                options: ["last", "on", "ago", "in"],
                answer: 2,
                category: "Vocabulary",
                hint: "O'tgan zamonda vaqt miqdoridan keyin keladigan so'z.",
                explanation: "Vaqtdan keyin keladigan 'ago' so'zi 'oldin' degan ma'noni beradi (two hours ago = 2 soat oldin)."
            },
            {
                question: "Keith is a hotel ___.",
                options: ["driver", "player", "manager", "student"],
                answer: 2,
                category: "Vocabulary",
                hint: "Mehmonxonani boshqaruvchi kasb egasi.",
                explanation: "Mehmonxona boshqaruvchisi 'hotel manager' deb ataladi."
            },
            {
                question: "We buy our chicken at the ___.",
                options: ["baker's", "butcher's", "dry cleaner's", "hairdresser's"],
                answer: 1,
                category: "Vocabulary",
                hint: "Go'sht va tovuq sotiladigan maxsus do'kon.",
                explanation: "Go'sht sotiladigan do'kon 'butcher's' (qassobxona) deyiladi."
            },
            {
                question: "Today the weather is ___ and cloudy.",
                options: ["fine", "grey", "sunny", "spring"],
                answer: 1,
                category: "Vocabulary",
                hint: "Bulutli kunda osmon qanday rangda bo'ladi?",
                explanation: "Bulutli kunga mos so'z 'grey' (kulrang osmon) hisoblanadi."
            },
            {
                question: "We like ___ weather. We hate cold weather.",
                options: ["cool", "warm", "snowy", "windy"],
                answer: 1,
                category: "Vocabulary",
                hint: "Cold (sovuq) ob-havoning aksi.",
                explanation: "Sovuq ob-havoni yomon ko'rganlar 'warm' (iliq) ob-havoni yoqtirishadi."
            },
            {
                question: "I'm not speaking to Ken. I'm ___ with him.",
                options: ["angry", "all right", "relaxed", "bored"],
                answer: 0,
                category: "Vocabulary",
                hint: "Gaplashmaslikka sabab bo'ladigan salbiy hissiyot.",
                explanation: "Inson achchiqlanganda yoki xafa bo'lganda gaplashmaydi: 'angry' (jahli chiqqan)."
            }
        ];

        // State variables
        let currentIdx = 0;
        let score = 0;
        let answersLogged = [];
        let timerSeconds = 0;
        let timerInterval = null;

        // Dom Elements
        const welcomeScreen = document.getElementById("welcome-screen");
        const quizContainer = document.getElementById("quiz-container");
        const resultScreen = document.getElementById("result-screen");
        const startBtn = document.getElementById("start-btn");
        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");
        const categoryTag = document.getElementById("category-tag");
        const currentQuestionNum = document.getElementById("current-question-num");
        const progressBar = document.getElementById("progress-bar");
        const scoreCounter = document.getElementById("score-counter");
        const timerDisplay = document.getElementById("timer-display");
        const hintBtn = document.getElementById("hint-btn");
        const hintText = document.getElementById("hint-text");
        const explanationBox = document.getElementById("explanation-box");
        const nextBtn = document.getElementById("next-btn");
        
        // Result Screen Dom Elements
        const finalCorrect = document.getElementById("final-correct");
        const finalWrong = document.getElementById("final-wrong");
        const finalPercentage = document.getElementById("final-percentage");
        const finalFeedback = document.getElementById("final-feedback");
        const reviewList = document.getElementById("review-list");
        const restartBtn = document.getElementById("restart-btn");

        // Start Quiz
        startBtn.addEventListener("click", () => {
            welcomeScreen.classList.add("hidden");
            quizContainer.classList.remove("hidden");
            startTimer();
            loadQuestion();
        });

        // Timer Function
        function startTimer() {
            timerInterval = setInterval(() => {
                timerSeconds++;
                const mins = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
                const secs = (timerSeconds % 60).toString().padStart(2, "0");
                timerDisplay.textContent = `${mins}:${secs}`;
            }, 1000);
        }

        // Load Single Question
        function loadQuestion() {
            // Reset question UI
            hintText.classList.add("hidden");
            explanationBox.classList.add("hidden");
            nextBtn.classList.add("hidden");
            
            const q = quizData[currentIdx];
            
            // Set text values
            categoryTag.textContent = q.category;
            currentQuestionNum.textContent = currentIdx + 1;
            questionText.textContent = q.question;
            hintText.textContent = q.hint;
            explanationBox.innerHTML = `<strong>Tushuntirish:</strong> ${q.explanation}`;
            
            // Progress Bar Update
            progressBar.style.width = `${((currentIdx + 1) / quizData.length) * 100}%`;
            
            // Clear & Generate Options
            optionsContainer.innerHTML = "";
            q.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl p-4 transition font-medium flex justify-between items-center group";
                btn.innerHTML = `
                    <span class="text-slate-700">${opt}</span>
                    <span class="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs text-transparent group-hover:border-slate-400 bg-white">✓</span>
                `;
                btn.addEventListener("click", () => handleOptionClick(idx, btn));
                optionsContainer.appendChild(btn);
            });
        }

        // Show/Hide Hint
        hintBtn.addEventListener("click", () => {
            hintText.classList.toggle("hidden");
        });

        // Option Selection Handler
        function handleOptionClick(selectedIdx, selectedBtn) {
            const q = quizData[currentIdx];
            const optionButtons = optionsContainer.querySelectorAll("button");
            
            // Disable further selection
            optionButtons.forEach(btn => {
                btn.disabled = true;
                btn.classList.remove("hover:bg-slate-100", "hover:border-slate-300");
            });

            const isCorrect = selectedIdx === q.answer;
            if (isCorrect) {
                score++;
                scoreCounter.textContent = `${score} / ${quizData.length}`;
                selectedBtn.className = "w-full text-left bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 transition font-semibold text-emerald-800 flex justify-between items-center";
                selectedBtn.querySelector("span:last-child").className = "w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold";
                selectedBtn.querySelector("span:last-child").textContent = "✓";
                
                // Show positive explanation
                explanationBox.classList.remove("hidden");
                explanationBox.className = "flex-grow bg-emerald-50 text-emerald-800 rounded-xl p-4 border border-emerald-100 text-sm";
            } else {
                selectedBtn.className = "w-full text-left bg-rose-50 border-2 border-rose-400 rounded-xl p-4 transition font-semibold text-rose-800 flex justify-between items-center";
                selectedBtn.querySelector("span:last-child").className = "w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center text-xs font-bold";
                selectedBtn.querySelector("span:last-child").textContent = "✗";

                // Highlight correct answer
                const correctBtn = optionButtons[q.answer];
                correctBtn.className = "w-full text-left bg-emerald-50 border border-emerald-300 rounded-xl p-4 transition font-medium text-emerald-700 flex justify-between items-center";
                correctBtn.querySelector("span:last-child").className = "w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold";
                correctBtn.querySelector("span:last-child").textContent = "✓";

                // Show correction explanation
                explanationBox.classList.remove("hidden");
                explanationBox.className = "flex-grow bg-rose-50 text-rose-800 rounded-xl p-4 border border-rose-100 text-sm";
            }

            // Log answer for review
            answersLogged.push({
                question: q.question,
                options: q.options,
                userAnswer: selectedIdx,
                correctAnswer: q.answer,
                isCorrect: isCorrect,
                explanation: q.explanation
            });

            nextBtn.classList.remove("hidden");
        }

        // Next Button Click Handler
        nextBtn.addEventListener("click", () => {
            currentIdx++;
            if (currentIdx < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        });

        // Show Results
        function showResults() {
            clearInterval(timerInterval);
            quizContainer.classList.add("hidden");
            resultScreen.classList.remove("hidden");

            // Calculate metrics
            finalCorrect.textContent = score;
            const wrongCount = quizData.length - score;
            finalWrong.textContent = wrongCount;
            const percentage = Math.round((score / quizData.length) * 100);
            finalPercentage.textContent = `${percentage}%`;

            // Categorize Level
            let levelText = "";
            let levelColor = "";
            if (percentage >= 85) {
                levelText = "A2 Elementary (Alo!)";
                finalFeedback.className = "text-sm font-bold text-emerald-600 mt-2";
            } else if (percentage >= 60) {
                levelText = "A2 Elementary (Yaxshi)";
                finalFeedback.className = "text-sm font-bold text-blue-600 mt-2";
            } else {
                levelText = "Elementary (Takrorlash zarur)";
                finalFeedback.className = "text-sm font-bold text-rose-500 mt-2";
            }
            finalFeedback.textContent = levelText;

            // Generate Review List
            reviewList.innerHTML = "";
            answersLogged.forEach((log, index) => {
                const item = document.createElement("div");
                item.className = `p-4 rounded-xl border ${log.isCorrect ? 'bg-emerald-50/40 border-emerald-100' : 'bg-rose-50/40 border-rose-100'} space-y-2`;
                item.innerHTML = `
                    <div class="flex justify-between items-start">
                        <span class="font-bold text-slate-800 text-sm">${index + 1}. ${log.question}</span>
                        <span class="text-xs font-bold px-2 py-0.5 rounded ${log.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                            ${log.isCorrect ? 'To\'g\'ri' : 'Xato'}
                        </span>
                    </div>
                    <div class="text-xs text-slate-600">
                        <p>Sizning javobingiz: <strong class="${log.isCorrect ? 'text-emerald-700' : 'text-rose-600'}">${log.options[log.userAnswer]}</strong></p>
                        ${!log.isCorrect ? `<p>To'g'ri javob: <strong class="text-emerald-700">${log.options[log.correctAnswer]}</strong></p>` : ''}
                    </div>
                    <p class="text-xs text-slate-500 italic border-t border-slate-100 pt-2">${log.explanation}</p>
                `;
                reviewList.appendChild(item);
            });
        }

        // Restart Quiz
        restartBtn.addEventListener("click", () => {
            currentIdx = 0;
            score = 0;
            answersLogged = [];
            timerSeconds = 0;
            scoreCounter.textContent = `0 / ${quizData.length}`;
            timerDisplay.textContent = "00:00";
            
            resultScreen.classList.add("hidden");
            welcomeScreen.classList.remove("hidden");
        });