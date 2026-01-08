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
        nama: "Muhammad Dwiky Yanuarezza",
        nim: "1202230031",
        role: "Ketua Kelompok",
        foto: "assets/images/Rezza.jpeg",
        bio: "I am an Information Technology student with a keen interest in technology development and programming. Outside of my academic activities, I enjoy exercising as a way to maintain a balance between my physical and mental well-being. The presence of artificial intelligence has been very helpful to me, as it has enabled me to work more efficiently when coding and has improved my productivity and quality of learning in the field of technology.",
        email: "dwikyrezza@student.telkomuniversity.ac.id"
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
        nama: "Yuliana Nur Hanifah",
        nim: "1202230033",
        role: "Anggota",
        foto: "assets/images/Yuliana Nur Hanifah.jpg",
        bio: "Undergraduate student at Telkom University Surabaya majoring in Information Technology",
        email: "yuliananurhanifah@student.telkomuniversity.ac.id"
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
        judul: "AI Tools: Efficiency at the Cost of Real-World Readiness?",
        ringkasan: "AI tools significantly improve efficiency for IT students, but overreliance risks weakening critical thinking and real-world readiness. Without deep understanding, this efficiency may create an illusion of mastery that leaves graduates unprepared for professional challenges.",

        konten: `
    <p>
        The rapid ascent of <span class="keyword-highlight">Artificial Intelligence (AI)</span> has initiated a major transformation in the fields of Information Technology and Computer Science.
        Tools such as <span class="important-term">ChatGPT</span> and <span class="important-term">GitHub Copilot</span> provide instant assistance, enabling students to complete academic tasks with remarkable speed.
        While this efficiency is appealing, excessive dependence on AI tools raises serious concerns about students’ <span class="keyword-highlight">real-world readiness</span>.
    </p>

    <h2>Efficiency and Academic Performance</h2>
    <p>
        Research indicates that AI tools can improve short-term academic outcomes by accelerating debugging, reducing cognitive load, and assisting conceptual understanding.
        A randomized controlled trial conducted by <span class="important-term">Nie et al. (2025)</span> found that students who actively adopted GPT-based tools demonstrated performance improvements.
        However, when considering the broader student population, overall exam performance declined after the introduction of AI tools, suggesting unintended negative consequences.
    </p>

    <div class="key-points-box">
        <h3>Advantages of AI Tools</h3>
        <ul>
            <li>Faster task completion and debugging</li>
            <li>Immediate feedback and explanations</li>
            <li>Increased confidence and self-efficacy</li>
            <li>Reduced mental effort during problem solving</li>
        </ul>
    </div>

    <h2>The Cost of Overreliance</h2>
    <p>
        Despite their benefits, AI tools may bypass the essential <span class="keyword-highlight">cognitive struggle</span> required for deep learning.
        Studies warn that students often prioritize output correctness over understanding, resulting in weakened
        <span class="important-term">critical thinking</span>, <span class="important-term">algorithmic reasoning</span>, and manual debugging skills.
        This pattern encourages <span class="keyword-highlight">surface learning</span>, which is insufficient for professional software engineering.
    </p>

    <blockquote>
        “Efficiency without understanding creates an illusion of mastery that quickly collapses in real-world scenarios.”
    </blockquote>

    <h2>Risks in Professional Environments</h2>
    <p>
        In real-world software development, AI-generated solutions can be <span class="keyword-highlight">factually incorrect</span>,
        logically inconsistent, or insecure.
        According to <span class="important-term">Garousi et al. (n.d.)</span>, uncritical reliance on AI artifacts without rigorous human validation
        can introduce undetected defects and security vulnerabilities.
        Professional engineers must therefore retain strong verification and problem-solving abilities.
    </p>

    <h2>Responsible Use of AI in Education</h2>
    <p>
        To mitigate these risks, educational institutions must implement structured strategies that emphasize
        <span class="important-term">verification, transparency, and ethical AI use</span>.
        Students should be trained to critique AI-generated outputs, understand model limitations, and cross-check results with trusted sources.
        Assignments focusing on validating flawed AI outputs can reinforce deep learning and professional readiness.
    </p>

    <h2>Conclusion</h2>
    <p>
        AI tools undeniably enhance efficiency in academic settings, but efficiency without deep understanding
        leaves students unprepared for unpredictable real-world challenges.
        True mastery in technology demands intellectual effort, critical evaluation, and the ability to operate independently of automated systems.
        AI should serve as a support tool—not a replacement for human reasoning.
    </p>

    <div class="references-section">
        <h2>References</h2>
        <ul class="references-list">
            <li>Nie, Y., et al. (2025). The impact of large language models on student performance in coding education.</li>
            <li>Garousi, V., et al. (n.d.). Responsible use of generative AI in software engineering.</li>
            <li>Elnaffar, S., et al. (2025). AI-assisted learning and its impact on student cognition.</li>
            <li>Vieriu, D., & Petrea, M. (2025). Surface learning risks in AI-supported education.</li>
            <li>Bearman, M., et al. (2023). Trust, authority, and AI in higher education.</li>
            <li>Sasikala, S., & Ravichandran, D. (2024). Human-centric learning in technology education.</li>
        </ul>
    </div>
`,



        // SLIDE PRESENTATION - Link to Google Slides or embedded presentation
        slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSample/embed",
        slideTitle: "English in Digital Era - Presentation Slides",

        // ANNOTATED TEXT - Text with annotations and explanations
        annotatedText: `
    <div class="annotated-section">
        <h3>AI and Learning Efficiency</h3>
        <p class="annotated-paragraph">
            AI tools improve <span class="annotation" data-note="The ability to complete tasks faster and with less effort">efficiency</span>
            by providing instant feedback and automated coding assistance.
        </p>
        <div class="annotation-note">
            <strong>Explanation:</strong> Efficiency helps students finish tasks quickly but does not always ensure deep understanding.
        </div>
    </div>
    
    <div class="annotated-section">
        <h3>Overreliance on AI Tools</h3>
        <p class="annotated-paragraph">
            Excessive dependence on AI can reduce
            <span class="annotation" data-note="The ability to analyze, evaluate, and solve problems independently">critical thinking</span>
            and encourage surface-level learning.
        </p>
        <div class="annotation-note">
            <strong>Key Insight:</strong> Treating AI as a primary problem-solver weakens foundational technical skills.
        </div>
    </div>
    
    <div class="annotated-section">
        <h3>Professional Consequences</h3>
        <p class="annotated-paragraph">
            In real-world development, AI-generated code may contain
            <span class="annotation" data-note="Errors or vulnerabilities that are not immediately visible">undetected issues</span>
            that require human verification.
        </p>
        <div class="annotation-note">
            <strong>Important:</strong> Human oversight remains essential to ensure reliability and security.
        </div>
    </div>
`,


        // SELF INTRODUCTORY PARAGRAPH - Author's personal introduction
        selfIntro: `
    <p>Hello! My name is <strong>Muhammad Dwiky Yanuarezza</strong>, and I am an Information Technology student with a strong interest in software development and emerging technologies.
    Beyond academics, I enjoy staying active through sports, which helps me maintain balance and discipline in my daily life.</p>
    
    <p>I created this article to share my perspective on how Artificial Intelligence has positively impacted my learning experience, particularly in improving efficiency when working with code.
    AI tools allow me to optimize my time, focus on understanding core concepts, and increase productivity. Through this blog, I aim to reflect on the responsible use of AI—leveraging its benefits without losing the critical thinking skills essential for real-world challenges.</p>
`,


        tanggal: "2024-12-15",
        kategori: "Technology",
        thumbnail: "assets/images/AI Tools Efficiency at the Cost of.png",
        gambarHeader: "assets/images/AI Tools Efficiency at the Cost of.png",
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
        judul: "Digital Transformation as the Key to Business Success in the Modern Era",
        ringkasan: "Digital transformation is a fundamental pillar for modern business success, enabling companies to improve efficiency, enhance customer experience, and strengthen long-term competitiveness. Without proper adaptation, businesses risk falling behind in an increasingly digital and competitive environment.",

        konten: `
        <h2>Introduction</h2>
        <p>
            Technological innovation has vastly altered the business landscape across all industrial sectors. From newly established enterprises to large corporations, everyone is feeling the effects of digital technology advancements. There are still a few traditional businesses that prefer to stick with their manual systems, which they have been using for years and consider them adequate; however, most believe that digital transformation is not an idea of the future but rather a need to stay current with changing consumer behaviors and intense market competition. In the end, digital transformation does not make up a wave but is rather an essential pillar for business success through efficiency improvement, better customer experience, building competitiveness of the businesses themselves, and meeting challenges in the future.
        </p>

        <h2>Understanding Digital Transformation</h2>
        <p>
            Digital transformation is not about sitting in front of computers. It has nothing to do with new software installed. Rather, it involves the application of technology in different business areas to ensure precise, fast, and efficient operations. For instance, companies may adopt data analytics for better decision-making based on more accurate information. They can implement automation to replace time-consuming manual tasks with repetitive actions. Simple use of cloud storage is already a digital transformation because this means file access from anywhere by the employees without dependence on one device. To put it differently, digital transformation is reshaping the mode of operation in an organization to fit into such an aggressive environment.
        </p>

        <h2>Why Businesses Need Digital Transformation</h2>
        <p>
            The reason businesses need digital transformation is actually simple: the world has changed, and so have the customers. People now want things to be fast, convenient, and accessible. They want services that are phone reachable, smooth transactions, and personal experiences. If a company doesn’t adapt to this change, one of its competitors providing modern solutions might snatch their customers. Manual processes also impede operations, up the ante in terms of errors, and are hard to work upon. In contrast, digital systems allow automation of most processes which in turn increases productivity and reduces operational costs. Therefore, digital transformation is not something that has to be done just for the sake of being in the trend, rather, it is a necessity to survive and compete in this kind of market.
        </p>

        <h2>Benefits and Challenges</h2>
        <p>
            Digital transformation comes with benefits. First, businesses become more efficient because technology takes care of much of their trivial work. Employees become fruitful hence they can now concentrate on other important matters. Decisions are better made out of real-time data rather than assumptions. But with change, challenges follow. The cost of acquiring technology can be quite expensive, especially for smaller companies. Labor does not possess the digital skills that are required to operate new systems, hence training has to be done for employees. Another major concern is data security since more information will now be stored digitally. Though met with much hindrance, most firms still push through because in the end, when all has been said and done and tallied up, the benefits far outweigh the problems encountered at the beginning.
        </p>

        <h2>Real Examples and Future Impact</h2>
        <p>
            There are a number of companies that have thrived because of digital transformation. Netflix used to provide DVD rental services, now it operates as a global streaming platform essentially on the back of data and digital innovation. Among others, Amazon is recognized for having an extremely efficient logistics system plus utilizing artificial intelligence in personalizing recommendations to customers. In Indonesia, Gojek has redesigned how people get rides, make payments, and access many daily services by creating a digital ecosystem connecting millions of users. These firms prove that while some may view digital transformation as nothing more than improving operations, it can indeed completely reorganize an entire business model. In the future, technology such as AI, automation, or big data regarding corporate strategies. Companies that refuse to adapt may find it difficult to keep up in this fast-moving environment.
        </p>

        <h2>Conclusion</h2>
        <p>
            Digital transformation therefore clearly denotes a basic pillar of success in contemporary businesses. This makes companies work efficiently by offering good experiences to customers and sustaining solid long-term competitiveness. Firms that embrace the fast changes in technology will be able to thrive as technology keeps on advancing. Moreover, any firm that resists change is bound to lag behind. Eventually, digital transformation is not an option but rather the means that would keep a company relevant going into the future. 
        </p>

        <div class="references-section">
            <h2>References</h2>
            <ul class="references-list">
                <li>Agustian, K., et al. (2023). The Impact of Digital Transformation on Business Models and Competitive Advantage. <em>TACIT</em>.</li>
                <li>Fadhlurrahman, M. A., & Info, A. (2024). An Academic Analysis of Digital Transformation. <em>SITJ</em>.</li>
                <li>Hamiduddin, A. Y. (n.d.). Digital Business Transformation in Economy 4.0. <em>JESS</em>.</li>
                <li>Sri Wulan, T., et al. (2024). Digital Transformation and Organizational Performance. <em>JE3S</em>.</li>
                <li>Vaska, S., et al. (2021). Digital Transformation of Business Model Innovation. <em>Frontiers in Psychology</em>.</li>
                <li>Digital Transformation as a Strategy to Improve Business Performance in the Retail Sector. <em>EDUCTUM Journal</em>.</li>
            </ul>
        </div>
    `,

        slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vSample/embed",
        slideTitle: "Digital Transformation in Business – Presentation Slides",

        selfIntro: `
        <p>
            Hello! My name is <strong>Yuliana Nur Hanifah</strong>, an undergraduate student majoring in Information Technology.
            I wrote this essay to explore how digital transformation has become a key driver of business success in today’s competitive environment.
        </p>
        <p>
            Through this article, I aim to highlight not only the benefits of digital transformation,
            but also the challenges businesses face when adapting to technological change.
            I hope this discussion provides useful insights into why digital transformation is no longer optional for modern organizations.
        </p>
    `,

        tanggal: "2025-01-07",
        kategori: "Business & Technology",
        thumbnail: "assets/images/digital-transformation-business.png",
        gambarHeader: "assets/images/digital-transformation-business.png",
        penulisId: 3,
        readTime: "5 min read"
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
