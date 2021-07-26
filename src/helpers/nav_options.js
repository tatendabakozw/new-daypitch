export const nav_options = {
    navigation : [
        { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'How It Works', href: '/howitworks', current: false },
        { name: 'Sign In', href: '/login', current: false },
      ],
      
    SellerAuthenticatedNavigation : [
        { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'Messages', href: '/chat', current: true },
        { name: 'Dashboard', href: '/dashboard', current: true },
      
      ],
      
    BuyerAuthenticatedNavigation : [
        { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'Become A Seller', href: '/becomeaseller', current: true },
        // { name: 'Messages', href: '/chat', current: false },
      
    ]
}