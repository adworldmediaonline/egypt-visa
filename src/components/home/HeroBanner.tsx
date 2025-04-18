import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroBanner() {
    return (
        <div className="relative h-96 bg-blue-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Egypt e-Visa Portal</h1>
                    <p className="text-xl mb-6">Fast and secure way to obtain your visa for exploring the ancient wonders and rich heritage of Egypt</p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/apply">
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white cursor-pointer"> Apply for e-Visa</Button>
                        </Link>
                        <Link href="/status">
                            <Button className="text-white border-white hover:bg-white hover:text-blue-900 cursor-pointer">Check Application Status</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}