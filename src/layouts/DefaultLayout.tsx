import { ElementType, useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import { useGenerateKeyOnRender } from "../context/GenerateKeyOnRender";

interface DefaultLayoutProps {
  label: string;
  item?: ElementType;
}

const list = [
  "apple",
  "banana",
  "cherry",
  "strawberry",
]

export function DefaultLayout({
  label,
  item: Item = 'div'
}: DefaultLayoutProps) {
  const {
    generateKeyOnRender,
    setGenerateKeyOnRender,
    omitKey,
    setOmitKey
  } = useGenerateKeyOnRender();
  const [text, setText] = useState("")

  return (
    <div className='flex flex-col gap-4'>
      <h1 className="font-bold text-2xl mb-8 text-slate-800">{label}</h1>
      <label data-disabled={omitKey} className="data-[disabled=true]:opacity-50">
        <input
          type="checkbox"
          checked={generateKeyOnRender}
          onChange={(e) => setGenerateKeyOnRender(e.target.checked)}
          className="mr-2"
          disabled={omitKey}
        />
        Generate key on render
      </label>
      <label>
        <input
          type="checkbox"
          checked={omitKey}
          onChange={(e) => setOmitKey(e.target.checked)}
          className="mr-2"
        />
        Omit key
      </label>
      <input className="px-2 py-1 border border-solid border-slate-600 rounded-md" type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <div className='w-full flex flex-col gap-4'>
      {list.map(item => {
        if (!omitKey) {
          return (
            <div className="animate-highlight py-2 px-4" key={generateKeyOnRender ? uuidV4() : item}>
              <Item>
                {item}
              </Item>
            </div>
          )
        }

        return (
          <div className="animate-highlight py-2 px-4" >
            <Item>
              {item}
            </Item>
          </div>
        )
      })}
      </div>
    </div>
  )
}
