import { Component } from 'react';
import { Layout } from './Layout';
import ModalWindow from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as ImageService from './api';
import { Notification } from './Layout';

export class App extends Component {
  state = {
    query: '',
    hits: [],
  };

  onSubmit = query => {
    if (!query) return;
    this.setState({
      query,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const {
        data: { hits, totalHits },
      } = await ImageService.fetchImages({
        query: this.state.query,
        page: this.state.page,
      });
      this.setState(prevState => ({ hits: [prevState.hits, ...hits] }));
    }
  }

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
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.hits.length === 0 && (
          <Notification>Sorry. There are no images ... 😭</Notification>
        )}
        <ImageGallery images={this.state.hits} />

        <ModalWindow />
      </Layout>
    );
  }
}
