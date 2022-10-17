import { FunctionComponent } from "react";
import HeaderComp from "./header";
import Actions from "./actions";
import TileManager from "./tiles/tile-manager";

const LandingPage: FunctionComponent<{}> = () => {
  return (
    <div className="container mx-auto">
      <HeaderComp />
      <Actions />
      <TileManager />
    </div>
  );
};

export default LandingPage;
