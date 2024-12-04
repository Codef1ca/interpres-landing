import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="contenedor-separador">
        <div className="point">Visa de trabajo</div>
        <Separator orientation="horizontal" className="h-px" style={{ backgroundColor: "#F28EC2" }} />
        <div className="point">Visa de estudio</div>
        <Separator orientation="horizontal" className="h-px" style={{ backgroundColor: "#F28EC2" }} />
        <div className="point">Visa turista</div>
        <Separator orientation="horizontal" className="h-px" style={{ backgroundColor: "#F28EC2" }} />
      </div>

  )
}
