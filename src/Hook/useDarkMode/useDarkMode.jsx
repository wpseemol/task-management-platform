import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'enabled'
    );

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return { setDarkMode, darkMode };
};

export default useDarkMode;
