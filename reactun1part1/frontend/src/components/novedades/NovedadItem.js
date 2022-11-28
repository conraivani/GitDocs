import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body, link} = props;

return (
    <div className = "novedades">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <img src={imagen}/>
    <div dangerous1ySetInnerHTML={{__html: body}}/>
    <hr/>
    </div>
);
}

export default NovedadItem;