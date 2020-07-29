import React from 'react'
import Intro from '../components/Intro'
import Card from '../components/Card'

const intro = {
  content: 
    `Program pelatihan belajar pemrograman 
    dengan tatap muka secara offline dan 
    dengan bimbingan para instruktur profesional. 
    Peserta akan belajar dengan kurikulum yang 
    berorientasi pada industri dengan teknologi 
    terbaru dengan konsentrasi utama yaitu 
    pemrograman web dan Android. Saat ini 
    program diselenggarakan di 2 kota besar, 
    yaitu Bandung dan Jakarta.`
}

const cards = [
  {
    imageUrl  : 'http://www.wildenali.com/img/kucing.jpg',
    title     : 'Weekend Bootcamp',
    subtitle: 'Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta'
  },
  {
    imageUrl  : 'http://www.wildenali.com/img/kucing.jpg',
    title     : 'Intensive Bootcamp', 
    subtitle  : 'Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina'
  },
]

const FireSchool = () => (
  <div className="container">
    <h1 style={{ textAlign: 'center' }}>Developer Fire School</h1>
    
    <div className="row" style={{ marginTop: 40, marginBottom: 100 }}>
      <Intro content={intro.content} />
      <div className="col-md-6">
        <img src="http://www.wildenali.com/img/kucing.jpg" alt=""/>
      </div>
    </div>
    
    <div className="row" style={{ marginBottom: 50 }}>
      {
        cards.map(card => 
          <Card
            imageUrl={card.imageUrl}
            title={card.title}
            subtitle={card.subtitle}
          />)
      }
    </div>

  </div>
)

export default FireSchool