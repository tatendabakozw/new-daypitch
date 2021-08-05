export const nav_options = {
    navigation : [
        { name: 'Explore Professional', href: '/explore', current: false },
        { name: 'About', href: '/howitworks', current: false },
        { name: 'Sign In', href: '/login', current: false },
      ],
      
    SellerAuthenticatedNavigation : [
        // { name: 'Find Work', href: '/work', current: false },
        { name: 'Messages', href: '/chat', current: true },
        { name: 'My Jobs', href: '/jobs', current: true },
      
      ],
      
    BuyerAuthenticatedNavigation : [
        { name: 'Explore Sellers', href: '/explore', current: false },
        { name: 'My Jobs', href: '/jobs', current: true },
        // { name: 'Messages', href: '/chat', current: false },
      
    ]
}