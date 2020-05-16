/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductView from './components/ProductView.jsx';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {
        images: [],
      },
    };
  }

  componentDidMount() {
    const gameId = window.location.pathname.match(/\/games\/(\d+)/);
    axios.get(`/carousel/${gameId[1]}`)
      .then((data) => { this.updateGame(data); });
  }

  updateGame(data) {
    this.setState({
      game: data.data,
    });
  }

  render() {
    const { game } = this.state;

    return (
      <ProductView game={game} />
    );
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('carousel'));
