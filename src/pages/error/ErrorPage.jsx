import React from 'react'
import ErrorLayout from '../../components/error/ErrorLayout'
import TabTitle from '../../components/utils/TabTitle';

export default function ErrorPage() {
  TabTitle("Error - 404: Not Found !");
  return (
   <ErrorLayout />
  )
}
