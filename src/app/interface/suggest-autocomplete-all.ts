import { Contexts } from "./contexts";

export interface SuggestAutocompleteAll {
    input: string[];
    contexts: Contexts;
    weight?: number;
}
