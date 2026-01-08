const formatTanggal = (str) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(str).toLocaleDateString('en-US', options);
};

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderArtikelList(artikelList) {
    const container = document.getElementById('artikel-container');
    if (!container) return;

    container.innerHTML = artikelList.map((artikel, index) => {
        const penulis = getPenulisById(artikel.penulisId);
        return `
            <article class="artikel-card" style="animation-delay: ${index * 0.1}s">
                <div class="artikel-thumbnail">
                    <img src="${artikel.thumbnail}" alt="${artikel.judul}" loading="lazy">
                    <span class="kategori-badge">${artikel.kategori}</span>
                </div>
                <div class="artikel-content">
                    <div class="artikel-meta">
                        <span>${formatTanggal(artikel.tanggal)}</span>
                        <span>${artikel.readTime}</span>
                    </div>
                    <h2 class="artikel-judul">${artikel.judul}</h2>
                    <p class="artikel-ringkasan">${artikel.ringkasan}</p>
                    <div class="artikel-footer">
                        <div class="penulis-info">
                            <img src="${penulis.foto}" class="penulis-avatar" alt="${penulis.nama}">
                            <span>${penulis.nama}</span>
                        </div>
                        <a href="article.html?id=${artikel.id}">
                            Read
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    // Add fade-in animation class
    setTimeout(() => {
        const cards = container.querySelectorAll('.artikel-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 50);
}

function renderArtikelDetail() {
    const artikelId = getUrlParameter('id');
    const artikel = getArtikelById(parseInt(artikelId));

    if (!artikel) {
        window.location.href = 'index.html';
        return;
    }

    const penulis = getPenulisById(artikel.penulisId);

    // Render header
    const headerSection = document.getElementById('article-header');
    if (headerSection) {
        headerSection.innerHTML = `
            <div class="container">
                <div class="article-header-content">
                    <span class="kategori-badge">${artikel.kategori}</span>
                    <h1 class="article-title">${artikel.judul}</h1>
                    <p class="article-subtitle">${artikel.ringkasan}</p>
                    <div class="article-meta-premium">
                        <div class="meta-item">
                            <img src="${penulis.foto}" class="author-avatar" alt="${penulis.nama}">
                            <div>
                                <div class="author-name">${penulis.nama}</div>
                                <div class="meta-details">${formatTanggal(artikel.tanggal)} · ${artikel.readTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Render essay content
    const essayTab = document.getElementById('article-body');
    if (essayTab) {
        essayTab.innerHTML = artikel.konten;
    }

    // Render slide content with PDF support
    const slideContainer = document.getElementById('slide-container');
    if (slideContainer && artikel.slideUrl) {
        const isPDF = artikel.slideType === 'pdf' || artikel.slideUrl.endsWith('.pdf');

        slideContainer.innerHTML = `
            <div class="slide-content">
                <h3>${artikel.slideTitle || 'Presentation Slides'}</h3>
                ${isPDF ?
                `<div class="slide-embed-pdf">
                        <div class="pdf-controls">
                            <a href="${artikel.slideUrl}" class="btn-view-pdf" target="_blank" download>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3Z" stroke="currentColor" stroke-width="2"/>
                                    <path d="M15 3V9H21" stroke="currentColor" stroke-width="2"/>
                                    <path d="M12 11V17M12 17L9 14M12 17L15 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Download PDF
                            </a>
                            <a href="${artikel.slideUrl}" class="btn-open-new" target="_blank">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2"/>
                                    <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Open in New Tab
                            </a>
                        </div>
                        <iframe src="${artikel.slideUrl}" frameborder="0" allowfullscreen="true"></iframe>
                    </div>`
                :
                `<div class="slide-embed">
                        <iframe src="${artikel.slideUrl}" frameborder="0" allowfullscreen="true"></iframe>
                    </div>`
            }
            </div>
        `;
    } else if (slideContainer) {
        slideContainer.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="36" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M24 28L32 24L40 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="32" cy="36" r="2" fill="currentColor"/>
                </svg>
                <p>No presentation slides available for this essay</p>
            </div>
        `;
    }

    // Render annotated text
    const annotatedContainer = document.getElementById('annotated-container');
    if (annotatedContainer && (artikel.annotatedText || artikel.annotatedPdfUrl)) {
        const hasPDF = artikel.annotatedPdfUrl;

        if (hasPDF) {
            annotatedContainer.innerHTML = `
            <div class="slide-content">
                <h3>${artikel.annotatedPdfTitle || 'Annotated Text'}</h3>
                <div class="slide-embed-pdf">
                    <div class="pdf-controls">
                        <a href="${artikel.annotatedPdfUrl}" class="btn-view-pdf" target="_blank" download>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M15 3V9H21" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 11V17M12 17L9 14M12 17L15 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            Download PDF
                        </a>
                        <a href="${artikel.annotatedPdfUrl}" class="btn-open-new" target="_blank">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2"/>
                                <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            Open in New Tab
                        </a>
                    </div>
                    <iframe src="${artikel.annotatedPdfUrl}" frameborder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        `;
        } else {
            annotatedContainer.innerHTML = artikel.annotatedText;
        }
    } else if (annotatedContainer) {
        annotatedContainer.innerHTML = `
        <div class="empty-state">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M16 20H48M16 32H48M16 44H36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p>No annotated text available for this essay</p>
        </div>
    `;
    }

    // Render self introduction
    const selfintroContainer = document.getElementById('selfintro-container');
    if (selfintroContainer && artikel.selfIntro) {
        selfintroContainer.innerHTML = `
            <div class="author-intro-card">
                <div class="author-intro-header">
                    <img src="${penulis.foto}" alt="${penulis.nama}" class="author-intro-avatar">
                    <div>
                        <h3>${penulis.nama}</h3>
                        <p class="author-role">${penulis.role}</p>
                    </div>
                </div>
                <div class="author-intro-content">
                    ${artikel.selfIntro}
                </div>
            </div>
        `;
    } else if (selfintroContainer) {
        selfintroContainer.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="24" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 48C16 40 22 36 32 36C42 36 48 40 48 48" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p>No author introduction available</p>
            </div>
        `;
    }

    // Render author info at bottom
    const authorInfo = document.getElementById('author-info');
    if (authorInfo) {
        authorInfo.innerHTML = `
            <div class="author-card-premium">
                <img src="${penulis.foto}" alt="${penulis.nama}" class="author-photo">
                <div class="author-details">
                    <h3>${penulis.nama}</h3>
                    <p class="author-role-badge">${penulis.role}</p>
                    <p class="author-bio">${penulis.bio}</p>
                    <div class="author-contact">
                        <span>📧 ${penulis.email}</span>
                        <span>🎓 ${penulis.nim}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Setup tab switching
    setupTabs();
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');

            // Smooth scroll to content
            const tabContainer = document.querySelector('.tab-content-container');
            if (tabContainer) {
                tabContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

function renderAboutPage() {
    const dosenContainer = document.getElementById('dosen-info');
    if (dosenContainer) {
        const dosen = getDosen();
        dosenContainer.innerHTML = `
            <div class="article-body-glass dosen-card">
                <div class="dosen-content">
                    <img src="${dosen.foto}" alt="${dosen.nama}" class="dosen-photo">
                    <div class="dosen-details">
                        <h3>${dosen.nama}</h3>
                        <p class="dosen-title">${dosen.gelar}</p>
                        <p class="dosen-institution">${dosen.institusi}</p>
                        <p class="dosen-description">${dosen.deskripsi}</p>
                        <div class="dosen-contact">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3 4L10 11L17 4M3 4H17M3 4V16H17V4" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>${dosen.email}</span>
                        </div>
                </div>
            </div>
        `;
    }

    const teamContainer = document.getElementById('team-members');
    if (teamContainer) {
        const anggota = getAnggotaKelompok();
        teamContainer.innerHTML = anggota.map((member, index) => `
            <div class="team-card" style="animation-delay: ${index * 0.1}s">
                <div class="team-photo">
                    <img src="${member.foto}" alt="${member.nama}" loading="lazy">
                </div>
                <div class="team-info">
                    <span class="team-role">${member.role}</span>
                    <h3>${member.nama}</h3>
                    <p class="team-nim">NIM: ${member.nim}</p>
                    <p class="team-bio">${member.bio}</p>
                    <div class="team-contact">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 3L8 8L14 3M2 3H14M2 3V13H14V3" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span>${member.email}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Search and Filter functionality (for articles.html page)
function setupSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';
    let currentSearch = '';

    function updateArtikelDisplay() {
        let filtered = currentFilter === 'all'
            ? [...artikelData]
            : getArtikelByKategori(currentFilter);

        if (currentSearch) {
            filtered = searchArtikel(currentSearch).filter(artikel =>
                currentFilter === 'all' || artikel.kategori.toLowerCase() === currentFilter.toLowerCase()
            );
        }

        renderArtikelList(filtered);

        // Update result count if exists
        const resultCount = document.getElementById('result-count');
        if (resultCount) {
            resultCount.textContent = `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            currentSearch = searchInput.value.trim();
            updateArtikelDisplay();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                currentSearch = searchInput.value.trim();
                updateArtikelDisplay();
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-kategori');
            updateArtikelDisplay();
        });
    });
}

// Assignment Navigation Handler
function setupAssignmentNavigation() {
    const assignmentLinks = document.querySelectorAll('.assignment-link');
    const assignmentContents = document.querySelectorAll('.assignment-content');

    assignmentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // Remove active class from all links
            assignmentLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Hide all content sections
            assignmentContents.forEach(content => content.classList.remove('active'));

            // Show target content
            const targetContent = document.getElementById(targetSection);
            if (targetContent) {
                targetContent.classList.add('active');

                // Smooth scroll to content
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Render Slides Content with PDF Support
function renderSlides() {
    const slidesContainer = document.getElementById('slides-container');
    if (!slidesContainer) return;

    const articlesWithSlides = artikelData.filter(artikel => artikel.slideUrl);

    if (articlesWithSlides.length === 0) {
        slidesContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect x="10" y="15" width="60" height="45" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M30 30L40 25L50 30M40 40V25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h3>No Presentations Yet</h3>
                <p>Presentation slides will be available soon</p>
            </div>
        `;
        return;
    }

    slidesContainer.innerHTML = articlesWithSlides.map((artikel, index) => {
        const penulis = getPenulisById(artikel.penulisId);
        const isPDF = artikel.slideType === 'pdf' || artikel.slideUrl.endsWith('.pdf');

        return `
            <div class="slide-card" style="animation-delay: ${index * 0.1}s">
                <div class="slide-preview">
                    ${isPDF ?
                `<div class="pdf-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#E31E24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="#E31E24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 13H8V17H10C10.5304 17 11.0391 16.7893 11.4142 16.4142C11.7893 16.0391 12 15.5304 12 15C12 14.4696 11.7893 13.9609 11.4142 13.5858C11.0391 13.2107 10.5304 13 10 13Z" stroke="#E31E24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="file-type-badge">PDF</span>
                        </div>`
                :
                `<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <rect x="10" y="15" width="60" height="45" rx="4" stroke="currentColor" stroke-width="2"/>
                            <path d="M30 30L40 25L50 30M40 40V25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="40" cy="50" r="3" fill="currentColor"/>
                        </svg>`
            }
                </div>
                <div class="slide-info">
                    <div class="slide-author">
                        <img src="${penulis.foto}" alt="${penulis.nama}">
                        <span>${penulis.nama}</span>
                    </div>
                    <h3 class="slide-title">${artikel.slideTitle || artikel.judul}</h3>
                    <div class="slide-actions">
                        ${isPDF ?
                `<a href="${artikel.slideUrl}" class="slide-link btn-view-pdf" target="_blank">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3Z" stroke="currentColor" stroke-width="2"/>
                                    <path d="M15 3V9H21" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                View PDF
                            </a>
                            <button class="btn-open-modal" data-pdf="${artikel.slideUrl}" data-title="${artikel.slideTitle || artikel.judul}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2"/>
                                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                Preview
                            </button>`
                :
                `<a href="article.html?id=${artikel.id}#slides" class="slide-link">
                                View Slides
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </a>`
            }
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for PDF modal buttons
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
        btn.addEventListener('click', function () {
            const pdfUrl = this.getAttribute('data-pdf');
            const title = this.getAttribute('data-title');
            openPDFModal(pdfUrl, title);
        });
    });
}

// Function to open PDF in modal
function openPDFModal(pdfUrl, title) {
    const modal = document.createElement('div');
    modal.className = 'pdf-modal';
    modal.innerHTML = `
        <div class="pdf-modal-content">
            <div class="pdf-modal-header">
                <h3>${title}</h3>
                <button class="pdf-modal-close">&times;</button>
            </div>
            <div class="pdf-modal-body">
                <iframe src="${pdfUrl}" frameborder="0"></iframe>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal
    modal.querySelector('.pdf-modal-close').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });

    // Close on ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Render Annotated Text Content
// Render Annotated Text Content
function renderAnnotatedText() {
    const annotatedContainer = document.getElementById('annotated-container');
    if (!annotatedContainer) return;

    const articlesWithAnnotations = artikelData.filter(artikel =>
        artikel.annotatedText || artikel.annotatedPdfUrl
    );

    if (articlesWithAnnotations.length === 0) {
        annotatedContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M20 25H60M20 40H60M20 55H45" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="55" cy="55" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M61 61L67 67" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h3>No Annotated Texts Yet</h3>
                <p>Annotated versions will be available soon</p>
            </div>
        `;
        return;
    }

    annotatedContainer.innerHTML = articlesWithAnnotations.map((artikel, index) => {
        const penulis = getPenulisById(artikel.penulisId);
        const hasPDF = artikel.annotatedPdfUrl;

        return `
            <div class="annotated-card" style="animation-delay: ${index * 0.1}s">
                <div class="annotated-header">
                    <div class="annotated-icon">
                        ${hasPDF ?
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#E31E24" stroke-width="2"/>
                                <path d="M14 2V8H20" stroke="#E31E24" stroke-width="2"/>
                                <path d="M9 12L11 14L15 10" stroke="#E31E24" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <span class="file-type-badge-small">PDF</span>`
                :
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" stroke-width="2"/>
                                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>`
            }
                    </div>
                    <div class="slide-author">
                        <img src="${penulis.foto}" alt="${penulis.nama}">
                        <span>${penulis.nama}</span>
                    </div>
                </div>
                <p>This annotated text is an English class assignment focusing on text analysis and comprehension skills.</p>
                ${hasPDF ?
                `<div class="annotated-actions">
                        <a href="${artikel.annotatedPdfUrl}" class="slide-link btn-view-pdf" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M15 3V9H21" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            View PDF
                        </a>
                        <button class="btn-open-modal" data-pdf="${artikel.annotatedPdfUrl}" data-title="${artikel.annotatedPdfTitle || artikel.judul + ' - Annotated'}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            Preview
                        </button>
                    </div>`
                :
                `<a href="article.html?id=${artikel.id}#annotated" class="slide-link">
                        View Annotations
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </a>`
            }
            </div>
        `;
    }).join('');

    // Add event listeners for PDF modal buttons
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
        btn.addEventListener('click', function () {
            const pdfUrl = this.getAttribute('data-pdf');
            const title = this.getAttribute('data-title');
            openPDFModal(pdfUrl, title);
        });
    });
}

// Render Self Introduction Content
function renderSelfIntroductions() {
    const introContainer = document.getElementById('intro-container');
    if (!introContainer) return;

    const allIntroductions = getAllSelfIntroductions();

    if (allIntroductions.length === 0) {
        introContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="30" r="12" stroke="currentColor" stroke-width="2"/>
                    <path d="M20 65C20 52 28 45 40 45C52 45 60 52 60 65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h3>No Introductions Yet</h3>
                <p>Author introductions will be available soon</p>
            </div>
        `;
        return;
    }

    introContainer.innerHTML = allIntroductions.map((intro, index) => {
        const penulis = getPenulisById(intro.penulisId);
        return `
            <div class="intro-card-new" style="animation-delay: ${index * 0.1}s">
                <div class="intro-header">
                    <div class="intro-icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                            <path d="M6 21C6 17.134 8.68629 14 12 14C15.3137 14 18 17.134 18 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="slide-author">
                        <img src="${penulis.foto}" alt="${penulis.nama}">
                        <span>${penulis.nama}</span>
                    </div>
                </div>
                <p>This self introduction is an English class assignment where students present themselves and their academic interests.</p>
                <button class="btn-read-introduction" data-penulis-id="${intro.penulisId}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Read Introduction
                </button>
            </div>
        `;
    }).join('');

    // Add event listeners for Read Introduction buttons
    document.querySelectorAll('.btn-read-introduction').forEach(btn => {
        btn.addEventListener('click', function () {
            const penulisId = this.getAttribute('data-penulis-id');
            openIntroductionModal(penulisId);
        });
    });
}

// Function to open Introduction Modal
function openIntroductionModal(penulisId) {
    const intro = getSelfIntroductionByPenulisId(penulisId);
    const penulis = getPenulisById(penulisId);
    
    if (!intro || !penulis) return;

    const modal = document.createElement('div');
    modal.className = 'introduction-modal';
    modal.innerHTML = `
        <div class="introduction-modal-content">
            <div class="introduction-modal-header">
                <div class="modal-author-info">
                    <img src="${penulis.foto}" alt="${penulis.nama}" class="modal-author-avatar">
                    <div>
                        <h3>${penulis.nama}</h3>
                        <p class="modal-author-role">${penulis.role}</p>
                    </div>
                </div>
                <button class="introduction-modal-close">&times;</button>
            </div>
            <div class="introduction-modal-body">
                <div class="introduction-content">
                    ${intro.introduction}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Animate modal entrance
    setTimeout(() => modal.classList.add('active'), 10);

    // Close modal
    modal.querySelector('.introduction-modal-close').addEventListener('click', () => {
        closeIntroductionModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeIntroductionModal(modal);
        }
    });

    // Close on ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeIntroductionModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function closeIntroductionModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
    }, 300);
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();

                // Remove active class from all nav links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // Scroll to target
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without page reload
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // Handle all other anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip if already handled by nav links
        if (anchor.classList.contains('nav-link')) return;

        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle scroll spy - update active nav based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active from all nav links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active to corresponding nav link
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                } else if (scrollY < 300) {
                    // If scrolled to top, activate Home
                    const homeLink = document.querySelector('.nav-link[href="index.html"]');
                    if (homeLink) homeLink.classList.add('active');
                }
            }
        });

        // Special handling for top of page
        if (scrollY < 300) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-link[href="index.html"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
}

// Add scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.artikel-card, .team-card, .slide-card, .annotated-card, .intro-card').forEach(el => {
        observer.observe(el);
    });
}

// Page initialization
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split("/").pop();

    if (path === 'index.html' || path === '') {
        renderArtikelList(artikelData);
        renderSlides();
        renderAnnotatedText();
        renderSelfIntroductions();
        renderAboutPage();
        setupAssignmentNavigation();
        setupSmoothScroll();
        setTimeout(setupScrollAnimations, 100);
    } else if (path === 'article.html') {
        renderArtikelDetail();
    } else if (path === 'articles.html') {
        renderArtikelList(artikelData);
        renderSlides();
        renderAnnotatedText();
        renderSelfIntroductions();
        setupAssignmentNavigation();
        setupSearchAndFilter();
        setupScrollAnimations();
    } else if (path === 'about.html') {
        window.location.href = 'index.html#about';
    }

    document.body.classList.add('loaded');
});