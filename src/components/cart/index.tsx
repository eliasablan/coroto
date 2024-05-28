import { getCart } from '@/lib/shopify'
import { cookies } from 'next/headers'
import CartSheet from '../CartSheet'

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  return <CartSheet cart={cart} />
}
