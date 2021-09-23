import { useEffect, useState } from 'react'

function useDarkMode() {

    const [theme, setTheme] = useState(localStorage.getItem('daypitchtheme'))

    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    
    useEffect(() => {
        if (theme === 'null') {
            setTheme('light')
        }else if(theme === 'dark'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        const root = window.document.documentElement;        

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('daypitchtheme', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}

export default useDarkMode