import React from "react";
import {
    Button,
    Card,
} from "antd";
import {DaysWrapper} from "../style";

const Days = ( {daysData} ) => {

    const setCss = (item, id) => {
        const card = document.getElementById(id);
        if(card){
            card.style = item.card_color;
        }
    };

    return (
        <DaysWrapper>
            {
                daysData?.map((item) => (
                    <Card className='card-style'>
                        <div className='date-style'>{item.day_of_the_week}</div>
                        <div className='day-style'>{item.day_of_the_month}</div>
                        <div id={item.id} className='inner-card'>
                            {setCss(item, item.date)}
                            <div className='card-header'>{item.card_header}</div>
                            <div>{item.card_body}</div>
                            <Button className='button'>Schedule Post</Button>
                        </div>
                    </Card>
                ))
            }
        </DaysWrapper>
    )
};

export default Days;