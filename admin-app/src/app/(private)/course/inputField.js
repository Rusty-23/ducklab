export default function InputField({ label, name, type, value }) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                className="py-3 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>
    );
}