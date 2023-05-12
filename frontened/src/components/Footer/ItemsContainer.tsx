import React from 'react'
import { Item } from './Item'
import { WORKOUTS,HEALTHY,ABOUT,MEMBERSHIP } from './Menu'

export const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={WORKOUTS} title="WORKOUTS"/>
        <Item Links={HEALTHY} title="HEALTHY LIVING"/>
        <Item Links={ABOUT} title="ABOUT"/>
        <Item Links={MEMBERSHIP} title="MEMBERSHIP"/>
    </div>
  )
}
