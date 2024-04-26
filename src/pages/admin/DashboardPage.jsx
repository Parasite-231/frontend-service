import React from 'react'
import DashboardLayout from '../../components/admin/dashboard/DashboardLayout'
import TabTitle from '../../components/utils/TabTitle';

export default function DashboardPage() {
  TabTitle("ASTARION - Admin Dashboard");
  return (
    <DashboardLayout />
  )
}
