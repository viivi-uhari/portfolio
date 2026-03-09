import '@/app/ui/global.css';
import Navigation from './components/navigation';
import MobileNavigation from './components/mobileNavigation'; 
import TabletNavigation from './components/tabletNavigation'; 

export const metadata = {
  title: 'Portfolio of Viivi Uhari',
  description: 'Portfolio of Viivi Uhari',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className="block sm:hidden">
          <MobileNavigation />
        </div>
        <div className="hidden sm:block lg:hidden">
          <TabletNavigation />
        </div>
        <div className="hidden lg:block">
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  )
}
