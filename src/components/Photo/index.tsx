import React, {PropsWithChildren } from "react";

export function Photo(props: {className: string}) {
  return (
    <div
      {...props}
    >
      <img
        src='https://i.imgur.com/VV12Gkv_d.png?maxwidth=760&fidelity=grand'
        alt="Autor do site"
        className="rounded-lg my-photo max-w-100 h-auto"
      />
    </div>
  )
}