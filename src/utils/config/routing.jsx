import React from 'react'
import { Routes ,Route } from 'react-router-dom'

import Character from '../../components/pages/character'
import LayoutRoute from './layoutroute'
import Location from '../../components/pages/location'
import Episode from '../../components/pages/episode'
const Routing = () => {
  return (
        <Routes>
            <Route  path='/'  element={<LayoutRoute />}>
              <Route   index  element={<Character />}  />
              <Route   path='/location'  element={<Location />}  />
              <Route   path='/episode'  element={<Episode />}  />
                </Route>
            </Routes>
  )

}

export default Routing