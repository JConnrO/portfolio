import React from 'react';

function Icon(props) {
    const {
        icon_url,
        icon_src,
        img_alt,
        img_id
    } = props;

    return(
        <a href={icon_url} target="_blank" className="icon">
            <img alt={img_alt} className="icon-img" id={img_id} src={icon_src} style={{ height:"32px", width: "32px" }}/>
        </a>
    )
}
export default Icon;