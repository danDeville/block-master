// Base
import React, { useState } from 'react'

// Headless UI
import { Tab } from '@headlessui/react'

// Component
import LoginForm from '../components/LoginForm'
import RegistroForm from '../components/RegistroForm'

const Auth = () => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-full md:w-1/2 lg:w-2/6 h-full">
        <Tab.Group
          selectedIndex={selectedIndex} onChange={setSelectedIndex}
        >
          <Tab.List className="hidden">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <LoginForm
                onClick={() => setSelectedIndex(1)}
              />
            </Tab.Panel>
            <Tab.Panel>
              <RegistroForm
                onClick={() => setSelectedIndex(0)}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <section className="hidden md:block md:w-1/2 lg:w-4/6 h-full">
        <img
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dz8on44po/image/upload/v1652149737/block-master/y3j8z3hdgkg3ryskywgi.jpg"
          alt='Background Movies'
        />
      </section>
    </div>
  )
}

export default Auth