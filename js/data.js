/**
 * DATA BLOG - Frontend Only
 * Berisi data artikel, dosen, dan penulis
 */

// Data Dosen Pengampu
const dosenData = {
    id: 1,
    nama: "Alda Dea Delfina S.Pd M. Tesol",
    gelar: "Doktor Pendidikan Bahasa Inggris",
    institusi: "Telkom University",
    mataKuliah: ["Bahasa Inggris", "Academic Writing", "English for Business"],
    foto: "assets/images/dosen.jpg",
    deskripsi: "Dosen berpengalaman lebih dari 15 tahun dalam mengajar Bahasa Inggris di berbagai universitas ternama. Fokus penelitian pada pembelajaran bahasa berbasis teknologi dan pengembangan literasi digital.",
    email: "aldadeadelfina@telkomuniversity.ac.id",
};

// Data Anggota Kelompok (4 Penulis)
const anggotaKelompok = [
    {
        id: 1,
        nama: "Rezza Maulana",
        nim: "103062300001",
        role: "Ketua Kelompok",
        foto: "assets/images/anggota1.jpg",
        bio: "Mahasiswa Teknik Informatika yang passionate dalam dunia teknologi dan bahasa. Fokus pada pengembangan web dan pembelajaran Bahasa Inggris.",
        email: "rezza@student.telkomuniversity.ac.id"
    },
    {
        id: 2,
        nama: "Mohammad Afrizal Rizky Setyawan",
        nim: "1202230029",
        role: "Anggota",
        foto: "assets/images/afrizal.jpg",
        bio: "Mahasiswa Teknik Informatika dengan minat pada pembelajaran bahasa dan teknologi pendidikan. Aktif di organisasi kampus.",
        email: "afrizalrizkys@student.telkomuniversity.ac.id"
    },
    {
        id: 3,
        nama: "Budi Santoso",
        nim: "103062300003",
        role: "Anggota",
        foto: "assets/images/anggota3.jpg",
        bio: "Mahasiswa yang antusias dalam belajar Bahasa Inggris dan berbagi pengetahuan melalui artikel-artikel edukatif.",
        email: "budi@student.telkomuniversity.ac.id"
    },
    {
        id: 4,
        nama: "Citra Dewi Lestari",
        nim: "103062300004",
        role: "Anggota",
        foto: "assets/images/anggota4.jpg",
        bio: "Mahasiswa dengan passion di bidang academic writing dan English for specific purposes. Senang menulis dan berbagi tips belajar.",
        email: "citra@student.telkomuniversity.ac.id"
    }
];

