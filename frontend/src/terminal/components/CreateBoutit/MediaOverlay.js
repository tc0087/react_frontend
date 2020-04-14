import moment from 'moment';
import React from 'react';
import MediaEditor from '../../containers/CreateBoutit/MediaEditor'
import { FiCamera } from 'react-icons/fi';
import {MdClose} from 'react-icons/md'

class MediaOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        address: '',
        endDate: moment(new Date()),
        loading: false,
        startDate: moment(new Date()),
        view: 'boutIts',
        crop: {
          aspect: 9/16,
          x: 0,
          y: 0,
          height: 400
        },
        croppedImageUrl: null,
        file: null,
        overlay: 'category',
        picture: null,
        src: null
    }
  }

  // addImage(){
  //    const _this = this;
  //    const blob = this.state.croppedImageUrl;
  //    var file_reader = new FileReader();
  //    file_reader.readAsDataURL(blob);
  //    file_reader.onload = function () {
  //       var data = file_reader.result
  //       Meteor.call('addProfilePhoto', data, function(err,resp){
  //         if(err){
  //           console.log(err)
  //         }else{
  //           _this.setState({overlay_visible: false})
  //         }
  //       })
  //    };
  //    file_reader.onerror = function (error) {
  //      console.log('Error: ', error);
  //    };
  // }

//   onSelectFile(e){
//     if (e.target.files && e.target.files.length > 0) {
//       const reader = new FileReader();
//       reader.addEventListener('load', () =>
//         this.setState({ src: reader.result }),
//       );
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   handleFileUpload(event){
//     const _this = this;
//      const file = event.target.files[0];
//      var file_reader = new FileReader();
//      file_reader.readAsDataURL(file);
//      file_reader.onload = function () {
//         var data = file_reader.result
//         Meteor.call('boutit.image', data, function(err,resp){
//           if(err){
//             console.log(err)
//           }else{
//             const pic_url = resp['Location']
//             _this.setState({picture: pic_url})
//           }
//         })
//      };
//      file_reader.onerror = function (error) {
//        console.log('Error: ', error);
//      };
//   }

//   saveCrop(){
//     this.props.uiLoadingToggle('photo', true)
//     this.makeClientCrop();
//   }

//   async makeClientCrop() {
//     const _this = this;
//     if (_this.editor) {
//       const croppedImageUrl = await _this.getCroppedImg();
//       var file_reader = new FileReader();
//       file_reader.readAsDataURL(croppedImageUrl);
//       file_reader.onload = function () {
//          var data = file_reader.result
//          _this.props.addBoutItPhoto(data)
//       };
//       file_reader.onerror = function (error) {
//         this.props.uiLoadingToggle('photo', false)
//       };
//     }
//   }


//   getCroppedImg() {
//     const canvas = this.editor.getImage()
//     const canvasScaled = this.editor.getImageScaledToCanvas()
//     return new Promise((resolve, reject) => {
//       canvasScaled.toBlob(blob => {
//         if (!blob) {
//           return;
//         }
//         resolve(blob);
//       }, 'image/jpeg');
//     });
//   }


// setEditorRef = (editor) => this.editor = editor

  render() {
		const {
			getMediaUrl,
			sliderChange,
			state,
			toggleOverlay
		} = this.props;
    return (
      <div className="width-100 height-100 centered flex-col">
				<div className="height-95 width-90 max-width-500 background-white flex-col radius-10 overflow-hidden">
					<div className="height-70p flex-row width-100 space-between centered padding-horizontal-20 background-transparent">
						<div className="flex-33">
							<FiCamera className="text-30 text-grey" />
						</div>
						<div className="flex-33"></div>
						<div className="flex-33 flex-row centered-vertical space-between">
							<div></div>
							<div className="flex-row centered">
								<MdClose
									className="pointer-pink-text-hover text-30"
									onClick={toggleOverlay}
								/>
							</div>
						</div>
					</div>
					<div className="width-100 flex-col centered">
						<MediaEditor
							getMediaUrl={getMediaUrl}
							sliderChange={sliderChange}
							state={state}
						/>
					</div>
				</div>
      </div>
    );
  }
}

export default MediaOverlay;
