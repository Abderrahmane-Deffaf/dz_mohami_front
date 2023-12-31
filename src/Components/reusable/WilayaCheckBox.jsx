import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Scale } from "lucide-react";
import { ChevronDown } from "lucide-react";

const WilayaCheckbox = ({ form }) => {
    const wilaya = [
        "1-Adrar",
        "2-Chlef",
        "3-Laghouat",
        "4-Oum El Bouaghi",
        "5-Batna",
        "6-Béjaïa",
        "7-Biskra",
        "8-Béchar",
        "9-Blida",
        "10-Bouira",
        "11-Tamanrasset",
        "12-Tébessa",
        "13-Tlemcen",
        "14-Tiaret",
        "15-Tizi Ouzou",
        "16-Alger",
        "17-Djelfa",
        "18-Jijel",
        "19-Sétif",
        "20-Saïda",
        "21-Skikda",
        "22-Sidi Bel Abbès",
        "23-Annaba",
        "24-Guelma",
        "25-Constantine",
        "26-Médéa",
        "27-Mostaganem",
        "28-M'Sila",
        "29-Mascara",
        "30-Ouargla",
        "31-Oran",
        "32-El Bayadh",
        "33-Illizi",
        "34-Bordj Bou Arreridj",
        "35-Boumerdès",
        "36-El Tarf",
        "37-Tindouf",
        "38-Tissemsilt",
        "39-El Oued",
        "40-Khenchela",
        "41-Souk Ahras",
        "42-Tipaza",
        "43-Mila",
        "44-Aïn Defla",
        "45-Naâma",
        "46-Aïn Témouchent",
        "47-Ghardaïa",
        "48-Relizane",

    ];
    return (
        <div>
            <Popover>
                <PopoverTrigger className="w-full  flex justify-between bg-white rounded-lg  p-4">
                    <Scale />
                    Choisir Les Wilaya
                    <ChevronDown />
                </PopoverTrigger>
                <PopoverContent className="max-h-[10rem] flex min-w-[25rem] flex-col gap-3 ">
                    {wilaya.map((Element, index) => (
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

export default WilayaCheckbox;
