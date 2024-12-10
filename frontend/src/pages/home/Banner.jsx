import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="flex items-center flex-col md:flex-row-reverse justify-between py-6 gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" className="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="text-2xl md:text-5xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          Its time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this weeks new releases offer something for
          everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
