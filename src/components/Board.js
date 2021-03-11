import '../App.css';
import React from "react";
import Card from "./Card";
import Timer from "./Timer";

import {Button} from "react-bootstrap";
class Board extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        images: ['/images/img1.jpg','/images/img2.jpg','/images/img3.jpg','/images/img4.jpg','/images/img5.jpg','/images/img6.jpg','/images/img7.jpg','/images/img8.jpg'],
        copiedImageArray: [],
        randomImageArray: [],
        finalImageArray: [],
        openImageArray: [],
        counter: 0,
      }
      this.start()
    }

    handleClick(name,index){
      if(this.state.openImageArray.length == 2){
        setTimeout(() => {
          this.check()
        },750)
      }else {
        let img = {
          name,
          index
        }
        let finalImageArray = this.state.finalImageArray
        let images = this.state.openImageArray
        finalImageArray[index].close = false
        images.push(img)
        this.setState({
          openImageArray: images,
          finalImageArray: finalImageArray
        })
        if(this.state.openImageArray.length == 2){
          setTimeout(() => {
            this.check()
          },750)
        }
      }
    } 

    check(){
      let finalImageArray = this.state.finalImageArray
      if((this.state.openImageArray[0].name == this.state.openImageArray[1].name) && (this.state.openImageArray[0].index != this.state.openImageArray[1].index)){
        finalImageArray[this.state.openImageArray[0].index].complete = true
        finalImageArray[this.state.openImageArray[1].index].complete = true
        this.state.counter = this.state.counter + 1;
      }
      else {
        finalImageArray[this.state.openImageArray[0].index].close = true
        finalImageArray[this.state.openImageArray[1].index].close = true
      }
      this.setState({
        finalImageArray,
        openImageArray: []
      })
    }


    start(){
      let finalImageArray = [];
      this.state.copiedImageArray = this.state.images.concat(this.state.images)
      this.state.randomImageArray = this.shuffle(this.state.copiedImageArray)
      this.state.randomImageArray.map((name,index) => {
        finalImageArray.push({
          name,
          close: true,
          complete: false,
          fail: false
        })
      })
      this.state.finalImageArray = finalImageArray
    }

    shuffle(array){
      let currentIndex = array.length, temp , randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp  = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp ;
      }
      return array
    }

    render(){
      return (
        <div>
          <Timer counter={this.state.counter} />
            <div className="rowdiv" >{
              this.state.finalImageArray.map((img, index) => {
                return <Card img={img.name} click={() => {this.handleClick(img.name,index)}} close={img.close} complete={img.complete}/>
              })
            }
            </div>
        </div>
      )
    }
}
export default Board;