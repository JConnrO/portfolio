import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

function Icon(props) {
    const {
        icon_url,
        icon_src,
        img_alt,
        img_id
    } = props;

    return(
        <a href={icon_url} target="_blank">
            <img alt={img_alt} id={img_id} src={icon_src} style={{ height:"32px", width: "32px" }}/>
        </a>
    )
}
export default Icon;