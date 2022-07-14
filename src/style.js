import Styled from 'styled-components';

export const MainWrapper = Styled.div`
    width: 100%;
    .button-style{
        background: 'grey';
        border: transparent;
        opacity: 0.2;
    }
`;

export const HeaderWrapper = Styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .anticon svg{
        color: 'white';
   }
   .title-style{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
   }
   .title-text-style{
        font-size: 32px;
        color: white;
   }
`;

export const DaysWrapper = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; 
    margin-top: 50px;
    .card-style{
        display: flex;
        flex-direction: row;
        width: 250px; 
        height: 300px; 
        margin: 20px;
    }
    .date-style{
        font-size: 10px;
        text-align: left;
        font-weight: 500;
    }
    .day-style{
        font-size: 30px;
        text-align: left;
        font-weight: 500;
    }
    .inner-card{
        text-align: left;
        display: flex;
        flex-direction: column;
    }
    .card-header{
        font-weight: bold;
        font-size: 15px;
    }
    .button{
        position: absolute;
        bottom: 15px;
        left: 65px;
        right: 65px;
        width: 120px;
    }
`;