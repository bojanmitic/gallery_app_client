import React, {Component} from 'react';
import PreviewImage from './PreviewImage';

class FieldFileInput  extends Component{
  constructor(state){
    super(state);
    this.state={
      image: null,
      imageUrl: null
    }
  }

  displayImage(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        imageUrl: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  render(){
    const {label, input} = this.props;
    delete input.value;
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
       {...input}
        onChange={(e) => {
          this.displayImage(e)
        }}
       />
       <PreviewImage imageUrl={this.state.imageUrl}/>
     </div>
     </div>
    )
}
}



export default FieldFileInput;