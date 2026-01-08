/**
 * DATA BLOG - Frontend Only
 * Berisi data artikel, dosen, dan penulis
 */

// Data Dosen Pengampu
const dosenData = {
    id: 1,
    nama: "Alda Dea Delfina S.Pd M. Tesol",
    gelar: "English Lecturer",
    institusi: "Telkom University Surabaya",
    mataKuliah: ["Bahasa Inggris", "Academic Writing", "English for Business"],
    foto: "assets/images/dosen.png",
    deskripsi: "Mrs. Alda is a lecturer at Telkom University Surabaya specializing in English language teaching. She is committed to helping students develop effective English communication skills in academic contexts.",
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
        bio: "I am an Information Technology student who is deeply passionate about the intersection of Internet of Things (IoT) and Artificial Intelligence. I believe that the future of technology lies in how we can make our physical environment smarter and more responsive through data-driven insights. In my spare time, I love exploring new gadgets and working on small hardware projects to sharpen my technical skills. My goal is to use my knowledge of AI to create innovative solutions that can solve real-world problems and make daily life more efficient for everyone.",
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
        nama: "Lely Sylva Jemima Tarigan",
        nim: "1202230034",
        role: "Anggota",
        foto: "assets/images/Lely.jpeg",
        bio: "Information Technology students at Telkom University Surabaya who are interested in learning English and improving their writing skills through academic projects and collaborations.",
        email: "lelysjtrg@student.telkomuniversity.ac.id"
    }
];

// Self Introduction Data untuk setiap anggota
const selfIntroductionData = [
    {
        id: 1,
        penulisId: 1,
        introduction: `
            <p>Hai everyone, my name is Muhammad Dwiky Yanuarezza, and everyone call me Rezza. I was born in Surabaya on 18 January 2004. I am currentlu a student at Telkom Univerisity Surabaya, majoring Information Technology, and I have been studying here since 2023 untill now. I have lot of hobbies, such as play basketball, football, hiking, swimming, running and many others. One of my favorites hobbies for now is running, and now I have been putting my focus on training my self for increase or improve my running skills. Those include specisfics workout for all my body, like I train my upper body and my lower body to build my strength and my endurance body, which is that good for running. This dedication has led me to complete my first half marathon, a great achievement and I am very proud of, and now I am making a goal to improve my personal best time. The reason why I love running is its simplicity, because I think running is the cheapest sport as long as I know , we don’t need pay lot of money for doing that activity, because for running, we just need prepare our body only. Just that, but if you want to upgrade your style or you want to look great in your running style, absolutely you can buy many things, such us running shoes, smartwatch, and many others
            </p>
        `
    },
    {
        id: 2,
        penulisId: 2,
        introduction: `
            <p>Hello, my name is Mohammad Afrizal Rizky Setyawan from IT 06-02. Today I want to tell you about something interesting for me, it is Dungeons & Dragons or usually called D&D. D&D is a role playing game that already exist long time before video games. In this game, players make character and act like hero, wizard, or thief inside fantasy world. To play it, we use map, miniature, statistic paper, guide book, and many kind of dice. The most special thing in D&D is we can imagine many things, not only follow story that already made. Every decision from players can change the story, so every time we play it become different and surprise. D&D is not only fun, but also can teach us teamwork, communication, strategy, and creativity. When we play, sometimes we fight monster, sometimes solve puzzle, or sometimes we just talk and roleplay. I think if you try this game, you will like it and maybe want to play more and more. For me, this game is better than normal online game because it give more freedom to create story by ourselves. So I really suggest you to try Dungeons & Dragons, because it is one of the most amazing experience you can try with your friends.</p>
        `
    },
    {
        id: 3,
        penulisId: 3,
        introduction: `
            <p>I am someone who loves exploring creativity through technology and design. My interest in technology began when I was in vocational high school, where I developed a strong passion for creating visual works such as websites, digital posters, and user interfaces. This passion has grown even stronger as I pursue my studies in Information Technology, where I discovered how creativity and technology blend beautifully through UI/UX design. I believe design is not just about making things look beautiful but also about creating meaningful and user-friendly experiences.</p>
            
            <p>Design has become my favourite hobby because it allows me to express creativity through colors, shapes, and layouts. I often spend my time learning about design trends, exploring new tools, and following UI/UX tutorials to improve my skills. Through this hobby, I have learned that every element in design has its own purpose and meaning, influencing how users interact with and perceive a product. I enjoy the design process because each project offers new challenges and opportunities to express ideas creatively. </p>
            
            <p>I truly encourage everyone to explore design, even just for fun, because it helps you see the world from a more creative perspective. You begin to notice beauty in everyday things, the balance of shapes, the harmony of colors, and the power of simplicity. For me, design is more than a hobby, it is a meaningful journey that combines art, logic, and empathy in the most inspiring way.</p>
        `
    },
    {
        id: 4,
        penulisId: 4,
        introduction: `
            <p>My name is Lely Sylva Jemima, everyone calls me Lely and I am currently college student in Telkom University Surabaya major in Information Technology. I chose this major because I am fascinated by how technology continues to transform our daily lives, making tasks easier and opening new opportunities. At college, I learned that it was both challenging and an opportunity to work with friends on various projects. Group assignments help me not only to learn the subject but also to develop teamwork and communication skills, which are important for the future. </p>
            
            <p>I have a several hobbies. Some of which are reading books, listening music, and watching film or series. The books I often read are Indonesian novels and English classic. Books allows me to explore new worlds, learn about different perspectives, and learn valuable lessons. I listen to music while I do housework, some of my favorite singers are The Beatles, Queen, Red Velvet, Aespa, ABBA, etc. On weekends, if I don't have much to do, I watch movies or series on streaming apps. I also enjoy spending time with my friends, relaxing after a busy week and talking about many interesting things. </p>
            
            <p>About dreams, I’m still looking about my passion. I have many dreams for my future an and still explore many new things that I will likely do in the long term. My biggest goal is to become a professional in my field and contribute something meaningful to society. I believe technology should not only serve big industries but also improve the quality of life for ordinary people. </p>
        `
    }
];

