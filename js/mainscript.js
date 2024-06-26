// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <header class="header">
    <div class="container header__container">
        <a class="logo" href="./index.html"><svg class="logo-icon">
                <use href="images/icons.svg#icon-logo"></use>
            </svg></a>
        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="#about" class="navigation__link">Sobre</a></li>
                <li class="navigation__item"><a href="#services" class="navigation__link">Serviços e preços</a>
                </li>
                <li class="navigation__item"><a href="#barbers" class="navigation__link">Barbeiros</a></li>
                <li class="navigation__item"><a href="#contacts" class="navigation__link">Contatos</a></li>
            </ul>
        </nav>
        <div class="header__wrap">
            <a class="button" type="button" href="#booking">Online-booking</a>
            <a class="header__phone" href="tel:+380441111111">+11 1111111-1111</a>
        </div>
        <button class="open-mobile-menu js-open-menu" aria-expanded="false" aria-controls="mobile-menu"
            type="button">
            <svg class="icon-mobile-menu icon-mobile-menu--open" width="40" height="40"
                aria-label="Button mobile menu">
                <use href="images/icons.svg#icon-mobile-menu"></use>
            </svg>
        </button>
    </div>
</header>
<main>
    <section class="hero">
        <div class="hero-slider">
            <div class="hero-slider__item">
                <picture>
                    <source media="(min-width: 1200px)"
                        srcset="images/hero-desktop-1-1x.jpg 1x, images/hero-desktop-1-2x.jpg 2x">
                    <source media="(min-width: 768px)"
                        srcset="images/hero-tablet-1-1x.jpg 1x, images/hero-tablet-1-2x.jpg 2x">
                    <source media="(max-width: 767px)"
                        srcset="images/hero-mobile-1-1x.jpg 1x, images/hero-mobile-1-2x.jpg 2x">
                    <img src="images/hero-mobile-1-1x.jpg" alt="Slider image">
                </picture>
            </div>
            <div class="hero-slider__item">
                <picture>
                    <source media="(min-width: 1200px)"
                        srcset="images/hero-desktop-2-1x.jpg 1x, images/hero-desktop-2-2x.jpg 2x">
                    <source media="(min-width: 768px)"
                        srcset="images/hero-tablet-2-1x.jpg 1x, images/hero-tablet-2-2x.jpg 2x">
                    <source media="(max-width: 767px)"
                        srcset="images/hero-mobile-2-1x.jpg 1x, images/hero-mobile-2-2x.jpg 2x">
                    <img src="images/hero-mobile-2-1x.jpg" alt="Slider image">
                </picture>
            </div>
            <div class="hero-slider__item">
                <picture>
                    <source media="(min-width: 1200px)"
                        srcset="images/hero-desktop-3-1x.jpg 1x, images/hero-desktop-3-2x.jpg 2x">
                    <source media="(min-width: 768px)"
                        srcset="images/hero-tablet-3-1x.jpg 1x, images/hero-tablet-3-2x.jpg 2x">
                    <source media="(max-width: 767px)"
                        srcset="images/hero-mobile-3-1x.jpg 1x, images/hero-mobile-1-2x.jpg 2x">
                    <img src="images/hero-mobile-3-1x.jpg" alt="Slider image">
                </picture>
            </div>
        </div>
        <div class="container hero__container">
            <div class="hero__soc">
                <ul class="hero__list">
                    <li class="hero__item"><a class="hero__link" href="https://www.instagram.com/"
                            rel="noopener noreferrer nofollow" target="_blank">Instagram</a></li>
                    <li class="hero__item"><a class="hero__link" href="https://www.youtube.com/"
                            rel="noopener noreferrer nofollow" target="_blank">Youtube</a></li>
                </ul>
            </div>
            <div class="hero__wrap">
                <div class="hero__text">
                    <p class="hero__subtitle">Um salão para homens.</p>
                    <h1 class="hero__title">BarberShop</h1>
                    <p class="hero__description">Somos especialistas em cortes de cabelo masculinos da moda.<br>
                        Trabalhamos com rapidez, cuidado e estilo.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section about" id="about">
        <div class="container about__container">
            <ul class="about__list">
                <li class="about__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/about-desktop-1-1x.jpg 1x, images/about-desktop-1-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/about-tablet-1-1x.jpg 1x, images/about-tablet-1-2x.jpg 2x">
                        <img class="about__image" src="images/about-tablet-1-1x.jpg" alt="Barber" width="330"
                            height="235" loading="lazy">
                    </picture>
                </li>
                <li class="about__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/about-desktop-2-1x.jpg 1x, images/about-desktop-2-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/about-tablet-2-1x.jpg 1x, images/about-tablet-2-2x.jpg 2x">
                        <img class="about__image" src="images/about-tablet-2-1x.jpg" alt="Barber" width="330"
                            height="235" loading="lazy">
                    </picture>
                </li>
            </ul>

            <div class="about__wrap">
                <p class="about__subtitle">Sobre</p>
                <h2 class="about__title">A melhor barbearia da sua cidade</h2>
                <p class="about__description">Se quiser adicionar mais confiança à sua imagem, não deixe de nos visitar.</p>
                <p class="about__text">Somos uma equipe que nunca para no que foi conquistado e tem sede de
                    mudanças. E quando
                    você cai nas mãos do nosso mestre, você nunca mais será o mesmo. Somos uma equipe que está
                    sempre "na mesma onda" com os clientes.
                    Por isso, estamos sempre prontos para melhorar todos que nos procuram!</p>
                <a class="button button--black-theme" type="button" href="#booking">Online-booking</a>
            </div>
        </div>
    </section>

    <section class="section services" id="services">
        <div class="container services__container">
            <p class="services__subtitle">Gaste seu tempo com os melhores mestres.</p>
            <h2 class="services__title">Serviços e preços</h2>
            <div class="services__wrap">
                <ul class="services__list services__list--light-theme">
                    <li class="services__item">
                        <p class="services__text">Corte de cabelo masculino</p>
                        <p class="services__text">por 300 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Corte de barba</p>
                        <p class="services__text">por 300 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Corte de bigode</p>
                        <p class="services__text">por 200 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Barbear com navalha</p>
                        <p class="services__text">por 200 $.</p>
                    </li>
                </ul>

                <ul class="services__list services__list--dark-theme">
                    <li class="services__item">
                        <p class="services__text">Corte de cabelo do estagiário</p>
                        <p class="services__text">por 50 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Corte de cabelo sob o bico</p>
                        <p class="services__text">por 200 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Corte de cabelo infantil (0-12 anos)</p>
                        <p class="services__text">por 300 $.</p>
                    </li>
                    <li class="services__item">
                        <p class="services__text">Camuflagem de cabelos grisalhos</p>
                        <p class="services__text">por 200 $.</p>
                    </li>
                </ul>
            </div>
            <div class="button-container">
                <a class="button" type="button" href="#booking">Online-booking</a>
            </div>
        </div>
    </section>

    <section class="section benefits">
        <div class="container benefits__container">
            <div class="benefits__wrap">
                <p class="benefits__subtitle">Antiga escola tradicional</p>
                <h2 class="benefits__title">Por que as pessoas vêm até nós?</h2>
                <p class="benefits__description">Apenas coisas boas são ditas sobre nós. Mas é melhor ver e sentir
                    1 vez do que ler 10 vezes.</p>
            </div>
            <ul class="benefits__list">
                <li class="benefits__item">
                    <span class="benefits__number">600</span>
                    <p class="benefits__text">Clientes satisfeitos por dia</p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__number">50</span>
                    <p class="benefits__text">Prêmios por excelente serviço</p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__number">20</span>
                    <p class="benefits__text">Melhores barbeiros brasileiros</p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__number">100</span>
                    <p class="benefits__text">Presentes para clientes regulares</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="section team" id="barbers">
        <div class="container team__container">
            <p class="team__subtitle">Para verdadeiros apreciadores da atmosfera</p>
            <h2 class="team__title">Outros Barbeiros</h2>
            <ul class="team__list">
                <li class="team__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/team-desktop-1-1x.jpg 1x, images/team-desktop-1-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/team-tablet-1-1x.jpg 1x, images/team-tablet-1-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/team-mobile-1-1x.jpg 1x, images/team-mobile-1-2x.jpg 2x">
                        <img class="team__image" src="images/team-mobile-1-1x.jpg" alt="Barber" width="418"
                            height="346" loading="lazy">
                    </picture>
                    <h3 class="team__name">Marcos Lacerda</h3>
                    <p class="team__position">Barbeiro Profissional</p>
                    <ul class="social team__social">
                        <li class="social__item">
                            <a class="social__link" href="https://www.instagram.com" rel="noreferrer noopener"
                                target="_blank" title="Instagram">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://twitter.com" rel="noreferrer noopener"
                                target="_blank" title="Twitter">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.facebook.com" rel="noreferrer noopener"
                                target="_blank" title="Facebook">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.linkedin.com" rel="noreferrer noopener"
                                target="_blank" title="LinkedIn">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="team__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/team-desktop-2-1x.jpg 1x, images/team-desktop-2-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/team-tablet-2-1x.jpg 1x, images/team-tablet-2-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/team-mobile-2-1x.jpg 1x, images/team-mobile-2-2x.jpg 2x">
                        <img class="team__image" src="images/team-mobile-2-1x.jpg" alt="Barber" width="418"
                            height="346" loading="lazy">
                    </picture>
                    <h3 class="team__name">Rafael Ramos</h3>
                    <p class="team__position">Profissonal De Corte </p>
                    <ul class="social team__social">
                        <li class="social__item">
                            <a class="social__link" href="https://www.instagram.com" rel="noreferrer noopener"
                                target="_blank" title="Instagram">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://twitter.com" rel="noreferrer noopener"
                                target="_blank" title="Twitter">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.facebook.com" rel="noreferrer noopener"
                                target="_blank" title="Facebook">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.linkedin.com" rel="noreferrer noopener"
                                target="_blank" title="LinkedIn">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="team__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/team-desktop-3-1x.jpg 1x, images/team-desktop-3-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/team-tablet-3-1x.jpg 1x, images/team-tablet-3-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/team-mobile-3-1x.jpg 1x, images/team-mobile-3-2x.jpg 2x">
                        <img class="team__image" src="images/team-mobile-3-1x.jpg" alt="Barber" width="418"
                            height="346" loading="lazy">
                    </picture>
                    <h3 class="team__name">Alan Santos</h3>
                    <p class="team__position">Mestre Da Navalha</p>
                    <ul class="social team__social">
                        <li class="social__item">
                            <a class="social__link" href="https://www.instagram.com" rel="noreferrer noopener"
                                target="_blank" title="Instagram">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://twitter.com" rel="noreferrer noopener"
                                target="_blank" title="Twitter">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.facebook.com" rel="noreferrer noopener"
                                target="_blank" title="Facebook">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social__item">
                            <a class="social__link" href="https://www.linkedin.com" rel="noreferrer noopener"
                                target="_blank" title="LinkedIn">
                                <svg width="20" height="20">
                                    <use href="images/icons.svg#icon-linkedin"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>

    <section class="section gallery">
        <div class="container gallery__container">
            <p class="gallery__subtitle">Barba, Cabelo, Bigode e Corte!</p>
            <h2 class="gallery__title gallery__title--hidden">Galeria</h2>
            <ul class="gallery__list">
                <li class="gallery__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/gallery-desktop-1-1x.jpg 1x, images/gallery-desktop-1-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/gallery-tablet-1-1x.jpg 1x, images/gallery-tablet-1-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/gallery-mobile-1-1x.jpg 1x, images/gallery-mobile-1-2x.jpg 2x">
                        <img class="gallery__image" src="images/gallery-mobile-1-1x.jpg" alt="Barber" width="418"
                            height="360" loading="lazy">
                    </picture>
                </li>
                <li class="gallery__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/gallery-desktop-2-1x.jpg 1x, images/gallery-desktop-2-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/gallery-tablet-2-1x.jpg 1x, images/gallery-tablet-2-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/team-mobile-2-1x.jpg 1x, images/team-mobile-2-2x.jpg 2x">
                        <img class="gallery__image" src="images/gallery-mobile-2-1x.jpg" alt="Barber" width="418"
                            height="360" loading="lazy">
                    </picture>
                </li>
                <li class="gallery__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/gallery-desktop-3-1x.jpg 1x, images/gallery-desktop-3-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/gallery-tablet-3-1x.jpg 1x, images/gallery-tablet-3-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/gallery-mobile-3-1x.jpg 1x, images/gallery-mobile-3-2x.jpg 2x">
                        <img class="gallery__image" src="images/gallery-mobile-3-1x.jpg" alt="Barber" width="418"
                            height="360" loading="lazy">
                    </picture>
                </li>
                <li class="gallery__item">
                    <picture>
                        <source media="(min-width: 1200px)"
                            srcset="images/gallery-desktop-4-1x.jpg 1x, images/gallery-desktop-4-2x.jpg 2x">
                        <source media="(min-width: 768px)"
                            srcset="images/gallery-tablet-4-1x.jpg 1x, images/gallery-tablet-4-2x.jpg 2x">
                        <source media="(max-width: 767px)"
                            srcset="images/gallery-mobile-4-1x.jpg 1x, images/gallery-mobile-4-2x.jpg 2x">
                        <img class="gallery__image" src="images/gallery-mobile-4-1x.jpg" alt="Barber" width="418"
                            height="360" loading="lazy">
                    </picture>
                </li>
            </ul>
        </div>
    </section>

    <div class="contact-wrap">
        <div class="container">
            <section class="section booking" id="booking">
                <div class="booking__container">
                    <h2 class="booking__title">Online-booking</h2>

                    <form class="booking__form form">
                        <div class="form__field">
                            <input class="form__input" type="text" name="name" placeholder="Nome*">
                        </div>
                        <div class="form__field">
                            <input class="form__input" type="tel" name="phone" placeholder="Telefone*">
                        </div>
                        <div class="form__field booking__textarea">
                            <textarea class="form__textarea" name="comment" rows="5"
                                placeholder="Mensagem"></textarea>
                        </div>
                        <button class="form__button" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <section class="section contacts" id="contacts">
                <div class="contacts__container">
                    <div class="contacts__box">
                        <h2 class="contacts__title">Contatos</h2>
                        <address class="contacts__address">
                            <ul class="contacts__list">
                                <li class="contacts__item">
                                    <a class="contacts__link-address" href="https://goo.gl/maps/Q2aC9YH2SGYtDk5k6"
                                        rel="noopener noreferrer nofollow" target="_blank">
                                        <svg class="contacts__icon">
                                            <use href="images/icons.svg#icon-map-pin"></use>
                                        </svg>st. Brasil, 7A Brasil, 02000</a>
                                </li>
                                <li class="contacts__item">
                                    <a class="contacts__link" href="tel:+380441111111">
                                        <svg class="contacts__icon">
                                            <use href="images/icons.svg#icon-phone"></use>
                                        </svg>+38 044 111 11 11</a>
                                </li>
                                <li class="contacts__item">
                                    <a class="contacts__link" href="mailto:barbershop@email.com">
                                        <svg class="contacts__icon">
                                            <use href="images/icons.svg#icon-mail"></use>
                                        </svg>barbershop@email.com</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                    <div class="contacts__wrap">
                        <p class="contacts__subtitle">Horário de Serviço</p>
                        <p class="contacts__text">Todos os dias, apartir das 9:00 as 22:00</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>

