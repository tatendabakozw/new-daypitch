import NavbarNotification from '../components/navigation/NavbarNotification'

export const nav_options = {
    navigation : [
        { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'Explore Jobs', href: '/explorejobs', current: true },
        { name: 'About', href: '/howitworks', current: false },
        { name: 'Sign In', href: '/login', current: false },
      ],
      
    SellerAuthenticatedNavigation : [
        // { name: 'Find Work', href: '/work', current: false },
        { name: 'Messages', href: '/chat', current: true },
        { name: 'My Jobs', href: '/jobs', current: true },
      
      ],
      
    BuyerAuthenticatedNavigation : [
        // { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'My Jobs', href: '/jobs', current: true },
        // { name: <ChatAlt2Icon height={20} width={20} className="text-gray-700" />, href: '/chat', current: true },
        { name: <span>
                <NavbarNotification/>
          </span>, current: true }
        // { name: 'Messages', href: '/chat', current: false },
    ]
}