/*const translations = {
    ko: {
        name: '홍송의',
        rotateTexts: ['게임 프로그래머' , '언리얼 개발자']
      /*  home: '홈',
        about: '소개',
        education: '학력',
        projects: '프로젝트',
        sideProjects: '사이드 프로젝트',
        blog: '내 블로그',
        contact: '연락처'
    },
    jp: {
        name: 'ホンソンイ',
        rotateTexts: ['ゲームプログラマー', 'アンリアル開発者']
      /*  home: 'ホーム',
        about: '私について',
        education: '学歴',
        projects: 'プロジェクト',
        sideProjects: 'サイドプロジェクト',
        blog: 'ブログ',
        contact: 'コンタクト'
    }
};

const languageSelector = document.getElementById('language-selector');

function changeLanguage(language) {
 /*   document.querySelector('[href="#home-section"] span').textContent = translations[language].home;
    document.querySelector('[href="#about-section"] span').textContent = translations[language].about;
    document.querySelector('[href="#education-section"] span').textContent = translations[language].education;
    document.querySelector('[href="#projects-section"] span').textContent = translations[language].projects;
    document.querySelector('[href="#side-projects-section"] span').textContent = translations[language].sideProjects;
    document.querySelector('[href="#blog-section"] span').textContent = translations[language].blog;
    document.querySelector('[href="#contact-section"] span').textContent = translations[language].contact;
    document.getElementById('name').textContent = translations[language].name;

    const rotateElement = document.getElementById('subtitle');
    rotateElement.setAttribute('data-rotate', JSON.stringify(translations[language].rotateTexts));

    // txt-rotate 재시작 (기존 플러그인 재호출이 필요할 수 있음)
    initTextRotate();
}

function initTextRotate() {
    // txt-rotate 플러그인을 다시 실행하는 코드
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
}
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        const delta = this.isDeleting ? 100 - Math.random() * 50 : 200 - Math.random() * 100;

        if (!this.isDeleting && this.txt === fullTxt) {
            this.isDeleting = true;
            delta = this.period;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

languageSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
});

window.onload = () => {
    initTextRotate();

};*/
