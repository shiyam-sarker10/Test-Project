import zoom from '../../assets/zoom.png'
import adobe from '../../assets/adobe.png'
import spotify from '../../assets/spotify.png'
import zapier from '../../assets/zapier.png'
import slack from '../../assets/slack.png'
import amazon from '../../assets/amazon.png'

const TrustedCompanies = () => {
    return (
      <div className="text-center space-y-3 py-20 max-w-[1366px] mx-auto px-4">
        <p className='text-gray-400'>Trusted By 250+ Companies</p>
        <div className="flex flex-wrap justify-center items-center gap-14">
          <img className="w-[100px]" src={zoom} alt="" />
          <img className="w-[100px]" src={adobe} alt="" />
          <img className="w-[100px]" src={spotify} alt="" />
          <img className="w-[100px]" src={zapier} alt="" />
          <img className="w-[100px]" src={slack} alt="" />
          <img className="w-[100px]" src={amazon} alt="" />
        </div>
      </div>
    );
};

export default TrustedCompanies;