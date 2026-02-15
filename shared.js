/* ===== Tanach Hub - Shared JS ===== */

// Create floating gold particles
function initParticles(count = 40) {
    let container = document.getElementById('particles');
    if (!container) {
        container = document.createElement('div');
        container.className = 'particles';
        container.id = 'particles';
        document.body.prepend(container);
    }
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// Inject shared nav bar
function initNav(activePage) {
    const tipsAccess = localStorage.getItem('tanach_tips_access') === 'true';
    const quizAccess = localStorage.getItem('avitzur_full_access') === 'true';

    const nav = document.createElement('nav');
    nav.className = 'hub-nav';
    nav.innerHTML = `
        <div class="hub-nav-inner">
            <a href="index.html" class="hub-nav-logo">📖 עולם התנ״ך</a>
            <div class="hub-nav-links">
                <a href="index.html" class="hub-nav-link ${activePage === 'home' ? 'active' : ''}">🏠 ראשי</a>
                <a href="tips.html" class="hub-nav-link ${activePage === 'tips' ? 'active' : ''}">
                    💡 טיפים
                    <span class="hub-nav-badge ${tipsAccess ? '' : 'locked'}">${tipsAccess ? '✓' : '🔒'}</span>
                </a>
                <a href="quiz.html" class="hub-nav-link ${activePage === 'quiz' ? 'active' : ''}">
                    📝 חידון
                    <span class="hub-nav-badge ${quizAccess ? '' : 'locked'}">${quizAccess ? '✓' : '🔒'}</span>
                </a>
            </div>
        </div>
    `;
    document.body.prepend(nav);

    // Add top padding so content isn't hidden behind nav
    document.body.style.paddingTop = '60px';
}

// Access check utilities
function hasTipsAccess() {
    return localStorage.getItem('tanach_tips_access') === 'true';
}

function hasQuizAccess() {
    return localStorage.getItem('avitzur_full_access') === 'true';
}

function grantTipsAccess() {
    localStorage.setItem('tanach_tips_access', 'true');
}
