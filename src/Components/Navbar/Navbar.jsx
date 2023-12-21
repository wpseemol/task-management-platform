import useDarkMode from '../../Hook/useDarkMode/useDarkMode';

const Navbar = () => {
    const { setDarkMode, darkMode } = useDarkMode();

    console.log(localStorage.getItem('darkMode') == 'true');

    return (
        <>
            <nav></nav>

            <div className="bg-green-600 text-black dark:text-white dark:bg-slate-800">
                this is nav file
                <br />
                <button onClick={() => setDarkMode(!darkMode)} className="">
                    {darkMode ? 'light' : 'dark'}
                </button>
            </div>
        </>
    );
};

export default Navbar;
