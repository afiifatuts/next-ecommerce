// 'use client';
import Slider from '@/components/Slider';
import ProductList from '@/components/ProductList';
import Categories from '@/components/Categories';
import { Suspense, useContext, useEffect } from 'react';
import { WixClientContext } from '@/context/wixContext';
import { useWixClient } from '@/hooks/useWixClient';
import { wixClientServer } from '@/lib/wixClientServer';
import Skeleton from '@/components/Skeleton';

const HomePage = async () => {
    // TEST (FETCHING ON THE CLIENT COMPONENT)
    // const wixContext = useWixClient();

    // useEffect(() => {
    //     const getProducts = async () => {
    //         const res = await wixContext.products.queryProducts().find();

    //         console.log(res);
    //     };

    //     getProducts();
    // }, [wixContext]);

    // TEST (FETCHING ON THE SERVER COMPONENT)

    // const wixClient = await wixClientServer();
    // const res = await wixClient.products.queryProducts().find();

    // console.log(res);

    return (
        <div className="">
            <Slider />
            <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
                <h1 className="text-2xl">Featured Products</h1>
                <Suspense fallback={<Skeleton />}>
                    <ProductList
                        categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
                        limit={4}
                    />
                </Suspense>
            </div>
            <div className="mt-24">
                <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
                <Suspense>
                    <Categories />
                </Suspense>
            </div>
            <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
                <h1 className="text-2xl">New Products</h1>
                <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
            </div>
        </div>
    );
};

export default HomePage;
