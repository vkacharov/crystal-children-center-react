import { Image } from '@aws-amplify/ui-react'; 
import React, { useEffect, useState } from 'react';
import { Storage } from "aws-amplify";

function S3Image(props) {
    const [src, setSrc] = useState("");

    useEffect(() => {
        if (props.imgKey) {
            let key = props.imgKey;
            if (props.imgPrefix) {
                key = props.imgPrefix + '/' + key;
            }
            Storage.get(key)
            .then(result => {
                setSrc(result);
            })
        }
    }, [props.imgKey]);
    
    if (src) {
        return (
            <div>
                <Image src={src} />
            </div>      
        );
    } else {
        return null;
    }
}

export default S3Image;