'use strict';

const generateFooter = () => {
    const footer = `
        <footer>
            <div class="container">
                <div class="footer">
                    <div class="footer-catalog">
                        <h2 class="footer-header">Каталог</h2>
                        <ul>
                            <li class="footer-list"><a href="goods.html?cat=Мебель">Мебель</a></li>
                            <li class="footer-list"><a href="goods.html?cat=Кухня">Кухня</a></li>
                            <li class="footer-list"><a href="goods.html?cat=Текстиль">Текстиль</a></li>
                            <li class="footer-list"><a href="goods.html?cat=Освещение">Освещение</a></li>
                            <li class="footer-list"><a href="goods.html?cat=Декор">Декор</a></li>
                        </ul>
                    </div>
                    <div class="footer-about">
                        <h2 class="footer-header">Все о нас</h2>
                        <ul>
                            <li class="footer-list"><a href="#">О компании</a></li>
                            <li class="footer-list"><a href="#">Демократичный дизайн</a></li>
                            <li class="footer-list"><a href="#">Работа у нас</a></li>
                            <li class="footer-list"><a href="#">Люди и планета</a></li>
                        </ul>
                    </div>
                    <div class="footer-connection">
                        <h2 class="footer-header">Свяжитесь с нами</h2>
                        <ul>
                            <li class="footer-list"><a href="#">Обратная связь</a></li>
                            <li class="footer-list"><a href="#">Контакты</a></li>
                            <li class="footer-list"><a href="#">Магазины и студии</a></li>
                            <li class="footer-list"><a href="#">Землевладельцам</a></li>
                            <li class="footer-list"><a href="#">Поставщикам</a></li>
                            <li class="footer-list"><a href="#">Пресс-служба</a></li>
                            <li class="footer-list"><a href="#">Вопросы и ответы</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footer);
};

generateFooter();