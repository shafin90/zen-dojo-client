
import YouTube from 'react-youtube';

const ClassVideo = () => {
    const videoId = 'tjL6SwCxBYA'; // Replace with your YouTube video ID

    const opts = {
        height: '390',
        width: '640',
    };

    return (
        <div className=' my-5 '>
            <h1 className=' fw-bold text-lg-center display-4 mb-5 '>Training Session</h1>
            <div className=' d-flex  justify-content-center  align-content-center '>
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
    );
};

export default ClassVideo;
