import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Scale } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CategoriesCheckbox = ({ form }) => {
  const categories = [
    "DROIT ADMINISTRATIF",
    "DROIT AFFAIRES",
    "DROIT BANCAIRE",
    "DROIT CIVIL",
    "DROIT COMMERCIAL",
    "DROIT DE FUSIONS ET ACQUISITIONS",
    "DROIT DE L'ENVIRONNEMENT",
    "DROIT DE L'IMMIGRATION",
    "DROIT DE L'IMMOBILIER",
    "DROIT DE LA CONSOMMATION",
    "DROIT DE LA PRESSE",
    "DROIT DE LA PROPRIÉTÉ INTELLECTUELLE",
    "DROIT DE LA SANTÉ",
    "DROIT DES ASSURANCES",
    "DROIT DES CONTRATS",
    "DROIT DES ÉNERGIES",
    "DROIT DES ENTREPRISES",
    "DROIT DES ÉTRANGERS",
    "DROIT DES FUSIONS ET ACQUISITIONS",
    "DROIT DES INVESTISSEMENTS",
    "DROIT DES PRIVATISATIONS",
    "DROIT DES RECOUVREMENT DE CRÉANCES",
    "DROIT DES SOCIÉTÉS",
    "DROIT DES TELECOM/TIC",
    "DROIT DES TRANSPORTS",
    "DROIT DOUANIER",
    "DROIT DU SPORT",
    "DROIT DU TRAVAIL",
    "DROIT FAMILIAL",
    "DROIT FONCIER",
    "DROIT INTERNATIONAL PRIVÉ",
    "DROIT JUDICIAIRE",
    "DROIT MARITIME",
    "DROIT PÉNAL",
    "DROIT ROUTIER",
    "DROIT SOCIAL",
    "DROITS DE L'HOMME",
  ];
  return (
    <div>
      <Popover>
        <PopoverTrigger className="w-full  flex justify-between bg-white rounded-lg  p-4">
            <Scale />
            <div className="whitespace-nowrap"> Choisir les catégories</div>
           
            <ChevronDown />
        </PopoverTrigger>
        <PopoverContent className="max-h-[10rem] flex min-w-[25rem] flex-col gap-3 ">
          {categories.map((Element, index) => (
            <FormField
              key={index}
              control={form.control}
              name={Element}
              render={({ field }) => (
                <FormItem className="flex gap-x-2 items-center" >
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel >{Element}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CategoriesCheckbox;
