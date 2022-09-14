import { NavLink } from "../types/types";

export const navLinks: NavLink[] = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Features',
        link: '#features'
    },
    {
        text: 'About Us',
        link: '#aboutus',
        subLinks: [
            {
                text: 'More free templates',
                link: '/'
            },
            {
                text: 'Our Team',
                link: '/'
            },
            {
                text: 'More Links',
                link: '/',
                secondSubLinks: [
                    {
                        text: 'Menu One',
                        link: '/'
                    },
                    {
                        text: 'Menu Two',
                        link: '/'
                    },
                    {
                        text: 'Menu Three',
                        link: '/'
                    },
                ]
            },
        ]
    },
    {
        text: 'Testimonials',
        link: '#'
    }, 
    {
        text: 'Blog',
        link: '#'
    },
    {
        text: 'Contact',
        link: '#'
    }
]