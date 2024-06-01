import { ImageResponse } from 'next/og'
import { GrCodeSandbox } from 'react-icons/gr'

export type Props = {
  title?: string
}

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full bg-[#0c0f0a]">
        <div tw="flex m-8 p-8 w-[1134px] items-center border border-[#eec643] overflow-hidden">
          <div tw="flex flex-col items-end justify-center w-[503px] mr-8 text-[#eec643]">
            <p tw="text-5xl">{title}</p>
          </div>
          <div tw="flex flex-col items-start justify-center w-[503px] m-8">
            <div tw="flex items-center">
              <div tw="flex flex-none items-center justify-center rounded-3xl text-[#56104f]">
                <GrCodeSandbox size={160} />
              </div>
              <p tw="text-5xl text-[#941555] ml-4">
                <b>Coroto Store</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
