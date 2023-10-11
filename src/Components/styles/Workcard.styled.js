import { useEffect, useState } from "react"
import styled from "styled-components"

export const Workcard=styled.div`
background-position: center;
background-repeat: no-repeat;
color: white;
margin:-80px;
text-align: center;
min-width:250px;
height:300px;
box-shadow: -4px 3px 5px -1px white;
transform:perspective(1000px) rotateY(50deg) ;
transition: all 0.5s linear;
`