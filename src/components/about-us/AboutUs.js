import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='about_us container'>
            <h1>Asaxiy kompaniyasi haqida</h1>
            <p>Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.</p>
            <p>Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
            <ul className="about_us-company">
                <li className='about_us-companyItem'>Kompaniyaning ish tamoyili</li>
                <li className='about_us-companyItem'>Bizning afzalliklarimiz</li>
            </ul>
            <p>"Asaxiy Books" MCHJ <br />
                Ro'yxatdan o'tish raqami: 646439 <br />
                INN: 305829008 <br />
                MCHJ rahbari: Allayev Firuz Abdunasimovich</p>
        </div>
    )
}

export default AboutUs