import { useRef, useEffect } from "react"
import { Loader as Loader2, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useAddressAutocomplete } from "@/hooks/use-address-autocomplete"
import { cn } from "@/lib/utils"

type AddressAutocompleteProps = {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  id?: string
  placeholder?: string
  "aria-invalid"?: boolean
  className?: string
}

export function AddressAutocomplete({
  value,
  onChange,
  onBlur,
  id,
  placeholder,
  "aria-invalid": ariaInvalid,
  className,
}: AddressAutocompleteProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { query, setQuery, suggestions, isLoading, isOpen, selectSuggestion, closeDropdown } =
    useAddressAutocomplete()

  useEffect(() => {
    if (value !== query) {
      setQuery(value)
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    setQuery(v)
    onChange(v)
  }

  function handleSelect(suggestion: (typeof suggestions)[0]) {
    const address = selectSuggestion(suggestion)
    onChange(address)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [closeDropdown])

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <Input
          id={id}
          value={query}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={ariaInvalid}
          className={cn("pr-8", className)}
          autoComplete="off"
        />
        {isLoading && (
          <Loader2 className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 top-full mt-1 w-full rounded-lg border border-border bg-popover shadow-lg overflow-hidden">
          {suggestions.map((suggestion) => {
            let main = suggestion.display_name
            let sub = ""
            if (suggestion.address) {
              const a = suggestion.address
              if (a.house_number && a.road) {
                main = `${a.house_number} ${a.road}`
              } else if (a.road) {
                main = a.road
              } else {
                const parts = suggestion.display_name.split(", ")
                main = parts.slice(0, 2).join(", ")
              }
              const locality = a.suburb || a.city || a.town || a.village
              const subParts = [locality, a.state, a.postcode].filter(Boolean)
              sub = subParts.join(", ")
            }
            return (
              <button
                key={suggestion.place_id}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(suggestion)}
                className="w-full flex items-start gap-2.5 px-3 py-2.5 hover:bg-muted/60 transition-colors text-left border-b border-border last:border-0"
              >
                <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{main}</p>
                  {sub && <p className="text-xs text-muted-foreground truncate">{sub}</p>}
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
