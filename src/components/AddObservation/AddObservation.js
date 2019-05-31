import React, { Component } from "react"

import { connect } from "react-redux";

import AddObservationView from './AddObservationView'

class AddObservation extends Component {

  state = {
    title: '',
    lat: 0,
    lng: 0,
    date: null,
    hour: 0,
    min: 0,
    tags: [],
    imageUrl: '',
    videoUrl: '',
    imageFile: '',
    observationContents: []
  }
  
  componentDidMount () {
    console.log('AddObservation Did Mount')
  }

  componentWillUnmount () {
    console.log('AddObservation Will unMount')
  }

  handleSetDateNow = () => {
    console.log('setDateNow')
    
  }
  handleSetMyLocation = () => {
    console.log('setMyLocation')
    
  }
  handleAddSubtitle = () => {
    console.log('addSubtitle')
    const newContent = {
      type: 'subtitle',
      text: '',
      id: this.state.observationContents.length
    }
    this.setState({
      observationContents: [...this.state.observationContents, newContent]
    })
  }

  handleAddTextArea = () => {
    const newContent = {
      type: 'paragraph',
      text: '',
      id: this.state.observationContents.length
    }
    this.setState({
      observationContents: [...this.state.observationContents, newContent]
    })    
  }

  handleAddImage = () => {
    console.log('addImage')
    const newContent = {
      type: 'image',
      url: this.state.imageUrl,
      id: this.state.observationContents.length
    }
    this.setState({
      observationContents: [...this.state.observationContents, newContent]
    })
  }

  handleAddVideo = () => {
    console.log('addVideo')
    console.log(this.state.videoUrl)
    const newContent = {
      type: 'video',
      url: this.state.videoUrl,
      id: this.state.observationContents.length
    }
    this.setState({
      observationContents: [...this.state.observationContents, newContent]
    })
    
  }

  handleContentChange = (e) => {
    
    console.log('handleContentChange', e.target.id)
    const contents = this.state.observationContents
    contents.find(cont => cont.id == e.target.id).text = e.target.value
    this.setState({
      observationContents: [...contents]
    })
    
  }

  handleContentDelete = (e) => {

    console.log('handleContentChange', e)
    
  }

  handleContentChangePosition = (e) => {

    console.log('handleContentChange', e)
    
  }

  handleFieldChange = (e) => {


    if (e.target.name === 'videoUrl') {

      // TODO agregar vimeo
      if (e.target.value.split('v=')[1]) {
        const videoId = e.target.value.split('v=')[1].split('&')[0] // https://www.youtube.com/watch?v=20ikUENPMBE
        this.setState({
          videoUrl: `https://www.youtube.com/embed/${videoId}`
        })
      }

    } else {

      this.setState({
        [e.target.name]: e.target.value
      })

    }
  }

  handleAddObservation = () => {
    console.log('addObservation')
    this.props.dispatch({
      type: 'ADD_OBSERVATION',
      title: this.state.title,
      lat: this.state.lat,
      lng: this.state.lng,
      date: this.state.date,
      hour: this.state.hour,
      min: this.state.min,
      tags: this.state.tags,
      imageUrl: this.state.imageUrl,
      videoUrl: this.state.videoUrl,
      imageFile: this.state.imageFile,
      contents: this.state.observationContents
    })
    this.setState({
      redirect: true
    })
  }
  
  render() {
    const props = {
      ...this.state,
      onFieldChange: this.handleFieldChange,
      onContentChange: this.handleContentChange,
      // onContentDelete: this.handleContentDelete,
      // onContentChangePosition: this.handleContentChangePosition,
      onSetDateNow: this.handleSetDateNow,
      onSetMyLocation: this.handleSetMyLocation,
      onAddSubtitle: this.handleAddSubtitle,
      onAddTextArea: this.handleAddTextArea,
      onAddImage: this.handleAddImage,
      onAddVideo: this.handleAddVideo,
      onAddObservation: this.handleAddObservation
    }
    return <AddObservationView {...props}/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddObservation)