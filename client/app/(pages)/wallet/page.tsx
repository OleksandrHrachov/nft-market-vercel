import './Wallet.scss';
import { CustomLink } from '@/app/components/CustomLink';

export default function Wallet() {
  return(
    <div className='wallet-page'>
      <h2 className='wallet-page__title'>Sorry, this feature is not available at the moment.</h2>
      <CustomLink variant='outline' href="/">Return Home</CustomLink>
    </div>
  );
};