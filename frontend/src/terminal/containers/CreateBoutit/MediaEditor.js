import React from 'react';
import AvatarEditor from 'react-avatar-editor'
import Slider from 'rc-slider';
import SmallLoading from '../../components/Loading/SmallLoading'
import SliderStyles from '../../../styles/SliderStyles.css'

class MediaEditor extends React.Component {
	state = {
			loading: false,
			crop: {
				aspect: 9/16,
				x: 0,
				y: 0,
				height: 400
			},
			croppedImageUrl: null,
	}

  saveCrop = () => {
    this.setState({loading: true})
    this.makeClientCrop();
  }

  makeClientCrop = async () => {
    const _this = this;
    if (_this.editor) {
      const croppedImageUrl = await _this.getCroppedImg();
      var file_reader = new FileReader();
      file_reader.readAsDataURL(croppedImageUrl);
      file_reader.onload = function () {
				 var data = file_reader.result
         _this.props.getMediaUrl(data, 'boutits', 'image/jpeg')
      };
      file_reader.onerror = function (error) {
        this.props.uiLoadingToggle('photo', false)
      };
    }
  }

  getCroppedImg() {
    const canvas = this.editor.getImage()
    const canvasScaled = this.editor.getImageScaledToCanvas()
    return new Promise((resolve, reject) => {
      canvasScaled.toBlob(blob => {
        if (!blob) {
          return;
        }
        resolve(blob);
      }, 'image/jpeg');
    });
  }


	setEditorRef = (editor) => this.editor = editor

  render() {
    const {
			sliderChange,
			state
		} = this.props;
    return (
			<div className="width-100 flex-col centered">
					<div className="width-100 max-width-800 flex-col centered padding-top-30 padding-bottom-30">
							<div className="width-100 max-width-800 min-width-800 centered flex-col">
									<div className="margin-bottom-20">
											<div className="background-black border-grey">
											<AvatarEditor
												ref={this.setEditorRef}
												image={state.mediaData}
												width={400}
												height={400}
												border={20}
												scale={state.sliderVal}
												rotate={0}
											/>
											</div>
									</div>
									<div className="max-width-200 width-100 margin-bottom-20">
										<Slider
											activeDotStyle={{borderColor: 'rgba(247,78,130,1)'}}
											dotStyle={{borderColor: 'red'}}
											onChange={sliderChange}
											trackStyle={[{backgroundColor: 'rgba(247,78,130,1)'}]}
											min={0.5}
											max={2.0}
											step={0.1}
											value={state.sliderVal}
										/>
									</div>
									<div
										className="create-button centered height-30p radius-5 padding-horizontal-10 max-width-100"
										onClick={this.saveCrop}
									>
										{this.state.loading ? <SmallLoading /> : 'crop'}
									</div>
							</div>
					</div>
			</div>
    );
  }
}

export default MediaEditor;
