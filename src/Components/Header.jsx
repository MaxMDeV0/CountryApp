import React from "react"
import { useEffect } from "react"


export default function Header(props){
    let {dark, setDark} = props
    useEffect(()=>{
        const root = document.getElementById('root');
        console.log(root.style)
        if(dark){
            root.style.setProperty('--main-color', '#202C36')
            root.style.setProperty('--second-color', '#2B3844')
            root.style.setProperty('--text-color', '#ffffff')
            root.style.setProperty('--arrow-url', 'url(/src/assets/whiteArrow.svg)')
            root.style.setProperty('--select-url', 'url(/src/assets/whiteSelectArrow.svg)')
            root.style.setProperty('--theme-url', 'url(/src/assets/sun.svg)')

        }else{
            root.style.setProperty('--main-color', '#fafafa')
            root.style.setProperty('--second-color', '#ffffff')
            root.style.setProperty('--text-color', '#000000')
            root.style.setProperty('--arrow-url', 'url(/src/assets/backArrow.svg)')
            root.style.setProperty('--select-url', 'url(/src/assets/selectArrow.svg)')
            root.style.setProperty('--theme-url', 'url(/src/assets/darkIcon.svg)')

        }
    },[dark])
    const changeTheme = ()=>{
        setDark(prevState =>!prevState)
    }
    return(
        <header>
            <h1>Where in the world ?</h1>
            <button className="darkThemeButton" onClick={changeTheme}>{dark? 'Light Mode' : 'Dark Mode'}</button>
        </header>
    )
}