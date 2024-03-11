import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <ImgeStayle>
         <button>⬅</button>
        <div>
           <img src="https://i.blogs.es/718a10/img_2085/500_333.jpeg" alt="" srcset="" />
        </div>
        {/* <div>
           <img src="https://i.blogs.es/718a10/img_2085/500_333.jpeg" alt="" srcset="" />
        </div>
        <div>
           <img src="https://i.blogs.es/718a10/img_2085/500_333.jpeg" alt="" srcset="" />
        </div> */}
        <button>➡</button>
        <h1>
         <Style>.</Style>
         <div></div>
         <Style>.</Style>
        </h1>
    </ImgeStayle>
  )
}

export default Announcement

const ImgeStayle = styled.div`
   /* border: 1px solid red;  */
   margin-left: 300px;
   /* width: 1600px; */
   display: flex;
   /* justify-content: space-around ; */
   h1{
      color: aliceblue;
   }
   div{
      border: 1px solid red;
      border-radius: 5px ;
      width: 5;
      height: 5;
   }

`
const Style = styled.div`
   color: red;
`