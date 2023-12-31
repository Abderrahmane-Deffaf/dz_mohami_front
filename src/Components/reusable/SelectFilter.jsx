import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl, FormItem } from "../ui/form";


const SelectFilter = ({ type, field }) => {
  const order = [
    {
      value: "empty",
      label: "Order",
    },
    {
      value: "ASC",
      label: "ASC",
    },
    {
      value: "DESC",
      label: "DESC",
    },
  ];

  const orderBy = [
    {
      value: "empty",
      label: "Order By",
    },
    {
      value: "id",
      label: "Id",
    },
    {
      value: "nom",
      label: "Nom",
    },
    {
      value: "prenom",
      label: "Prénom",
    },
  ];

  const status = [
    {
      value: "empty",
      label: "Status",
    },
    {
      value: "Pending",
      label: "En attente",
    },
    {
      value: "Refused",
      label: "Refus",
    },
    {
      value: "Accepted",
      label: "Accepté",
    },
    {
      value: "Bloqué",
      label: "Bloqué",
    },
  ];
  const wilaya = [
    { value: "empty", label: "Wilaya" },
    { value: "adrar", label: "Adrar" },
    { value: "chlef", label: "Chlef" },
    { value: "laghouat", label: "Laghouat" },
    { value: "oum-el-bouaghi", label: "Oum El Bouaghi" },
    { value: "batna", label: "Batna" },
    { value: "bejaia", label: "Béjaïa" },
    { value: "biskra", label: "Biskra" },
    { value: "bechar", label: "Béchar" },
    { value: "blida", label: "Blida" },
    { value: "bouira", label: "Bouïra" },
    { value: "tamanrasset", label: "Tamanrasset" },
    { value: "tebessa", label: "Tébessa" },
    { value: "tlemcen", label: "Tlemcen" },
    { value: "tiaret", label: "Tiaret" },
    { value: "tizi-ouzou", label: "Tizi Ouzou" },
    { value: "algiers", label: "Algiers" },
    { value: "djelfa", label: "Djelfa" },
    { value: "jijel", label: "Jijel" },
    { value: "setif", label: "Sétif" },
    { value: "saïda", label: "Saïda" },
    { value: "skikda", label: "Skikda" },
    { value: "sidi-bel-abbes", label: "Sidi Bel Abbès" },
    { value: "annaba", label: "Annaba" },
    { value: "guelma", label: "Guelma" },
    { value: "constantine", label: "Constantine" },
    { value: "mediouna", label: "Mediouna" },
    { value: "mostaganem", label: "Mostaganem" },
    { value: "m'sila", label: "M'Sila" },
    { value: "mascara", label: "Mascara" },
    { value: "ouargla", label: "Ouargla" },
    { value: "oran", label: "Oran" },
    { value: "el-bayadh", label: "El Bayadh" },
    { value: "illizi", label: "Illizi" },
    { value: "bordj-bou-arreridj", label: "Bordj Bou Arréridj" },
    { value: "boumerdes", label: "Boumerdès" },
    { value: "el-taref", label: "El Taref" },
    { value: "tindouf", label: "Tindouf" },
    { value: "tissemsilt", label: "Tissemsilt" },
    { value: "el-oued", label: "El Oued" },
    { value: "khenchela", label: "Khenchela" },
    { value: "souk-ahras", label: "Souk Ahras" },
    { value: "tipaza", label: "Tipaza" },
    { value: "mila", label: "Mila" },
    { value: "ain-defla", label: "Ain Defla" },
    { value: "naama", label: "Naama" },
    { value: "ain-temouchent", label: "Ain Témouchent" },
    { value: "ghardaia", label: "Ghardaïa" },
    { value: "relizane", label: "Relizane" },
    { value: "el-oued", label: "El Oued" },
    { value: "khenchela", label: "Khenchela" },
    { value: "souk-ahras", label: "Souk Ahras" },
    { value: "tipaza", label: "Tipaza" },
    { value: "mila", label: "Mila" },
    { value: "ain-defla", label: "Ain Defla" },
    { value: "naama", label: "Naama" },
    { value: "ain-temouchent", label: "Ain Témouchent" },
    { value: "ghardaia", label: "Ghardaïa" },
    { value: "relizane", label: "Relizane" },
  ];


  let choices = [];
  let placeHolder = "";

  switch (type) {
    case "orderBy":
      choices = orderBy;
      placeHolder = "Order By";
      break;
    case "status":
      choices = status;
      placeHolder = "Status";
      break;
    case "wilaya":
      choices = wilaya;
      placeHolder = "Wilaya";
      break;
    case "order":
      choices = order;
      placeHolder = "Order";
      break;
  }

  return (
    <FormItem>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger className=" w-fit rounded-3xl border-2 border-midBlue text-base font-medium text-gray">
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            {choices.map((Element, index) => {
              return (
                <SelectItem value={Element.value} key={index}>
                  {Element.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FormItem>
  );
};

export default SelectFilter;
