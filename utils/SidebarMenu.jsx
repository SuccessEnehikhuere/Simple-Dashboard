import DashboardIcon from '../src/assets/images/dashboard.svg'
import OrdersIcon from '../src/assets/images/orders.svg'
import BellIcon from '../src/assets/images/bell.svg'
import AnalyticsIcon from '../src/assets/images/analytics.svg'
import CustomersIcon from '../src/assets/images/customers.svg'
import MenuIcon from '../src/assets/images/menu.svg'

export const menuItems = [
  {
    name: 'Dashboard',
    icon: <img src={DashboardIcon} alt="Dashboard Icon" />,
    link: '/dashboard',
  },
  {
    name: 'Orders',
    icon: <img src={OrdersIcon} alt="Orders Icon" />,
    secondaryIcon: <img src={BellIcon} alt="Bell Icon" />,
    link: '/dashboard',
  },
  {
    name: 'Analytics',
    icon: <img src={AnalyticsIcon} alt="Analytics Icon" />,
    link: '/dashboard',
  },
  {
    name: 'Customer',
    icon: <img src={CustomersIcon} alt="Customers Icon" />,
    link: '/dashboard',
  },
  {
    name: 'Menu',
    icon: <img src={MenuIcon} alt="Menu Icon" />,
    link: '/dashboard',
  },
]
