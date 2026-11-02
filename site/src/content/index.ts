// The one place pages get their content from: the JSON files beside it.
import type { DressCodeContent, FaqContent, HomeContent, ScheduleContent, SiteContent, TravelContent } from "./types";
import siteJson from "./site.json";
import homeJson from "./home.json";
import scheduleJson from "./schedule.json";
import travelJson from "./travel.json";
import dressCodeJson from "./dresscode.json";
import faqJson from "./faq.json";

export const site = siteJson as SiteContent;
export const home = homeJson as HomeContent;
export const schedule = scheduleJson as ScheduleContent;
export const travel = travelJson as TravelContent;
export const dressCode = dressCodeJson as DressCodeContent;
export const faq =faqJson as FaqContent;

export type * from "./types";
