import React, {useEffect, useState} from "react";
import axios from 'axios';
import {
    Button,
    Spin,
} from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {HeaderWrapper, MainWrapper} from "../style";
import Days from "./Days";

const Calender = () => {

    const [ currentMonth, setCurrentMonth ] = useState('January');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ selectedMonth, setSelectedMonth ] = useState({});
    const [ daysData, setDaysData ] = useState([]);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const setCss = (style) => {
        const title = document.getElementById('title');
        if(title){
            title.setAttribute('style', style);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        debugger
        axios.get(`https://v1.igpods.com/api/social_calendar/get/${currentMonth}`)
            .then((response) => {
                setCss(response.data.calendar_banner_style);
                setSelectedMonth(response.data);
                setDaysData(response.data.days);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentMonth]);

    const handlePrevious = () => {
        const oldIndex = months.indexOf(currentMonth);
        const newIndex = oldIndex - 1;
        let currentIndex;
        if(newIndex < 0){
            currentIndex = months.length - 1;
        } else {
            currentIndex = newIndex;
        }
        setCurrentMonth(months[currentIndex]);
    };

    const handleNext = () => {
        const oldIndex = months.indexOf(currentMonth);
        const newIndex = oldIndex + 1;
        let currentIndex;
        if(newIndex > months.length - 1){
            currentIndex = 0;
        } else {
            currentIndex = newIndex;
        }
        setCurrentMonth(months[currentIndex]);
    };

    return (
        <MainWrapper>
            {isLoading ?
                <Spin /> :
                <HeaderWrapper id='title'>
                    <Button type='primary' shape='circle' className='button-style'
                            onClick={handlePrevious}><LeftOutlined/></Button>
                    <span className='title-text-style'>{selectedMonth.calendar_banner_text}</span>
                    <Button type='primary' shape='circle' className='button-style' onClick={handleNext}><RightOutlined/></Button>
                </HeaderWrapper>
            }
            <div>
                <Days daysData={daysData}/>
            </div>
        </MainWrapper>
    )
};

export default Calender;