import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import AbsaLogo from "@/assets/images/absa-logo.png";
import AshantiLogo from "@/assets/images/ashanti-ai-logo 1.png";
import CanonLogo from "@/assets/images/Canon-Logo.png";
import ClydeCoLogo from "@/assets/images/clyde-co-logo 1.png";
import HollywoodBetLogo from "@/assets/images/hollywood-bets.png";
import IxLogo from "@/assets/images/ix-logo 1.png";
import KantarLogo from "@/assets/images/kantar-logo 1.png";
import KyoceraLogo from "@/assets/images/Kyocera-logo.png";
import MamatelaLogo from "@/assets/images/mamatela-logo.png";
import NmsLogo from "@/assets/images/nms-logo 1.png";
import RamakobyaLogo from "@/assets/images/ramakobya-logo 1.png";
import SanlamLogo from "@/assets/images/sanlam-logo 1.png";
import SureswipeLogo from "@/assets/images/sureswipe-logo.png";
import WerksmansLogo from "@/assets/images/Werksmans-logo 1.png";

export function WorkedWith() {
  return (
    <InfiniteMovingCards
      items={logos}
      direction="right"
      speed="normal"
    />
  );
}

const logos = [
  AbsaLogo,
  AshantiLogo,
  CanonLogo,
  ClydeCoLogo,
  HollywoodBetLogo,
  IxLogo,
  KantarLogo,
  KyoceraLogo,
  MamatelaLogo,
  NmsLogo,
  RamakobyaLogo,
  SanlamLogo,
  SureswipeLogo,
  WerksmansLogo,
];
