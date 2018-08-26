import React, { Component } from "react";

import styled from "styled-components";
import propTypes from "prop-types";
import { FileDropzone } from "emerald-ui";

const Div = styled.div`
  padding: 100px;
  margin-top: -50px;
`;

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: props.files || []
    };
  }
  handleDrop = (file) =>{
    fetch('https://artificial-inteligence-api.herokuapp.com/api/file',{
      method:'POST',
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:{
        imageUrl:file
      }}).then(response => response.json()).then(data => {
        console.log(data)
      });
  }

  handleChange = file =>{

    let options = {
      method:'POST',
     
      body:null
    },
    files = file.target.files
    options.body = new FormData();
    options.body.append('files',file.target.files[0],'daniel.jpg')

    
    fetch('https://artificial-inteligence-api.herokuapp.com/api/file',options)
      .then(response => response.json()).then(data => {
        console.log(data)
      });
  }

  render() {
    const { users } = this.props;
  
    return (
      <Div>
        <FileDropzone onDrop={this.handleDrop}>
          <div className="text-center">
            <p style={{ color: "#8ea7a7", fontSize: "13px", margin: 0 }}>
              <i
                className="material-icons"
                style={{
                  fontSize: "15px",
                  position: "relative",
                  top: "2px",
                  marginRight: "6px"
                }}
              >
                cloud_upload
              </i>
              Drag a file here or <a>browse</a> for a file to upload
            </p>
          </div>
        </FileDropzone>

        <input  type={'file'} onChange={this.handleChange} />
      </Div>
    );
  }
}

UserTable.propTypes = {
  users: propTypes.array.isRequired
};
export default UserTable;
