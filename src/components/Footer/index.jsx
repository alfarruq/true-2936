

import './style.css'

function Footer() {
    return (
        <div className="container blue" >
            <div className='ftr'>
                <div>
                    <h2>КАТАЛОГ ТОВАРОВ</h2>

                    <ul>
                        <li>Кардио тренажеры</li>
                        <li>Composite Strength</li>
                        <li>True Stretch</li>
                        <li>Сайклинг</li>
                        <li>Групповые тренировки</li>
                        <li>Силовые тренажеры</li>
                        <li>Консоли</li>
                    </ul>
                    <h3>© TRUE FITNESS</h3>
                </div>
                <div>
                    <h2>ИНФОРМАЦИЯ</h2>
                    <ul>
                        <li>О Бренде</li>
                        <li>Преимущества</li>
                        <li>открыть клуб</li>
                        <li>продукции</li>
                        <li>контакты</li>
                    </ul>
                </div>
                <div>
                    <h2>КОНТАКТЫ</h2>
                    <ul>

                        <li>конфиденциальности</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div>
                    <h2>ПОДПИСАТЬСЯ НА НОВОСТИ</h2>
                    <input placeholder='E - MAIL' type="text" />

                    <button>Send</button>
                    <div className='int'>
                        <img src="./fcb.png" alt="" />
                        <img src="./ins.png" alt="" />
                        <img src="./ytb.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;