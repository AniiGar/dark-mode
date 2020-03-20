import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    
    const [ darkMode, setDarkMode] = useLocalStorage('ModeKey', initialValue);

    useEffect( () => {
        if(darkMode === true) {
            let body = document.querySelector('body')
            body.classList.add('dark-mode')
        }else{
            let body = document.querySelector('body')
            body.classList.remove('dark-mode')
        }
    },[darkMode])

    return[darkMode, setDarkMode]
}