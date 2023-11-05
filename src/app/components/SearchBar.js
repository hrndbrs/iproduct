function SearchBar({ categories, onChange }) {
    const className = "bg-transparent text-md text-black"

    const handleChange = (e) => {
        onChange(e.target)
    }

    return (
        <div className="flex gap-3 justify-center p-4">
            <div className="relative w-3/6">
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2">
                    search
                </span>
                <input type="text" name="keyword" className={`input input-bordered w-full p-3 pl-10 ${className}`} placeholder="Search by name" onChange={handleChange} />
            </div>
            <select name="category" className={`select select-bordered uppercase font-sans ${className}`} onChange={handleChange} defaultValue="">
                <option value="" hidden disabled>Select category</option>
                <option value="">All</option>
                {categories.map(category => (
                    <option key={category.name} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
    )
}

export default SearchBar