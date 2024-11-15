import React from 'react';
import CardDataStats from '@/components/CardDataStats';
import DefaultLayout from '@/layout/DefaultLayout';
import BreadCrumb from '@/components/common/ui/BreadCrumb';
import { GrMicrofocus } from 'react-icons/gr';
import { MdEvent, MdPlace } from 'react-icons/md';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { RiHotspotFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const statsData = [
  {
    title: "Admin",
    total: "100",
    rate: "0.43%",
    levelUp: true,
    icon: <GrMicrofocus className='text-5xl fill-primary dark:fill-white' />,
    link: '/user/admin/list'
  },
  {
    title: "Events",
    total: "200",
    rate: "4.35%",
    levelUp: true,
    icon: <MdEvent className='text-3xl fill-primary dark:fill-white' />,
    link: '/events'

  },
  {
    title: "Places",
    total: "120",
    rate: "2.59%",
    levelUp: true,
    icon: <MdPlace className='text-3xl fill-primary dark:fill-white' />,
    link: '/place'
  },
  {
    title: "Neighborhood",
    total: "112",
    rate: "0.95%",
    levelUp: true,
    icon: <SiHomeassistantcommunitystore className='text-3xl fill-primary dark:fill-white' />,
    link: '/neighborhood'
  },
  {
    title: "Hotspot",
    total: "212",
    rate: "0.95%",
    levelUp: true,
    icon: <RiHotspotFill className='text-3xl fill-primary dark:fill-white' />,
    link: '/dashboard'
  }
];

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout heading=''>
      <BreadCrumb pageName='' />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {statsData.map((stat, index) => (
        <Link to={stat.link} key={index}>
          <CardDataStats 
            key={index} 
            title={stat.title} 
            total={stat.total} 
            rate={stat.rate} 
            levelUp={stat.levelUp}
            >
            {stat.icon}
          </CardDataStats>
        </Link>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
