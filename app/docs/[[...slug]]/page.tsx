import { features } from 'process'
//catch all segment route
import React from 'react'

export default async function Docs({params,}
    :{
    params:Promise<{slug:string[]}>
    
}) {
   
    if((await params).slug?.length===2){
        return(
            <h1>
                Views docs for feature {(await params).slug[0]} and concept {(await params).slug[1]}
            </h1>
        )
    }
    else if((await params).slug?.length===1){
        return (
            <h1>
                Viewing docs for  {(await params).slug[0]}
            </h1>
        )
    }
  return (
    <div>
      <h1>Docs home pages</h1>
    </div>
  )
}
