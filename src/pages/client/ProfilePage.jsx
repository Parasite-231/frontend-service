import React from 'react'
import ProfileLayout from '../../components/client/profile/ProfileLayout'
import TabTitle from '../../components/utils/TabTitle';


export default function ProfilePage() {
  TabTitle("ASTARION - My Profile");
  return (
    <ProfileLayout />
  )
}
