import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? true : false);
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return { setDarkMode, darkMode };
};

export default useDarkMode;
