/**
 * MAIN.JS - Frontend Logic
 * Handle DOM manipulation, search, filter, dan rendering konten
 */

// ==================== UTILITAS ====================

// Format date to English
function formatTanggal(tanggalStr) {
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(tanggalStr);
    return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ==================== RENDER ARTIKEL CARDS ====================

// Render daftar artikel di halaman home
function renderArtikelList(artikelList) {
    const container = document.getElementById('artikel-container');
    if (!container) return;

    if (artikelList.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No articles found.</p></div>';
        return;
    }

    container.innerHTML = artikelList.map(artikel => {
        const penulis = getPenulisById(artikel.penulisId);
        return `
            <article class="artikel-card" data-kategori="${artikel.kategori}">
                <div class="artikel-thumbnail">
                    <img src="${artikel.thumbnail}" alt="${artikel.judul}" loading="lazy">
                    <span class="kategori-badge">${artikel.kategori}</span>
                </div>
                <div class="artikel-content">
                    <div class="artikel-meta">
                        <span class="tanggal">${formatTanggal(artikel.tanggal)}</span>
                        <span class="read-time">${artikel.readTime}</span>
                    </div>
                    <h2 class="artikel-judul">
                        <a href="article.html?id=${artikel.id}">${artikel.judul}</a>
                    </h2>
                    <p class="artikel-ringkasan">${artikel.ringkasan}</p>
                    <div class="artikel-footer">
                        <div class="penulis-info">
                            <img src="${penulis.foto}" alt="${penulis.nama}" class="penulis-avatar">
                            <span class="penulis-nama">${penulis.nama}</span>
                        </div>
                        <a href="article.html?id=${artikel.id}" class="read-more">
                            Read More →
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    // Tambahkan animasi fade-in
    const cards = container.querySelectorAll('.artikel-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
}

// ==================== SEARCH & FILTER ====================

// Implementasi search
function implementSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (!searchInput) return;

    function performSearch() {
        const query = searchInput.value.trim();
        const results = searchArtikel(query);
        renderArtikelList(results);

        // Update result count
        const resultCount = document.getElementById('result-count');
        if (resultCount) {
            resultCount.textContent = `Showing ${results.length} articles`;
        }
    }

    // Search on button click
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Live search (optional)
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length === 0) {
            renderArtikelList(artikelData);
        }
    });
}

// Implementasi filter kategori
function implementFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter artikel
            const kategori = btn.dataset.kategori;
            const filtered = getArtikelByKategori(kategori);
            renderArtikelList(filtered);

            // Update result count
            const resultCount = document.getElementById('result-count');
            if (resultCount) {
                resultCount.textContent = `Showing ${filtered.length} articles`;
            }
        });
    });
}

// ==================== HALAMAN DETAIL ARTIKEL ====================

// Render detail artikel
function renderArtikelDetail() {
    const artikelId = getUrlParameter('id');
    if (!artikelId) {
        window.location.href = 'index.html';
        return;
    }

    const artikel = getArtikelById(artikelId);
    if (!artikel) {
        window.location.href = 'index.html';
        return;
    }

    const penulis = getPenulisById(artikel.penulisId);

    // Update page title
    document.title = `${artikel.judul} - English Learning Blog`;

    // Render header
    const headerSection = document.getElementById('article-header');
    if (headerSection) {
        headerSection.innerHTML = `
            <div class="article-header-content">
                <div class="breadcrumb">
                    <a href="index.html">Home</a> / <span>${artikel.kategori}</span>
                </div>
                <h1 class="article-title">${artikel.judul}</h1>
                <div class="article-meta">
                    <span class="kategori-badge">${artikel.kategori}</span>
                    <span class="tanggal">${formatTanggal(artikel.tanggal)}</span>
                    <span class="read-time">${artikel.readTime}</span>
                </div>
            </div>
            <div class="article-header-image">
                <img src="${artikel.gambarHeader}" alt="${artikel.judul}">
            </div>
        `;
    }

    // 1. Render ESSAY content (main article) with enhanced format
    const contentSection = document.getElementById('article-body');
    if (contentSection) {
        contentSection.innerHTML = `
            <!-- Featured Image -->
            <div class="essay-featured-image">
                <img src="${artikel.gambarHeader}" alt="${artikel.judul}">
            </div>
            
            <!-- Author Meta Info -->
            <div class="essay-meta-info">
                <img src="${penulis.foto}" alt="${penulis.nama}" class="essay-author-avatar">
                <div class="essay-author-details">
                    <h4>By ${penulis.nama}</h4>
                    <p>${formatTanggal(artikel.tanggal)} • ${artikel.readTime}</p>
                </div>
            </div>
            
            <!-- Essay Content -->
            <div class="essay-content">
                ${artikel.konten}
            </div>
        `;
    }

    // 2. Render SLIDE presentation
    const slideContainer = document.getElementById('slide-container');
    if (slideContainer && artikel.slideUrl) {
        slideContainer.innerHTML = `
            <div class="slide-wrapper">
                <h2>${artikel.slideTitle || 'Presentation Slides'}</h2>
                <p class="slide-description">View the presentation slides for this article below:</p>
                <div class="slide-embed">
                    <iframe 
                        src="${artikel.slideUrl}" 
                        frameborder="0" 
                        allowfullscreen="true"
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true"
                    ></iframe>
                </div>
                <p class="slide-note">
                    <strong>Note:</strong> You can view this presentation in fullscreen mode or 
                    <a href="${artikel.slideUrl.replace('/embed', '/view')}" target="_blank">open it in a new tab</a>.
                </p>
            </div>
        `;
    } else if (slideContainer) {
        slideContainer.innerHTML = `
            <div class="no-content">
                <p>📊 Slide presentation is not available for this article yet.</p>
            </div>
        `;
    }

    // 3. Render ANNOTATED TEXT
    const annotatedContainer = document.getElementById('annotated-container');
    if (annotatedContainer && artikel.annotatedText) {
        annotatedContainer.innerHTML = `
            <div class="annotated-wrapper">
                <h2>Annotated Version</h2>
                <p class="annotated-description">
                    This version includes annotations and explanations for key terms and concepts. 
                    Hover over highlighted words to see their meanings.
                </p>
                ${artikel.annotatedText}
            </div>
        `;

        // Add hover functionality for annotations
        initAnnotations();
    } else if (annotatedContainer) {
        annotatedContainer.innerHTML = `
            <div class="no-content">
                <p>📝 Annotated text is not available for this article yet.</p>
            </div>
        `;
    }

    // 4. Render SELF INTRODUCTORY PARAGRAPH
    const selfIntroContainer = document.getElementById('selfintro-container');
    if (selfIntroContainer && artikel.selfIntro) {
        selfIntroContainer.innerHTML = `
            <div class="selfintro-wrapper">
                <div class="selfintro-header">
                    <img src="${penulis.foto}" alt="${penulis.nama}" class="selfintro-photo">
                    <div class="selfintro-meta">
                        <h2>${penulis.nama}</h2>
                        <p class="selfintro-role">${penulis.role}</p>
                    </div>
                </div>
                <div class="selfintro-content">
                    <h3>About the Author</h3>
                    ${artikel.selfIntro}
                </div>
                <div class="selfintro-footer">
                    <a href="about.html" class="btn-primary">View Full Team Profile</a>
                </div>
            </div>
        `;
    } else if (selfIntroContainer) {
        selfIntroContainer.innerHTML = `
            <div class="no-content">
                <p>👤 Author introduction is not available for this article yet.</p>
            </div>
        `;
    }

    // Initialize tab switching
    initArticleTabs();

    // Render author info (bottom section)
    const authorSection = document.getElementById('author-info');
    if (authorSection) {
        authorSection.innerHTML = `
            <div class="author-card">
                <img src="${penulis.foto}" alt="${penulis.nama}" class="author-photo">
                <div class="author-details">
                    <h3>${penulis.nama}</h3>
                    <p class="author-role">${penulis.role}</p>
                    <p class="author-bio">${penulis.bio}</p>
                    <a href="about.html" class="btn-primary">View About</a>
                </div>
            </div>
        `;
    }

    // Render related articles
    renderRelatedArticles(artikel.kategori, artikel.id);
}

// Render artikel terkait
function renderRelatedArticles(kategori, currentId) {
    const container = document.getElementById('related-articles');
    if (!container) return;

    const related = artikelData
        .filter(a => a.kategori === kategori && a.id !== currentId)
        .slice(0, 3);

    if (related.length === 0) {
        container.innerHTML = '<p>Tidak ada artikel terkait.</p>';
        return;
    }

    container.innerHTML = related.map(artikel => `
        <article class="related-card">
            <img src="${artikel.thumbnail}" alt="${artikel.judul}">
            <div class="related-content">
                <span class="kategori-badge">${artikel.kategori}</span>
                <h3><a href="article.html?id=${artikel.id}">${artikel.judul}</a></h3>
                <span class="tanggal">${formatTanggal(artikel.tanggal)}</span>
            </div>
        </article>
    `).join('');
}

// ==================== ARTICLE TABS & ANNOTATIONS ====================

// Initialize article tab switching
function initArticleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const targetContent = document.getElementById(`${targetTab}-tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Initialize annotations hover effect
function initAnnotations() {
    const annotations = document.querySelectorAll('.annotation');

    annotations.forEach(annotation => {
        const note = annotation.dataset.note;

        // Create tooltip element
        const tooltip = document.createElement('span');
        tooltip.className = 'annotation-tooltip';
        tooltip.textContent = note;
        annotation.appendChild(tooltip);

        // Show/hide on hover
        annotation.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });

        annotation.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });
}


// ==================== HALAMAN ABOUT ====================

// Render halaman About dengan profil dosen dan anggota kelompok
function renderAboutPage() {
    // Render profil dosen
    const dosenContainer = document.getElementById('dosen-info');
    if (dosenContainer) {
        const dosen = getDosen();
        dosenContainer.innerHTML = `
            <div class="dosen-card">
                <img src="${dosen.foto}" alt="${dosen.nama}" class="dosen-photo">
                <div class="dosen-details">
                    <h3>${dosen.nama}</h3>
                    <p class="dosen-title">${dosen.gelar}</p>
                    <p class="dosen-institution">${dosen.institusi}</p>
                    <p class="dosen-description">${dosen.deskripsi}</p>
                    <div class="dosen-courses">
                        <h4>Mata Kuliah:</h4>
                        <ul>
                            ${dosen.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
                        </ul>
                    </div>
                    <p class="dosen-contact"><strong>Email:</strong> ${dosen.email}</p>
                    ${dosen.office ? `<p class="dosen-office"><strong>Ruangan:</strong> ${dosen.office}</p>` : ''}
                </div>
            </div>
        `;
    }

    // Render anggota kelompok
    const teamContainer = document.getElementById('team-members');
    if (teamContainer) {
        const anggota = getAnggotaKelompok();
        teamContainer.innerHTML = anggota.map(member => `
            <div class="team-card">
                <img src="${member.foto}" alt="${member.nama}" class="team-photo">
                <div class="team-info">
                    <h3>${member.nama}</h3>
                    <p class="team-nim">${member.nim}</p>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio">${member.bio}</p>
                    <p class="team-email">${member.email}</p>
                </div>
            </div>
        `).join('');
    }
}

// ==================== MOBILE MENU ====================

// Toggle mobile menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ==================== FORM CONTACT ====================

// Handle contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            nama: form.querySelector('#nama').value,
            email: form.querySelector('#email').value,
            subjek: form.querySelector('#subjek').value,
            pesan: form.querySelector('#pesan').value
        };

        // Simulate form submission
        alert(`Terima kasih, ${formData.nama}! Pesan Anda telah diterima.\n\nKarena ini adalah website frontend-only, data tidak tersimpan di server. Dalam implementasi nyata, data akan dikirim ke backend.`);

        // Reset form
        form.reset();
    });
}

// ==================== INITIALIZE ====================

// Initialize berdasarkan halaman
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Cek halaman mana yang sedang aktif
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    switch (page) {
        case 'index.html':
        case '':
            // Home page
            renderArtikelList(artikelData);
            implementSearch();
            implementFilter();
            break;

        case 'articles.html':
            // Articles page - same as home but without hero
            renderArtikelList(artikelData);
            implementSearch();
            implementFilter();
            break;

        case 'article.html':
            // Article detail page
            renderArtikelDetail();
            break;

        case 'about.html':
            // About page with team and lecturer profiles
            renderAboutPage();
            break;
    }

    // Set active nav link
    setActiveNavLink();
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}
