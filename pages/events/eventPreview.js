import React, { useEffect, useState } from 'react'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import EventPreForm from '@/components/event/EventPreForm'

export default function eventPreview() {
  return (
    <>
      <Navbar />
      <EventPreForm/>
      <Footer2 />
    </>
  )
}
