import { useState, useEffect, useRef, useCallback } from "react"

type AddressDetails = {
  house_number?: string
  road?: string
  suburb?: string
  city?: string
  town?: string
  village?: string
  state?: string
  postcode?: string
  country?: string
}

export type AddressSuggestion = {
  display_name: string
  place_id: number
  lat: string
  lon: string
  address?: AddressDetails
}

function getLeadingStreetNumber(value: string): string {
  return value.trim().match(/^((?:unit\s+)?[a-z0-9]+(?:[/-][a-z0-9]+)?)\s+/i)?.[1] || ""
}

export function useAddressAutocomplete() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortController = useRef<AbortController | null>(null)

  const fetchSuggestions = useCallback(async (value: string) => {
    if (value.length < 3) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    if (abortController.current) {
      abortController.current.abort()
    }
    abortController.current = new AbortController()

    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        q: value,
        format: "json",
        addressdetails: "1",
        limit: "6",
        countrycodes: "au",
      })
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`,
        {
          signal: abortController.current.signal,
          headers: { "Accept-Language": "en-AU" },
        }
      )
      if (!res.ok) throw new Error("Request failed")
      const data: AddressSuggestion[] = await res.json()
      setSuggestions(data)
      setIsOpen(data.length > 0)
    } catch (err) {
      if (err instanceof Error && err.name !== "AbortError") {
        setSuggestions([])
        setIsOpen(false)
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      fetchSuggestions(query)
    }, 400)
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
    }
  }, [query, fetchSuggestions])

  function selectSuggestion(suggestion: AddressSuggestion): string {
    let formatted = suggestion.display_name
    if (suggestion.address) {
      const a = suggestion.address
      const parts: string[] = []
      if (a.house_number && a.road) {
        parts.push(`${a.house_number} ${a.road}`)
      } else if (a.road) {
        const typedStreetNumber = getLeadingStreetNumber(query)
        parts.push(typedStreetNumber ? `${typedStreetNumber} ${a.road}` : a.road)
      }
      const locality = a.suburb || a.city || a.town || a.village
      if (locality) parts.push(locality)
      if (a.state) parts.push(a.state)
      if (a.postcode) parts.push(a.postcode)
      if (parts.length > 0) formatted = parts.join(", ")
    }
    setQuery(formatted)
    setSuggestions([])
    setIsOpen(false)
    return formatted
  }

  function closeDropdown() {
    setIsOpen(false)
  }

  return { query, setQuery, suggestions, isLoading, isOpen, selectSuggestion, closeDropdown }
}
