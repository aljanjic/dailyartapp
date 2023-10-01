import { Data } from "@angular/router";
import { Pagination } from "./pagination";
import { Config } from "./config";
import { Info } from "./info";

export interface Art {
    pagination: Pagination;
    data: Data[];
    info: Info;
    config: Config;
}
