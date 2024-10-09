import React, { useEffect, useState } from 'react'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import EventPreForm from '@/components/event/EventPreForm'
import { EventProvider } from '@/context/event/EventContext' // 引入 EventProvider

export default function eventPreview() {
  return (
    <>
      <Navbar />
      <EventProvider>
        <EventPreForm />
      </EventProvider>
      <Footer2 />
    </>
  )
}
