// src/types/react-country-state-city.d.ts
declare module "react-country-state-city" {
  export function GetCountries(): Promise<Country[]>;
  export function GetState(countryId: string): Promise<State[]>;
  export function GetCity(countryId: string, stateId: string): Promise<City[]>;
}
