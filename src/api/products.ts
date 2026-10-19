import { request } from './client'
import type { Product, ProductsResponse } from '../types/product'

export function getProducts(signal?: AbortSignal) {
  return request<ProductsResponse>('/products?limit=0', signal)
}

export function getProductById(id: string, signal?: AbortSignal) {
  return request<Product>(`/products/${id}`, signal)
}

export function searchProducts(query: string, signal?: AbortSignal) {
  const params = new URLSearchParams({ q: query })
  return request<ProductsResponse>(`/products/search?${params}`, signal)
}

export function getCategories(signal?: AbortSignal) {
  return request<string[]>('/products/category-list', signal)
}
