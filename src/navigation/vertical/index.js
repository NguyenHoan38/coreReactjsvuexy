import { Mail, Home, Sunset, Circle } from 'react-feather'
import { FaSlidersH } from 'react-icons/fa'
export default [
  {
    id: 'configurations-adm',
    title: 'Configurations ADMs',
    icon: <FaSlidersH size={14} />,
    children: [
      {
        id: 'Organisation ',
        title: 'Organisation ',
        children: [
          {
            id: 'Employees ',
            title: 'Employees ',
            navLink: '/configurations-adm/organisation/employees'
          }
        ]
      },
      {
        id: 'security',
        title: 'Security',
        children: [
          {
            id: 'RolesPermissions',
            title: 'Roles & Permissions',
            navLink: '/configurations-adm/security/roles'
          },
          {
            id: 'authentication',
            title: 'Authentication',
            navLink: '/configurations-adm/security/authentication'
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            navLink: '/configurations-adm/security/maintenance'
          },
          {
            id: 'logFiles',
            title: 'Log files',
            navLink: '/configurations-adm/security/log-files'
          }
        ]
      }
    ]
  }
  // {
  //   id: 'projects',
  //   title: 'Projects',
  //   icon: <Sunset size={14} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={14} />,
  //       navLink: '/home-new'
  //     }
  //   ]
  // }

]
