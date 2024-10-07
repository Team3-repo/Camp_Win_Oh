import React, { useEffect, useState } from 'react'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import EventDetailForm from '@/components/event/EventDetailForm'

export default function EventDetail() {
  return (
    <>
      <Navbar />
      <EventDetailForm />
      <Footer2 />
    </>
  )
}
