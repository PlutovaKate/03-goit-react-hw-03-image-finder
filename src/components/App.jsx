import { Component } from 'react';
import Layout from './Layout';
import ModalWindow from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from './api';

export class App extends Component {
  // state = {
  //   searchValue: '',
  //   page: 1,
  //   images: [],
  //   totalHits: '',
  //   error: false,
  //   isLoading: false,
  // };

  // handleSubmit = searchValue => {
  //   this.setState({
  //     searchValue,
  //     page: 1,
  //     images: [],
  //     totalHits: '',
  //   });
  // };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.searchValue !== this.state.searchValue
  //   ) {
  //     try {
  //       const newImages = await fetchImages(
  //         this.state.page,
  //         this.state.searchValue
  //       );
  //       this.setState({
  //         images: [...this.state.images, ...newImages.hits],
  //         totalHits: newImages.totalHits,
  //       });
  //     } catch (error) {
  //       this.setState({ error: true });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  render() {
    return (
      <Layout>
        <SearchBar />
        <ImageGallery />
        {/* <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery newImages={this.state.images} /> */}
        <ModalWindow />
      </Layout>
    );
  }
}
