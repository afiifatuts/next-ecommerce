const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input
                    type="text"
                    name="min"
                    placeholder="Min Price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />
                <input
                    type="text"
                    name="max"
                    placeholder="Max Price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Size</option>
                    <option value="">Size</option>
                </select>
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Color</option>
                    <option value="">Test</option>
                </select>
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Category</option>
                    <option value="new">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>
            </div>
            <div className="">
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Sort By</option>
                    <option value="">Price (low to high)</option>
                    <option value="">Price (high to low)</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
