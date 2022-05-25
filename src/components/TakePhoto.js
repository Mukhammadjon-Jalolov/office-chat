import React from "react";
import ReactDOM from "react-dom";
import WebCam from "react-webcam";

function TakePhoto(){
	const webcamRef = React.useRef(null);
	const [imgSrc, SetImgSrc] = React.useState(null);
	
	const capture = React.useCallback(() => {
			const imageSrc = webcamRef.current.getScreenshot({width: 200, height: 150});
			SetImgSrc(imageSrc);
		}, [webcamRef, SetImgSrc]);
		
	return(
	<>
		<WebCam
			audio = {false}
			ref = {webcamRef}
			screenshotFormat = "image/jpeg"
		/>
		<button onClick = {capture}> Capture Photo </button>
			{imgSrc && (<img src = {imgSrc} />)}
	</>
	)
}


export default TakePhoto;
