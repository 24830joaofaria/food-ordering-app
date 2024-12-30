import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-2">
        
        <nav className="flex items-center gap-8 text-gray-800 font-semibold leading-4" > 
          <Link className="text-primary font-semibold text-2xl" href=""> JOHNY'S PIZZA</Link>
          <Link href={'/'}> Home</Link>
          <Link href={''}> Menu</Link>
          <Link href={''}> About</Link>
          <Link href={''}> Contact</Link>
          
        </nav>
        <nav className='flex items-center gap-8 text-gray-500'>
          <Link href={'/register'}> Register</Link>
          <Link href={'/login'} className="bg-primary rounded-full text-white px-8 py-2"> Login</Link>
        </nav>
      </header>
    );
    
}


