import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import SkillsCard from '../components/profile/SkillsCard';
import BadgesCard from '../components/profile/BadgesCard';
import api from '../api';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get('/users/me')
      .then(res => setUser(res.data))
      .catch(err => console.error('Failed to load profile:', err));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="sm:flex items-start space-y-4 sm:space-y-0 sm:space-x-4 p-6">
          <Avatar src={user.avatar} alt={user.name} size="xl" className="mx-auto sm:mx-0" />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.position}, {user.department}</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="mt-1 font-medium">{user.email}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-500">Role</p>
                <p className="mt-1 font-medium capitalize">{user.role}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-500">Total Badges</p>
                <p className="mt-1 font-medium">{user.badges?.length || 0}</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <SkillsCard skills={user.skills || []} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <BadgesCard badges={user.badges || []} />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
