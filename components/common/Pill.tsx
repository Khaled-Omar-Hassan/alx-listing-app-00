const Pill = ({ label }: { label: string }) => (
    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full text-sm">
        {label}
    </button>
);

export default Pill;