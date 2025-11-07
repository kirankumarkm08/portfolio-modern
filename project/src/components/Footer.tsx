import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <p className="font-bold text-sm">
              KIRAN KUMAR KM
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a
              href="#hero"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
