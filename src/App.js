import logo from './logo.svg';
import './App.css';
import ProductCard from './Product-Card';
import React from 'react';

function Img({ flag }) {
  if (flag) {
    return (
      <img src={logo} className='App-logo' alt='logo' />
    )
  }
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ // change counter only from setState
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Img flag={true} />
          <ProductCard />
          {this.state.counter}
        </header>
      </div>
    )
  }
}

export default App;
export { Img }
