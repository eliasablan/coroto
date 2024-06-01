import { ImageResponse } from 'next/og'
import { GrCodeSandbox } from 'react-icons/gr'

export type Props = {
  title?: string
  image?: string
}

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title, image } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full bg-[#0c0f0a]">
        <div tw="flex m-8 p-8 w-[1134px] items-center border border-[#eec643] overflow-hidden">
          <div tw="flex flex-col items-start justify-center w-[503px] mr-8">
            {/* eslint-disable-next-line */}
            <img src={image} alt={title!} />
          </div>
          <div tw="flex flex-col items-start justify-center w-[503px] ml-8">
            <div tw="flex items-center mb-8">
              <div tw="flex flex-none items-center justify-center rounded-3xl text-[#56104f]">
                <GrCodeSandbox size={100} />
              </div>
              <p tw="text-6xl text-[#941555] ml-4">
                <b>Coroto Store</b>
              </p>
            </div>
            <p tw="text-4xl font-bold text-[#eec643] font-serif">
              {title?.substring(0, 100)}
              {title?.length! > 100 && '...'}
            </p>
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
