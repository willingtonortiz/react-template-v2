import { Axe } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
} from "@shared/presentation/components/ui/alert-dialog.tsx";
import { Button } from "@shared/presentation/components/ui/button.tsx";

export function ExamplePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open the dialog</Button>

      <AlertDialog open={isOpen}>
        <AlertDialogContent className={"max-w-[320px] flex flex-col items-center"}>
          <Axe size={54} />

          <h1 className={"text-center font-bold text-xl"}>Fallecimientos en el extranjero</h1>

          <p>
            En caso el fallecimiento sea en un país donde el idioma sea diferente al español, los
            documentos deberán enviarse:
          </p>

          <ul className={"ml-4 mb-8 list-disc"}>
            <li>
              Debidamente traducidos y apostillados por eI Ministerio de Relaciones Exteriores.
            </li>

            <li>
              Y si están en español, sólo apostillados por el Ministerio de Relaciones Exteriores.
            </li>
          </ul>

          <Button
            variant={"secondary"}
            isRounded={true}
            isFull={true}
            onClick={() => setIsOpen(false)}
          >
            Entendido
          </Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
