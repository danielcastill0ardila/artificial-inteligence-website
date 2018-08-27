
import React from 'react';
  
class Images extends React.Component{
    handleChange = (file) =>{
       const {addImage} = this.props;
       addImage(file.target.files[0])
    };
    render(){
        const { images } = this.props;
        console.log(images);
        
        return(
            <div>
                <input  type={'file'} onChange={this.handleChange} />
            </div>
        )
    }
}
export default Images;