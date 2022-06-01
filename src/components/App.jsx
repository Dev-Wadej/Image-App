import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./SearchBar";
import ImageList from "./ImageList";
import Title from "./Title";

class App extends React.Component {
  state = {
    images: [],
    term: 'IMAGE'
  };
  onSearchSubmit = async (term) => {

    this.setState({term})
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
    // console.log(response)
  };
  render() {
    return (
      <div className="ui container row" style={{ marginTop: "2rem" }}>
        <Title titleNames={this.state.term}/>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}
export default App;
