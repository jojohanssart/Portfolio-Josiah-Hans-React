const navLinks = [
    { href: "#about", label: "About" },
    { href: "#works", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
    { href: "#feeds", label: "Feeds" },
]

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div>
                    {navLinks.map((link) => (
                        <a href={link.href}>{link.label}</a>
                    ))}
                </div>
            </nav>
        </header>
    );
}