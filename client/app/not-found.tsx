import Link from 'next/link'
import { Button } from './components/Button';
 
export default function Error() {

  return (
    <div className='not-found-page'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='not-found-page__home-link' href="/">Return Home</Link>
    </div>
  );
}