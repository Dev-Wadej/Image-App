import React from "react";
// import React, { Component } from "react";

class Imagecard extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        span : 0
    }
    this.imageRef = React.createRef();

  }

   componentDidMount(){
 this.imageRef.current.addEventListener('load',this.setSpans)
  }
  setSpans = ()=>{
      const imageHeight = this.imageRef.current.clientHeight;

      const spanHeight= Math.ceil(imageHeight / 10 )
    this.setState({span: spanHeight})

  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default Imagecard;
