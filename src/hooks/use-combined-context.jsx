import { Provider } from '../context/favPicLists';
import { NavigationProvider } from '../context/navigation';

const providers = [NavigationProvider, Provider];

const CombinedProviders = ({ children }) => {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};

export default CombinedProviders;
