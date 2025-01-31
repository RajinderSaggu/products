import React from 'react'
import { Metadata } from 'next';
import DashbaordClient from './page-client';

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Dashbaord Uploader",
};
const Dashbaord= () => {
  return (
   <DashbaordClient/>
  )
}

export default Dashbaord;