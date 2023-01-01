import { InfinitySpin,Circles } from "react-loader-spinner";

export const ButtonLoader = (<InfinitySpin width="80" color="#fff" />);
export const GalleryLoader = (
  <Circles
    height="120"
    width="120"
    color="#fff"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);