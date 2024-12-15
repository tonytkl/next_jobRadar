import NavItem from './navItem'
import  Link  from 'next/link'

const Nabvbar = () => {
    return (
        <nav className="flex w-full p-3">
            <Link href="/">
                <img
                    src="full_logo.png"
                    alt="Job Radar logo"
                    className="hidden w-40 md:block"
                />
                <img
                    src="icon_logo.png"
                    alt="Job Radar logo"
                    className="block w-12 md:hidden"
                />
            </Link>
            <div className="grow"></div>
            <ul className="flex space-x-2">
                <li>
                    <NavItem
                        title="Home"
                        link="/"
                        icon="home.png"
                        iconDark="home_d.png"
                        alt="Home icon"
                    />
                </li>
                <li>
                    <NavItem
                        title="Dashboard"
                        link="/dashboard"
                        icon="dashboard.png"
                        iconDark="dashboard_d.png"
                        alt="Dashboard icon"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Nabvbar
