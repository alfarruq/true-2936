
import map from '../../assets/gym.png'
import './style.css'

function OpenClub() {
    return (
        <div className="container" >
            <section className='sectionOne'>
                <div className="div_top">
                    <p>КЛУБ TRUE</p>
                    <h3>Открыть клуб вместе с TRUE</h3>
                </div>
                <div className="div_img">
                    <img src={map} alt="" />
                </div>
            </section>
            <section className='sectionTwo'>
                <div className="ota"></div>
                <h3>Отправить заявку</h3>
                <div className="div_inp">
                    <p>Ваше имя</p>
                    <input placeholder='ИМЯ' type="text" />
                    <p>E-MAIL</p>
                    <input placeholder='E-MAIL:' type="text" />
                    <p>НОМЕР ТЕЛЕФОНА</p>
                    <input placeholder='+998 (77)-777-77-77' type="text" />
                    <p>ГОРОД</p>
                    <input placeholder='Город' type="text" />
                </div>
                <h2>Хотите открыть:</h2>
                <div className="div_radios">
                    <label htmlFor="">
                        <input name='aa' type="radio" />

                        Фитнес студия
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='aa' type="radio" />
                        Фитнес клуб
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='aa' type="radio" />
                        Домашний спортзал
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='aa' type="radio" />
                        Тренажерный зал в отеле, санатории
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='aa' type="radio" />
                        Корпоративный спортзал
                    </label>


                    <h2>Планируемый срок запуска проекта:</h2>
                    <label htmlFor="">
                        <input name='bb' type="radio" />

                        Фитнес студия
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="radio" />
                        Фитнес клуб
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="radio" />
                        Домашний спортзал
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="radio" />
                        Тренажерный зал в отеле, санатории
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="radio" />
                        Корпоративный спортзал
                    </label>


                    <h2>Какие услуги Вас интересуют:</h2>
                    <label htmlFor="">
                        <input name='bb' type="checkbox" />
                        Консультация                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="checkbox" />
                        Подбор оборудования                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="checkbox" />
                        Расстановка тренажеров на плане                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        <input name='bb' type="checkbox" />
                        Лизинг
                    </label>
                    <h2>Загрузить план помещения</h2>
                    <input type="file" />
                </div>
            </section>
        </div>
    );
}

export default OpenClub;