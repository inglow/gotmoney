import sampleoStore from '../assets/video/sampleo-store.mp4';
import sampleoCampaign from '../assets/video/sampleo-campaign.mp4';
import sampleoPresentation from '../assets/video/sampleo-presentation.mp4';
import sampleoProfil from '../assets/video/sampleo-profil.mp4';
import sampleoUnconnected from '../assets/video/sampleo-unconnected.mp4';
import twaStore from '../assets/video/twa-store.mp4';
import twaCampaign from '../assets/video/twa-campaign.mp4';
import twaPresentation from '../assets/video/twa-presentation.mp4';
import twaProfil from '../assets/video/twa-profil.mp4';
import twaRegister from '../assets/video/twa-register.mp4';
import bfanDrawer from '../assets/video/bfan-drawer.mp4';

export default {
  sampleo:
    [{ name: 'store', video: sampleoStore },
      { name: 'campaign', video: sampleoCampaign },
      { name: 'presentation', video: sampleoPresentation },
      { name: 'unConnected', video: sampleoUnconnected },
      { name: 'myProfile', video: sampleoProfil }],
  twa:
    [{ name: 'store', video: twaStore },
      { name: 'campaign', video: twaCampaign },
      { name: 'presentation', video: twaPresentation },
      { name: 'unConnected', video: twaProfil },
      { name: 'myProfile', video: twaRegister }],
  bfan:
    [{ name: 'drawer', video: bfanDrawer }],
};
