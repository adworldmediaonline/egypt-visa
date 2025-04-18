import Link from 'next/link';
import { Home, FileText, ClipboardCheck, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DesktopNav() {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex space-x-8">
            <Link
                href="/"
                className={`flex items-center font-medium hover:text-blue-600 ${pathname === '/' ? 'text-blue-800' : 'text-gray-700'
                    }`}
            >
                <Home className="h-4 w-4 mr-1" />
                Home
            </Link>
            <Link
                href="/apply"
                className={`flex items-center font-medium hover:text-blue-600 ${pathname === '/apply' ? 'text-blue-800' : 'text-gray-700'
                    }`}
            >
                <FileText className="h-4 w-4 mr-1" />
                Apply
            </Link>
            <Link
                href="/status"
                className={`flex items-center font-medium hover:text-blue-600 ${pathname === '/status' ? 'text-blue-800' : 'text-gray-700'
                    }`}
            >
                <ClipboardCheck className="h-4 w-4 mr-1" />
                Application Status
            </Link>
            <Link
                href="/contact"
                className={`flex items-center font-medium hover:text-blue-600 ${pathname === '/contact' ? 'text-blue-800' : 'text-gray-700'
                    }`}
            >
                <Phone className="h-4 w-4 mr-1" />
                Contact Us
            </Link>
        </nav>
    );
}
