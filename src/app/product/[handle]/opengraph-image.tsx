import OpengraphImage from '@/components/ProductOGImage'
import { getProduct } from '@/lib/shopify'

export const runtime = 'edge'

export default async function Image({
  params,
}: {
  params: { handle: string }
}) {
  const product = await getProduct(params.handle)
  const title = product?.seo?.title || product?.title
  const image = product?.featuredImage.url

  return await OpengraphImage({ title, image })
}
