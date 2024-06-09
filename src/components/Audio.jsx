import React, { useRef, useEffect } from 'react';
import './Audio.css';

const Audio = ({ audio }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log('Failed to play the audio automatically:', error);
            });
        }
    }, [audio]);

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={audio} controls controlsList='noremoteplayback'>
                <p>Audio Indisponível</p>
            </audio>
        </div>
    );
}

export default Audio;
