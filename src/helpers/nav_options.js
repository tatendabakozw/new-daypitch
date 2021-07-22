export const nav_options = {
    navigation : [
        { name: 'Explore', href: '/explore', current: false },
        { name: 'How It Works', href: '/howitworks', current: false },
        { name: 'Sign In', href: '/login', current: false },
      ],
      
    SellerAuthenticatedNavigation : [
        { name: 'Explore', href: '/explore', current: false },
        { name: 'Messages', href: '/chat', current: true },
        { name: 'Dashboard', href: '/dashboard', current: true },
      
      ],
      
    BuyerAuthenticatedNavigation : [
        { name: 'Explore', href: '/explore', current: false },
        { name: 'Become a seller', href: '/becomeaseller', current: true },
        { name: 'Messages', href: '/chat', current: false },
      
    ]
}