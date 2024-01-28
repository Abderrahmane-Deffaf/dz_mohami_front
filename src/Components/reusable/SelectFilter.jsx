import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl, FormItem } from "../ui/form";
import { useId } from "react";

const SelectFilter = ({ type, field }) => {
  const id = useId();

  const order = [
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
      value: "pending",
      label: "En attente",
    },
    {
      value: "rejected",
      label: "Refus",
    },
    {
      value: "accepted",
      label: "Accepté",
    },
  ];
  const isBlocked = [
    {
      value: "true",
      label: "Bloqué",
    },
    {
      value: "false",
      label: "Non bloqué",
    },
  ];
  const wilaya = [
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
  const categories = [
    { value: "DROIT ADMINISTRATIF", label: "DROIT ADMINISTRATIF" },
    { value: "DROIT AFFAIRES", label: "DROIT AFFAIRES" },
    { value: "DROIT BANCAIRE", label: "DROIT BANCAIRE" },
    { value: "DROIT CIVIL", label: "DROIT CIVIL" },
    { value: "DROIT COMMERCIAL", label: "DROIT COMMERCIAL" },
    {
      value: "DROIT DE FUSIONS ET ACQUISITIONS",
      label: "DROIT DE FUSIONS ET ACQUISITIONS",
    },
    { value: "DROIT DE L'ENVIRONNEMENT", label: "DROIT DE L'ENVIRONNEMENT" },
    { value: "DROIT DE L'IMMIGRATION", label: "DROIT DE L'IMMIGRATION" },
    { value: "DROIT DE L'IMMOBILIER", label: "DROIT DE L'IMMOBILIER" },
    { value: "DROIT DE LA CONSOMMATION", label: "DROIT DE LA CONSOMMATION" },
    { value: "DROIT DE LA PRESSE", label: "DROIT DE LA PRESSE" },
    {
      value: "DROIT DE LA PROPRIÉTÉ INTELLECTUELLE",
      label: "DROIT DE LA PROPRIÉTÉ INTELLECTUELLE",
    },
    { value: "DROIT DE LA SANTÉ", label: "DROIT DE LA SANTÉ" },
    { value: "DROIT DES ASSURANCES", label: "DROIT DES ASSURANCES" },
    { value: "DROIT DES CONTRATS", label: "DROIT DES CONTRATS" },
    { value: "DROIT DES ÉNERGIES", label: "DROIT DES ÉNERGIES" },
    { value: "DROIT DES ENTREPRISES", label: "DROIT DES ENTREPRISES" },
    { value: "DROIT DES ÉTRANGERS", label: "DROIT DES ÉTRANGERS" },
    {
      value: "DROIT DES FUSIONS ET ACQUISITIONS",
      label: "DROIT DES FUSIONS ET ACQUISITIONS",
    },
    { value: "DROIT DES INVESTISSEMENTS", label: "DROIT DES INVESTISSEMENTS" },
    { value: "DROIT DES PRIVATISATIONS", label: "DROIT DES PRIVATISATIONS" },
    {
      value: "DROIT DES RECOUVREMENT DE CRÉANCES",
      label: "DROIT DES RECOUVREMENT DE CRÉANCES",
    },
    { value: "DROIT DES SOCIÉTÉS", label: "DROIT DES SOCIÉTÉS" },
    { value: "DROIT DES TELECOM/TIC", label: "DROIT DES TELECOM/TIC" },
    { value: "DROIT DES TRANSPORTS", label: "DROIT DES TRANSPORTS" },
    { value: "DROIT DOUANIER", label: "DROIT DOUANIER" },
    { value: "DROIT DU SPORT", label: "DROIT DU SPORT" },
    { value: "DROIT DU TRAVAIL", label: "DROIT DU TRAVAIL" },
    { value: "DROIT FAMILIAL", label: "DROIT FAMILIAL" },
    { value: "DROIT FONCIER", label: "DROIT FONCIER" },
    { value: "DROIT INTERNATIONAL PRIVÉ", label: "DROIT INTERNATIONAL PRIVÉ" },
    { value: "DROIT JUDICIAIRE", label: "DROIT JUDICIAIRE" },
    { value: "DROIT MARITIME", label: "DROIT MARITIME" },
    { value: "DROIT PÉNAL", label: "DROIT PÉNAL" },
    { value: "DROIT ROUTIER", label: "DROIT ROUTIER" },
    { value: "DROIT SOCIAL", label: "DROIT SOCIAL" },
    { value: "DROITS DE L'HOMME", label: "DROITS DE L'HOMME" },
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
    case "isBlocked":
      choices = isBlocked;
      placeHolder = "Bloqué";
      break;
    case "categorie":
      choices = categories;
      placeHolder = "Categorie";
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
                <SelectItem
                  value={Element.value}
                  key={`${id}${index}${type}-${Element.value}`}
                >
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
