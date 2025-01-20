import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8 min-w-max">
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
                <Link href="/link?cat=test" className="flex-shrink-0 w-[300px]">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image
                            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            fill
                            sizes="20vw"
                            className="object-cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
                </Link>
            </div>
        </div>
    );
};

export default Categories;
