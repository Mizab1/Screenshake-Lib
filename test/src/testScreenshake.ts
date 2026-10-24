import { MCFunction, Selector } from "sandstone";
import Screenshake from "sandstone-screenshake";

const quake1 = new Screenshake("quake1", [1.5, 1.5], 100, 1);

MCFunction("start_quake_for_team_1", () => {
  quake1.start(Selector("@a", { tag: "team1" }));
});
MCFunction("start_quake_for_team_2", () => {
  quake1.start(Selector("@a", { tag: "team2" }));
});

MCFunction("stop_quake", () => {
  quake1.stop();
});
