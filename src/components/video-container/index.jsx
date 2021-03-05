const VideoContainer = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <iframe className="video" src={videoSrc} allowFullScreen></iframe>
      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
        }
        .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 32px 0;
        }
      `}</style>
    </div>
  );
};

export default VideoContainer;
