import {act, renderHook, waitFor} from '@testing-library/react'
import {beforeEach, describe, expect, it, vi} from 'vitest'
import useRootApi from './index'
import api from "../../api.ts"

// Mock the API module
vi.mock('../api', () => ({
  default: {
    $get: vi.fn()
  }
}))

describe('useRootApi', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should initialize with default values', () => {
    const {result} = renderHook(() => useRootApi())

    expect(result.current.name).toBe('unknown')
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it('should fetch name successfully', async () => {
    // Mock successful API response
    vi.mocked(api.$get).mockResolvedValueOnce({
      ok: true,
      json: async () => ({name: 'test-name'})
    } as never)

    const {result} = renderHook(() => useRootApi())

    act(() => {
      result.current.fetchName('test-name')
    })

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.name).toBe('test-name')
    expect(result.current.error).toBe(null)
    expect(api.$get).toHaveBeenCalledWith({
      query: {name: 'test-name'}
    })
  })

  it('should handle API errors', async () => {
    // Mock error response
    vi.mocked(api.$get).mockResolvedValueOnce({
      ok: false,
      status: 500
    } as never)

    const {result} = renderHook(() => useRootApi())

    act(() => {
      result.current.fetchName()
    })

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.error).not.toBe(null)
    expect(result.current.error?.message).toContain('Error: 500')
  })
})
