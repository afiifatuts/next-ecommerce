'use client';

import { usePathname, useSearchParams,useRouter } from 'next/navigation';

const Pagination = ({
    currentPage,
    hasPrev,
    hasNext,
}: {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    //update Path
    const pathName = usePathname();
    const searchParms = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParms);
        params.set('page', pageNumber.toString());
        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between w-full">
            <button
                className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
                disabled={!hasPrev}
                onClick={() => createPageUrl(currentPage - 1)}
            >
                Previous
            </button>
            <button
                className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
                disabled={!hasNext}
                onClick={() => createPageUrl(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
