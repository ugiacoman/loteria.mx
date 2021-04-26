import styles from '../styles.module.css'
import Image from 'next/image'


export function Card(props) {
  const width = 150
  const height = 210  
  const name = `/${props.name}.jpg`
  return (
    <Image
        src={name}
        alt="Gallo"
        width={width}
        height={height}
        layout="intrinsic"
      />
  )
}

export default function Home() {
  var count = 1
  var fullDeck = []
  
  // Create deck of cards
  while (fullDeck.length < 54) {
    fullDeck.push(count)
    count += 1
  }

  // Create tabla of 16 cards
  var tabla = []
  while (tabla.length < 16) {
    const index = Math.floor(Math.random()*fullDeck.length)
    const randomCard = fullDeck[index]
    tabla.push(randomCard)
    fullDeck.splice(index, 1)
  }

  return (
    <div className={styles.body}>
      <h1> Tabla </h1>
      <div className={styles.gridContainer}>
        {tabla.map((item, index) => (
          <Card key={index} name={item} />
        ))}
      </div>
    </div>
    
  )
}
