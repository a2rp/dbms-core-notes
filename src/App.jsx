import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes, { items } from "./AppRoutes";
import { FiBookOpen } from "react-icons/fi";
export default function App(){ const mainRef=useRef(null); const location=useLocation(); const nav=({isActive})=>`topicLink ${isActive?"active":""}`; const select=()=>mainRef.current?.scrollTo({top:0,left:0,behavior:"smooth"}); return <Styled.Wrapper><Styled.Header><Header /></Styled.Header><Styled.Main ref={mainRef}><aside className="studyNav"><div className="studyNavLabel">Study guide</div><nav>{items.map(([path,label])=><NavLink key={path} to={path} className={nav} onClick={select}><FiBookOpen/><span>{label}</span></NavLink>)}</nav><p>Select a topic to open its notes.</p></aside><div className="contentWrapper"><AppRoutes key={location.pathname}/><Footer/></div><button className="scrollTopButton" onClick={select} aria-label="Scroll content to top">↑</button></Styled.Main></Styled.Wrapper>; }
