import { Image } from '@aws-amplify/ui-react'; 
import React, { useEffect, useState } from 'react';
import { Storage } from "aws-amplify";
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

function S3Image(props) {
    const [src, setSrc] = useState("");
    const [type, setType] = useState("");
    const imageFormats = ['.gif', '.jpg', '.png', '.jpeg', '.apng', '.avif', '.webp', '.svg'];
    const videoFormats = ['.mp4', '.webm', 'ogg'];

    const isVideo = (src) => {
        for (let format of videoFormats) {
            if (src.endsWith(format)) {
                return true;
            }
        }

        return false;
    }

    const isImage = (src) => {
        for (let format of imageFormats) {
            if (src.endsWith(format)) {
                return true;
            }
        }

        return false;
    }

    useEffect(() => {
        if (props.imgKey) {
            let key = props.imgKey;
            if (props.imgPrefix) {
                key = props.imgPrefix + '/' + key;
            }
            Storage.get(key)
            .then(result => {
                setSrc(result);
                if (isVideo(key.toLowerCase())) {
                    setType('video');
                }

                if (isImage(key.toLowerCase())) {
                    setType('image');
                }
            })
        }
    }, [props.imgKey]);
    
    if (src) {
        if (type === 'video') {
            return (
                <Player
                    playsInline
                    src={src}
                >
                    <ControlBar>
                        <VolumeMenuButton vertical />
                    </ControlBar>
                </Player>
                
            );
        }

        if (type === 'image') {
            return (
                <Image src={src} />
            );
        }
    } else {
        return null;
    }
}

export default S3Image;