import React from "react";


function Cards(props){



    return(
        <>
         <div className="Cards">
            <div className="card">
                <img src={props.imgsrc} alt=""/>
                <div className="card_info">
                <span className="card_category"></span>
                <h3 className="card_title">{props.title}</h3>
                <a href={props.link} target="_blank">
                    <button>WATCH NOW</button>
                </a>
                </div>
               
            </div>
        </div>
        </>
    )
}

export default Cards;