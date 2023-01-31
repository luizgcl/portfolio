import React, {PropsWithChildren } from "react";

export function Photo(props: {className: string}) {
  return (
    <div
      {...props}
    >
      <img
        src='src/assets/luizgcl.png'
        alt="Autor do site"
        className="rounded-lg my-photo"
      />
    </div>
  )
}