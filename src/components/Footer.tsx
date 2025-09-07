const Footer = () => {
    return (
        <footer className="py-6 bg-black/80 dark:bg-white/10 text-center text-gray-300 dark:text-gray-400">
            <p>
                © {new Date().getFullYear()} Robani Diansyah. Built with ❤️ using React & TailwindCSS.
            </p>
        </footer>
    );
};

export default Footer;
