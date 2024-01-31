import React from 'react';
import Creator from '../Components/Creator';
import { dummy } from '../PrDummy';
import Header from '../Components/Header';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
 

const Button = styled.button`
    width:12vw;
    height:7vh;
    border-radius:25px;
    color:#fff;
    text-align:center;
    align-items:center;
    font-size:2rem;
    margin:0 0 0 80vw;
    background-color:#FB7B6A;
    border:none;

    &:hover {
        background-color:#E36757;
    }

`
const InnerContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding:30px;

`;




export default function Creators() {

    const {profile} = dummy;

  return (
    <div className='Creators-container' style={{backgroundColor:'#121C2E'}}>
        <Header />
        <h3 style={{
            color:'#fff',
            fontWeight:'700',
            marginLeft:'10vw',
            marginTop:'4vh',
            fontSize:'40px'
        }}>크리에이터 PR</h3>
        <Button>
            <Link to='/editPr' style={{color:"#fff"}}>작성하기</Link>
        </Button>
        <InnerContainer>
        {profile.map((user, index) => (
            <Creator 
                key={index}
                name={user.name}
                title={user.title}
                category={user.category}
                email={user.email}
                insta={user.insta}
                tictok={user.tictok}
                youtube={user.youtube}
                photo={user.photo}
                youtubeVideos={user.youtubeVideos}
            />
        ))}
        </InnerContainer>
        <Footer/>
      
    </div>
  )
}