<footer class="footer">
    <div class="container footer__container">
        <ul class="footer__list">
            <li class="footer__item">
                <a class="footer__link" href="https://www.instagram.com/" rel="noopener noreferrer nofollow"
                    target="_blank">Instagram</a>
            </li>
            <li class="footer__item">
                <a class="footer__link" href="https://www.youtube.com/" rel="noopener noreferrer nofollow"
                    target="_blank">Youtube</a>
            </li>
        </ul>
        <p style="color: black;" class="copyright">&copy; Eduardo S Ferreira 2023</p>
    </div>
</footer>
<!-- MOBILE MENU -->
<div class="mobile-menu js-menu-container" id="mobile-menu">
    <div class="mobile-menu__container">
        <button class="close-mobile-menu js-close-menu" type="button">
            <svg class="icon-mobile-menu icon-mobile-menu--close" width="40" height="40"
                aria-label="Button mobile menu">
                <use href="images/icons.svg#icon-mobile-menu-close"></use>
            </svg>
        </button>
        <ul class="mobile-menu__nav nav">
            <li class="nav__item"><a class="nav__link" href="#about">Sobre</a></li>
            <li class="nav__item"><a class="nav__link" href="#services">Serviços e Preços</a></li>
            <li class="nav__item"><a class="nav__link" href="#barbers">Barbeiros</a></li>
            <li class="nav__item"><a class="nav__link" href="#contacts">Contatos</a></li>
        </ul>
        <div class="mobile-menu__contact">
            <a class="mobile-menu__phone" href="tel:+380441111111">+11 1111111-1111</a>
            <button class="button mobile-menu__button" type="button">Online-booking</button>
        </div>
        <ul class="mobile-menu__social mobile-social">
            <li class="mobile-social__item">
                <a class="mobile-social__link" href="https://www.instagram.com/" rel="noopener noreferrer nofollow"
                    target="_blank">Instagram</a>
            </li>
            <li class="mobile-social__item">
                <a class="mobile-social__link" href="https://www.youtube.com/" rel="noopener noreferrer nofollow"
                    target="_blank">Youtube</a>
            </li>
        </ul>
    </div>
</div>
<!-- MOBILE MENU SCRIPT -->
<script defer="" src="https://cdnjs.cloudflare.com/ajax/libs/body-scroll-lock/3.1.5/bodyScrollLock.min.js"
    integrity="sha512-HowizSDbQl7UPEAsPnvJHlQsnBmU2YMrv7KkTBulTLEGz9chfBoWYyZJL+MUO6p/yBuuMO/8jI7O29YRZ2uBlA=="
    crossorigin="anonymous"></script>
<script src="./js/mobile-menu.js"></script>
<!-- SLIDER SCRIPT -->
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script type="module" src="./js/slider.js"></script>
<script src="./js/aos.js"></script>
<a href="#" class="to-top">
    <i class="fa fa-chevron-up" style="font-size:25px;color:rgb(255, 0, 0)"></i></a>

      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();