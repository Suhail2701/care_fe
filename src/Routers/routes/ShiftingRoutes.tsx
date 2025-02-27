import { ShiftCreate } from "@/components/Patient/ShiftCreate";
import ShiftDetails from "@/components/Shifting/ShiftDetails";
import { ShiftDetailsUpdate } from "@/components/Shifting/ShiftDetailsUpdate";
import ListView from "@/components/Shifting/ShiftingList";
import BoardView from "@/components/Shifting/ShiftingBoard";
import { Redirect } from "raviger";
import { AppRoutes } from "../AppRouter";

const getDefaultView = () =>
  localStorage.getItem("defaultShiftView") === "list" ? "list" : "board";

const ShiftingRoutes: AppRoutes = {
  "/shifting": () => <Redirect to={`/shifting/${getDefaultView()}`} />,
  "/shifting/board": () => <BoardView />,
  "/shifting/list": () => <ListView />,
  "/shifting/:id": ({ id }) => <ShiftDetails id={id} />,
  "/shifting/:id/update": ({ id }) => <ShiftDetailsUpdate id={id} />,
  "/facility/:facilityId/patient/:patientId/shift/new": ({
    facilityId,
    patientId,
  }) => <ShiftCreate facilityId={facilityId} patientId={patientId} />,
};

export default ShiftingRoutes;
