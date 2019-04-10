import React, { useState } from 'react'

import Display from '../display/Display'
import Controls from '../controls/Controls'

export default function Dashboard() {
  const [locked, setLocked] = useState(false)
  const [closed, setClosed] = useState(false)

  return (
    <>
      <Display locked={locked} closed={closed} />
      <Controls
        locked={locked}
        closed={closed}
        toggleLocked={() => setLocked(!locked)}
        toggleClosed={() => setClosed(!closed)}
      />
    </>
  )
}
