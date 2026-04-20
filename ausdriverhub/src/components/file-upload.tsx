import { useRef, useState } from "react"
import { Camera, Image as ImageIcon, Trash2, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export type UploadedFile = {
  file: File
  preview: string
  id: string
}

type FileUploadProps = {
  label: string
  multiple?: boolean
  value: UploadedFile[]
  onChange: (files: UploadedFile[]) => void
  accept?: string
  required?: boolean
  error?: string
}

const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920
const QUALITY = 0.85

async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file

  return new Promise((resolve) => {
    const img = new Image()
    const objectUrl = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)

      let { width, height } = img
      if (width <= MAX_WIDTH && height <= MAX_HEIGHT) {
        resolve(file)
        return
      }

      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height)
      width = Math.round(width * ratio)
      height = Math.round(height * ratio)

      const canvas = document.createElement("canvas")
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext("2d")
      if (!ctx) { resolve(file); return }

      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(file); return }
          const compressed = new File([blob], file.name, {
            type: file.type === "image/png" ? "image/png" : "image/jpeg",
            lastModified: Date.now(),
          })
          resolve(compressed.size < file.size ? compressed : file)
        },
        file.type === "image/png" ? "image/png" : "image/jpeg",
        QUALITY,
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      resolve(file)
    }

    img.src = objectUrl
  })
}

export function FileUpload({
  label,
  multiple = false,
  value,
  onChange,
  accept = "image/*",
  required = false,
  error,
}: FileUploadProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [compressing, setCompressing] = useState(false)
  const cameraInputRef = useRef<HTMLInputElement>(null)
  const galleryInputRef = useRef<HTMLInputElement>(null)

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return
    setCompressing(true)
    try {
      const compressed = await Promise.all(Array.from(fileList).map(compressImage))
      const newFiles: UploadedFile[] = compressed.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        id: `${file.name}-${Date.now()}-${Math.random()}`,
      }))
      if (multiple) {
        onChange([...value, ...newFiles])
      } else {
        value.forEach((f) => URL.revokeObjectURL(f.preview))
        onChange(newFiles)
      }
    } finally {
      setCompressing(false)
      setShowDialog(false)
    }
  }

  function removeFile(id: string) {
    const fileToRemove = value.find((f) => f.id === id)
    if (fileToRemove) URL.revokeObjectURL(fileToRemove.preview)
    onChange(value.filter((f) => f.id !== id))
  }

  const hasFiles = value.length > 0

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </span>
        {hasFiles && (
          <button
            type="button"
            onClick={() => setShowDialog(true)}
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-2.5 py-1 text-xs font-medium text-primary hover:bg-primary/5 transition-colors"
          >
            <Upload className="h-3 w-3" />
            Add {multiple ? "More" : "New"}
          </button>
        )}
      </div>

      {!hasFiles ? (
        <button
          type="button"
          onClick={() => setShowDialog(true)}
          disabled={compressing}
          className={cn(
            "w-full rounded-lg border-2 border-dashed p-6 text-center transition-colors",
            "flex flex-col items-center gap-2 cursor-pointer",
            error
              ? "border-destructive/50 bg-destructive/5"
              : "border-border hover:border-primary/50 hover:bg-primary/5",
          )}
        >
          <div className="rounded-full bg-muted p-3">
            <Upload className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Tap to upload {label}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Take a photo or choose from gallery · Auto-compressed for quality
            </p>
          </div>
        </button>
      ) : (
        <div
          className={cn(
            "grid gap-2",
            multiple ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1",
          )}
        >
          {value.map((file) => (
            <div
              key={file.id}
              className="group relative rounded-lg overflow-hidden border border-border bg-muted aspect-[4/3]"
            >
              <img
                src={file.preview}
                alt={file.file.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <button
                type="button"
                onClick={() => removeFile(file.id)}
                className="absolute top-1.5 right-1.5 rounded-full p-1.5 bg-destructive text-destructive-foreground opacity-90 hover:opacity-100 transition-opacity shadow-sm"
                aria-label="Remove photo"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/50">
                <p className="text-white text-xs truncate">{file.file.name}</p>
              </div>
            </div>
          ))}
          {multiple && (
            <button
              type="button"
              onClick={() => setShowDialog(true)}
              disabled={compressing}
              className="rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-colors aspect-[4/3] flex flex-col items-center justify-center gap-2 cursor-pointer"
            >
              <Upload className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Add more</span>
            </button>
          )}
        </div>
      )}

      {compressing && (
        <p className="text-xs text-muted-foreground">Optimising image quality...</p>
      )}

      {error && <p className="text-xs text-destructive">{error}</p>}

      <input
        ref={cameraInputRef}
        type="file"
        accept={accept}
        capture="environment"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
        onClick={(e) => ((e.target as HTMLInputElement).value = "")}
      />
      <input
        ref={galleryInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
        onClick={(e) => ((e.target as HTMLInputElement).value = "")}
      />

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-sm mx-auto rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-base">
              Upload {label}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 p-6 hover:bg-primary/5 hover:border-primary/40 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Take Photo</span>
            </button>
            <button
              type="button"
              onClick={() => galleryInputRef.current?.click()}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 p-6 hover:bg-primary/5 hover:border-primary/40 transition-colors cursor-pointer"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Choose Gallery</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
