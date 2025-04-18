import Link from 'next/link';
import { Phone, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Egypt e-Visa</h3>
                        <p className="mb-4">The official portal for applying for an electronic visa to visit Egypt.</p>
                        <div className="flex items-center">
                            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                                <span className="text-white font-bold">EG</span>
                            </div>
                            <span className="font-bold text-white">Egypt eVisa</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="/" className="hover:text-blue-400">About Egypt</Link></li>
                            <li><Link href="/" className="hover:text-blue-400">Visa Types</Link></li>
                            <li><Link href="/" className="hover:text-blue-400">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Visa Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/apply" className="hover:text-blue-400">Apply for Visa</Link></li>
                            <li><Link href="/status" className="hover:text-blue-400">Check Application Status</Link></li>
                            <li><Link href="/" className="hover:text-blue-400">Visa Requirements</Link></li>
                            <li><Link href="/" className="hover:text-blue-400">Visa Fees</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                                <span>+20 2 XXX XXXX</span>
                            </li>
                            <li className="flex items-start">
                                <Globe className="h-5 w-5 mr-2 mt-0.5" />
                                <span>support@egyptevisa.gov.eg</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-800 text-sm text-center">
                    <p>Copyright © {new Date().getFullYear()} Egypt Immigration Service | All Rights Reserved</p>
                    <p className="mt-2">This is the official e-Visa application portal for Egypt</p>
                </div>
            </div>
        </footer>
    );
}