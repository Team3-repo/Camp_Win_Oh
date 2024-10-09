import React from 'react'
import EventCreateForm from '@/components/event/EventCreateForm'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import { EventProvider } from '@/context/event/EventContext'

export default function EventCreatePage() {
  return (
    <>
      <Navbar />
      <EventProvider>
        <EventCreateForm />
      </EventProvider>
      <Footer2 />
    </>
  )
}
