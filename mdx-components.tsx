import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-4xl font-bold mb-3 mt-8'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-3xl font-semibold mb-2 mt-6'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl font-medium mb-3 mt-5'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-xl font-medium mb-2 mt-4'>{children}</h4>
    ),
    p: ({ children }) => (
      <p className='leading-relaxed text-lg mb-4'>{children}</p>
    ),
    ...components,
  }
}
