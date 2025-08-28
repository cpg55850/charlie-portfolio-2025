import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-3xl font-bold mb-3 mt-8'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-2xl font-semibold mb-2 mt-6'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl font-medium mb-3 mt-5'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-xl font-medium mb-2 mt-4'>{children}</h4>
    ),
    p: ({ children }) => (
      <p className='leading-relaxed text-base mb-4 text-[#d1d5dc]'>{children}</p>
    ),
    ul: ({ children }) => (
      <ul className='mb-4 space-y-2 list-disc list-inside marker:text-white'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='mb-4 space-y-2 list-decimal list-inside marker:text-white'>{children}</ol>
    ),
    li: ({ children }) => (
      <li className='text-[#d1d5dc] leading-relaxed'>{children}</li>
    ),
    ...components,
  }
}