// Data Artikel Blog (5 artikel dummy)
const artikelData = [
    {
        id: 1,
        judul: "The Importance of English in the Digital Era",
        ringkasan: "Explore how English has become the universal language of technology and digital communication, opening doors to global opportunities.",

        // ESSAY - Main Article Content
        konten: `
            <h2>Introduction</h2>
            <p>In today's interconnected world, English has emerged as the lingua franca of the digital age. From programming languages to social media platforms, English dominates the technological landscape.</p>
            
            <h2>Why English Matters in Technology</h2>
            <p>Most programming languages use English syntax and keywords. Documentation, tutorials, and technical forums are predominantly in English. This makes English proficiency essential for anyone pursuing a career in technology.</p>
            
            <h2>Global Communication</h2>
            <p>Social media, online collaboration tools, and international business communications rely heavily on English. Understanding English opens doors to networking with professionals worldwide.</p>
            
            <h2>Career Opportunities</h2>
            <p>Companies increasingly require English skills for tech positions. Whether you're a developer, designer, or project manager, English proficiency significantly enhances your career prospects.</p>
            
            <h2>Conclusion</h2>
            <p>Mastering English in the digital era is not just an advantage—it's a necessity. Start improving your English skills today to unlock global opportunities in technology and beyond.</p>
        `,

        // SLIDE PRESENTATION - Link to Google Slides or embedded presentation
        slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSample/embed",
        slideTitle: "English in Digital Era - Presentation Slides",

        // ANNOTATED TEXT - Text with annotations and explanations
        annotatedText: `
            <div class="annotated-section">
                <h3>Introduction - The Digital Age and English</h3>
                <p class="annotated-paragraph">
                    In today's <span class="annotation" data-note="Connected through internet and technology">interconnected</span> world, 
                    English has emerged as the <span class="annotation" data-note="A common language used for communication between different groups">lingua franca</span> 
                    of the digital age.
                </p>
                <div class="annotation-note">
                    <strong>Key Term:</strong> "Lingua franca" refers to a bridge language used between people who do not share a native language.
                </div>
            </div>
            
            <div class="annotated-section">
                <h3>Technology and English</h3>
                <p class="annotated-paragraph">
                    Most <span class="annotation" data-note="Languages like Python, JavaScript, Java">programming languages</span> 
                    use English <span class="annotation" data-note="Grammar rules and structure">syntax</span> and keywords.
                </p>
                <div class="annotation-note">
                    <strong>Example:</strong> In Python, we write "print()", "if", "else", "class" - all English words.
                </div>
            </div>
            
            <div class="annotated-section">
                <h3>Global Impact</h3>
                <p class="annotated-paragraph">
                    Understanding English <span class="annotation" data-note="Creates opportunities and access">opens doors</span> 
                    to networking with professionals <span class="annotation" data-note="All around the world">worldwide</span>.
                </p>
                <div class="annotation-note">
                    <strong>Statistics:</strong> Over 1.5 billion people speak English globally, with 750 million as non-native speakers.
                </div>
            </div>
        `,

        // SELF INTRODUCTORY PARAGRAPH - Author's personal introduction
        selfIntro: `
            <p>Hello! My name is <strong>Rezza Maulana</strong>, and I am a passionate Informatics Engineering student at Telkom University. 
            As someone deeply interested in technology and software development, I have experienced firsthand how crucial English proficiency 
            is in the tech industry. Throughout my academic journey, I've worked on various programming projects, read countless technical 
            documentation, and participated in international coding communities—all of which require strong English skills.</p>
            
            <p>I created this article to share my insights on why English has become indispensable in our digital world. My goal is to 
            encourage fellow students and aspiring tech professionals to invest time in improving their English, as it will undoubtedly 
            open numerous opportunities in their careers. Through this blog, I hope to combine my passion for technology with effective 
            communication to help others navigate the intersection of language and digital innovation.</p>
        `,

        tanggal: "2024-12-15",
        kategori: "Technology",
        thumbnail: "assets/images/article1.jpg",
        gambarHeader: "assets/images/article1-header.jpg",
        penulisId: 1,
        readTime: "5 min read"
    },
    {
        id: 2,
        judul: "How Online Platforms Like Steam Connect Gamers Around the World",
        ringkasan: "Explore how Steam has transformed from a game store into a global social hub that fosters community, teamwork, and cross-border connections.",
        konten: `
            <h2>Introduction</h2>
            <p>Technology has changed the way people communicate, learn, and spend their free time. One of the clearest examples can be seen in gaming, where online platforms now allow players from different countries to connect instantly. Steam, created by Valve in 2003, has grown into the world’s largest gaming platform, with more than 120 million active users every month (Valve Report, 2024). This essay will explain how Steam connects gamers globally, why this connection matters, and the challenges that gamers still face today.</p>
            
            <h2>Steam Builds Global Communities</h2>
            <p>Steam is more than a place to buy games; it is a massive digital community. The platform includes discussion forums, community hubs, global chat rooms, and features like Steam Groups that allow players with similar interests to meet each other. Studies show that more than 40% of gamers say they made at least one long-term friendship through online platforms, including Steam (GameConnect Survey, 2023). People from Indonesia can easily talk with players from Germany, Japan, Brazil, or the United States because Steam removes physical distance.</p>
            
            <h2>Collaboration, Teamwork, and Online Communication</h2>
            <p>Steam does more than connect people socially—it teaches cooperation and teamwork. Most popular Steam games require players to communicate, plan strategy, and solve problems together. Games like Dota 2 show how important teamwork is, requiring five players to cooperate at all times, with research finding that teams with better communication win up to 53% more matches (eSports Strategy Study, 2024). Steam’s built-in features, such as voice chat, friend lists, and party systems, help players coordinate easily.</p>
            
            <h2>Challenges of Online Interaction</h2>
            <p>Even though Steam brings many benefits, online communication also has challenges. One major problem is toxic behavior such as harassment, insults, and bullying. Studies show that around 75% of online gamers have experienced some form of toxic interaction, especially in competitive games (Online Safety Report, 2024). Language barriers can also cause misunderstandings, especially when players come from different cultures. Another issue is screen addiction—some players spend too much time online, which can hurt school performance, sleep, and mental health.</p>
            
            <h2>Conclusion</h2>
            <p>Steam shows how technology can bring people from around the world into one shared digital space. It helps gamers make new friendships, work together in teams, and express creativity through mods and community projects. Although challenges like toxicity, addiction, and privacy risks remain, these problems can be reduced through responsible use, better rules, and strong digital education. If used wisely, platforms like Steam prove that online spaces can create meaningful relationships and help people understand each other, no matter how far apart they live.</p>
        `,
        tanggal: "2026-1-7",
        kategori: "Technology",
        thumbnail: "assets/images/steam-banner.jpg",
        gambarHeader: "assets/images/steam-banner.jpg",
        penulisId: 2,
        readTime: "6 min read"
    },
    {
        id: 3,
        judul: "Common Grammar Mistakes Indonesian Speakers Make",
        ringkasan: "Learn about the most frequent grammar errors made by Indonesian learners of English and how to avoid them.",
        konten: `
            <h2>Understanding the Challenge</h2>
            <p>Indonesian and English have fundamentally different grammar structures. This leads to specific patterns of errors that Indonesian speakers commonly make when learning English.</p>
            
            <h2>1. Article Usage (A, An, The)</h2>
            <p>Indonesian doesn't have articles, making "a," "an," and "the" particularly challenging. Remember: use "a/an" for non-specific items, "the" for specific ones, and no article for general plurals.</p>
            
            <h2>2. Subject-Verb Agreement</h2>
            <p>In Indonesian, verbs don't change based on the subject. In English, remember: "He goes" (not "he go"), "She has" (not "she have").</p>
            
            <h2>3. Plural Forms</h2>
            <p>Indonesian uses repetition or context for plurals. In English, add -s or -es: "one book, two books" (not "two book").</p>
            
            <h2>4. Verb Tenses</h2>
            <p>Indonesian relies on time markers rather than verb changes. English requires proper tense usage: "I ate yesterday" (not "I eat yesterday").</p>
            
            <h2>5. Prepositions</h2>
            <p>Prepositions often don't translate directly. Learn common combinations through exposure and practice.</p>
            
            <h2>Conclusion</h2>
            <p>Awareness of these common mistakes is the first step to avoiding them. Practice consistently and don't be afraid to make mistakes—they're part of learning!</p>
        `,
        tanggal: "2025-01-02",
        kategori: "Grammar",
        thumbnail: "assets/images/article3.jpg",
        gambarHeader: "assets/images/article3-header.jpg",
        penulisId: 3,
        readTime: "7 min read"
    },
    {
        id: 4,
        judul: "How to Improve Your English Pronunciation",
        ringkasan: "Master the art of clear English pronunciation with these practical techniques and daily exercises.",
        konten: `
            <h2>Why Pronunciation Matters</h2>
            <p>Good pronunciation isn't about sounding like a native speaker—it's about being clearly understood. Clear pronunciation builds confidence and improves communication effectiveness.</p>
            
            <h2>Listen and Imitate</h2>
            <p>Start by listening to native speakers through podcasts, videos, and movies. Pay attention to how they form sounds, stress syllables, and use intonation. Try to imitate what you hear.</p>
            
            <h2>Learn the IPA (International Phonetic Alphabet)</h2>
            <p>Understanding IPA symbols helps you pronounce any English word correctly by reading dictionary entries. It's like having a pronunciation guide for every word.</p>
            
            <h2>Record Yourself</h2>
            <p>Use your phone to record yourself speaking English. Compare it to native speakers. This helps you identify areas for improvement that you might not notice while speaking.</p>
            
            <h2>Practice Minimal Pairs</h2>
            <p>Work on distinguishing and producing similar sounds: ship/sheep, bit/beat, cat/cut. These exercises sharpen your ear and improve your articulation.</p>
            
            <h2>Focus on Stress and Intonation</h2>
            <p>English is a stress-timed language. Proper word and sentence stress can make a huge difference in clarity. Practice emphasizing the right syllables.</p>
            
            <h2>Daily Practice</h2>
            <p>Consistency is key. Spend 10-15 minutes daily on pronunciation exercises. Read aloud, shadow native speakers, and use pronunciation apps.</p>
            
            <h2>Conclusion</h2>
            <p>Improving pronunciation takes time and practice, but the results are worth it. Start implementing these techniques today and track your progress!</p>
        `,
        tanggal: "2025-01-05",
        kategori: "Speaking",
        thumbnail: "assets/images/article4.jpg",
        gambarHeader: "assets/images/article4-header.jpg",
        penulisId: 4,
        readTime: "8 min read"
    },
    {
        id: 5,
        judul: "English for Academic Writing: Essential Tips for Students",
        ringkasan: "Learn the fundamental principles of academic writing in English to excel in your university assignments and research papers.",
        konten: `
            <h2>Understanding Academic Writing</h2>
            <p>Academic writing differs significantly from casual or creative writing. It requires formal language, clear structure, and evidence-based arguments.</p>
            
            <h2>Use Formal Language</h2>
            <p>Avoid contractions (use "do not" instead of "don't"), colloquialisms, and overly casual expressions. Maintain an objective, professional tone throughout your writing.</p>
            
            <h2>Structure Your Essays</h2>
            <p>Follow the classic structure: Introduction (with thesis statement), Body paragraphs (with topic sentences and supporting evidence), and Conclusion (summarizing main points).</p>
            
            <h2>Support with Evidence</h2>
            <p>Always back up your claims with credible sources. Use quotes, paraphrases, and summaries from academic journals, books, and reputable sources.</p>
            
            <h2>Master Citations</h2>
            <p>Learn proper citation formats (APA, MLA, Chicago, etc.). Plagiarism is a serious academic offense—always cite your sources correctly.</p>
            
            <h2>Be Clear and Concise</h2>
            <p>Academic writing values clarity over complexity. Use clear, straightforward language. Avoid unnecessary words and overly complex sentences.</p>
            
            <h2>Edit and Proofread</h2>
            <p>Never submit your first draft. Review for grammar, spelling, coherence, and argument strength. Consider using tools like Grammarly, but don't rely on them entirely.</p>
            
            <h2>Practice Critical Thinking</h2>
            <p>Don't just describe—analyze, evaluate, and synthesize information. Show your ability to think critically about the topic.</p>
            
            <h2>Conclusion</h2>
            <p>Mastering academic writing is essential for university success. Apply these principles consistently, and your writing will improve significantly over time.</p>
        `,
        tanggal: "2025-01-07",
        kategori: "Academic",
        thumbnail: "assets/images/article5.jpg",
        gambarHeader: "assets/images/article5-header.jpg",
        penulisId: 1,
        readTime: "9 min read"
    }
];

