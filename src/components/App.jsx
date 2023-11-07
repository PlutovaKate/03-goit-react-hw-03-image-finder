import { Component } from 'react';
import Layout from './Layout';
import ModalWindow from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
  };
  render() {
    return (
      <Layout>
        <SearchBar />
        <ModalWindow />
      </Layout>
    );
  }
}
