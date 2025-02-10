import Link from "next/link";

const Menu = () => {

    return (
        <nav className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex gap-x-8 text-large font-helv">
                <li className="py-px">
                    <Link className="text-font-accent hover:text-font-secondary" href="/">
                        <span>Головна</span>
                    </Link>
                </li>
                <li className="py-px">
                    <Link className="text-font-accent hover:text-font-secondary" href="/about">
                        <span>Про нас</span>
                    </Link>
                </li>
                <li className="py-px">
                    <Link className="text-font-accent hover:text-font-secondary" href="/projects">
                        <span>Проєкти</span>
                    </Link>
                </li>
                <li className="py-px">
                    <Link className="text-font-accent hover:text-font-secondary" href="/news">
                        <span>Новини</span>
                    </Link>
                </li>
                <li className="py-px">
                    <Link className="text-font-accent hover:text-font-secondary" href="/contacts">
                        <span>Контакти</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;