import ProductImages from '@/components/ProductImages';

const Slug = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG  */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* IMG  */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">Test</div>
        </div>
    );
};

export default Slug;