// Fungsi helper untuk mendapatkan data
function getArtikelById(id) {
    return artikelData.find(artikel => artikel.id === parseInt(id));
}

function getArtikelByKategori(kategori) {
    if (!kategori || kategori === 'all') return artikelData;
    return artikelData.filter(artikel => artikel.kategori.toLowerCase() === kategori.toLowerCase());
}

function getPenulisById(id) {
    return anggotaKelompok.find(anggota => anggota.id === parseInt(id));
}

function getDosen() {
    return dosenData;
}

function getAnggotaKelompok() {
    return anggotaKelompok;
}

function searchArtikel(query) {
    if (!query) return artikelData;
    const lowerQuery = query.toLowerCase();
    return artikelData.filter(artikel =>
        artikel.judul.toLowerCase().includes(lowerQuery) ||
        artikel.ringkasan.toLowerCase().includes(lowerQuery) ||
        artikel.kategori.toLowerCase().includes(lowerQuery)
    );
}

// Fungsi untuk mendapatkan kategori unik
function getKategoriList() {
    const kategoriSet = new Set(artikelData.map(artikel => artikel.kategori));
    return Array.from(kategoriSet);
}

// Fungsi untuk mendapatkan artikel terbaru
function getArtikelTerbaru(limit = 3) {
    return artikelData
        .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
        .slice(0, limit);
}
