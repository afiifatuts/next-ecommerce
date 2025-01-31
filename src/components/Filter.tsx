'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        // console.log(name, value);
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select
                    name="type"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                    onChange={handleFilterChange}
                >
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input
                    type="text"
                    name="min"
                    placeholder="Min Price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="max"
                    placeholder="Max Price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                    onChange={handleFilterChange}
                />
                {/* <select
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
                </select> */}
                <select
                    name="cat"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                    onChange={handleFilterChange}
                >
                    <option value="">Category</option>
                    <option value="new">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>
            </div>
            <div className="">
                <select
                    name="sort"
                    id=""
                    className="py-2 px-2 rounded-xl text-xs font-medium bg-[#EBEDED]"
                    onChange={handleFilterChange}
                >
                    <option>Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
