import styles from '../styles.module.css'
import Image from 'next/image'
import { Component } from 'react'

export class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  togglePinto = () => {
    this.setState({ isActive: !this.state.isActive })
  }  

  render() {
    const width = 150
    const height = 210  
    const name = `/small/${this.props.name}.jpg`

    const className = this.state.isActive ? styles.activeBean : styles.inactiveBean

    const arc = Math.floor(Math.random() * 360)

    const rotation = {
      transform: `rotate(${arc}deg)`
    }


    return (
      <div 
        className={styles.card}
        onClick={this.togglePinto}
      >
        <Image
          className={styles.artwork}
          src={name}
          alt="Gallo"
          width={width}
          height={height}
          layout="intrinsic"
          priority={true}
        />
        <img
          className={className}
          style={this.state.isActive ? rotation: null}
          src="/pinto_bean.png"
          width={80}
          height={80}
        />
      </div>
    )
  }
}

export default class Page extends React.Component {
  static async getInitialProps(ctx) {
    var count = 1
    var fullDeck = []


    // Inappropriate indices
    const bad = [2, 3, 4, 6, 25, 26, 32, 38]
    
    // Create deck of cards
    while (fullDeck.length < 54 - bad.length) {
      if (!bad.includes(count))  {
        fullDeck.push(count)
      }
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
    return { tabla };
  }

  render() {
    return (
      <div className={styles.body}>
        <h1> Tabla </h1>
        <div className={styles.gridContainer}>
          {this.props.tabla.map((item, index) => (
            <Card key={index} name={item} />
          ))}
        </div>
      </div>
    )
  }
}
