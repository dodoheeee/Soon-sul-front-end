export interface DetailRes {
  code: string;
  message: string;
  data: Liquor;
  status: number;
}

interface Liquor {
  alcohol: number;
  averageRating: number;
  brewery: string;
  capacity: number;
  imageUrl: string;
  ingredient: string;
  latitude: number;
  liquorCategory: string;
  liquorPersonalRating: number;
  locationList: string[];
  longitude: number;
  lowestPrice: number;
  name: string;
  phoneNumber: string;
  prizeList: string[];
  ratingNumber: number;
  region: string;
  salePlaceName: string;
  siteUrl: string;
  viewCount: number;
  flagScrap: boolean;
}

export interface EvaluationReq {
  acidity: number | number[];
  carbonicAcid: number | number[];
  density: number | number[];
  heavy: number | number[];
  liquorPersonalRating: number;
  reviewContent: string;
  scent: number | number[];
  sweetness: number | number[];
}
