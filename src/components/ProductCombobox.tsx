'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const PRODUCT_OPTIONS = [
  { value: 'Plywood Standar', label: 'Plywood Standar' },
  { value: 'Plywood Marine', label: 'Plywood Marine' },
  { value: 'Plywood Film Faced', label: 'Plywood Film Faced' },
  { value: 'Plywood Decorative', label: 'Plywood Decorative' },
] as const

interface ProductComboboxProps {
  value: string
  onChange: (value: string) => void
  error?: boolean
}

export function ProductCombobox({
  value,
  onChange,
  error = false,
}: ProductComboboxProps) {
  const t = useTranslations()
  const [open, setOpen] = React.useState(false)
  const [triggerWidth, setTriggerWidth] = React.useState<number>(0)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth)
    }
  }, [open])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={t('quoteSection.form.productInterest')}
          aria-invalid={error}
          className={cn(
            'w-full justify-between px-4 py-3 h-auto font-normal text-left',
            !value && 'text-muted-foreground',
            error && 'border-red-500'
          )}
          style={{
            borderColor: error ? '#ef4444' : 'var(--neutral-medium)',
            backgroundColor: 'var(--neutral-white)',
          }}
        >
          {value
            ? PRODUCT_OPTIONS.find(product => product.value === value)?.label
            : t('quoteSection.form.productPlaceholder')}
          <ChevronsUpDown
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
            style={{ color: 'var(--text-secondary)' }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 border-2 shadow-xl"
        align="start"
        sideOffset={8}
        style={{
          width: triggerWidth > 0 ? `${triggerWidth}px` : 'auto',
          maxHeight: '300px',
          overflow: 'hidden',
          backgroundColor: 'white',
          borderColor: 'var(--neutral-medium)',
        }}
      >
        <Command
          className="max-h-[300px]"
          style={{
            backgroundColor: 'white',
          }}
        >
          <CommandInput
            placeholder={t('quoteSection.form.searchProduct')}
            className="h-9 border-b"
            style={{
              backgroundColor: 'white',
              borderColor: 'var(--neutral-light)',
            }}
          />
          <CommandList
            style={{
              backgroundColor: 'white',
            }}
          >
            <CommandEmpty>{t('quoteSection.form.noProductFound')}</CommandEmpty>
            <CommandGroup
              style={{
                backgroundColor: 'white',
              }}
            >
              {PRODUCT_OPTIONS.map(product => (
                <CommandItem
                  key={product.value}
                  value={product.value}
                  onSelect={currentValue => {
                    // cmdk normalizes values to lowercase, find the original value
                    const selectedProduct = PRODUCT_OPTIONS.find(
                      p => p.value.toLowerCase() === currentValue.toLowerCase()
                    )
                    onChange(
                      selectedProduct?.value === value
                        ? ''
                        : selectedProduct?.value || ''
                    )
                    setOpen(false)
                  }}
                  className="cursor-pointer transition-colors hover:bg-[var(--primary-cream)] aria-selected:bg-[var(--primary-cream)]"
                  style={{
                    backgroundColor:
                      value === product.value
                        ? 'var(--primary-cream)'
                        : 'white',
                    color: 'var(--text-primary)',
                  }}
                >
                  {product.label}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === product.value ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ color: 'var(--primary-brown)' }}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