// Data Artikel Blog
const artikelData = [
    {
        id: 1,
        judul: "AI Tools: Efficiency at the Cost of Real-World Readiness?",
        ringkasan: "AI tools significantly improve efficiency for IT students, but overreliance risks weakening critical thinking and real-world readiness.",
        konten: `
    <p>
        The rapid ascent of <span class="keyword-highlight">Artificial Intelligence (AI)</span> has initiated a major transformation in the fields of Information Technology and Computer Science.
        Tools such as <span class="important-term">ChatGPT</span> and <span class="important-term">GitHub Copilot</span> provide instant assistance, enabling students to complete academic tasks with remarkable speed.
        While this efficiency is appealing, excessive dependence on AI tools raises serious concerns about students' <span class="keyword-highlight">real-world readiness</span>.
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
        "Efficiency without understanding creates an illusion of mastery that quickly collapses in real-world scenarios."
    </blockquote>

    <h2>Conclusion</h2>
    <p>
        AI tools undeniably enhance efficiency in academic settings, but efficiency without deep understanding
        leaves students unprepared for unpredictable real-world challenges.
        True mastery in technology demands intellectual effort, critical evaluation, and the ability to operate independently of automated systems.
        AI should serve as a support tool—not a replacement for human reasoning.
    </p>
`,
        slideUrl: "assets/slides/reza.pdf",
        slideTitle: "AI Tools Presentation",
        slideType: "pdf",
        slideThumbnail: "assets/images/AI Tools Efficiency at the Cost of.png",
        
        annotatedPdfUrl: "assets/annotated/reza.pdf",
        annotatedPdfTitle: "Journal Summary - Annotated Version",
        
        annotatedText: `
    <div class="annotated-section">
        <h3>AI and Learning Efficiency</h3>
        <p class="annotated-paragraph">
            AI tools improve <span class="annotation" data-note="The ability to complete tasks faster and with less effort">efficiency</span>
            by providing instant feedback and automated coding assistance.
        </p>
    </div>
`,
        selfIntro: `
    <p>Hello! My name is <strong>Muhammad Dwiky Yanuarezza</strong>, and I am an Information Technology student with a strong interest in software development and emerging technologies.</p>
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
            <p>Technology has changed the way people communicate, learn, and spend their free time. One of the clearest examples can be seen in gaming, where online platforms now allow players from different countries to connect instantly. Steam, created by Valve in 2003, has grown into the world's largest gaming platform, with more than 120 million active users every month (Valve Report, 2024). This essay will explain how Steam connects gamers globally, why this connection matters, and the challenges that gamers still face today.</p>
            
            <h2>Steam Builds Global Communities</h2>
            <p>Steam is more than a place to buy games; it is a massive digital community. The platform includes discussion forums, community hubs, global chat rooms, and features like Steam Groups that allow players with similar interests to meet each other. Studies show that more than 40% of gamers say they made at least one long-term friendship through online platforms, including Steam (GameConnect Survey, 2023). People from Indonesia can easily talk with players from Germany, Japan, Brazil, or the United States because Steam removes physical distance.</p>
            
            <h2>Collaboration, Teamwork, and Online Communication</h2>
            <p>Steam does more than connect people socially—it teaches cooperation and teamwork. Most popular Steam games require players to communicate, plan strategy, and solve problems together. Games like Dota 2 show how important teamwork is, requiring five players to cooperate at all times, with research finding that teams with better communication win up to 53% more matches (eSports Strategy Study, 2024). Steam's built-in features, such as voice chat, friend lists, and party systems, help players coordinate easily.</p>
            
            <h2>Challenges of Online Interaction</h2>
            <p>Even though Steam brings many benefits, online communication also has challenges. One major problem is toxic behavior such as harassment, insults, and bullying. Studies show that around 75% of online gamers have experienced some form of toxic interaction, especially in competitive games (Online Safety Report, 2024). Language barriers can also cause misunderstandings, especially when players come from different cultures. Another issue is screen addiction—some players spend too much time online, which can hurt school performance, sleep, and mental health.</p>
            
            <h2>Conclusion</h2>
            <p>Steam shows how technology can bring people from around the world into one shared digital space. It helps gamers make new friendships, work together in teams, and express creativity through mods and community projects. Although challenges like toxicity, addiction, and privacy risks remain, these problems can be reduced through responsible use, better rules, and strong digital education. If used wisely, platforms like Steam prove that online spaces can create meaningful relationships and help people understand each other, no matter how far apart they live.</p>
        `,
        slideUrl: "assets/slides/afrizal.pdf",
        slideTitle: "How Online Platforms Like Steam Connect Gamers Around the World",
        slideType: "pdf",
        slideThumbnail: "assets/images/steam-banner.jpg",
        annotatedPdfUrl: "assets/annotated/afrizal.pdf",
        annotatedPdfTitle: "Journal Summary - Annotated Version",
        annotatedText: `
    <div class="annotated-section">
        <h3>Digital Community</h3>
        <p class="annotated-paragraph">
            Platforms like Steam function as a 
            <span class="annotation" data-note="A group of people interacting in a virtual space around shared interests">digital community</span>
            where social interaction is just as important as the games themselves.
        </p>
    </div>
    
    <div class="annotated-section">
        <h3>Toxic Behavior</h3>
        <p class="annotated-paragraph">
            One of the biggest challenges in online spaces is 
            <span class="annotation" data-note="Unkind, harassing, or harmful communication between players">toxic behavior</span>, 
            which can negatively impact the user experience.
        </p>
    </div>
`,
        selfIntro: `
    <p>Hello! I am <strong>Mohammad Afrizal Rizky Setyawan</strong>. I am an Information Technology student who is deeply passionate about how technology, especially IoT and AI, can bridge gaps in our daily lives.</p>
    <p>I wrote this article to explore how gaming platforms like Steam have evolved beyond mere stores into vital social hubs that connect people globally. My background in technology drives me to understand the underlying systems that allow these global communities to thrive. Through this blog, I hope to share my fascination with how digital spaces can create real-world connections and teamwork across borders.</p>
`,
        tanggal: "2025-01-07",
        kategori: "Game",
        thumbnail: "assets/images/steam-banner.jpg",
        gambarHeader: "assets/images/steam-banner.jpg",
        penulisId: 2,
        readTime: "10 min read"
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
            The reason businesses need digital transformation is actually simple: the world has changed, and so have the customers. People now want things to be fast, convenient, and accessible. They want services that are phone reachable, smooth transactions, and personal experiences. If a company doesn't adapt to this change, one of its competitors providing modern solutions might snatch their customers. Manual processes also impede operations, up the ante in terms of errors, and are hard to work upon. In contrast, digital systems allow automation of most processes which in turn increases productivity and reduces operational costs. Therefore, digital transformation is not something that has to be done just for the sake of being in the trend, rather, it is a necessity to survive and compete in this kind of market.
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
        slideUrl: "assets/slides/lia.pdf",
        slideTitle: "AI Tools Presentation",
        slideType: "pdf",
        slideThumbnail: "assets/images/digital-transformation-business.png",
        annotatedPdfUrl: "assets/annotated/lia.pdf",
        annotatedPdfTitle: "Journal Summary - Annotated Version",
        selfIntro: `
        <p>
            Hello! My name is <strong>Yuliana Nur Hanifah</strong>, an undergraduate student majoring in Information Technology.
            I wrote this essay to explore how digital transformation has become a key driver of business success in today's competitive environment.
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
        judul: "Digital Detox",
        ringkasan: "Digital detox is done because it can help restore mental health, improve life balance, and reduce the risk of stress caused by excessive use of technology.",
        konten: `
            <h2>Introduction</h2>
            <p>In today's digital era, people spend a lot of time using smartphones, laptops, and social media. Although technology makes daily life easier, too much screen time can harm mental and physical health. Some believe digital detox can reduce stress and improve real social interactions, but others argue it is difficult because many jobs depend on digital devices. Therefore, taking regular digital detox is important to restore mental health and maintain a healthy balance in life.</p>
            
            <h2>Negative Effects of Excessive Technology Use</h2>
            <p>Excessive use of technology can cause various disturbances to the body and mind. When someone stares at a screen for too long, they can experience headaches, eye strain, and difficulty sleeping because the brain is constantly stimulated by light and information. In addition, constant use of social media can make a person feel anxious or depressed, especially when they compare themselves to others on the internet. For example, many students spend most of their day on their laptops and smartphones for studying, entertainment, and social media, and then feel tired, have difficulty focusing, and are easily stressed. This shows that uncontrolled use of technology can have a negative impact on health.</p>
            
            <h2>Impact of Screen Time on Mental Health and Sleep</h2>
            <p>Too much screen time also affects mental health and sleep quality. Using digital devices before bedtime can disrupt the body's natural sleep cycle and reduce sleep duration.  Poor sleep quality often leads to stress, irritability, lack of concentration, and emotional instability.  In addition, excessive use of social media can increase anxiety and depression, especially when people constantly compare themselves to others online.</p>
            
            <h2>Benefits of Digital Detox for Emotional and Social Life</h2>
            <p>Practicing digital detox can provide many benefits for emotional and social well-being. Reducing screen time allows people to focus more on real-life interactions instead of digital communication.  Face-to-face conversations help strengthen emotional connections and improve communication skills. Digital detox also gives individuals more time to relax, reflect, and enjoy meaningful activities without distractions.</p>
            
            <h2>Personal Experience with Digital Detox</h2>
            <p>Based on personal experience, excessive daily screen time caused frequent headaches, difficulty sleeping, and reduced motivation. Spending too much time on smartphones and laptops made it hard to focus on academic tasks. After trying a digital detox by limiting screen time and turning off unnecessary notifications, positive changes were noticed. Mood improved, concentration increased, and daily activities became more enjoyable.</p>
            
            <h2>Challenges of Practicing Digital Detox in Modern Life</h2>
            <p>Despite its benefits, digital detox can be difficult to practice in modern life.  Many jobs, academic activities, and communication processes rely heavily on digital technology.  Completely disconnecting from devices may interrupt productivity and cause delays in work or study.  Therefore, digital detox should be applied flexibly rather than avoiding technology completely.</p>
            
            <h2>Conclusion</h2>
            <p>Digital detox offers many important benefits, such as reducing stress, improving mental clarity,  and restoring balance in daily life. Although technology is essential in the modern world, uncontrolled use can negatively affect well-being. By practicing digital detox in a flexible and realistic way, individuals can maintain productivity while protecting their mental and physical health.</p>

         <div class="references-section">
            <h2>References</h2>
            <ul class="references-list">
                <li>Mohd Saat, N. Z., Hanawi, S. A., Hanafiah, H., Ahmad, M., Farah, N. M. F., & Abdul Rahman, N. A. A. (2024). Relationship of screen time with anxiety, depression, and sleep quality among adolescents: A cross-sectional study. Frontiers in Public Health, 12, 1459952. https://doi.org/10.3389/fpubh.2024.1459952</li>
                <li>Zhong, C., Masters, M., Donzella, S. M., Diver, W. R., & Patel, A. V. (2025). Electronic Screen Use and Sleep Duration and Timing in Adults. JAMA Network Open, 8(3), e252493. https://doi.org/10.1001/jamanetworkopen.2025.2493 </li>
            </ul>
        </div>
            `,
        tanggal: "2026-01-08",
        kategori: "Technology",
        thumbnail: "assets/images/digital-detox.jpeg",
        gambarHeader: "assets/images/digital-detox.jpeg",
        penulisId: 4,
        annotatedPdfUrl: "assets/annotated/lely.pdf",
        annotatedPdfTitle: "Journal Summary - Annotated Version",
        slideUrl: "assets/slides/lely.pdf",
        slideTitle: "Digital Detox Presentation",
        slideType: "pdf",
        slideThumbnail: "assets/images/AI Tools Efficiency at the Cost of.png",
    },
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

function getKategoriList() {
    const kategoriSet = new Set(artikelData.map(artikel => artikel.kategori));
    return Array.from(kategoriSet);
}

function getArtikelTerbaru(limit = 3) {
    return artikelData
        .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
        .slice(0, limit);
}

function getSelfIntroductionByPenulisId(penulisId) {
    return selfIntroductionData.find(intro => intro.penulisId === parseInt(penulisId));
}

function getAllSelfIntroductions() {
    return selfIntroductionData;
}