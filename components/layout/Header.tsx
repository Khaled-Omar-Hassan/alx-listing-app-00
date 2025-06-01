const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex flex-col gap-4 md:flex-row justify-between items-center">
            <div className="text-xl font-bold">StayFinder</div>
            <input
                type="text"
                placeholder="Search properties..."
                className="border px-4 py-2 rounded w-full md:w-1/2"
            />
            <div className="flex gap-4">
                <button className="text-blue-600">Sign In</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;